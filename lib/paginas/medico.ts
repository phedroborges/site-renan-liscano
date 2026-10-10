import type { PaginaServico } from "@/lib/tipos";

export const medico: PaginaServico = {
  slug: "/medico",
  titulo: "Direito médico",
  metaTitulo: "Advogado para médicos: FIES, residência, CRM e marca",
  metaDescricao:
    "Auxílio moradia da residência, abatimento do FIES, defesa em processo ético no CRM e registro de marca. Parecer técnico antes da proposta. OAB/RS 120.306.",
  hero: {
    kicker: "Direito médico",
    h1: "Seis anos de faculdade, três de residência. E a conta que ninguém avisou.",
    enfase: "ninguém avisou",
    sub: "Você estudou mais do que quase todo mundo, trabalhou plantão sem dormir e chegou ao outro lado com um FIES que dobrou, um salário que não fecha o mês e um monte de direito que ninguém te explicou.",
    ctaTexto: "Ver quais direitos são meus",
  },
  heroImagem: {
    escuro: "/img/medico-hero-wide.webp",
    alt: "Médico ao final de um plantão, sentado diante de documentos e de um notebook",
  },
  blocos: [
    {
      tipo: "situacoes",
      h2: "Alguma dessas é a sua?",
      itens: [
        {
          pergunta: "Você fez residência e nunca recebeu auxílio moradia?",
          texto:
            "A Lei 6.932 prevê três direitos ao residente: repouso entre plantões, alimentação e moradia. O terceiro quase nunca foi implementado, e a Justiça vem reconhecendo a indenização retroativa.",
          alerta: { tag: "Prazo", icone: "clock", texto: "O direito prescreve." },
          href: "/medico/auxilio-moradia",
        },
        {
          pergunta: "Você se formou com FIES e a dívida só cresceu?",
          texto:
            "O art. 6º-B da Lei 10.260 prevê abatimento de 1% do saldo devedor por mês trabalhado, em quatro modalidades diferentes.",
          alerta: { tag: "Enquadramento", icone: "alert", texto: "Depende de onde e quando você atuou." },
          href: "/medico/fies",
        },
        {
          pergunta: "Você foi notificado de um processo ético no CRM?",
          texto:
            "A sindicância parece formalidade. O que se diz nela acompanha o resto do processo.",
          alerta: { tag: "Urgência", icone: "clock", texto: "O prazo corre da notificação." },
          href: "/medico/processo-etico",
        },
        {
          pergunta: "Seu nome virou referência, mas não está registrado?",
          texto:
            "Sem registro no INPI, o nome que você construiu não tem dono formal. E quem registra primeiro leva.",
          href: "/medico/registro-de-marca",
        },
      ],
    },
    {
      tipo: "texto",
      h2: "A conta que ninguém faz na formatura.",
      paras: [
        "A residência é apresentada como a etapa final do sacrifício. Na prática, costuma ser o momento de maior aperto da carreira inteira: bolsa baixa, carga horária impossível e um financiamento estudantil que continuou correndo juros durante todo o tempo em que você estudava.",
        "Somam-se detalhes que ninguém explica na faculdade. Que a lei garante moradia ao residente desde 1981 e quase nenhuma instituição cumpre. Que existe abatimento previsto em lei para quem atuou em determinadas frentes da saúde pública. Que o seu nome, depois de anos construindo reputação, pode ser registrado por outra pessoa.",
        "Nenhuma dessas coisas é ensinada. Todas têm prazo.",
      ],
    },
    {
      tipo: "callout",
      icone: "clock",
      titulo: "Rotina médica não cabe em horário forense.",
      paras: [
        "Quem atende médico precisa saber a diferença entre alojamento de plantão e auxílio moradia, entre sindicância e processo ético, entre bolsa de residência e vínculo empregatício. São distinções que decidem o resultado e que não aparecem num atendimento genérico.",
        "E precisa saber que a pessoa do outro lado tem doze minutos entre um paciente e outro. Por isso o contato é por WhatsApp, a explicação é curta, e nada é decidido com pressa.",
      ],
    },
  ],
  cta: {
    titulo: "Um a um, esses problemas têm resposta.",
    enfase: "têm resposta",
    texto: "Trinta minutos, sem custo, para saber quais deles se aplicam ao seu caso.",
  },
};

export const auxilioMoradia: PaginaServico = {
  slug: "/medico/auxilio-moradia",
  titulo: "Auxílio moradia na residência médica",
  metaTitulo: "Auxílio moradia da residência médica: o que a lei prevê",
  metaDescricao:
    "A Lei 6.932 garante moradia ao médico residente. Entenda a indenização retroativa, quem se enquadra e por que o termo de renúncia não afasta o direito.",
  hero: {
    kicker: "Direito médico · Residência",
    h1: "Você fez residência e nunca recebeu auxílio moradia?",
    enfase: "auxílio moradia",
    sub: "A Lei 6.932 prevê o benefício desde 1981. A maior parte das instituições nunca o implementou, e a Justiça vem reconhecendo o direito à indenização retroativa.",
    urgencia: "O direito prescreve. Quem concluiu a residência há mais tempo tem menos margem.",
    ctaTexto: "Entender o meu caso",
  },
  baseLegal: "Lei 6.932/1981, art. 4º, §5º",
  disclaimer: true,
  blocos: [
    {
      tipo: "texto",
      h2: "O que a lei prevê.",
      paras: [
        "O art. 4º, §5º da Lei 6.932/1981 estabelece três obrigações da instituição responsável pelo programa de residência médica: local de repouso entre os plantões, alimentação e moradia.",
        "Os dois primeiros costumam ser cumpridos de alguma forma. O terceiro, na prática, quase nunca foi. Provocado a se manifestar, o Judiciário tem entendido que a falta de moradia gera dever de indenizar o residente.",
      ],
    },
    {
      tipo: "bullets",
      h2: "Duas coisas que não são auxílio moradia.",
      itens: [
        {
          titulo: "Alojamento de plantão",
          texto:
            "O quarto que o hospital oferece para o residente descansar durante o plantão cumpre a obrigação de local de repouso. É outro inciso da mesma lei. Um não substitui o outro.",
        },
        {
          titulo: "Termo de renúncia assinado na matrícula",
          texto:
            "Muitas instituições pedem a assinatura de um termo abrindo mão do benefício. Esse documento não afasta um direito previsto em lei, e o fato de você ter assinado não encerra a discussão.",
        },
      ],
    },
    {
      tipo: "bullets",
      h2: "Quem se enquadra.",
      itens: [
        { titulo: "Está na residência agora", texto: "O programa em curso já permite discutir o benefício." },
        { titulo: "Já concluiu a residência", texto: "A discussão é retroativa, respeitado o prazo de prescrição." },
        { titulo: "Instituição pública ou privada", texto: "A obrigação legal alcança as duas." },
        { titulo: "Mesmo tendo assinado renúncia", texto: "O termo entra na discussão, não a encerra." },
      ],
    },
    {
      tipo: "texto",
      h2: "Como o valor é estimado.",
      destaque: "Sem promessa de número fechado, a faixa depende do caso.",
      paras: [
        "A referência usada nas ações é um percentual sobre o total recebido de bolsa residência ao longo do programa. O valor final depende do tempo de programa, do valor da bolsa na época e do entendimento do juízo.",
      ],
    },
    {
      tipo: "documentos",
      h2: "O que ter em mãos.",
      itens: [
        "Contrato ou termo de compromisso do programa de residência",
        "Comprovantes de pagamento da bolsa, os que você tiver",
        "Certificado ou declaração de conclusão, se já terminou",
        "Qualquer termo assinado sobre moradia, alojamento ou renúncia",
        "Regulamento do programa, se tiver acesso",
      ],
      nota: "Não ter tudo não impede a conversa inicial. Boa parte desses documentos pode ser obtida depois, junto à instituição.",
    },
  ],
  faq: [
    {
      p: "Assinei um termo abrindo mão do auxílio. Ainda posso discutir?",
      r: "Sim. O termo é um dos pontos da discussão, não o fim dela, direito previsto em lei não se afasta por documento assinado no início do programa.",
    },
    {
      p: "O hospital me deu um quarto de plantão. Isso conta?",
      r: "Não. Local de repouso entre plantões e moradia são obrigações distintas, previstas no mesmo dispositivo.",
    },
    {
      p: "Já terminei a residência há três anos. Perdi o prazo?",
      r: "Depende. A prescrição corre, mas o marco varia conforme o caso. É exatamente o tipo de coisa que se resolve na conversa inicial.",
    },
    {
      p: "Preciso processar o hospital onde ainda trabalho?",
      r: "A ação é contra a instituição responsável pelo programa. Se isso é um problema no seu caso, é um ponto a avaliar antes de decidir.",
    },
    { p: "Quanto custa?", r: "A conversa inicial não tem custo. Honorários e cenários vão por escrito antes de qualquer assinatura." },
  ],
  cta: {
    titulo: "Descubra se o seu caso se enquadra.",
    enfase: "se enquadra",
    texto: "Trinta minutos, sem custo. Se não houver tese, você vai ouvir isso.",
  },
};

export const fies: PaginaServico = {
  slug: "/medico/fies",
  titulo: "Abatimento do FIES",
  metaTitulo: "Abatimento do FIES para médicos: quem tem direito",
  metaDescricao:
    "O art. 6º-B da Lei 10.260 prevê abatimento do saldo devedor do FIES para profissionais de saúde. Veja as modalidades e o que comprova cada uma.",
  hero: {
    kicker: "Direito médico · Dívida",
    h1: "Você usou FIES na medicina e a dívida só cresceu?",
    enfase: "só cresceu",
    sub: "O art. 6º-B da Lei 10.260 prevê abatimento do saldo devedor para quem atuou em determinadas frentes da saúde pública. O percentual varia conforme a modalidade e o tempo trabalhado.",
    ctaTexto: "Estimar o meu caso",
  },
  baseLegal: "Lei 10.260/2001, art. 6º-B",
  disclaimer: true,
  blocos: [
    {
      tipo: "texto",
      h2: "Como o abatimento funciona.",
      paras: [
        "A regra geral é de 1% de abatimento do saldo devedor por mês trabalhado, cumprido um período mínimo. O que muda entre as modalidades é onde esse trabalho precisa ter acontecido.",
        "Não é automático. Depende de enquadramento e de comprovação.",
      ],
    },
    {
      tipo: "bullets",
      h2: "As quatro modalidades.",
      itens: [
        {
          titulo: "Estratégia de Saúde da Família",
          texto:
            "Atuação em região carente ou com dificuldade de retenção de médicos, conforme definição do Ministério da Saúde. Período mínimo de um ano.",
        },
        {
          titulo: "Forças Armadas",
          texto: "Médico que serviu cumprindo jornada mínima diária, pelo período mínimo de um ano.",
        },
        {
          titulo: "Linha de frente da COVID-19",
          texto:
            "Profissionais da saúde, médicos, dentistas, enfermeiros, que atuaram durante o período crítico da pandemia, por no mínimo seis meses.",
        },
        {
          titulo: "Programa Mais Médicos",
          texto: "Participantes com atuação em regiões de carência de profissionais.",
        },
      ],
    },
    {
      tipo: "callout",
      icone: "calc",
      titulo: "Como isso aparece na prática.",
      paras: [
        "Um profissional que atuou dois anos em uma UBS acumula 24 meses × 1% = 24% de abatimento sobre o saldo devedor. Num saldo de R$ 600 mil, isso corresponde a R$ 144 mil.",
        "Em alguns casos também é possível discutir extensão da carência e suspensão do pagamento durante o período de atuação.",
        "Exemplo ilustrativo. O resultado depende do enquadramento, da comprovação e da análise do agente operador.",
      ],
    },
    {
      tipo: "bullets",
      h2: "Três coisas que mudam a conta.",
      intro: "É onde a maior parte dos pedidos cai.",
      itens: [
        {
          titulo: "A localidade",
          texto:
            "Não basta ter trabalhado em UBS. A classificação do município é parte do enquadramento, e é o ponto que mais derruba pedido.",
        },
        {
          titulo: "A comprovação do vínculo",
          texto: "Contrato, portaria, declaração do gestor, carteira de trabalho. Mês que não se comprova é mês que não entra.",
        },
        {
          titulo: "O saldo de referência",
          texto:
            "O abatimento incide sobre o saldo devedor, não sobre o valor originalmente financiado. Quanto você já amortizou muda o resultado em reais.",
        },
      ],
    },
    {
      tipo: "documentos",
      h2: "O que ter em mãos.",
      itens: [
        "Contrato do FIES e saldo devedor atualizado",
        "Comprovante de vínculo do período trabalhado: contrato, portaria ou declaração",
        "Comprovação da localidade de atuação, quando a modalidade exigir",
        "Carteira de trabalho ou contracheques do período",
      ],
    },
  ],
  faq: [
    { p: "Trabalhei um ano e meio em UBS. Tenho direito?", r: "O tempo mínimo da modalidade é de um ano, então há o que discutir. O percentual acompanha os meses efetivamente comprovados." },
    { p: "Atuei na pandemia mas não em hospital público. Conta?", r: "A modalidade fala em atuação de profissional de saúde no período crítico. Onde isso aconteceu é parte da análise." },
    { p: "Já estou pagando as parcelas. Ainda dá?", r: "Sim. O abatimento incide sobre o saldo devedor, e estar adimplente não impede a discussão." },
    { p: "Consigo suspender o pagamento enquanto atuo?", r: "Em alguns casos é possível discutir extensão de carência. Depende da situação contratual." },
    { p: "Isso vale para dentista e enfermeiro?", r: "A modalidade da COVID-19 alcança profissionais da saúde de forma mais ampla. As demais têm recorte próprio." },
  ],
  cta: { titulo: "Manda o seu contrato e a gente confere.", enfase: "a gente confere", texto: "Análise sem custo, com resposta por escrito." },
};

export const processoEtico: PaginaServico = {
  slug: "/medico/processo-etico",
  titulo: "Processo ético no CRM",
  metaTitulo: "Processo ético no CRM: defesa do médico",
  metaDescricao:
    "Sindicância e processo ético-profissional no Conselho Regional de Medicina. Entenda as fases, os prazos e por que a defesa começa antes do que se imagina.",
  hero: {
    kicker: "Direito médico · Conselho",
    h1: "Você foi notificado de um processo ético no CRM?",
    enfase: "processo ético",
    sub: "A sindicância parece uma formalidade e não é. O que se diz nela acompanha todas as fases seguintes, inclusive um eventual recurso ao CFM.",
    urgencia: "O prazo de defesa começa a correr na notificação.",
    ctaTexto: "Falar com o advogado agora",
  },
  blocos: [
    {
      tipo: "texto",
      h2: "A fase que as pessoas subestimam.",
      paras: [
        "A sindicância é a apuração preliminar. Muitos médicos comparecem sozinhos, tratam como uma conversa e explicam o caso de boa-fé, sem assistência.",
        "O problema é que aquela versão fica nos autos. Se o processo avançar, a defesa técnica passa a trabalhar em cima do que já foi dito, e desfazer uma afirmação imprecisa é muito mais difícil do que não fazê-la.",
        "Defesa em processo ético começa na sindicância, não depois dela.",
      ],
    },
    {
      tipo: "bullets",
      h2: "O que costuma dar errado.",
      itens: [
        { titulo: "Falar sem ler os autos", texto: "Você precisa saber exatamente o que está sendo apurado antes de responder. Nem sempre é o que parece pela notificação." },
        { titulo: "Explicar conduta sem o prontuário", texto: "Memória de plantão não é fonte confiável, e divergência entre depoimento e prontuário é péssima." },
        { titulo: "Assumir responsabilidade por gentileza", texto: "Empatia com o paciente é uma coisa; reconhecer falha técnica em processo administrativo é outra." },
      ],
    },
    {
      tipo: "texto",
      h2: "O que uma sanção alcança.",
      paras: [
        "As penalidades previstas vão de advertência confidencial a cassação do exercício profissional. Mas o efeito prático raramente para na sanção formal: há reflexo em credenciamento junto a planos e hospitais, repercussão em eventual ação cível ou criminal paralela, e efeito sobre a reputação, que é o ativo mais difícil de reconstruir.",
      ],
    },
    {
      tipo: "passos",
      h2: "Como a defesa é conduzida.",
      itens: [
        { titulo: "Antes de responder qualquer coisa", texto: "Leitura integral da notificação e dos autos disponíveis, para entender exatamente o que está sendo apurado." },
        { titulo: "Estratégia antes da versão", texto: "Definição do que será dito e como, com o prontuário e a documentação técnica na mesa." },
        { titulo: "Acompanhamento em todas as fases", texto: "Sindicância, instrução, sustentação e, se necessário, recurso ao Conselho Federal." },
      ],
    },
    {
      tipo: "documentos",
      h2: "O que ter em mãos.",
      itens: [
        "A notificação recebida, com a data de recebimento",
        "Prontuário completo do paciente envolvido",
        "Termos de consentimento, quando houver",
        "Registros de comunicação com o paciente ou familiares",
        "Documentação da instituição, se o atendimento foi em serviço de terceiro",
      ],
    },
  ],
  faq: [
    { p: "Posso comparecer sozinho à sindicância?", r: "Pode. Mas o que você disser ali acompanha o resto do processo, e é a fase em que a assistência faz mais diferença." },
    { p: "Recebi a notificação ontem. É urgente?", r: "Sim. O prazo de defesa é curto e conta da notificação." },
    { p: "O processo ético afeta um processo judicial paralelo?", r: "Podem se influenciar. É um dos motivos para tratar as duas frentes de forma coordenada desde o início." },
    { p: "O processo é público?", r: "A tramitação corre em sigilo, mas os efeitos de uma sanção podem alcançar credenciamentos e vínculos." },
  ],
  cta: { titulo: "Prazo curto. Fale hoje.", enfase: "hoje" },
};

export const registroMarca: PaginaServico = {
  slug: "/medico/registro-de-marca",
  titulo: "Registro de marca para médicos",
  metaTitulo: "Registro de marca para médicos no INPI",
  metaDescricao:
    "Seu nome profissional é um ativo. Entenda por que registrar a marca no INPI, o que o registro protege e o risco de deixar para depois.",
  hero: {
    kicker: "Direito médico · Propriedade intelectual",
    h1: "Seu nome já é a sua marca. Ele está registrado?",
    enfase: "registrado",
    sub: "Quem construiu autoridade e presença digital construiu um ativo. Sem registro no INPI, esse ativo não tem dono formal.",
    ctaTexto: "Proteger a minha marca",
  },
  blocos: [
    {
      tipo: "bullets",
      h2: "O que o registro protege.",
      itens: [
        { titulo: "Identidade profissional", texto: "Impede que outro profissional use o seu nome para atrair pacientes." },
        { titulo: "Exclusividade", texto: "Se você construiu reconhecimento numa especialidade, o registro impede que terceiros se beneficiem dele." },
        { titulo: "Expansão", texto: "Com a marca registrada, dá para criar cursos, produtos, clínica ou franquia com segurança jurídica." },
        { titulo: "Segurança na disputa", texto: "Ter o registro facilita agir contra o uso indevido, sem precisar provar do zero que a marca é sua." },
      ],
    },
    {
      tipo: "callout",
      icone: "alert",
      titulo: "O risco não é só não ter.",
      paras: [
        "O cenário que preocupa não é o de um concorrente usando o seu nome. É o de um terceiro registrando primeiro. O sistema brasileiro dá peso à anterioridade do depósito, e quem registra antes ganha uma posição difícil de reverter.",
        "Quanto mais reconhecida a sua marca pessoal, mais ela vale para outra pessoa, e mais tarde fica para agir.",
      ],
    },
    {
      tipo: "passos",
      h2: "As etapas.",
      itens: [
        { titulo: "Busca de anterioridade", texto: "Verificação no INPI de marcas idênticas ou semelhantes na mesma classe. É o que evita depositar um pedido que já nasce indeferido." },
        { titulo: "Definição de classe", texto: "Enquadramento na classificação correta, serviços médicos, educacionais, produtos. Errar a classe é registrar para a coisa errada." },
        { titulo: "Depósito", texto: "Protocolo do pedido junto ao INPI." },
        { titulo: "Acompanhamento", texto: "Publicação, prazo de oposição, exame de mérito e eventuais exigências, até a concessão." },
      ],
    },
  ],
  faq: [
    { p: "Posso registrar meu próprio nome como marca?", r: "Nome civil pode ser registrado como marca, observados os requisitos legais. É o caminho usual de quem construiu marca pessoal." },
    { p: "Quanto tempo demora?", r: "O processo no INPI leva, em regra, alguns anos até a concessão. A proteção começa a contar do depósito." },
    { p: "E se alguém já registrou algo parecido?", r: "É o que a busca de anterioridade responde antes de qualquer gasto. Havendo conflito, existem caminhos, mudança de classe, ajuste de elemento, oposição." },
    { p: "Preciso ter CNPJ?", r: "Pessoa física pode ser titular de marca, com requisitos próprios. É parte da análise inicial." },
  ],
  cta: { titulo: "Uma busca antes de decidir.", enfase: "antes de decidir" },
};
