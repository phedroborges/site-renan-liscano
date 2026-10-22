export type Secao = { h2: string; paras: string[]; lista?: { t: string; d: string }[] };

export type Artigo = {
  slug: string;
  pergunta: string;
  /** Resposta direta, em negrito, nas duas primeiras linhas. É o trecho que um
   *  motor generativo tende a citar — precisa fazer sentido fora do contexto. */
  resposta: string;
  publico: "medico" | "endividado" | "consumidor";
  publicoRotulo: string;
  tema: string;
  leitura: number;
  data: string;
  baseLegal?: string;
  /** Reservado para a biblioteca de vídeos, hoje no backlog. */
  video: string | null;
  transcriptSource: string | null;
  secoes: Secao[];
  ressalva: { h2: string; paras: string[] };
  servico: { href: string; texto: string };
  relacionados: string[];
};

export const ARTIGOS: Artigo[] = [
  {
    slug: "fies-ubs-quanto-reduz",
    pergunta: "Trabalhei dois anos em UBS. Quanto reduzo do meu FIES?",
    resposta:
      "Vinte e quatro por cento. A regra é de 1% de abatimento do saldo devedor por mês trabalhado, então 24 meses somam 24%, sobre um saldo de R$ 600 mil, isso representa R$ 144 mil.",
    publico: "medico",
    publicoRotulo: "Médico",
    tema: "FIES",
    leitura: 6,
    data: "2026-09-01",
    baseLegal: "Lei 10.260/2001, art. 6º-B",
    video: null,
    transcriptSource: null,
    secoes: [
      {
        h2: "De onde vem esse 1%?",
        paras: [
          "O art. 6º-B da Lei 10.260/2001 prevê o abatimento do saldo devedor do FIES para profissionais da saúde que atuaram em determinadas frentes. A Estratégia de Saúde da Família é uma delas, desde que a atuação tenha ocorrido em município classificado como de área carente ou com dificuldade de retenção de médicos, conforme definição do Ministério da Saúde.",
          "O percentual acumula por mês efetivamente trabalhado, cumprido o período mínimo de um ano.",
        ],
      },
      {
        h2: "O que muda a conta?",
        paras: ["Três coisas, e são elas que derrubam a maior parte dos pedidos:"],
        lista: [
          { t: "A localidade", d: "Não basta ter trabalhado em UBS. A classificação do município é parte do enquadramento, e é o ponto que mais derruba pedido." },
          { t: "A comprovação do vínculo", d: "Contrato, portaria de nomeação, declaração do gestor, carteira de trabalho. Mês que não se comprova é mês que não entra." },
          { t: "O saldo de referência", d: "O abatimento incide sobre o saldo devedor, não sobre o valor originalmente financiado. Quanto você já amortizou muda bastante o resultado em reais." },
        ],
      },
      {
        h2: "E se eu me enquadro em mais de uma modalidade?",
        paras: [
          "Acontece com frequência: o médico atuou em UBS e também esteve na linha de frente da COVID-19. São modalidades distintas, com requisitos próprios, e a forma de somar períodos exige análise, não é uma adição automática.",
        ],
      },
    ],
    ressalva: {
      h2: "Quando isso não se aplica",
      paras: [
        "Se o município onde você atuou não está classificado como área carente pelo Ministério da Saúde, a modalidade da Estratégia de Saúde da Família não alcança o seu caso, mesmo que o trabalho tenha sido em UBS e mesmo que tenham sido vários anos.",
        "E se o vínculo não puder ser comprovado documentalmente, os meses não entram na conta, ainda que tenham existido.",
      ],
    },
    servico: { href: "/medico/fies", texto: "Entender o abatimento do FIES" },
    relacionados: ["termo-renuncia-auxilio-moradia", "acordo-banco-antes-de-processar"],
  },
  {
    slug: "termo-renuncia-auxilio-moradia",
    pergunta: "Assinei um termo abrindo mão do auxílio moradia. Perdi o direito?",
    resposta:
      "Não necessariamente. Um termo assinado no início do programa não afasta, por si só, um direito previsto em lei. O documento entra na discussão, mas como um dos pontos dela, não como o fim.",
    publico: "medico",
    publicoRotulo: "Médico",
    tema: "Residência",
    leitura: 4,
    data: "2026-09-03",
    baseLegal: "Lei 6.932/1981, art. 4º, §5º",
    video: null,
    transcriptSource: null,
    secoes: [
      {
        h2: "Por que a assinatura não encerra o assunto?",
        paras: [
          "O art. 4º, §5º da Lei 6.932/1981 estabelece obrigações da instituição responsável pelo programa de residência: local de repouso entre plantões, alimentação e moradia.",
          "Quando um direito está previsto em lei como obrigação da instituição, a renúncia antecipada tem eficácia limitada, especialmente num contexto em que quem assina é a parte mais frágil da relação e está entrando no programa.",
          "Vale lembrar o cenário real: o termo costuma ser apresentado junto com a papelada de matrícula, sem explicação, para alguém que acabou de conquistar uma vaga e não vai questionar nada naquele momento.",
        ],
      },
      {
        h2: "Alojamento de plantão conta como moradia?",
        paras: [
          "Não, e essa é a segunda alegação mais comum das instituições.",
          "O quarto que o hospital oferece para o residente descansar durante o plantão cumpre a obrigação de local de repouso. É um inciso. Moradia é outro. Um não substitui o outro, porque a lei previu os dois separadamente.",
        ],
      },
      {
        h2: "O que importa mais do que o termo?",
        paras: [
          "O prazo. O direito prescreve, e quanto mais tempo passou desde o fim do programa, menor a margem.",
          "Se você concluiu a residência há alguns anos, essa é a primeira coisa a verificar, antes de discutir o termo, antes de qualquer outra coisa.",
        ],
      },
    ],
    ressalva: {
      h2: "Quando isso não se aplica",
      paras: [
        "Se o prazo prescricional já se esgotou, a discussão sobre o termo perde utilidade, o obstáculo passa a ser outro, e ele é anterior.",
        "O marco da prescrição varia conforme o caso, e é a primeira coisa a ser verificada.",
      ],
    },
    servico: { href: "/medico/auxilio-moradia", texto: "Entender o auxílio moradia" },
    relacionados: ["fies-ubs-quanto-reduz", "sindicancia-crm-sozinho"],
  },
  {
    slug: "sindicancia-crm-sozinho",
    pergunta: "Fui chamado para depor numa sindicância do CRM. Posso ir sozinho?",
    resposta:
      "Pode. Mas o que você disser ali acompanha todo o resto do processo, e é justamente por isso que a sindicância é a fase em que a assistência faz mais diferença.",
    publico: "medico",
    publicoRotulo: "Médico",
    tema: "CRM",
    leitura: 5,
    data: "2026-09-05",
    video: null,
    transcriptSource: null,
    secoes: [
      {
        h2: "Por que a fase preliminar pesa tanto?",
        paras: [
          "A sindicância é apuração preliminar. Ela parece informal, e é exatamente essa aparência que cria o problema.",
          "O médico é chamado, entende que vai explicar o que houve e fala de boa-fé, com a naturalidade de quem não tem nada a esconder, porque geralmente não tem mesmo.",
          "Só que aquela versão fica nos autos. Se o processo avançar para a fase de instrução, a defesa técnica vai trabalhar em cima do que já foi dito. E desfazer uma afirmação imprecisa, feita sem contexto do que estava sendo apurado, é muito mais difícil do que simplesmente não fazê-la.",
        ],
      },
      {
        h2: "O que costuma dar errado?",
        paras: [],
        lista: [
          { t: "Falar sem ler os autos", d: "Você precisa saber exatamente o que está sendo apurado antes de responder. Nem sempre é o que parece pela notificação." },
          { t: "Explicar conduta técnica sem o prontuário", d: "Memória de plantão não é fonte confiável, e divergência entre depoimento e prontuário é péssima." },
          { t: "Assumir responsabilidade por gentileza", d: "Empatia com o paciente é uma coisa; reconhecer falha técnica em processo administrativo é outra." },
        ],
      },
      {
        h2: "O que fazer ao receber a notificação?",
        paras: [
          "Anote a data do recebimento, o prazo conta dali. Peça vista dos autos. Reúna o prontuário completo, termos de consentimento e qualquer registro de comunicação com o paciente ou familiares.",
          "E resolva isso rápido: o prazo de defesa é curto.",
        ],
      },
    ],
    ressalva: {
      h2: "O que este texto não resolve",
      paras: [
        "Cada processo ético tem um objeto próprio, e a estratégia depende inteiramente do que está sendo apurado. Não existe orientação genérica que sirva para todos.",
        "Este texto explica por que a fase importa, não substitui a leitura dos autos do seu caso.",
      ],
    },
    servico: { href: "/medico/processo-etico", texto: "Entender processo ético no CRM" },
    relacionados: ["termo-renuncia-auxilio-moradia", "fies-ubs-quanto-reduz"],
  },
  {
    slug: "acordo-banco-antes-de-processar",
    pergunta: "O banco me ofereceu um acordo. Aceito ou procuro um advogado antes?",
    resposta:
      "Leia antes de assinar. Um acordo assinado costuma consolidar exatamente os valores que seriam discutíveis, e, uma vez firmado, reabrir a discussão fica muito mais difícil.",
    publico: "endividado",
    publicoRotulo: "Dívidas",
    tema: "Superendividamento",
    leitura: 5,
    data: "2026-09-08",
    baseLegal: "Lei 14.181/2021",
    video: null,
    transcriptSource: null,
    secoes: [
      {
        h2: "O que o acordo normalmente faz?",
        paras: [
          "Renegociação bancária costuma trazer uma cláusula de quitação ampla: você concorda que nada mais será discutido sobre aquele contrato. Se havia cobrança indevida, tarifa embutida ou seguro não contratado no histórico, tudo isso é encerrado ali.",
          "Você troca uma parcela menor hoje por abrir mão de uma discussão que talvez valesse mais.",
        ],
      },
      {
        h2: "Por que negociar um a um é a pior posição?",
        paras: [
          "Quem tem várias dívidas negocia com cada credor separadamente, sem visão do conjunto e sem saber quanto sobra para os outros. Cada banco propõe o que é bom para ele.",
          "A Lei 14.181/2021 existe justamente para inverter isso: ela permite reunir todos os credores numa audiência única, com um plano de pagamento que parte da sua renda real e preserva o mínimo existencial: moradia, alimentação, saúde.",
          "A conta deixa de ser quanto o banco quer e passa a ser quanto de fato cabe.",
        ],
      },
      {
        h2: "O que verificar antes de assinar?",
        paras: [],
        lista: [
          { t: "O valor total, não a parcela", d: "Parcela menor com prazo muito maior pode significar pagar bem mais no fim." },
          { t: "A cláusula de quitação", d: "O que exatamente você está encerrando ao assinar?" },
          { t: "Se você se enquadra na Lei 14.181", d: "Se as parcelas já comprometem o que você precisa para viver, existe outro caminho, e ele não passa por aceitar a primeira proposta." },
        ],
      },
    ],
    ressalva: {
      h2: "Quando o acordo é a melhor saída",
      paras: [
        "Nem todo acordo é ruim. Proposta com desconto real sobre o principal, em contrato sem vício aparente e para quem tem capacidade de pagamento, costuma ser melhor do que anos de processo.",
        "O ponto não é recusar, é decidir sabendo o que está sendo trocado.",
      ],
    },
    servico: { href: "/dividas/superendividamento", texto: "Entender superendividamento" },
    relacionados: ["negativado-mesmo-depois-de-pagar", "fies-ubs-quanto-reduz"],
  },
  {
    slug: "negativado-mesmo-depois-de-pagar",
    pergunta: "Paguei a dívida e meu nome continua negativado. O que fazer?",
    resposta:
      "Guarde a prova e conte os dias. Depois da quitação, a baixa da inscrição deve ocorrer em prazo curto, passado esse prazo, a manutenção indevida do seu nome no cadastro vira uma discussão própria.",
    publico: "endividado",
    publicoRotulo: "Dívidas",
    tema: "Negativação",
    leitura: 4,
    data: "2026-09-10",
    video: null,
    transcriptSource: null,
    secoes: [
      {
        h2: "Quais são os três primeiros passos?",
        paras: [],
        lista: [
          { t: "Puxe o seu extrato", d: "Consulte o que consta em seu nome nos órgãos de cadastro. É gratuito, e é isso que comprova que a inscrição continua lá depois do pagamento." },
          { t: "Reúna a prova do pagamento", d: "Comprovante, data, protocolo do acordo. A data é o elemento central: é ela que marca o início do prazo para a baixa." },
          { t: "Registre a tentativa de resolver", d: "Protocolo de atendimento, e-mail, print da conversa. Demonstrar que você comunicou e não foi atendido fortalece o caso." },
        ],
      },
      {
        h2: "O que dá para pedir?",
        paras: [
          "Conforme o caso: a retirada da inscrição, a declaração de inexistência do débito e a reparação por dano moral.",
        ],
      },
      {
        h2: "O que não fazer?",
        paras: [
          "Não aceite acordo por telefone sobre dívida que você entende indevida. Acordo verbal pode ser lido como reconhecimento do débito.",
        ],
      },
    ],
    ressalva: {
      h2: "O ponto honesto sobre o dano moral",
      paras: [
        "O entendimento consolidado é o de que quem já possui outra negativação legítima e preexistente, em regra, não tem direito à indenização por dano moral, apenas à retirada da inscrição indevida. A lógica é a de que o abalo de crédito já existia por outro motivo.",
        "Por isso a primeira coisa a verificar não é o valor da causa, é o seu extrato completo. Se houver outra negativação legítima em aberto, o caso muda de figura, e você merece saber disso antes de criar expectativa.",
      ],
    },
    servico: { href: "/dividas/nome-negativado", texto: "Entender nome negativado" },
    relacionados: ["acordo-banco-antes-de-processar", "plano-negou-por-telefone"],
  },
  {
    slug: "plano-negou-por-telefone",
    pergunta: "O plano de saúde negou por telefone. Isso vale?",
    resposta:
      "Exija por escrito. A operadora tem o dever de informar a recusa de forma clara e fundamentada, negativa dada por telefone, sem protocolo e sem motivo escrito, é o cenário mais comum e o mais frágil para a operadora.",
    publico: "consumidor",
    publicoRotulo: "Consumidor",
    tema: "Plano de saúde",
    leitura: 4,
    data: "2026-09-12",
    video: null,
    transcriptSource: null,
    secoes: [
      {
        h2: "Por que o documento muda tudo?",
        paras: [
          "Sem negativa formal, a discussão vira palavra contra palavra. Com ela, você tem duas coisas: a prova de que houve recusa e, principalmente, o fundamento que a operadora escolheu usar.",
          "Esse segundo ponto é o mais importante. A partir do momento em que a operadora se compromete com um motivo, não está no rol, é experimental, está em carência, ela fica presa a ele. E cada um desses fundamentos tem uma discussão própria, já bastante desenvolvida.",
          "Negativa genérica permite que a operadora mude de argumento depois. Negativa fundamentada, não.",
        ],
      },
      {
        h2: "Como pedir?",
        paras: [
          "Ligue, peça o número do protocolo do atendimento e solicite a recusa por escrito com o fundamento. Registre a data e a hora. Se houver canal por aplicativo ou e-mail, repita o pedido por lá, texto escrito é melhor que áudio.",
        ],
      },
      {
        h2: "O que reunir enquanto isso?",
        paras: [
          "O relatório do médico assistente, com CID, indicação e justificativa técnica. É a peça mais importante do caso, porque quem define a conduta terapêutica é o médico assistente, o plano define cobertura contratual. Essa distinção é o centro de quase toda discussão.",
          "Junte também o contrato, a carteirinha, os comprovantes de pagamento das mensalidades e os exames que fundamentam o pedido.",
        ],
      },
      {
        h2: "E se houver urgência?",
        paras: [
          "Em situação de risco à saúde, existe o caminho da tutela de urgência, decisão liminar que pode determinar a cobertura em prazo muito curto.",
          "Para isso, três coisas precisam estar prontas: relatório médico fundamentado, negativa por escrito e comprovação da urgência. Nesse cenário, não espere o documento chegar para procurar orientação: faça as duas coisas em paralelo.",
        ],
      },
    ],
    ressalva: {
      h2: "Quando a negativa se sustenta",
      paras: [
        "Nem toda recusa é indevida. Procedimento fora da cobertura contratual, carência ainda em curso sem caráter de urgência, ou tratamento sem indicação médica fundamentada são situações em que a operadora tem razão.",
        "Pedir a negativa por escrito serve exatamente para saber em qual dos dois cenários você está.",
      ],
    },
    servico: { href: "/consumidor/plano-de-saude", texto: "Entender plano de saúde" },
    relacionados: ["negativado-mesmo-depois-de-pagar", "sindicancia-crm-sozinho"],
  },
];
