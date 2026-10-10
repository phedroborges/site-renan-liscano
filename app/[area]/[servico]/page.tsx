import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PaginaServico } from "@/components/PaginaServico";
import { SERVICOS } from "@/lib/servicos";

type Props = { params: Promise<{ area: string; servico: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICOS.map(({ slug }) => {
    const [, area, servico] = slug.split("/");
    return { area, servico };
  });
}

async function buscarServico(params: Props["params"]) {
  const { area, servico } = await params;
  const dados = SERVICOS.find((pagina) => pagina.slug === `/${area}/${servico}`);
  if (!dados) notFound();
  return dados;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const dados = await buscarServico(params);
  return {
    title: dados.metaTitulo,
    description: dados.metaDescricao,
    alternates: { canonical: dados.slug },
  };
}

export default async function Pagina({ params }: Props) {
  return <PaginaServico dados={await buscarServico(params)} />;
}
