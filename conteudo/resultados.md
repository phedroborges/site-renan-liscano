# Levantamento de resultados

Preencher `lib/resultados.ts` com os valores consolidados em reais e o período.
O site só mostra o valor quando ambos estão preenchidos. Não usar as estimativas
citadas na reunião. Os dados atuais estão vazios de propósito.

| Indicador | O que contabilizar |
|---|---|
| Dívidas bancárias reduzidas | Diferença efetiva de saldo em acordos/revisões; não o valor original inteiro da dívida |
| Valores recuperados para médicos | Valores efetivamente recebidos; excluir redução do FIES |
| Saldo do FIES reduzido | Abatimentos efetivados no financiamento; não somar aos valores recebidos pelos médicos |
| Passivo tributário reduzido | Redução efetivada do débito fiscal; não o total apenas parcelado |
| Valores recuperados para consumidores | Reembolsos, restituições e indenizações efetivamente recebidos |

Para cada documento: identificar internamente o caso, indicador, período,
valor inicial, valor final/recebido e comprovante. Evitar contar o mesmo resultado
mais de uma vez. Não colocar nomes de clientes nem documentos privados no código
público. Os indicadores são exibidos separadamente, sem somatório global.

## Referências consultadas para o conteúdo dos serviços

- [PGFN: orientações da dívida ativa](https://www.gov.br/pgfn/pt-br/servicos/orientacoes-contribuintes)
- [Banco Central: renegociação de dívidas](https://www.bcb.gov.br/meubc/faqs/p/renegociacao-de-dividas)
- [Banco Central: relatório de empréstimos e financiamentos](https://www.bcb.gov.br/meubc/relatorioemprestimofinanciamento)
