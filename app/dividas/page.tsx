import type { Metadata } from "next";
import { PaginaServico } from "@/components/PaginaServico";
import { dividas } from "@/lib/paginas/dividas";
import { SERVICOS_POR_AREA } from "@/lib/servicos";
import { tributario } from "@/lib/paginas/bancario-tributario";

export const metadata: Metadata = {
  title: dividas.metaTitulo,
  description: dividas.metaDescricao,
  alternates: { canonical: dividas.slug },
};

export default function Pagina() {
  return <PaginaServico dados={dividas} servicos={[...SERVICOS_POR_AREA.dividas, tributario]} />;
}
