import { NextResponse } from "next/server";
import { adicionarComentario } from "@/lib/comentarios";
import { ErroArtigo } from "@/lib/artigos-painel";

/* Recebe o comentário do formulário do artigo e grava como pendente.
   A extensão .servidor.ts deixa esta rota fora da exportação estática. */
export async function POST(pedido: Request) {
  let corpo: Record<string, unknown>;
  try {
    corpo = await pedido.json();
  } catch {
    return NextResponse.json({ ok: false, erro: "Envio inválido." }, { status: 400 });
  }

  // Campo-armadilha, invisível para pessoas. Robô que preenche recebe "ok" e
  // nada é gravado, para não aprender a contornar.
  if (typeof corpo.site === "string" && corpo.site.trim()) return NextResponse.json({ ok: true });

  try {
    await adicionarComentario(corpo.slug, corpo.nome, corpo.texto);
    return NextResponse.json({ ok: true });
  } catch (erro) {
    if (erro instanceof ErroArtigo) return NextResponse.json({ ok: false, erro: erro.message }, { status: 400 });
    console.error("[comentarios]", erro);
    return NextResponse.json({ ok: false, erro: "Não foi possível enviar agora. Tente de novo." }, { status: 500 });
  }
}
