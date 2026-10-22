import type { IconName } from "@/components/Icon";

export type Bloco =
  | { tipo: "texto"; h2: string; destaque?: string; paras: string[] }
  /** `cena: "contrato"` troca a grade de cartões por uma folha de contrato ao
   *  centro, com os itens ao redor como cláusulas apontadas no documento.
   *  Feito para exatamente 4 itens. */
  | { tipo: "bullets"; h2: string; intro?: string; cena?: "contrato"; itens: { titulo: string; texto: string }[] }
  | { tipo: "callout"; icone?: IconName; titulo: string; paras: string[] }
  | { tipo: "passos"; h2: string; intro?: string; itens: { titulo: string; texto: string }[] }
  | { tipo: "documentos"; h2: string; intro?: string; itens: string[]; nota?: string }
  | { tipo: "situacoes"; h2: string; intro?: string; itens: CardSituacao[] };

export type CardSituacao = {
  pergunta: string;
  texto: string;
  href: string;
  alerta?: { tag: string; icone: IconName; texto: string };
};

export type PaginaServico = {
  slug: string;
  titulo: string;
  metaTitulo: string;
  metaDescricao: string;
  tema?: "padrao" | "popular";
  hero: {
    kicker: string;
    h1: string;
    /** trecho do h1 que recebe o itálico platinado — precisa existir dentro de h1 */
    enfase?: string;
    sub: string;
    urgencia?: string;
    ctaTexto?: string;
  };
  /** Hero sangrando a tela, no lugar da cena em CSS. O site é sempre escuro,
   *  então a imagem precisa ser a versão escura da cena. */
  heroImagem?: { imagem: string; alt: string };
  blocos: Bloco[];
  faq?: { p: string; r: string }[];
  cta: { titulo: string; enfase?: string; texto?: string };
  baseLegal?: string;
  disclaimer?: boolean;
};
