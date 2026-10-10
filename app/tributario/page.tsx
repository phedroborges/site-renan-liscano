import type { Metadata } from "next";
import { PaginaServico } from "@/components/PaginaServico";
import { tributario } from "@/lib/paginas/bancario-tributario";

export const metadata: Metadata = {
  title: tributario.metaTitulo,
  description: tributario.metaDescricao,
  alternates: { canonical: tributario.slug },
};

export default function Pagina() {
  return <PaginaServico dados={tributario} />;
}
