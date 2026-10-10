import type { PaginaServico } from "@/lib/tipos";

export const consumidor: PaginaServico = {
  slug: "/consumidor",
  titulo: "Direito do consumidor",
  metaTitulo: "Voo cancelado, overbooking e plano de saúde: seus direitos",
  metaDescricao:
    "Cancelamento de voo, atraso, overbooking e negativa de plano de saúde. O que a lei prevê, o que exigir na hora e o que guardar.",
  hero: {
    kicker: "Direito do consumidor",
    h1: "Voo cancelado ou tratamento negado. Você precisa de uma resposta.",
    enfase: "uma resposta",
    sub: "Problemas com companhias aéreas e planos de saúde. Entenda como funciona a análise do seu caso, quais documentos reunir e como falar com o advogado, tudo nesta página.",
  },
  heroImagem: {
    escuro: "/img/consumidor-hero-wide-v2.webp",
    alt: "Passageira aguardando no aeroporto após receber a notícia do cancelamento de um voo",
  },
  blocos: [
    {
      tipo: "texto",
      h2: "Acontece muito mais do que você imagina.",
      paras: [
        "Quem voa duas vezes por ano acha que teve azar. Quem voa toda semana sabe que não é azar, é rotina operacional.",
        "Cancelamento, atraso longo e preterição de embarque acontecem todos os dias, em todos os aeroportos do país. O overbooking, em particular, não é um imprevisto: é uma prática deliberada, em que a companhia vende mais assentos do que a aeronave comporta, calculando que parte dos passageiros não vai aparecer. Quando todos aparecem, alguém fica em terra.",
        "A conta que sustenta isso é simples: sai mais barato indenizar os poucos que reclamam do que deixar de vender os assentos extras. A maior parte das pessoas não reclama, e é por isso que a conta continua fechando.",
      ],
    },
    {
      tipo: "bullets",
      h2: "As três situações não são a mesma coisa.",
      itens: [
        { titulo: "Atraso", texto: "A partir de determinado tempo de espera nasce o dever de assistência material: comunicação, alimentação e, conforme a duração, hospedagem e transporte." },
        { titulo: "Cancelamento", texto: "Além da assistência, você escolhe entre reacomodação em outro voo, reembolso integral ou execução do serviço por outra modalidade. A escolha é sua, não da companhia." },
        { titulo: "Overbooking", texto: "Preterição de embarque. Além da assistência e da reacomodação, há regra específica de compensação, e o fato de a prática ser deliberada pesa na discussão." },
      ],
    },
    {
      tipo: "situacoes",
      h2: "Onde a gente atua.",
      itens: [
        {
          pergunta: "Seu voo foi cancelado, atrasou ou você ficou em terra?",
          texto: "Assistência material, reacomodação, reembolso e reparação. O que exigir no balcão e o que guardar.",
          href: "/consumidor/voo-e-overbooking",
        },
        {
          pergunta: "O plano de saúde negou um procedimento?",
          texto: "Quem define a conduta terapêutica é o médico assistente. Havendo urgência, existe caminho por liminar em prazo curto.",
          alerta: { tag: "Urgência", icone: "clock", texto: "Peça a negativa por escrito antes de qualquer coisa." },
          href: "/consumidor/plano-de-saude",
        },
        {
          pergunta: "Cobraram algo que você não contratou?",
          texto: "Serviço não solicitado, cobrança duplicada, nome negativado por dívida que não é sua.",
          href: "/dividas/nome-negativado",
        },
      ],
    },
    {
      tipo: "documentos",
      h2: "Se está acontecendo agora, no aeroporto.",
      intro: "Cinco coisas para fazer antes de sair de lá.",
      itens: [
        "Peça o motivo por escrito, a companhia deve informar a razão do atraso ou cancelamento",
        "Exija a assistência material: alimentação, comunicação e hospedagem conforme o tempo",
        "Guarde todo recibo de gasto feito por conta própria",
        "Fotografe o painel com o status, data e hora, a prova some em minutos",
        "Não assine nada sem ler: termo no balcão pode encerrar discussões que nem começaram",
      ],
    },
    {
      tipo: "callout",
      icone: "shield",
      titulo: "Duas coisas que sempre valem.",
      paras: [
        "Peça por escrito. Negativa por telefone não serve para nada. Toda recusa relevante, de cobertura, de embarque, de reembolso, deve ser pedida por escrito, com protocolo. É a diferença entre ter e não ter caso.",
        "Guarde o que comprova o prejuízo. Recibos de gastos com a espera, comprovantes de remarcação, laudo médico, prints de conversa. O dano material se prova com papel.",
      ],
    },
  ],
  faq: [
    { p: "Aceitei o voucher. Perdi o direito?", r: "Depende do que o documento dizia. Vale a leitura antes de concluir qualquer coisa." },
    { p: "A companhia alegou mau tempo. Ainda tenho direito?", r: "O dever de assistência existe independentemente do motivo. O que muda, conforme o caso, é a discussão sobre reparação." },
    { p: "Foi há seis meses. Ainda dá tempo?", r: "Há prazo, e ele varia conforme o tipo de voo. Quanto antes, melhor a prova." },
    { p: "Preciso ir ao fórum?", r: "Não. Todo o atendimento é virtual." },
    { p: "Meu voo era internacional. Muda alguma coisa?", r: "Muda o regime aplicável em alguns pontos, inclusive por convenções internacionais." },
  ],
  cta: { titulo: "Manda os documentos. A avaliação é gratuita.", enfase: "é gratuita" },
};

export const vooOverbooking: PaginaServico = {
  slug: "/consumidor/voo-e-overbooking",
  titulo: "Voo cancelado e overbooking",
  metaTitulo: "Voo cancelado ou overbooking: seus direitos",
  metaDescricao:
    "Cancelamento, atraso e preterição de embarque têm regras de assistência, reacomodação e reparação. Entenda o que exigir e o que guardar.",
  hero: {
    kicker: "Consumidor · Transporte aéreo",
    h1: "Seu voo foi cancelado, atrasou ou você ficou em terra?",
    enfase: "ficou em terra",
    sub: "As três situações têm regras próprias de assistência, reacomodação e reparação. A maior parte dos passageiros aceita um voucher e vai embora.",
    ctaTexto: "Verificar o meu caso",
  },
  blocos: [
    {
      tipo: "bullets",
      h2: "Elas não são a mesma coisa.",
      itens: [
        { titulo: "Atraso", texto: "A partir de determinado tempo de espera nasce o dever de assistência material, comunicação, alimentação e, conforme a duração, hospedagem e transporte." },
        { titulo: "Cancelamento", texto: "Além da assistência, o passageiro pode optar entre reacomodação em outro voo, reembolso integral ou execução do serviço por outra modalidade." },
        { titulo: "Overbooking", texto: "Quando a companhia vende mais assentos do que a aeronave comporta e impede o embarque de quem tinha passagem. Há regra específica de compensação, e a prática é deliberada, não um imprevisto." },
      ],
    },
    {
      tipo: "documentos",
      h2: "No aeroporto, peça isso.",
      itens: [
        "A declaração do motivo, por escrito, no balcão",
        "A assistência material conforme o tempo de espera, não é cortesia",
        "Comprovante de todo gasto feito por conta própria",
        "Foto do painel com status, data e hora",
      ],
      nota: "Nada de assinar sem ler: termo de acordo assinado no balcão pode encerrar discussões que ainda nem começaram.",
    },
    {
      tipo: "documentos",
      h2: "O que ter em mãos depois.",
      itens: [
        "Cartão de embarque e comprovante da compra",
        "E-mails e mensagens da companhia sobre a alteração",
        "Comprovantes de gastos com alimentação, transporte e hospedagem",
        "Comprovação do prejuízo decorrente: reunião perdida, diária não utilizada, evento perdido",
        "Prints do aplicativo mostrando o status do voo",
      ],
    },
  ],
  faq: [
    { p: "A companhia alegou mau tempo. Ainda tenho direito?", r: "O dever de assistência material existe independentemente do motivo. O que muda, conforme o caso, é a discussão sobre reparação." },
    { p: "Aceitei um voucher. Perdi o direito?", r: "Depende do que o documento assinado dizia. Vale a leitura antes de concluir." },
    { p: "Meu voo era internacional. Muda?", r: "Muda o regime aplicável em alguns pontos, inclusive por convenções internacionais." },
    { p: "Atrasei uma conexão por causa do primeiro voo. Conta como um caso só?", r: "Em regra o contrato de transporte é analisado como um todo. É parte da avaliação." },
    { p: "Quanto tempo tenho para reclamar?", r: "Há prazo, e ele varia conforme o tipo de voo. Quanto antes, melhor a prova." },
  ],
  cta: { titulo: "Mande os documentos e a gente avalia.", enfase: "a gente avalia" },
};

export const planoSaude: PaginaServico = {
  slug: "/consumidor/plano-de-saude",
  titulo: "Plano de saúde negou cobertura",
  metaTitulo: "Plano de saúde negou o procedimento: o que fazer",
  metaDescricao:
    "Negativa de cobertura tem regra. Entenda o rol da ANS, o dever de fundamentar por escrito, os prazos e o caminho da liminar em caso de urgência.",
  hero: {
    kicker: "Consumidor · Saúde",
    h1: "O plano negou o procedimento que o seu médico indicou?",
    enfase: "o seu médico indicou",
    sub: "Quem define a conduta terapêutica é o médico assistente. O plano define cobertura contratual, e essa distinção é o centro de quase toda discussão.",
    urgencia: "Em caso de risco à saúde, existe caminho por liminar em prazo curto.",
    ctaTexto: "Falar com o advogado agora",
  },
  blocos: [
    {
      tipo: "callout",
      icone: "doc",
      titulo: "Antes de qualquer coisa: peça a negativa por escrito.",
      paras: [
        "A operadora tem o dever de informar a recusa de forma clara e fundamentada. Negativa dada por telefone, sem protocolo e sem motivo escrito, é o cenário mais comum e o mais frágil para a operadora.",
        "Sem documento, a discussão vira palavra contra palavra. Com ele, você tem a prova da recusa e, o que mais importa, o fundamento que a operadora escolheu usar. A partir daí ela fica presa a esse argumento e não pode trocá-lo depois.",
        "Ligue, peça o número do protocolo e solicite a recusa por escrito. Se houver canal por aplicativo ou e-mail, repita o pedido por lá.",
      ],
    },
    {
      tipo: "bullets",
      h2: "O que a operadora costuma alegar.",
      itens: [
        { titulo: "Não está no rol da ANS", texto: "O rol é referência de cobertura obrigatória. Existem discussões consolidadas sobre situações em que a negativa com esse fundamento não se sustenta, especialmente sem alternativa terapêutica eficaz." },
        { titulo: "É procedimento experimental", texto: "Alegação frequente para tratamentos com registro na Anvisa e indicação médica fundamentada. O que é experimental tem definição, e ela não alcança tudo." },
        { titulo: "Está em carência", texto: "Carência tem prazos definidos, e urgência e emergência têm regra própria." },
        { titulo: "Doença preexistente", texto: "A cobertura parcial temporária tem limite de prazo e alcance. Não é salvo-conduto permanente." },
        { titulo: "Fora da rede credenciada", texto: "Havendo indisponibilidade de prestador na rede, existe discussão sobre reembolso ou custeio." },
      ],
    },
    {
      tipo: "texto",
      h2: "Quando o caso não pode esperar.",
      paras: [
        "Em situação de risco à saúde, a via é o pedido de tutela de urgência, uma decisão liminar que pode determinar a cobertura em prazo muito curto, antes do julgamento final.",
        "Para isso, três coisas precisam estar prontas: o relatório médico fundamentado, a negativa por escrito e a comprovação da urgência. Reunir isso rápido é o que define a viabilidade da liminar. Nesse cenário, não espere o documento chegar para procurar orientação, faça as duas coisas em paralelo.",
      ],
    },
    {
      tipo: "documentos",
      h2: "O que ter em mãos.",
      itens: [
        "Relatório do médico assistente, com CID, indicação e justificativa",
        "Negativa por escrito ou o número do protocolo da recusa",
        "Contrato do plano e carteirinha",
        "Comprovantes de pagamento das mensalidades",
        "Exames e laudos que fundamentam o pedido",
        "Orçamento do procedimento, se houver",
      ],
    },
  ],
  faq: [
    { p: "A operadora só me negou por telefone. E agora?", r: "Peça o protocolo e a recusa por escrito. A ausência de negativa formal é, em si, um ponto relevante." },
    { p: "Posso fazer o procedimento e pedir reembolso depois?", r: "Em alguns casos sim, mas depende do contrato e da situação. Vale avaliar antes de gastar." },
    { p: "Quanto tempo demora uma liminar?", r: "Pode ser questão de dias, conforme a urgência demonstrada e o juízo. Não há prazo garantido." },
    { p: "Meu plano é empresarial. Muda algo?", r: "Muda a estrutura contratual e alguns pontos da discussão, mas o dever de cobertura permanece." },
  ],
  cta: { titulo: "Se há urgência, o tempo é agora.", enfase: "é agora" },
};
