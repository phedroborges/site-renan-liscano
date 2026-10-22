"use server";

import { revalidatePath } from "next/cache";
import { apagarArtigo, ErroArtigo, gravarArtigo, painelAtivo } from "@/lib/artigos-painel";
import { apagarComentario, aprovarComentario } from "@/lib/comentarios";

export type Resultado = { ok: true; slug: string } | { ok: false; erro: string };

/** Depois de qualquer mudança, as páginas que listam ou mostram artigos são
 *  geradas de novo: o artigo aparece no site sem precisar de deploy. */
function atualizarSite(slug: string) {
  revalidatePath("/");
  revalidatePath("/blog");
  revalidatePath("/blog/[slug]", "page");
  revalidatePath(`/blog/${slug}`);
  revalidatePath("/sitemap.xml");
}

function falha(erro: unknown): Resultado {
  if (erro instanceof ErroArtigo) return { ok: false, erro: erro.message };
  console.error("[painel]", erro);
  return { ok: false, erro: "Não foi possível salvar no servidor. Tente de novo." };
}

export async function salvarArtigo(dado: unknown, novo: boolean): Promise<Resultado> {
  if (!painelAtivo()) return { ok: false, erro: "Painel desligado." };
  try {
    const artigo = await gravarArtigo(dado, novo);
    atualizarSite(artigo.slug);
    return { ok: true, slug: artigo.slug };
  } catch (erro) {
    return falha(erro);
  }
}

/** Aprovar publica o comentário no artigo; apagar remove de vez. */
export async function moderarComentario(slug: string, id: string, acao: "aprovar" | "apagar"): Promise<Resultado> {
  if (!painelAtivo()) return { ok: false, erro: "Painel desligado." };
  try {
    if (acao === "aprovar") await aprovarComentario(slug, id);
    else await apagarComentario(slug, id);
    revalidatePath(`/blog/${slug}`);
    return { ok: true, slug };
  } catch (erro) {
    return falha(erro);
  }
}

export async function excluirArtigo(slug: string): Promise<Resultado> {
  if (!painelAtivo()) return { ok: false, erro: "Painel desligado." };
  try {
    await apagarArtigo(slug);
    atualizarSite(slug);
    return { ok: true, slug };
  } catch (erro) {
    return falha(erro);
  }
}
