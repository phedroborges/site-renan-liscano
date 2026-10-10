import type { PaginaServico } from "@/lib/tipos";

export const dividas: PaginaServico = {
  slug: "/dividas",
  titulo: "Dívidas bancárias e empresariais",
  metaTitulo: "Dívidas bancárias e empresariais: defesa e negociação",
  metaDescricao:
    "Dívidas de pessoas e empresas: passivo bancário, revisão de contratos, defesa em execução, busca e apreensão e planejamento patrimonial.",
  tema: "popular",
  hero: {
    kicker: "Dívidas",
    h1: "A dívida só cresce. O problema pode estar no contrato.",
    enfase: "O problema pode estar no contrato",
    sub: "Conferimos juros, tarifas e seguros do que você assinou e apuramos, por escrito e em número, se houve cobrança indevida. A primeira análise não tem custo, e se não compensar entrar com ação, a recomendação vai ser não entrar.",
    ctaTexto: "Mandar meu contrato no WhatsApp",
  },
  heroImagem: {
    claro: "/img/dividas-hero.webp",
    escuro: "/img/dividas-hero-escuro.webp",
    alt: "Uma bola enorme feita de contratos e boletos amassados, parada por uma cunha de aço antes de alcançar uma casa iluminada",
  },
  blocos: [
    {
      tipo: "situacoes",
      h2: "Qual delas é a sua?",
      itens: [
        {
          pergunta: "As parcelas comprometeram o que você precisa para viver",
          texto:
            "A Lei 14.181, de 2021, permite reunir todos os credores numa audiência só e montar um plano de pagamento a partir da sua renda real, preservando o mínimo para morar, comer e se tratar.",
          href: "/dividas/superendividamento",
        },
        {
          pergunta: "Você acha que está pagando mais do que devia",
          texto:
            "O contrato é comparado com a taxa média do Banco Central do período exato da contratação e com o que os tribunais já decidiram. Se houver diferença, ela aparece em número.",
          href: "/dividas/revisional",
        },
        {
          pergunta: "Seu nome está negativado",
          texto: "Dívida já paga que não saiu, cobrança duplicada, contrato aberto por terceiro. Cada uma tem caminho próprio.",
          href: "/dividas/nome-negativado",
        },
      ],
    },
    {
      tipo: "texto",
      h2: "Primeiro, entender a cobrança. Depois, definir o caminho.",
      destaque: "Pessoas e empresas precisam de uma análise que considere o conjunto.",
      paras: [
        "Uma parcela em atraso, uma citação judicial e uma inscrição em dívida ativa pedem análises diferentes. Começamos pelos documentos, pelos valores cobrados e pelos prazos que estão correndo.",
        "Na dívida bancária, conferimos contratos, juros e garantias. Na tributária, examinamos a origem do débito e o estágio da cobrança. A partir daí, avaliamos negociação, revisão e defesa, conforme o caso.",
      ],
    },
    {
      tipo: "bullets",
      h2: "O que costuma aparecer no contrato.",
      cena: "contrato",
      itens: [
        {
          titulo: "Juros acima da média do período",
          texto:
            "Existe uma série histórica do Banco Central com a taxa média praticada em cada mês. Dá para conferir se o que você pagou estava dentro dela.",
        },
        {
          titulo: "Encargos que ninguém explicou",
          texto:
            "Tarifa de cadastro, de avaliação, registro de contrato. Valores pequenos somados ao financiado e corrigidos pelos mesmos juros durante anos.",
        },
        {
          titulo: "Seguro que você não pediu",
          texto: "O prestamista aparece embutido na parcela de muita gente que nunca soube que estava pagando por ele.",
        },
        {
          titulo: "Juros sobre juros",
          texto: "É o que transforma uma dívida de R$ 20 mil em R$ 80 mil sem que você tenha pego um centavo a mais.",
        },
      ],
    },
    {
      tipo: "callout",
      icone: "scale",
      titulo: "Nada disso é ilegal por si só.",
      paras: [
        "O que se discute é se foi contratado de forma clara e se está dentro do que a jurisprudência admite. Por isso a análise vem antes de qualquer conversa sobre honorários, e às vezes a conclusão é de que o contrato está correto.",
        "Quando é esse o caso, o parecer diz isso. Sem custo e sem proposta anexada.",
      ],
    },
    {
      tipo: "bullets",
      h2: "Três erros que pioram a situação.",
      itens: [
        { titulo: "Aceitar o primeiro acordo por telefone", texto: "Renegociação feita antes da análise costuma consolidar exatamente os valores que seriam discutíveis, e vem com cláusula encerrando tudo." },
        { titulo: "Pegar um empréstimo para pagar o outro", texto: "É o mecanismo que transforma dívida administrável em superendividamento. Quase todo mundo que chega aqui passou por isso." },
        { titulo: "Pagar quem grita mais alto", texto: "Quem cobra com mais insistência não é necessariamente quem tem mais razão. A ordem se define depois de olhar o conjunto." },
      ],
    },
    {
      tipo: "callout",
      icone: "calc",
      titulo: "Se você é médico, tem uma frente a mais.",
      paras: [
        "FIES é dívida bancária. E o art. 6º-B da Lei 10.260 prevê abatimento do saldo devedor para quem atuou na Estratégia de Saúde da Família, nas Forças Armadas, no Mais Médicos ou na linha de frente da COVID-19.",
        "Na prática, costumam existir duas discussões ao mesmo tempo: o abatimento previsto em lei e o contrato em si.",
      ],
    },
  ],
  faq: [
    { p: "Eu tenho que pagar alguma coisa para vocês olharem meu contrato?", r: "Não. A análise e o parecer são gratuitos, inclusive quando a resposta é negativa." },
    { p: "Meu nome vai ficar mais sujo se eu processar?", r: "Não. Discutir o contrato judicialmente não gera nova negativação." },
    { p: "Preciso parar de pagar?", r: "Não, e em regra não convém. Parar por conta própria costuma piorar a posição." },
    { p: "Minha dívida é pequena. Vale a pena?", r: "Talvez não, e você vai ouvir isso. O parecer inclui essa conta." },
    { p: "Vou ter que ir ao fórum?", r: "Não. Tudo é virtual, do começo ao fim." },
    { p: "Já negociei com o banco. Estraguei tudo?", r: "Depende do que você assinou. Traga o documento do acordo, é a primeira coisa a ler." },
  ],
  cta: { titulo: "O primeiro passo é só mandar o contrato.", enfase: "mandar o contrato", texto: "Sem custo, sem compromisso, e com resposta escrita." },
};

export const superendividamento: PaginaServico = {
  slug: "/dividas/superendividamento",
  titulo: "Superendividamento",
  metaTitulo: "Superendividamento: a lei que permite renegociar tudo de uma vez",
  metaDescricao:
    "A Lei 14.181 permite reunir todos os credores em uma audiência única, com plano de pagamento que preserva o mínimo existencial. Entenda quem se enquadra.",
  tema: "popular",
  baseLegal: "Lei 14.181/2021",
  hero: {
    kicker: "Dívidas · Lei 14.181",
    h1: "As parcelas comprometeram o que você precisa para viver?",
    enfase: "para viver",
    sub: "A lei chama isso de superendividamento e prevê um caminho próprio: uma audiência com todos os credores ao mesmo tempo, e um plano que cabe na sua renda real.",
    ctaTexto: "Entender a minha situação",
  },
  blocos: [
    {
      tipo: "texto",
      h2: "O que a lei define como superendividamento.",
      paras: [
        "A Lei 14.181/2021 define como superendividado o consumidor de boa-fé que não consegue pagar a totalidade das suas dívidas de consumo sem comprometer o mínimo existencial.",
      ],
    },
    {
      tipo: "bullets",
      h2: "Dois pontos que costumam surpreender.",
      itens: [
        {
          titulo: "Boa-fé",
          texto:
            "A lei protege quem se endividou sem intenção de não pagar. Perda de emprego, doença, queda de renda e juros acumulados são exatamente o cenário previsto. Não é preciso se justificar a ninguém.",
        },
        {
          titulo: "Mínimo existencial",
          texto:
            "A lei reconhece que existe um valor abaixo do qual a pessoa não pode ser empurrada: moradia, alimentação, saúde. Nenhum plano de pagamento pode ignorar isso.",
        },
      ],
    },
    {
      tipo: "passos",
      h2: "Como o processo funciona.",
      itens: [
        { titulo: "Levantamento", texto: "Mapeamento de todas as dívidas, credores, contratos e da renda efetiva." },
        { titulo: "Pedido de repactuação", texto: "Requerimento em juízo para instaurar o processo." },
        { titulo: "Audiência de conciliação global", texto: "Todos os credores são chamados para a mesma audiência. Em vez de negociar um a um, em condições desiguais, negocia-se o conjunto." },
        { titulo: "Plano de pagamento", texto: "Proposta com prazo e parcelas compatíveis com a renda, preservado o mínimo existencial." },
        { titulo: "Plano judicial compulsório", texto: "Não havendo acordo, o juízo pode instituir plano com prazo definido em lei." },
      ],
    },
    {
      tipo: "bullets",
      h2: "Que dívidas entram.",
      itens: [
        { titulo: "Entram", texto: "Dívidas de consumo: cartão de crédito, empréstimo pessoal, consignado, financiamento, cheque especial, carnê." },
        { titulo: "Não entram", texto: "Entre outras, dívidas de caráter alimentar, fiscais e as contraídas com propósito de fraude ou aquisição de produtos de luxo de alto valor." },
      ],
    },
    {
      tipo: "documentos",
      h2: "O que ter em mãos.",
      itens: [
        "Extrato de todas as dívidas, com credor e valor atual",
        "Contratos que você tiver",
        "Comprovante de renda dos últimos meses",
        "Comprovantes de despesas fixas essenciais: aluguel, energia, água, plano de saúde",
        "Extratos bancários recentes",
      ],
      nota: "Ninguém tem tudo isso organizado. Traga o que tiver, o levantamento faz parte do trabalho.",
    },
  ],
  faq: [
    { p: "Isso limpa meu nome?", r: "O objetivo é reorganizar o pagamento de forma viável. A regularização dos cadastros acompanha o cumprimento do plano." },
    { p: "Vou pagar menos do que devo?", r: "O que se discute é prazo, encargos e viabilidade, não o desaparecimento da dívida. A lei parte do princípio de que o consumidor quer pagar." },
    { p: "Preciso estar inadimplente?", r: "Não. A lei alcança também quem ainda paga, mas às custas do mínimo existencial." },
    { p: "Meu caso é grande demais?", r: "Não existe valor mínimo nem máximo. O critério é a relação entre dívida, renda e mínimo existencial." },
    { p: "Isso serve para dívida de empresa?", r: "Não. O procedimento é do consumidor pessoa física. Para empresas, atuamos na gestão do passivo bancário, negociação e defesa em execução, apresentadas nesta mesma página." },
  ],
  cta: { titulo: "O primeiro passo é entender o tamanho.", enfase: "entender o tamanho", texto: "Trinta minutos, sem custo, para mapear a situação." },
};

export const revisional: PaginaServico = {
  slug: "/dividas/revisional",
  titulo: "Revisão de contrato bancário",
  metaTitulo: "Revisão de contrato bancário: quando cabe",
  metaDescricao:
    "Juros fora do pactuado, tarifas embutidas e seguros não contratados. Entenda o que uma ação revisional discute e quando ela faz sentido.",
  tema: "popular",
  hero: {
    kicker: "Dívidas · Contratos",
    h1: "O valor que você está pagando bate com o que foi contratado?",
    enfase: "foi contratado",
    sub: "Revisão de contrato bancário não é um truque para não pagar. É verificar se a cobrança corresponde ao que foi efetivamente pactuado.",
    ctaTexto: "Analisar o meu contrato",
  },
  blocos: [
    {
      tipo: "callout",
      icone: "alert",
      titulo: "Quando a revisional não é o caminho.",
      paras: [
        "Vale dizer isso antes de qualquer outra coisa: nem todo contrato tem vício, e ação revisional sem fundamento gera custo e frustração.",
        "Contrato com juros altos, mas contratados de forma clara e dentro do que a jurisprudência admite, não é revisável só por ser caro. O que se discute é descompasso entre o pactuado e o cobrado, não arrependimento.",
        "Se a análise não encontrar fundamento, você vai ouvir isso.",
      ],
    },
    {
      tipo: "bullets",
      h2: "O que costuma aparecer.",
      itens: [
        { titulo: "Capitalização fora do pactuado", texto: "Cobrança de juros sobre juros em periodicidade não prevista ou não informada de forma clara." },
        { titulo: "Tarifas embutidas", texto: "Valores incluídos no financiamento sem contratação destacada ou sem informação adequada." },
        { titulo: "Seguro não solicitado", texto: "Prêmio somado à parcela sem que o consumidor tenha efetivamente contratado, a chamada venda casada." },
        { titulo: "Financiamento de veículo", texto: "Examinamos o contrato, as parcelas e os encargos do financiamento, além das garantias e de eventual ação de busca e apreensão." },
        { titulo: "Financiamento imobiliário", texto: "Analisamos a evolução do saldo, os encargos e as condições pactuadas, considerando a modalidade de financiamento e a garantia vinculada ao imóvel." },
        { titulo: "Divergência no custo efetivo total", texto: "O CET apresentado não corresponde ao que é cobrado na prática." },
      ],
    },
    {
      tipo: "passos",
      h2: "Como a análise funciona.",
      itens: [
        { titulo: "Leitura do contrato", texto: "Confronto entre o que está escrito e o que está sendo cobrado." },
        { titulo: "Recálculo", texto: "Refazimento da evolução do saldo com os parâmetros pactuados e com a taxa média do período." },
        { titulo: "Parecer", texto: "Existe fundamento? Qual é a diferença apurada? Vale o processo? Vai por escrito." },
        { titulo: "Decisão sua", texto: "Com o número na mão, você decide. Se não compensar, não ajuizamos." },
      ],
    },
    {
      tipo: "documentos",
      h2: "O que ter em mãos.",
      itens: [
        "Contrato assinado, com todas as páginas e anexos",
        "Extrato de evolução da dívida ou de parcelas pagas",
        "Comprovantes de pagamento",
        "Qualquer proposta de renegociação recebida",
      ],
      nota: "Não tem o contrato? A instituição é obrigada a fornecer cópia. Isso pode ser pedido.",
    },
  ],
  faq: [
    { p: "Posso continuar pagando durante o processo?", r: "Em regra, sim, e costuma ser o mais prudente. Deixar de pagar por conta própria tende a piorar a posição." },
    { p: "A revisional tira meu nome do cadastro?", r: "Não automaticamente. São discussões distintas, que às vezes caminham juntas." },
    { p: "Vale a pena para dívida pequena?", r: "Nem sempre. O parecer inclui essa conta, e se não compensar, a recomendação é não ajuizar." },
    { p: "Serve para consignado e financiamento de veículo?", r: "Serve para contratos bancários em geral. Cada modalidade tem discussões típicas." },
  ],
  cta: { titulo: "Uma leitura do contrato antes de qualquer decisão.", enfase: "antes de qualquer decisão" },
};

export const nomeNegativado: PaginaServico = {
  slug: "/dividas/nome-negativado",
  titulo: "Nome negativado",
  metaTitulo: "Negativação indevida: o que fazer",
  metaDescricao:
    "Inscrição indevida em cadastro de inadimplentes gera direito à retirada e, conforme o caso, à reparação. Entenda os passos e o que reunir.",
  tema: "popular",
  hero: {
    kicker: "Dívidas · Cadastros",
    h1: "Seu nome foi negativado por uma dívida que não é sua?",
    enfase: "não é sua",
    sub: "Cobrança de dívida já paga, contrato que você nunca fez, negativação sem aviso prévio. Cada uma dessas situações tem tratamento próprio.",
    ctaTexto: "Verificar o meu caso",
  },
  blocos: [
    {
      tipo: "bullets",
      h2: "Qual delas é a sua.",
      itens: [
        { titulo: "A dívida não existe", texto: "Contrato aberto em seu nome por terceiro, cobrança duplicada, erro de cadastro." },
        { titulo: "A dívida existia e foi paga", texto: "Pagamento feito e a inscrição permaneceu, ou foi incluída depois da quitação." },
        { titulo: "A dívida existe, mas faltou o aviso", texto: "O órgão de cadastro deve comunicar previamente a inscrição. A falta desse aviso é uma discussão em si." },
      ],
    },
    {
      tipo: "callout",
      icone: "alert",
      titulo: "O ponto honesto sobre o dano moral.",
      paras: [
        "Conforme o caso, dá para pedir a retirada da inscrição, a declaração de inexistência do débito e a reparação por dano moral.",
        "Mas o entendimento consolidado é o de que quem já possui outra negativação legítima e preexistente, em regra, não tem direito à indenização por dano moral, só à retirada da inscrição indevida. A lógica é a de que o abalo de crédito já existia por outro motivo.",
        "Por isso a primeira coisa a verificar não é o valor da causa, é o seu extrato completo. Você merece saber disso antes de criar expectativa.",
      ],
    },
    {
      tipo: "passos",
      h2: "Os três primeiros passos.",
      itens: [
        { titulo: "Puxe o seu extrato", texto: "Consulte o que consta em seu nome nos órgãos de cadastro. É gratuito e é o ponto de partida." },
        { titulo: "Guarde tudo", texto: "Prints das telas, protocolos de atendimento, e-mails, comprovantes de pagamento. Data e número de protocolo valem muito." },
        { titulo: "Não aceite acordo por telefone", texto: "Acordo verbal sobre dívida que você entende indevida pode ser lido como reconhecimento do débito." },
      ],
    },
  ],
  faq: [
    { p: "Já tenho outra negativação. Adianta?", r: "Adianta para retirar a inscrição indevida. Para dano moral, a preexistência de negativação legítima costuma ser obstáculo, e isso é dito na primeira conversa." },
    { p: "Paguei e continua negativado. Quanto tempo eles têm para retirar?", r: "Após a quitação, a baixa deve ocorrer em prazo curto. Passado esse prazo, há discussão." },
    { p: "Fizeram um contrato em meu nome. É fraude?", r: "Pode ser. Além da discussão cível, vale registrar ocorrência, e a instituição tem responsabilidade sobre a contratação que aceitou." },
    { p: "Preciso ir a alguma agência?", r: "Não. Todo o atendimento é virtual." },
  ],
  cta: { titulo: "Mande o seu extrato e a gente lê junto.", enfase: "a gente lê junto" },
};
