import { promises as fs } from "node:fs";
import path from "node:path";
import { ARTIGOS, type Artigo } from "./artigos";
import { SERVICOS } from "./servicos";
import { PAGINAS } from "./navegacao";

/**
 * Artigos do blog: os que vivem no código (lib/artigos.ts) mais os publicados
 * pelo painel, gravados como JSON em PASTA_ARTIGOS. Sem banco de dados.
 *
 * Um artigo do painel com o mesmo slug de um artigo do código substitui o
 * original: é assim que o painel edita os artigos que já existiam. Apagar o
 * arquivo do painel devolve o original.
 *
 * Em produção (Docker/Easypanel) a pasta precisa ser um volume, senão os
 * artigos do painel somem a cada deploy.
 */
export const PASTA_ARTIGOS = process.env.ARTIGOS_DIR ?? path.join(process.cwd(), "dados", "artigos");

export type Origem = "codigo" | "editado" | "painel";
export type ArtigoComOrigem = Artigo & { origem: Origem };

/** O painel fica sempre ligado. Para desligar sem mexer no código, defina
 *  PAINEL_ATIVO=0 nas variáveis do Easypanel. */
export function painelAtivo() {
  return process.env.PAINEL_ATIVO?.trim() !== "0";
}

const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const DATA = /^\d{4}-\d{2}-\d{2}$/;

export const PUBLICOS = { medico: "Médico", endividado: "Dívidas", consumidor: "Consumidor" } as const;

/** Páginas que um artigo pode indicar no "saiba mais": as áreas e cada serviço. */
export const DESTINOS_SERVICO = [
  ...PAGINAS.filter((p) => ["/dividas", "/tributario", "/medico", "/consumidor"].includes(p.href)).map((p) => ({ href: p.href, titulo: p.label })),
  ...SERVICOS.map((s) => ({ href: s.slug, titulo: s.titulo })),
];

/** Erro de validação: a mensagem é mostrada como está no painel. */
export class ErroArtigo extends Error {}

async function lerDoPainel(): Promise<Artigo[]> {
  let nomes: string[];
  try {
    nomes = await fs.readdir(PASTA_ARTIGOS);
  } catch {
    return [];
  }
  const lidos = await Promise.all(
    nomes
      .filter((nome) => nome.endsWith(".json"))
      .map(async (nome) => {
        try {
          return normalizarArtigo(JSON.parse(await fs.readFile(path.join(PASTA_ARTIGOS, nome), "utf8")));
        } catch {
          // Arquivo corrompido ou inválido não derruba o blog: fica de fora.
          return null;
        }
      })
  );
  return lidos.filter((a): a is Artigo => a !== null);
}

/** Todos os artigos com a origem de cada um, mais recentes primeiro. */
export async function artigosComOrigem(): Promise<ArtigoComOrigem[]> {
  const doPainel = await lerDoPainel();
  const porSlug = new Map(doPainel.map((a) => [a.slug, a]));
  const lista: ArtigoComOrigem[] = [
    ...ARTIGOS.map((a): ArtigoComOrigem => {
      const editado = porSlug.get(a.slug);
      return editado ? { ...editado, origem: "editado" } : { ...a, origem: "codigo" };
    }),
    ...doPainel.filter((a) => !ARTIGOS.some((o) => o.slug === a.slug)).map((a): ArtigoComOrigem => ({ ...a, origem: "painel" })),
  ];
  // sort é estável: na mesma data, mantém a ordem do código.
  return lista.sort((a, b) => b.data.localeCompare(a.data));
}

/** Artigos como o site os mostra. */
export async function todosOsArtigos(): Promise<Artigo[]> {
  return (await artigosComOrigem()).map(({ origem: _origem, ...artigo }) => artigo);
}

export async function artigoPorSlug(slug: string) {
  return (await todosOsArtigos()).find((a) => a.slug === slug);
}

/* ---------------- validação ---------------- */

function texto(valor: unknown, campo: string, max: number, obrigatorio = true): string {
  const s = typeof valor === "string" ? valor.trim() : "";
  if (obrigatorio && !s) throw new ErroArtigo(`Preencha: ${campo}.`);
  if (s.length > max) throw new ErroArtigo(`${campo}: passou de ${max} caracteres.`);
  return s;
}

function paragrafos(valor: unknown, campo: string): string[] {
  if (!Array.isArray(valor)) return [];
  return valor.map((p, i) => texto(p, `${campo}, parágrafo ${i + 1}`, 4000, false)).filter(Boolean);
}

/** Minutos de leitura, a ~200 palavras por minuto. */
function minutosDeLeitura(a: Omit<Artigo, "leitura">) {
  const tudo = [
    a.pergunta,
    a.resposta,
    ...a.secoes.flatMap((s) => [s.h2, ...s.paras, ...(s.lista ?? []).flatMap((i) => [i.t, i.d])]),
    a.ressalva.h2,
    ...a.ressalva.paras,
  ].join(" ");
  return Math.max(1, Math.ceil(tudo.split(/\s+/).filter(Boolean).length / 200));
}

/** Confere e completa um artigo vindo do painel ou de um arquivo. Campos
 *  derivados (rótulo do público, tempo de leitura) são sempre recalculados. */
export function normalizarArtigo(dado: unknown): Artigo {
  if (!dado || typeof dado !== "object") throw new ErroArtigo("Artigo vazio.");
  const d = dado as Record<string, unknown>;

  const slug = texto(d.slug, "endereço do artigo", 90);
  if (!SLUG.test(slug)) throw new ErroArtigo("Endereço do artigo: use só letras minúsculas, números e hífens (ex.: fies-quanto-reduz).");

  const publico = d.publico as keyof typeof PUBLICOS;
  if (!(publico in PUBLICOS)) throw new ErroArtigo("Escolha o público do artigo.");

  const data = texto(d.data, "data", 10);
  if (!DATA.test(data) || Number.isNaN(Date.parse(`${data}T12:00:00`))) throw new ErroArtigo("Data inválida.");

  if (!Array.isArray(d.secoes) || d.secoes.length === 0) throw new ErroArtigo("O artigo precisa de pelo menos uma seção.");
  if (d.secoes.length > 20) throw new ErroArtigo("Máximo de 20 seções.");
  const secoes = d.secoes.map((bruta, i) => {
    const s = (bruta ?? {}) as Record<string, unknown>;
    const nome = `seção ${i + 1}`;
    const lista = Array.isArray(s.lista)
      ? s.lista
          .map((item, j) => {
            const it = (item ?? {}) as Record<string, unknown>;
            return { t: texto(it.t, `${nome}, item ${j + 1} (título)`, 120), d: texto(it.d, `${nome}, item ${j + 1} (descrição)`, 1000) };
          })
          .slice(0, 30)
      : [];
    const paras = paragrafos(s.paras, nome);
    if (paras.length === 0 && lista.length === 0) throw new ErroArtigo(`A ${nome} está sem texto.`);
    return { h2: texto(s.h2, `título da ${nome}`, 160), paras, ...(lista.length ? { lista } : {}) };
  });

  const r = (d.ressalva ?? {}) as Record<string, unknown>;
  const ressalva = { h2: texto(r.h2, "título da ressalva", 160), paras: paragrafos(r.paras, "ressalva") };
  if (ressalva.paras.length === 0) throw new ErroArtigo("Escreva o texto da ressalva (quando isso não se aplica).");

  const sv = (d.servico ?? {}) as Record<string, unknown>;
  const href = texto(sv.href, "página de serviço", 120);
  if (!DESTINOS_SERVICO.some((destino) => destino.href === href)) throw new ErroArtigo("Escolha uma página de serviço da lista.");

  const relacionados = Array.isArray(d.relacionados)
    ? d.relacionados.filter((s): s is string => typeof s === "string" && SLUG.test(s) && s !== slug).slice(0, 6)
    : [];

  const baseLegal = texto(d.baseLegal, "base legal", 200, false);

  const artigo: Omit<Artigo, "leitura"> = {
    slug,
    pergunta: texto(d.pergunta, "pergunta (título)", 200),
    resposta: texto(d.resposta, "resposta curta", 600),
    publico,
    publicoRotulo: PUBLICOS[publico],
    tema: texto(d.tema, "tema", 40),
    data,
    ...(baseLegal ? { baseLegal } : {}),
    video: null,
    transcriptSource: null,
    secoes,
    ressalva,
    servico: { href, texto: texto(sv.texto, "texto do link para o serviço", 80) },
    relacionados,
  };
  return { ...artigo, leitura: minutosDeLeitura(artigo) };
}

/* ---------------- gravação ---------------- */

/** Grava o artigo. `novo` impede sobrescrever um artigo existente por engano;
 *  na edição o endereço (slug) não muda, para não quebrar links já publicados. */
export async function gravarArtigo(dado: unknown, novo: boolean): Promise<Artigo> {
  const artigo = normalizarArtigo(dado);
  const existentes = await artigosComOrigem();
  const existe = existentes.some((a) => a.slug === artigo.slug);
  if (novo && existe) throw new ErroArtigo("Já existe um artigo com esse endereço. Troque o endereço.");
  if (!novo && !existe) throw new ErroArtigo("Esse artigo não existe mais. Recarregue o painel.");

  await fs.mkdir(PASTA_ARTIGOS, { recursive: true });
  const destino = path.join(PASTA_ARTIGOS, `${artigo.slug}.json`);
  const temporario = `${destino}.${process.pid}.tmp`;
  await fs.writeFile(temporario, JSON.stringify(artigo, null, 2), "utf8");
  await fs.rename(temporario, destino);
  return artigo;
}

/** Apaga o arquivo do painel. Num artigo original editado, volta o original. */
export async function apagarArtigo(slug: string): Promise<Origem> {
  if (!SLUG.test(slug)) throw new ErroArtigo("Endereço inválido.");
  const atual = (await artigosComOrigem()).find((a) => a.slug === slug);
  if (!atual) throw new ErroArtigo("Esse artigo não existe mais. Recarregue o painel.");
  if (atual.origem === "codigo") throw new ErroArtigo("Os artigos originais do site não podem ser apagados pelo painel.");
  await fs.rm(path.join(PASTA_ARTIGOS, `${slug}.json`), { force: true });
  return atual.origem;
}
