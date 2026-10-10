import type { Metadata } from "next";
import { PaginaServico } from "@/components/PaginaServico";
import { consumidor } from "@/lib/paginas/consumidor";
import { SERVICOS_POR_AREA } from "@/lib/servicos";

export const metadata: Metadata = {
  title: consumidor.metaTitulo,
  description: consumidor.metaDescricao,
  alternates: { canonical: consumidor.slug },
};

export default function Pagina() {
  return <PaginaServico dados={consumidor} servicos={SERVICOS_POR_AREA.consumidor} />;
}
