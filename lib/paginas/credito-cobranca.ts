import type { PaginaServico } from "@/lib/tipos";

export const registrato: PaginaServico = {
  slug: "/dividas/registrato",
  titulo: "Registrato e relatório de crédito",
  metaTitulo: "Registrato e SCR: análise de registros de crédito",
  metaDescricao: "Análise do relatório de empréstimos e financiamentos, contratos e comprovantes para identificar divergências nos registros de crédito.",
  tema: "popular",
  hero: {
    kicker: "Dívidas · Registrato e SCR",
    h1: "Existe uma informação no seu relatório que você não reconhece?",
    sub: "Conferimos os registros do relatório de empréstimos e financiamentos com seus contratos e pagamentos para entender a situação e orientar os próximos passos.",
    ctaTexto: "Falar sobre meu relatório de crédito",
  },
  blocos: [
    { tipo: "texto", h2: "Entenda o que está registrado.", paras: [
      "O relatório do SCR reúne informações sobre empréstimos, financiamentos e outros compromissos com instituições financeiras. Ele pode ajudar a identificar operações que precisam de esclarecimento.",
      "A análise compara instituição, operação e valores com os documentos disponíveis. Um registro no relatório e uma restrição interna do banco são questões que precisam ser examinadas separadamente.",
    ] },
    { tipo: "passos", h2: "Da conferência à orientação.", itens: [
      { titulo: "Leitura do relatório", texto: "Identificamos a operação e o período relacionados à sua dúvida." },
      { titulo: "Comparação dos documentos", texto: "Conferimos contratos, acordos, pagamentos e respostas já recebidas da instituição." },
      { titulo: "Definição do próximo passo", texto: "Orientamos o pedido de esclarecimento ou a análise de eventual divergência, conforme os documentos." },
    ] },
    { tipo: "documentos", h2: "O que enviar para a análise.", itens: ["Relatório de empréstimos e financiamentos (SCR)", "Contratos e acordos relacionados", "Comprovantes de pagamento", "Protocolos e respostas da instituição"] },
    { tipo: "situacoes", h2: "A dificuldade é com um banco específico?", itens: [{ pergunta: "Quitou a dívida, mas continua enfrentando restrições?", texto: "Conheça também a análise de restrição interna bancária.", href: "/dividas/restricao-interna" }] },
  ],
  faq: [{ p: "A análise garante a liberação de crédito?", r: "Não. O trabalho é esclarecer os registros e avaliar eventuais divergências. Não há promessa de aprovação de empréstimo ou financiamento." }],
  cta: { titulo: "Comece pelo que consta no seu relatório.", texto: "Envie sua dúvida e os documentos disponíveis para a primeira análise." },
};

export const cobranca: PaginaServico = {
  slug: "/dividas/cobranca-e-recuperacao-de-creditos",
  titulo: "Cobrança e recuperação de créditos",
  metaTitulo: "Cobrança e recuperação de créditos para pessoas e empresas",
  metaDescricao: "Análise de valores a receber, documentos e histórico de pagamentos para avaliar negociação e medidas de cobrança adequadas ao caso.",
  tema: "popular",
  hero: {
    kicker: "Empresarial · Valores a receber",
    h1: "Você tem um valor a receber e precisa definir como cobrar?",
    sub: "Organizamos os documentos e o histórico da dívida para avaliar a negociação e os caminhos de cobrança. A estratégia começa pela análise do crédito e das circunstâncias do caso.",
    ctaTexto: "Falar sobre um valor a receber",
  },
  blocos: [
    { tipo: "bullets", h2: "Como atuamos.", itens: [
      { titulo: "Conferência do crédito", texto: "Leitura de contratos, comprovantes e comunicações para entender a origem e o valor pendente." },
      { titulo: "Negociação", texto: "Avaliação de propostas e condições de acordo com acompanhamento da formalização." },
      { titulo: "Medidas de cobrança", texto: "Análise dos documentos, dos custos e das alternativas antes de definir a atuação no caso." },
    ] },
    { tipo: "documentos", h2: "O que reunir para começar.", itens: ["Contrato ou documento que originou o crédito", "Comprovantes de entrega ou prestação do serviço", "Histórico de pagamentos e valores pendentes", "Acordos, notificações e comunicações anteriores"], nota: "Não é necessário ter todos os documentos para apresentar sua dúvida." },
  ],
  faq: [
    { p: "Preciso entrar com um processo imediatamente?", r: "A primeira etapa é analisar os documentos e as circunstâncias. A orientação considera as possibilidades de negociação e de cobrança antes de propor a contratação." },
    { p: "Existe garantia de recuperar o valor?", r: "Não. A recuperação depende das condições do caso. Custos, limitações e alternativas são apresentados antes da definição da estratégia." },
  ],
  cta: { titulo: "Entenda os caminhos para cobrar seu crédito.", texto: "Conte o que aconteceu e envie os documentos disponíveis pelo WhatsApp." },
};
