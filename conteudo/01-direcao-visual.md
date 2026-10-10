---
titulo: Direção visual e movimento
versao: 0.2
data: 2026-08-31
---

# Direção visual — o que precisa ser construído

Índice das animações e ilustrações espalhadas pelas páginas, com o custo de cada uma.
O detalhamento de comportamento fica no arquivo da página correspondente.

## Componentes de movimento

| Componente | Onde | Custo | O que é |
|---|---|---|---|
| `<Ticker>` | home | baixo | Faixa de serviços correndo no rodapé da dobra |
| `<MapaBrasil>` | home, sobre, contato | **médio** | Estados preenchendo em sequência + contador |
| `<AvisoSeguranca>` | home + rodapé de serviço | baixo | Bloco de destaque do golpe do falso advogado |
| `<PilaresHistoria>` | sobre | **alto** | Três colunas gregas que se levantam no scroll |
| `<MedicoSobrecarga>` | medico | **alto** | Silhueta + cards de problema que acumulam e se apagam |
| `<BarraDivida>` | dividas | baixo | Barra que encolhe, número que desce |
| `<PassosSimples>` | dividas | baixo | Três blocos grandes numerados |
| `<PainelEmbarque>` | consumidor | médio | Split-flap virando para CANCELADO |
| `<ChecklistAeroporto>` | consumidor | baixo | Bloco para ler no celular, em pé |
| `<ContadorEscala>` | consumidor | baixo | Três números com fonte citada — **cortar se não houver dado** |
| `<Triagem>` | contato | médio | Uma pergunta por tela, sem campo de dado pessoal |
| `<Leitor>` | artigos | **médio-alto** | Experiência de leitura tipo Kindle |
| `<SimuladorFies>` | medico/fies | **alto** | Backlog — depende da modelagem do cálculo |

**Se for preciso cortar por prazo:** os dois de maior retorno são `<MapaBrasil>` e
`<Leitor>`. Os pilares e a silhueta são os mais caros e os mais fáceis de adiar sem
que a página perca função.

## Regras que valem para todas

- Uma curva só: `cubic-bezier(.22, 1, .36, 1)`.
- Entrada por scroll dispara **uma vez**. Repetir no scroll de volta transforma dado
  em enfeite.
- Todo componente tem estado `prefers-reduced-motion` que preserva a informação e
  remove só o gesto. Nenhum deles pode depender de movimento para ser compreendido.
- Nada em loop infinito, exceto o ticker e o sheen do logotipo.
- Números sempre em `tabular-nums`.

---

# Extensão do design system: `tema_visual: popular`

O pilar `/dividas` roda numa variante do sistema. Motivo: quem está endividado olha
para um site caro e conclui, antes de ler, que não tem dinheiro para contratar.

**Muda:**

| | Padrão | Popular |
|---|---|---|
| Fundo | escuro por padrão | claro por padrão |
| Acento | só platina, sem matiz | verde-alívio `#16A34A` e âmbar `#D97706` |
| Corpo | `1rem` | `1.06rem` |
| Cards | contorno de 1px | preenchidos |
| Movimento | ambiente e discreto | progresso: números descendo, barras encolhendo |

**Não muda:** fonte, ícones, escala de espaço, cantos retos, curva de movimento.
É o mesmo sistema em outro registro — não é outro site.

**Vermelho está fora.** É a cor da conta que a pessoa já não aguenta ver.

**Onde se aplica:** `/dividas` e suas três filhas. Em nenhum outro lugar.

---

# Pendências de conteúdo antes de publicar

1. **Número de estados.** O site atual diz 23 numa página e 25 em outra; a orientação
   foi "todo o Brasil". Definir uma frase e usá-la em todas as páginas.
2. **Equipe.** A transcrição cita Dr. Mateus, Dra. Tamara e Dra. Maria; o site atual
   lista outros três nomes. Confirmar quem está ativo, com nome completo e inscrição.
3. **Ano de início da atuação.** Usado em `/sobre` e no aviso legal.
4. **Dados de escala aérea.** Fonte ANAC ou Justiça em Números, ou cortar o contador.
5. **Autorização dos depoimentos.** Confirmar por escrito, inclusive dos que já estão
   publicados hoje.
6. **Uso da palavra "IA".** Decisão do Renan sobre explicitar ou não a análise
   assistida por tecnologia na etapa 03 do processo. Recomendação: não explicitar.
