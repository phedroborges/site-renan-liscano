import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { artigosComOrigem, DESTINOS_SERVICO, painelAtivo, PUBLICOS } from "@/lib/artigos-painel";
import { todosOsComentarios } from "@/lib/comentarios";
import { PainelArtigos } from "./PainelArtigos";

/* A extensão .servidor.tsx deixa esta rota fora da exportação estática
   (next.config.mjs): lá não há servidor para gravar artigos. */

// Lido a cada visita: PAINEL_ATIVO=0 desliga o painel sem novo build.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Painel de artigos",
  robots: { index: false, follow: false },
};

export default async function Painel() {
  if (!painelAtivo()) notFound();
  return (
    <PainelArtigos
      artigos={await artigosComOrigem()}
      comentarios={await todosOsComentarios()}
      destinos={DESTINOS_SERVICO}
      publicos={Object.entries(PUBLICOS).map(([valor, rotulo]) => ({ valor, rotulo }))}
    />
  );
}
