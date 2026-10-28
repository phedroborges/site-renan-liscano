import { site } from "@/lib/site";

export type MembroEquipe = {
  nome: string;
  cargo: string;
  area: string;
  descricao: string;
  imagem: string;
  alt: string;
  registro?: string;
};

export const EQUIPE: MembroEquipe[] = [
  {
    nome: "Renan Liscano",
    cargo: "Sócio fundador",
    area: "Proteção patrimonial e gestão de passivos",
    descricao:
      "Advogado especialista em proteção patrimonial de pessoas físicas e jurídicas. Atua na defesa de executados, na gestão de passivos bancários e tributários e na proteção de ativos intangíveis.",
    imagem: "/img/equipe-renan.jpeg",
    alt: "Retrato profissional de Renan Liscano",
    registro: site.oab,
  },
  {
    nome: "Mateus Pasa",
    cargo: "Advogado tributarista",
    area: "Direito Tributário e defesa do contribuinte",
    descricao:
      "Especialista em Direito Tributário, atua há mais de seis anos na defesa de contribuintes diante de cobranças e outros excessos do Fisco. É pós-graduado em Direito Empresarial, Direito Tributário Empresarial, Contabilidade e Compliance.",
    imagem: "/img/equipe-mateus-pasa.png",
    alt: "Retrato profissional de Mateus Pasa",
    registro: "OAB/RS 120.460",
  },
  {
    nome: "Maria Luisa Borges da Silva",
    cargo: "Advogada",
    area: "Propriedade intelectual, marcas e software",
    descricao:
      "Atua na proteção de ativos de propriedade intelectual, com foco no registro de marcas e na proteção jurídica de software.",
    imagem: "/img/equipe-maria-luisa.png",
    alt: "Retrato profissional de Maria Luisa Borges da Silva",
    registro: "OAB/RS 129.051",
  },
  {
    nome: "Tamara Yasin",
    cargo: "Advogada tributarista",
    area: "Direito Tributário e defesa do contribuinte",
    descricao:
      "Especialista em Direito Tributário, atua há mais de seis anos na defesa de contribuintes diante de cobranças e outros excessos do Fisco. É pós-graduada em Direito Empresarial, Direito Tributário Empresarial, Contabilidade e Compliance.",
    imagem: "/img/equipe-tamara-yasin.png",
    alt: "Retrato profissional de Tamara Yasin",
  },
  {
    nome: "Isabely Betim",
    cargo: "Assistente jurídica",
    area: "Suporte jurídico e atendimento",
    descricao:
      "Integra a equipe como assistente jurídica, apoiando a organização dos atendimentos e das rotinas do escritório.",
    imagem: "/img/equipe-isabely-betim.png",
    alt: "Retrato profissional de Isabely Betim",
  },
];

