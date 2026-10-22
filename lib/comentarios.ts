import { promises as fs } from "node:fs";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { artigoPorSlug, ErroArtigo } from "./artigos-painel";

/**
 * Comentários dos artigos, sem banco: um arquivo JSON por artigo em
 * PASTA_COMENTARIOS. Todo comentário entra como "pendente" e só aparece no
 * site depois de aprovado no painel. Num site de advocacia, publicar direto
 * abriria espaço para spam, ofensa ou alguém expondo o próprio caso.
 *
 * Em produção a pasta fica no mesmo volume dos artigos (/app/dados).
 */
export const PASTA_COMENTARIOS = process.env.COMENTARIOS_DIR ?? path.join(process.cwd(), "dados", "comentarios");

export type Comentario = {
  id: string;
  slug: string;
  nome: string;
  texto: string;
  /** ISO 8601 */
  data: string;
  status: "pendente" | "aprovado";
};

const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const MAX_PENDENTES_POR_ARTIGO = 100;

const arquivo = (slug: string) => path.join(PASTA_COMENTARIOS, `${slug}.json`);

async function ler(slug: string): Promise<Comentario[]> {
  if (!SLUG.test(slug)) return [];
  try {
    const dado = JSON.parse(await fs.readFile(arquivo(slug), "utf8"));
    return Array.isArray(dado) ? dado : [];
  } catch {
    return [];
  }
}

async function gravar(slug: string, comentarios: Comentario[]) {
  await fs.mkdir(PASTA_COMENTARIOS, { recursive: true });
  const temporario = `${arquivo(slug)}.${process.pid}.tmp`;
  await fs.writeFile(temporario, JSON.stringify(comentarios, null, 2), "utf8");
  await fs.rename(temporario, arquivo(slug));
}

/** Os que aparecem no artigo, do mais antigo para o mais novo. */
export async function comentariosAprovados(slug: string) {
  return (await ler(slug)).filter((c) => c.status === "aprovado").sort((a, b) => a.data.localeCompare(b.data));
}

/** Todos os comentários de todos os artigos, para o painel. Pendentes primeiro. */
export async function todosOsComentarios(): Promise<Comentario[]> {
  let nomes: string[];
  try {
    nomes = await fs.readdir(PASTA_COMENTARIOS);
  } catch {
    return [];
  }
  const listas = await Promise.all(nomes.filter((n) => n.endsWith(".json")).map((n) => ler(n.slice(0, -5))));
  return listas
    .flat()
    .sort((a, b) => (a.status === b.status ? b.data.localeCompare(a.data) : a.status === "pendente" ? -1 : 1));
}

function texto(valor: unknown, campo: string, min: number, max: number) {
  const s = typeof valor === "string" ? valor.trim().replace(/\r\n/g, "\n").replace(/\n{3,}/g, "\n\n") : "";
  if (s.length < min) throw new ErroArtigo(min <= 1 ? `Preencha: ${campo}.` : `${campo}: escreva pelo menos ${min} caracteres.`);
  if (s.length > max) throw new ErroArtigo(`${campo}: máximo de ${max} caracteres.`);
  return s;
}

export async function adicionarComentario(slug: unknown, nome: unknown, comentario: unknown) {
  if (typeof slug !== "string" || !SLUG.test(slug) || !(await artigoPorSlug(slug))) throw new ErroArtigo("Artigo não encontrado.");
  const novo: Comentario = {
    id: randomUUID(),
    slug,
    nome: texto(nome, "Nome", 2, 60),
    texto: texto(comentario, "Comentário", 5, 1500),
    data: new Date().toISOString(),
    status: "pendente",
  };
  const atuais = await ler(slug);
  if (atuais.filter((c) => c.status === "pendente").length >= MAX_PENDENTES_POR_ARTIGO) {
    throw new ErroArtigo("Muitos comentários aguardando aprovação neste artigo. Tente mais tarde.");
  }
  await gravar(slug, [...atuais, novo]);
}

export async function aprovarComentario(slug: string, id: string) {
  const atuais = await ler(slug);
  if (!atuais.some((c) => c.id === id)) throw new ErroArtigo("Comentário não encontrado. Recarregue o painel.");
  await gravar(slug, atuais.map((c) => (c.id === id ? { ...c, status: "aprovado" } : c)));
}

export async function apagarComentario(slug: string, id: string) {
  const atuais = await ler(slug);
  if (!atuais.some((c) => c.id === id)) throw new ErroArtigo("Comentário não encontrado. Recarregue o painel.");
  await gravar(slug, atuais.filter((c) => c.id !== id));
}
