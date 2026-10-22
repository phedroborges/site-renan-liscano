import { site } from "@/lib/site";
export type MembroEquipe = {
  nome: string;
  cargo: string;
  area: string;
  imagem: string;
  alt: string;
  registro?: string;
  demonstrativo?: boolean;
};

export const EQUIPE: MembroEquipe[] = [
  {
    nome: "Renan Liscano",
    cargo: "Sócio fundador",
    area: "Estratégia, direito bancário e empresarial",
    imagem: "/img/equipe-renan.webp",
    alt: "Renan Liscano no escritório",
    registro: site.oab,
  },
  {
    nome: "Marina Ribeiro",
    cargo: "Advogada coordenadora",
    area: "Direito tributário e dívida ativa",
    imagem: "/img/equipe-marina-ribeiro.webp",
    alt: "Retrato demonstrativo de Marina Ribeiro",
    demonstrativo: true,
  },
  {
    nome: "Gustavo Menezes",
    cargo: "Advogado",
    area: "Contencioso bancário e execuções",
    imagem: "/img/equipe-gustavo-menezes.webp",
    alt: "Retrato demonstrativo de Gustavo Menezes",
    demonstrativo: true,
  },
  {
    nome: "Camila Duarte",
    cargo: "Advogada",
    area: "Direito médico e processos éticos",
    imagem: "/img/equipe-camila-duarte.webp",
    alt: "Retrato demonstrativo de Camila Duarte",
    demonstrativo: true,
  },
  {
    nome: "Lucas Tavares",
    cargo: "Advogado",
    area: "Direito do consumidor e responsabilidade civil",
    imagem: "/img/equipe-lucas-tavares.webp",
    alt: "Retrato demonstrativo de Lucas Tavares",
    demonstrativo: true,
  },
  {
    nome: "Beatriz Salles",
    cargo: "Advogada",
    area: "Recuperação de crédito e contratos",
    imagem: "/img/equipe-beatriz-salles.webp",
    alt: "Retrato demonstrativo de Beatriz Salles",
    demonstrativo: true,
  },
];
