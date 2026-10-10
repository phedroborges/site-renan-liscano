/** Cards da seção "Alguma dessas é a sua situação?" — sem rótulo de área. */
export const SITUACOES = [
  {
    pergunta: "As dívidas da empresa estão comprometendo o caixa?",
    texto: "Contratos, garantias e credores precisam ser analisados juntos. Gestão do passivo bancário, negociação e defesa para a sua empresa.",
    href: "/dividas/passivo-empresarial",
  },
  {
    pergunta: "O banco está cobrando você na Justiça?",
    texto: "Análise da execução, dos valores cobrados e das medidas que podem atingir o seu patrimônio. A defesa começa pelos documentos e pelos prazos.",
    href: "/dividas/defesa-em-execucao",
  },
  {
    pergunta: "Recebeu uma cobrança tributária ou inscrição em dívida ativa?",
    texto: "Revisão do débito, negociação e defesa em execução fiscal. Entenda os caminhos de regularização para você ou para a sua empresa.",
    href: "/tributario",
  },
  {
    pergunta: "As parcelas comprometeram o que você precisa para viver?",
    texto:
      "Cartão que virou rotativo, empréstimo para pagar empréstimo, parcela maior do que sobra no fim do mês. A Lei 14.181 permite juntar todos os credores numa audiência só e refazer o pagamento a partir da sua renda real.",
    href: "/dividas/superendividamento",
  },
  {
    pergunta: "Você olhou o contrato e não entendeu por que a dívida cresceu tanto?",
    texto:
      "Juros acima da média do período, tarifa embutida, seguro que ninguém contratou. Dá para conferir, e a conferência vem antes de qualquer proposta.",
    href: "/dividas/revisional",
  },
  {
    pergunta: "Você fez residência médica e nunca recebeu auxílio moradia?",
    texto:
      "A Lei 6.932 garante moradia ao residente desde 1981. Quase nenhuma instituição implementou, e a Justiça vem reconhecendo a indenização retroativa.",
    alerta: { tag: "Prazo", icone: "clock" as const, texto: "O direito prescreve. Quem terminou há mais tempo tem menos margem." },
    href: "/medico/auxilio-moradia",
  },
  {
    pergunta: "Você se formou com FIES e a dívida só cresceu?",
    texto:
      "O art. 6º-B da Lei 10.260 prevê abatimento do saldo devedor para quem atuou na Estratégia de Saúde da Família, nas Forças Armadas, no Mais Médicos ou na linha de frente da COVID-19.",
    alerta: { tag: "Modalidade", icone: "alert" as const, texto: "O percentual depende de onde e por quanto tempo. Não é automático." },
    href: "/medico/fies",
  },
  {
    pergunta: "Você foi notificado de um processo ético no CRM?",
    texto:
      "A sindicância parece formalidade e não é. O que se diz nela acompanha todas as fases seguintes.",
    alerta: { tag: "Urgência", icone: "clock" as const, texto: "O prazo de defesa começa a correr na notificação." },
    href: "/medico/processo-etico",
  },
  {
    pergunta: "Seu nome foi negativado por uma dívida que você não reconhece?",
    texto:
      "Cobrança duplicada, dívida já paga, contrato aberto por terceiro. Cada uma dessas situações tem tratamento próprio.",
    href: "/dividas/nome-negativado",
  },
  {
    pergunta: "O plano de saúde negou um procedimento que o seu médico pediu?",
    texto:
      "Quem define a conduta é o médico assistente. Peça a negativa por escrito antes de qualquer coisa, é ela que sustenta o caso.",
    href: "/consumidor/plano-de-saude",
  },
  {
    pergunta: "Seu voo foi cancelado, atrasou muito ou você ficou em terra?",
    texto:
      "Acontece muito mais do que se imagina, e quase todo mundo aceita um voucher e vai embora.",
    href: "/consumidor/voo-e-overbooking",
  },
];

export const ETAPAS = [
  {
    titulo: "Você manda uma mensagem",
    texto: "Direto no WhatsApp, sem formulário e sem cadastro. A equipe faz a triagem e encaminha o caso ao profissional responsável.",
  },
  {
    titulo: "A gente faz poucas perguntas",
    texto: "Só o necessário para entender o seu caso. Leva alguns minutos.",
  },
  {
    titulo: "Você recebe um parecer por escrito",
    destaque: true,
    texto: "Sem custo. E se não houver nada a fazer, o parecer diz isso, com o motivo. Você fica com o documento de qualquer jeito.",
  },
  {
    titulo: "Só então falamos de valores",
    texto: "Preço fechado, por escrito, antes de qualquer assinatura. Sem surpresa no meio do caminho.",
  },
  {
    titulo: "Assinatura pelo celular",
    texto: "Contrato e procuração digitais. Você não sai de casa nem passa em cartório.",
  },
  {
    titulo: "Criamos um grupo com você",
    texto: "Com os advogados que cuidam do seu caso. É ali que toda conversa acontece.",
  },
  {
    titulo: "Você acompanha do começo ao fim",
    texto: "Cada novidade do processo vira uma mensagem no grupo, escrita em português.",
  },
];

export const DEPOIMENTOS = [
  {
    texto:
      "Super recomendo. Profissionais excelentes, com explicações bem claras e de bom entendimento, sempre disponíveis. Vai muito além de uma empresa de advocacia, é uma verdadeira família. Fui muito bem acolhida. Quero agradecer em especial ao Dr. Renan.",
    nome: "Susan Apolinário",
    iniciais: "SA",
    tamanho: "grande" as const,
  },
  {
    texto:
      "Renan, só tenho a agradecer suas orientações e seu acompanhamento no meu caso. Sua empatia e comprometimento profissional foram incríveis.",
    nome: "Keila Milena",
    iniciais: "KM",
    tamanho: "medio" as const,
  },
  {
    texto:
      "Atendimento eficaz e atencioso. Sempre explicando todas as etapas do procedimento, o que já foi feito e o que ainda está por fazer.",
    nome: "Alessandra Padula",
    papel: "Delegada",
    handle: "padula.ale",
    iniciais: "AP",
    tamanho: "medio" as const,
  },
  {
    texto:
      "Equipe solícita, todos sempre disponíveis para a resolução de eventuais intercorrências do cotidiano médico. Recomendo os serviços do escritório.",
    nome: "Dr. Matheus Batista",
    papel: "Radiologista",
    handle: "mdbatista",
    iniciais: "MB",
    tamanho: "medio" as const,
  },
  {
    texto: "Excelentes profissionais, muito competentes. Recomendo.",
    nome: "Dr. Leonardo Volante",
    papel: "Urologista",
    handle: "drleonardourologista",
    iniciais: "LV",
    tamanho: "curto" as const,
  },
  {
    // Trecho "sem dúvidas o melhor escritório de advocacia" removido:
    // superlativo e comparação são vedados pelo Provimento 205/2021.
    texto:
      "Obrigado pelos serviços e por toda a assessoria prestada por ti e pela tua equipe. Preocupação real com o cliente.",
    nome: "Dr. Rafael",
    handle: "rafagmend",
    iniciais: "DR",
    tamanho: "curto" as const,
  },
];

export const FAQ = [
  {
    p: "A primeira conversa custa alguma coisa?",
    r: "Não. E ela pode terminar com “não há o que fazer no seu caso”, que é uma resposta tão válida quanto a outra.",
  },
  { p: "Preciso ir até o escritório?", r: "Não, em nenhuma etapa. Todo o atendimento é virtual, inclusive para quem mora perto." },
  {
    p: "Vocês atendem no meu estado?",
    r: "Sim. O processo corre no foro competente do seu caso, e a atuação é virtual em todo o país.",
  },
  {
    p: "Quanto tempo demora para ter uma resposta?",
    r: "A triagem inicial acontece na conversa. O parecer técnico, quando envolve análise de contrato, depende do envio dos documentos.",
  },
  {
    p: "Como sei que estou falando com o escritório de verdade?",
    r: "Depois do contrato, toda comunicação acontece no grupo com os advogados identificados. E nenhum pedido de pagamento é feito fora dele.",
  },
  {
    p: "Vocês cobram para analisar meu contrato?",
    r: "Não. A análise e o parecer são entregues sem custo, inclusive quando a conclusão é de que não há fundamento.",
  },
  { p: "E se eu não tiver todos os documentos?", r: "Traga o que tiver. Levantar documento faz parte do trabalho." },
];

export const TICKER = [
  "Dívida bancária",
  "Passivo empresarial",
  "Defesa em execução",
  "Direito tributário",
  "Revisão de contrato",
  "Superendividamento",
  "Nome negativado",
  "Auxílio moradia",
  "FIES para médicos",
  "Processo ético no CRM",
  "Registro de marca",
  "Plano de saúde negado",
  "Voo cancelado",
  "Overbooking",
];

/** Quem atende e com que autoridade. Complementa ETAPAS, que já responde "como
 *  funciona": aqui a resposta é "por que com este escritório". Tudo derivado de
 *  conteudo/sobre.md. Sem formações, títulos, datas de fundação ou nomes de
 *  equipe, que o próprio documento proíbe acrescentar sem informação do escritório. */
export const DIFERENCIAIS = [
  {
    icone: "doc" as const,
    titulo: "A prática começou no direito médico",
    texto:
      "O escritório nasceu atendendo médicos residentes: auxílio moradia, FIES e defesa em processo ético no CRM. É uma área que não perdoa atendimento genérico, e foi ela que formou o método de conferir documento antes de opinar.",
  },
  {
    icone: "scale" as const,
    titulo: "E se ampliou para dívida e patrimônio",
    texto:
      "Do FIES para as carteiras de passivo bancário: análise de contrato, negociação, defesa em execução e busca e apreensão. Quem lida com dívida de banco todo dia reconhece rápido o que é discutível e o que não é.",
  },
  {
    icone: "shield" as const,
    titulo: "Uma equipe dividida por matéria",
    texto:
      "Renan coordena o atendimento com profissionais por área: bancário, tributário, médico e consumidor. O seu caso não fica com quem estava livre, fica com quem trabalha aquilo.",
  },
  {
    icone: "pin" as const,
    titulo: "Atendimento virtual, em qualquer estado",
    texto:
      "O acompanhamento é feito à distância, com os profissionais identificados pelo nome e por canais oficiais. Clientes em estados diferentes são acompanhados do mesmo jeito.",
  },
];
