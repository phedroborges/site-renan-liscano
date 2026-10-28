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
    cargo: "SÃ³cio fundador",
    area: "ProteÃ§Ã£o patrimonial e gestÃ£o de passivos",
    descricao:
      "Advogado especialista em proteÃ§Ã£o patrimonial de pessoas fÃ­sicas e jurÃ­dicas. Atua na defesa de executados, na gestÃ£o de passivos bancÃ¡rios e tributÃ¡rios e na proteÃ§Ã£o de ativos intangÃ­veis.",
    imagem: "/img/equipe-renan.jpeg",
    alt: "Retrato profissional de Renan Liscano",
    registro: site.oab,
  },
  {
    nome: "Mateus Pasa",
    cargo: "Advogado tributarista",
    area: "Direito TributÃ¡rio e defesa do contribuinte",
    descricao:
      "Especialista em Direito TributÃ¡rio, atua hÃ¡ mais de seis anos na defesa de contribuintes diante de cobranÃ§as e outros excessos do Fisco. Ã‰ pÃ³s-graduado em Direito Empresarial, Direito TributÃ¡rio Empresarial, Contabilidade e Compliance.",
    imagem: "/img/equipe-mateus-pasa.png",
    alt: "Retrato profissional de Mateus Pasa",
    registro: "OAB/RS 120.460",
  },
  {
    nome: "Maria Luisa Borges da Silva",
    cargo: "Advogada",
    area: "Propriedade intelectual, marcas e software",
    descricao:
      "Atua na proteÃ§Ã£o de ativos de propriedade intelectual, com foco no registro de marcas e na proteÃ§Ã£o jurÃ­dica de software.",
    imagem: "/img/equipe-maria-luisa.png",
    alt: "Retrato profissional de Maria Luisa Borges da Silva",
    registro: "OAB/RS 129.051",
  },
  {
    nome: "Tamara Yasin",
    cargo: "Advogada tributarista",
    area: "Direito TributÃ¡rio e defesa do contribuinte",
    descricao:
      "Especialista em Direito TributÃ¡rio, atua hÃ¡ mais de seis anos na defesa de contribuintes diante de cobranÃ§as e outros excessos do Fisco. Ã‰ pÃ³s-graduada em Direito Empresarial, Direito TributÃ¡rio Empresarial, Contabilidade e Compliance.",
    imagem: "/img/equipe-tamara-yasin.png",
    alt: "Retrato profissional de Tamara Yasin",
  },
  {
    nome: "Isabely Betim",
    cargo: "Assistente jurÃ­dica",
    area: "Suporte jurÃ­dico e atendimento",
    descricao:
      "Integra a equipe como assistente jurÃ­dica, apoiando a organizaÃ§Ã£o dos atendimentos e das rotinas do escritÃ³rio.",
    imagem: "/img/equipe-isabely-betim.png",
    alt: "Retrato profissional de Isabely Betim",
  },
];

