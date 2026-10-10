import type { Metadata } from "next";
import { PaginaServico } from "@/components/PaginaServico";
import { medico } from "@/lib/paginas/medico";
import { SERVICOS_POR_AREA } from "@/lib/servicos";

export const metadata: Metadata = {
  title: medico.metaTitulo,
  description: medico.metaDescricao,
  alternates: { canonical: medico.slug },
};

export default function Pagina() {
  return <PaginaServico dados={medico} servicos={SERVICOS_POR_AREA.medico} />;
}
