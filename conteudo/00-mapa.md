---
titulo: Mapa de conteúdo
versao: 0.4
data: 2026-09-09
---

# Estrutura do site

Quatro frentes de atuação, com páginas próprias para os serviços. Esta organização
substitui a estrutura anterior de serviços reunidos apenas em seções, conforme a
solicitação do projeto em 09/09/2026.

| Página | Rota | Conteúdo |
|---|---|---|
| Home | `/` | Apresentação, quatro áreas, resultados simulados, atendimento e atalhos |
| Bancário e empresarial | `/dividas` | Catálogo e resumo dos serviços para pessoas e empresas |
| Direito tributário | `/tributario` | Débitos fiscais, dívida ativa, negociação e defesa em execução fiscal |
| Direito médico | `/medico` | Residência, FIES, defesa no CRM e registro de marca |
| Direito do consumidor | `/consumidor` | Plano de saúde, transporte aéreo e acesso à negativação indevida |
| Blog | `/blog` | Índice dos artigos, com uma página por artigo |
| Sobre | `/sobre` | História, princípios e apresentação do escritório |
| Contato | `/contato` | Triagem, canais, privacidade e aviso legal |

## Páginas dos serviços

O catálogo em `lib/servicos.ts` alimenta as páginas de área, o rodapé, as rotas
individuais e o sitemap. O modelo `app/[area]/[servico]/page.tsx` gera cada serviço
com título, descrição, endereço canônico, conteúdo, documentos, FAQ e contato
contextualizado pelo WhatsApp. Os dados ficam em `lib/paginas/*.ts`.

- `/consumidor/voo-e-overbooking`
- `/consumidor/plano-de-saude`
- `/dividas/registrato`
- `/dividas/cobranca-e-recuperacao-de-creditos`
- `/medico/auxilio-moradia`
- `/medico/fies`
- `/medico/processo-etico`
- `/medico/registro-de-marca`
- `/dividas/superendividamento`
- `/dividas/revisional`
- `/dividas/nome-negativado`
- `/dividas/passivo-empresarial`
- `/dividas/defesa-em-execucao`
- `/dividas/busca-e-apreensao`
- `/dividas/negociacao-de-dividas`
- `/dividas/restricao-interna`
- `/dividas/planejamento-patrimonial`

## Cobertura da reunião de 31/08/2026

- 00:04:02–00:11:29: passivo bancário e empresarial, defesa do executado, busca e
  apreensão, tributário, dívida ativa, análise de prescrição, patrimônio/holding,
  cobrança, FIES, auxílio moradia e defesa no CRM.
- 00:32:02: negociação/revisão bancária, Registrato (transcrito como “registrado”),
  restrição interna, negativação indevida e revisão do financiamento de veículo.
- Mantidos os serviços já presentes: superendividamento, registro de marca,
  planos de saúde e transporte aéreo.
- A referência a questões criminais em 00:31:06 é um exemplo de busca para o blog,
  não uma declaração de atuação do escritório.

Referência informativa do texto de Registrato/SCR:
https://www.bcb.gov.br/meubc/relatorioemprestimofinanciamento

## Navegação e compatibilidade

`lib/navegacao.ts` define as oito páginas principais. Os links da home, artigos,
triagem e rodapé apontam para as rotas individuais. Os resumos nas páginas de área
mantêm os identificadores dos antigos fragmentos. Os redirecionamentos que
levavam páginas de serviços às âncoras foram removidos. Os redirecionamentos legais
para Contato e de `/conteudo` para `/blog` continuam ativos.

## Resultados

Os valores da home são fictícios e identificados como “Valor simulado · Protótipo”.
Os dados reais em `lib/resultados.ts` permanecem pendentes de consolidação.
