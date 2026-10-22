import type { PaginaServico } from "@/lib/tipos";
import { CHAMADA_REUNIAO, NOTA_DOCUMENTOS, TITULO_COMO_ATUAMOS } from "@/lib/site";

export const passivoEmpresarial: PaginaServico = {
  "slug": "/dividas/passivo-empresarial",
  "titulo": "Passivo bancário empresarial",
  "metaTitulo": "Passivo bancário empresarial",
  "metaDescricao": "Empréstimos, capital de giro, garantias e cobranças que pressionam o caixa. Organizamos o passivo bancário da empresa para avaliar negociação, revisão e defesa.",
  "tema": "popular",
  "hero": {
    "kicker": "Dívidas · Passivo bancário empresarial",
    "h1": "A dívida da empresa precisa ser olhada por inteiro.",
    "sub": "Empréstimos, capital de giro, garantias e cobranças que pressionam o caixa. Organizamos o passivo bancário da empresa para avaliar negociação, revisão e defesa.",
    "ctaTexto": "Falar sobre passivo bancário empresarial"
  },
  "blocos": [
    {
      "tipo": "bullets",
      "h2": TITULO_COMO_ATUAMOS,
      "itens": [
        {
          "titulo": "Mapeamento do passivo",
          "texto": "Levantamento de contratos, credores, saldos, garantias e processos relacionados à empresa."
        },
        {
          "titulo": "Caixa e patrimônio",
          "texto": "Análise dos compromissos, dos bens vinculados e da participação de sócios e garantidores em cada contrato."
        },
        {
          "titulo": "Plano de atuação",
          "texto": "Definição das prioridades de negociação e das medidas de defesa conforme os documentos e o estágio das cobranças."
        }
      ]
    },
    {
      "tipo": "documentos",
      "h2": "O que reunir para a primeira análise.",
      "itens": [
        "Contratos bancários e aditivos",
        "Extratos atualizados das dívidas e propostas recebidas",
        "Documentos da empresa e relação das garantias",
        "Informações de caixa e processos em andamento"
      ],
      "nota": NOTA_DOCUMENTOS
    }
  ],
  "faq": [
    {
      "p": "Serve para empresa de qualquer porte?",
      "r": "A análise começa pela estrutura da dívida e pelas necessidades da empresa. O enquadramento e as medidas cabíveis dependem do caso."
    }
  ],
  "cta": {
    "titulo": "Entenda os caminhos para o seu caso."
  }
};

export const defesaExecucao: PaginaServico = {
  "slug": "/dividas/defesa-em-execucao",
  "titulo": "Defesa em execução bancária",
  "metaTitulo": "Defesa em execução bancária",
  "metaDescricao": "A execução exige atenção aos documentos e aos prazos. Avaliamos a cobrança, os cálculos e as garantias para definir a defesa e as possibilidades de acordo.",
  "tema": "popular",
  "hero": {
    "kicker": "Dívidas · Defesa em execução bancária",
    "h1": "O banco está cobrando a dívida na Justiça?",
    "sub": "A execução exige atenção aos documentos e aos prazos. Avaliamos a cobrança, os cálculos e as garantias para definir a defesa e as possibilidades de acordo.",
    "ctaTexto": "Falar sobre defesa em execução bancária"
  },
  "blocos": [
    {
      "tipo": "bullets",
      "h2": TITULO_COMO_ATUAMOS,
      "itens": [
        {
          "titulo": "Leitura do processo",
          "texto": "Análise da citação, do contrato que fundamenta a cobrança, dos cálculos e das decisões já proferidas."
        },
        {
          "titulo": "Cobrança e garantias",
          "texto": "Exame dos valores exigidos e das medidas que possam atingir bens, contas ou garantidores."
        },
        {
          "titulo": "Defesa e negociação",
          "texto": "Atuação no processo e nas tratativas de acordo conforme os fundamentos identificados, sem promessa de suspensão automática da cobrança."
        }
      ]
    },
    {
      "tipo": "documentos",
      "h2": "O que reunir para a primeira análise.",
      "itens": [
        "Citação, intimações e número do processo",
        "Contrato e documentos das garantias",
        "Comprovantes de pagamento e propostas de acordo",
        "Documentos de eventuais bloqueios ou penhoras"
      ],
      "nota": NOTA_DOCUMENTOS
    }
  ],
  "faq": [
    {
      "p": "Recebi uma citação. Posso esperar a negociação?",
      "r": "Envie a documentação para análise o quanto antes. A negociação não deve ser tratada como substituta da atenção aos prazos do processo."
    }
  ],
  "cta": {
    "titulo": "Entenda os caminhos para o seu caso."
  }
};

export const buscaApreensao: PaginaServico = {
  "slug": "/dividas/busca-e-apreensao",
  "titulo": "Defesa em busca e apreensão",
  "metaTitulo": "Defesa em busca e apreensão",
  "metaDescricao": "Examinamos o financiamento, as notificações e o processo para identificar os caminhos de defesa e negociação. O estágio do caso orienta as primeiras medidas.",
  "tema": "popular",
  "hero": {
    "kicker": "Dívidas · Defesa em busca e apreensão",
    "h1": "Seu veículo está em uma ação de busca e apreensão?",
    "sub": "Examinamos o financiamento, as notificações e o processo para identificar os caminhos de defesa e negociação. O estágio do caso orienta as primeiras medidas.",
    "ctaTexto": "Falar sobre defesa em busca e apreensão"
  },
  "blocos": [
    {
      "tipo": "bullets",
      "h2": TITULO_COMO_ATUAMOS,
      "itens": [
        {
          "titulo": "Contrato e pagamentos",
          "texto": "Conferência das parcelas, do histórico de pagamento e dos encargos indicados pelo credor."
        },
        {
          "titulo": "Notificações e processo",
          "texto": "Leitura dos documentos enviados pelo banco e das decisões, inclusive se o veículo já foi apreendido."
        },
        {
          "titulo": "Estratégia do caso",
          "texto": "Avaliação das medidas disponíveis e das propostas de regularização, considerando prazos, custos e documentação."
        }
      ]
    },
    {
      "tipo": "documentos",
      "h2": "O que reunir para a primeira análise.",
      "itens": [
        "Contrato de financiamento do veículo",
        "Notificações e documentos do processo",
        "Comprovantes das parcelas pagas",
        "Documento do veículo e termo de apreensão, se houver"
      ],
      "nota": NOTA_DOCUMENTOS
    }
  ],
  "faq": [
    {
      "p": "O veículo já foi apreendido. Ainda posso procurar orientação?",
      "r": "Sim. Envie os documentos e informe quando ocorreu a apreensão para que o estágio do processo e os prazos sejam examinados."
    }
  ],
  "cta": {
    "titulo": "Entenda os caminhos para o seu caso."
  }
};

export const negociacaoDividas: PaginaServico = {
  "slug": "/dividas/negociacao-de-dividas",
  "titulo": "Negociação de dívidas",
  "metaTitulo": "Negociação de dívidas",
  "metaDescricao": "Intermediamos a negociação com credores para pessoas e empresas. A proposta é analisada junto com o saldo, os encargos, as garantias e a capacidade de pagamento.",
  "tema": "popular",
  "hero": {
    "kicker": "Dívidas · Negociação de dívidas",
    "h1": "Um acordo precisa caber na sua realidade.",
    "sub": "Intermediamos a negociação com credores para pessoas e empresas. A proposta é analisada junto com o saldo, os encargos, as garantias e a capacidade de pagamento.",
    "ctaTexto": "Falar sobre negociação de dívidas"
  },
  "blocos": [
    {
      "tipo": "bullets",
      "h2": TITULO_COMO_ATUAMOS,
      "itens": [
        {
          "titulo": "Conferência do saldo",
          "texto": "Levantamento do valor cobrado, dos pagamentos realizados e das condições do contrato."
        },
        {
          "titulo": "Comparação de propostas",
          "texto": "Avaliação de entrada, parcelas, encargos e condições para quitação ou renegociação."
        },
        {
          "titulo": "Formalização do acordo",
          "texto": "Leitura do instrumento e acompanhamento das condições negociadas. Descontos e prazos dependem do caso e da aceitação do credor."
        }
      ]
    },
    {
      "tipo": "documentos",
      "h2": "O que reunir para a primeira análise.",
      "itens": [
        "Contratos e extratos das dívidas",
        "Propostas de renegociação recebidas",
        "Comprovantes de pagamentos anteriores",
        "Informações de renda ou fluxo de caixa"
      ],
      "nota": NOTA_DOCUMENTOS
    }
  ],
  "faq": [
    {
      "p": "Toda negociação precisa de processo?",
      "r": "Não necessariamente. A negociação pode ocorrer diretamente com o credor. A necessidade de medida judicial depende da situação e dos fundamentos encontrados."
    }
  ],
  "cta": {
    "titulo": "Entenda os caminhos para o seu caso."
  }
};

export const tributario: PaginaServico = {
  "slug": "/tributario",
  "titulo": "Direito tributário e dívida ativa",
  "metaTitulo": "Direito tributário e dívida ativa: defesa em execução fiscal",
  "metaDescricao": `Dívida ativa, execução fiscal, penhora e bloqueio de contas. Análise da cobrança, negociação e defesa para pessoas e empresas. ${CHAMADA_REUNIAO}`,
  "tema": "padrao",
  "hero": {
    "kicker": "Direito tributário · Dívida ativa",
    "h1": "A dívida foi para execução fiscal. Agora o risco é o seu patrimônio.",
    "enfase": "Agora o risco é o seu patrimônio",
    "sub": "Inscrição em dívida ativa, penhora, bloqueio de conta e certidão negada travando a empresa. Conferimos a origem do débito, o estágio da cobrança e o que ainda dá para discutir. Apresentamos a análise em uma reunião online sem custo antes de falarmos de honorários.",
    "urgencia": "Executado tem prazo para se defender, e ele corre da citação.",
    "ctaTexto": "Mandar minha cobrança no WhatsApp"
  },
  "heroImagem": {
    "imagem": "/img/tributario-hero-wide.webp",
    "alt": "Uma pilha alta de documentos fiscais ligada por um circuito a um patrimônio protegido por um escudo"
  },
  "blocos": [
    {
      "tipo": "texto",
      "h2": "O problema quase nunca aparece no dia em que nasce.",
      "destaque": "Entre o débito e a execução costuma passar tempo demais.",
      "paras": [
        "Um tributo em aberto raramente incomoda de imediato. Ele é inscrito em dívida ativa, vira uma certidão que ninguém leu, e segue corrigido. O incômodo chega depois, junto: a certidão negativa que o banco pediu não sai, o parcelamento não é aprovado, a licitação trava, a conta amanhece bloqueada.",
        "Quando isso acontece, a reação natural é aceitar qualquer parcelamento para fazer a dor parar. Só que parcelar é confessar o débito. Se havia prescrição, erro na inscrição, cobrança em duplicidade ou valor calculado errado, essa discussão termina ali, assinada por você.",
        "Por isso a ordem importa: primeiro entender o que está sendo cobrado e em que estágio, depois escolher o caminho. Negociar continua sendo, muitas vezes, a melhor saída. A diferença é negociar sabendo o que se abre mão."
      ]
    },
    {
      "tipo": "bullets",
      "h2": "O que a análise procura.",
      "intro": "Nem todo débito é discutível, e a maior parte não é. O trabalho é separar o que é.",
      "itens": [
        {
          "titulo": "Prescrição e decadência",
          "texto": "Existe prazo para o fisco constituir o crédito e prazo para cobrar em juízo. Débito antigo que ficou parado merece essa conferência antes de qualquer confissão."
        },
        {
          "titulo": "Origem e cálculo do débito",
          "texto": "De onde veio a inscrição, se o valor bate com a apuração e se multa e juros foram aplicados como a legislação prevê."
        },
        {
          "titulo": "Cobrança duplicada ou já paga",
          "texto": "Pagamento que não foi baixado, parcelamento antigo não considerado, o mesmo fato gerador cobrado duas vezes. Aparece mais do que se imagina."
        },
        {
          "titulo": "Redirecionamento para o sócio",
          "texto": "A execução é da empresa, mas pode ser redirecionada à pessoa física. Os requisitos para isso são específicos e nem sempre estão presentes."
        }
      ]
    },
    {
      "tipo": "callout",
      "icone": "scale",
      "titulo": "Às vezes a resposta é que o débito é devido mesmo.",
      "paras": [
        "Quando a conferência não encontra fundamento, explicamos isso na reunião online, com o motivo. Não vem proposta de ação anexada, e a análise continua sem custo.",
        "Nesse cenário o trabalho vira outro: encontrar a modalidade de parcelamento ou transação mais vantajosa entre as disponíveis, e evitar que a cobrança alcance bens que não precisaria alcançar."
      ]
    },
    {
      "tipo": "bullets",
      "h2": TITULO_COMO_ATUAMOS,
      "itens": [
        {
          "titulo": "Dívida ativa e revisão da cobrança",
          "texto": "Conferência das inscrições, da origem dos débitos, dos pagamentos e dos elementos que possam justificar a revisão."
        },
        {
          "titulo": "Defesa em execução fiscal",
          "texto": "Análise do processo, das garantias e de possíveis fundamentos de defesa, inclusive questões de prescrição quando aplicáveis."
        },
        {
          "titulo": "Negociação e regularização",
          "texto": "Avaliação de parcelamentos e transações disponíveis perante o órgão responsável. As condições variam conforme a dívida e a modalidade."
        }
      ]
    },
    {
      "tipo": "documentos",
      "h2": "O que reunir para a primeira análise.",
      "itens": [
        "Inscrições e certidões de dívida ativa",
        "Extratos fiscais e notificações de cobrança",
        "Número do processo e intimações, se houver",
        "Comprovantes de pagamento, parcelamentos e documentos do contribuinte"
      ],
      "nota": NOTA_DOCUMENTOS
    }
  ],
  "faq": [
    {
      "p": "É possível negociar qualquer dívida tributária?",
      "r": "É necessário identificar o ente responsável, o estágio da cobrança e as modalidades disponíveis. A análise verifica as condições e os requisitos aplicáveis ao débito."
    },
    {
      "p": "Parcelar agora atrapalha discutir depois?",
      "r": "Pode atrapalhar. A adesão a parcelamento em regra envolve confissão do débito, o que dificulta discutir depois aquilo que se confessou. Por isso a conferência vem antes, e ela é rápida."
    },
    {
      "p": "Bloquearam a conta da empresa. Dá para reverter?",
      "r": "Depende do fundamento do bloqueio e do estágio do processo. Existem pedidos próprios para liberar valores essenciais à atividade, e o cabimento é avaliado caso a caso, com urgência."
    },
    {
      "p": "A execução é da empresa. Meus bens pessoais correm risco?",
      "r": "A execução nasce contra a empresa, mas pode ser redirecionada ao sócio quando presentes requisitos específicos. Verificar se eles realmente estão presentes é parte da defesa."
    },
    {
      "p": "Preciso de certidão negativa com urgência. Isso ajuda?",
      "r": "É um dos objetivos possíveis. Conforme o caso, a regularização ou a garantia do débito permite obter certidão positiva com efeito de negativa, que costuma atender à mesma finalidade."
    },
    {
      "p": "Vocês cobram para analisar?",
      "r": "Não. A análise e a reunião online são sem custo, inclusive quando a conclusão é que não há o que discutir."
    }
  ],
  "cta": {
    "titulo": "Antes de assinar qualquer parcelamento, saiba o que está assinando.",
    "enfase": "saiba o que está assinando",
    "texto": "Mande a certidão ou a notificação. Apresentamos a análise em uma reunião online, previamente combinada, sem custo."
  },
  "disclaimer": true
};

export const restricaoInterna: PaginaServico = {
  "slug": "/dividas/restricao-interna",
  "titulo": "Restrição interna bancária",
  "metaTitulo": "Restrição interna bancária",
  "metaDescricao": "Analisamos os registros, as respostas do banco e os comprovantes de quitação para entender o que está afetando a relação com a instituição.",
  "tema": "popular",
  "hero": {
    "kicker": "Dívidas · Restrição interna bancária",
    "h1": "Quitou a dívida, mas continua enfrentando restrições?",
    "sub": "Analisamos os registros, as respostas do banco e os comprovantes de quitação para entender o que está afetando a relação com a instituição.",
    "ctaTexto": "Falar sobre restrição interna bancária"
  },
  "blocos": [
    {
      "tipo": "bullets",
      "h2": TITULO_COMO_ATUAMOS,
      "itens": [
        {
          "titulo": "Identificação do registro",
          "texto": "Separação entre negativação, informações do relatório de crédito e critérios internos do banco."
        },
        {
          "titulo": "Conferência dos dados",
          "texto": "Comparação das informações registradas com os contratos, pagamentos e comunicações da instituição."
        },
        {
          "titulo": "Pedido de esclarecimento ou correção",
          "texto": "Definição da atuação conforme as divergências encontradas. Corrigir um dado não equivale a garantir novo crédito."
        }
      ]
    },
    {
      "tipo": "documentos",
      "h2": "O que reunir para a primeira análise.",
      "itens": [
        "Comprovantes de quitação e acordos",
        "Relatórios de crédito disponíveis",
        "Protocolos e respostas do banco",
        "Contratos relacionados ao registro"
      ],
      "nota": NOTA_DOCUMENTOS
    }
  ],
  "faq": [
    {
      "p": "A quitação garante que o banco volte a emprestar?",
      "r": "Não há garantia de concessão de crédito. A análise busca esclarecer os registros e identificar eventual informação incorreta ou cobrança indevida."
    }
  ],
  "cta": {
    "titulo": "Entenda os caminhos para o seu caso."
  }
};

export const planejamentoPatrimonial: PaginaServico = {
  "slug": "/dividas/planejamento-patrimonial",
  "titulo": "Planejamento patrimonial e holdings",
  "metaTitulo": "Planejamento patrimonial e holdings",
  "metaDescricao": "Avaliamos a estrutura patrimonial de famílias e empresas, a organização de bens e a constituição de holdings quando fizer sentido para os objetivos do caso.",
  "tema": "popular",
  "hero": {
    "kicker": "Dívidas · Planejamento patrimonial e holdings",
    "h1": "Seu patrimônio precisa de uma organização pensada para o futuro.",
    "sub": "Avaliamos a estrutura patrimonial de famílias e empresas, a organização de bens e a constituição de holdings quando fizer sentido para os objetivos do caso.",
    "ctaTexto": "Falar sobre planejamento patrimonial e holdings"
  },
  "blocos": [
    {
      "tipo": "bullets",
      "h2": TITULO_COMO_ATUAMOS,
      "itens": [
        {
          "titulo": "Patrimônio e objetivos",
          "texto": "Levantamento dos bens, das participações societárias, das obrigações e dos objetivos de organização e sucessão."
        },
        {
          "titulo": "Análise da estrutura",
          "texto": "Comparação das alternativas, dos custos e dos efeitos societários e tributários antes de propor mudanças."
        },
        {
          "titulo": "Implementação e acompanhamento",
          "texto": "Preparação dos instrumentos necessários à estrutura escolhida e alinhamento com os profissionais envolvidos na sua execução."
        }
      ]
    },
    {
      "tipo": "documentos",
      "h2": "O que reunir para a primeira análise.",
      "itens": [
        "Relação de imóveis e outros bens",
        "Documentos de empresas e participações societárias",
        "Informações sobre obrigações e garantias existentes",
        "Objetivos de organização patrimonial e sucessória"
      ],
      "nota": NOTA_DOCUMENTOS
    }
  ],
  "faq": [
    {
      "p": "Uma holding serve para qualquer família ou empresa?",
      "r": "Não. A escolha depende do patrimônio, dos custos e dos objetivos. Não é uma garantia de economia tributária nem um meio de afastar obrigações existentes."
    }
  ],
  "cta": {
    "titulo": "Entenda os caminhos para o seu caso."
  }
};
