---
titulo: Direito do consumidor
slug: /consumidor
tipo: pilar
publico: consumidor
meta_titulo: Voo cancelado, overbooking e plano de saúde — seus direitos | Renan Liscano
meta_descricao: Cancelamento de voo, atraso, overbooking e negativa de plano de saúde. O que a lei prevê, o que exigir na hora e o que guardar.
cta_unico: Chamar no WhatsApp
---

# Hero

**Kicker:** Direito do consumidor

**H1:** Você aceitou o voucher e foi *embora*. Quase todo mundo aceita.

**Subtítulo:**
Voo cancelado, atraso de oito horas, embarque negado com passagem paga. A companhia
oferece um vale, você está cansado, tem compromisso — e assina. É exatamente com isso
que o modelo conta.

**CTA:** Chamar no WhatsApp

> **Componente:** `<PainelEmbarque>` — animação-âncora da página.
>
> **O conceito:** um painel de embarque de aeroporto, do tipo split-flap — aquelas
> plaquinhas que giram com estalo. Três ou quatro linhas de voo, com origem, destino e
> horário, tudo em `tabular-nums` e caixa alta. Ao entrar na viewport, as letras giram
> e a coluna de status vira, uma linha por vez:
>
> ```
> POA → GRU   14:20   NO HORÁRIO  →  ATRASADO
> GRU → BSB   16:05   EMBARCANDO  →  CANCELADO
> CWB → GIG   18:40   NO HORÁRIO  →  PRETERIDO
> ```
>
> O estalo é só visual — sem som. O status final entra em `--warn`.
>
> **Por que este e não um avião caindo:** avião caindo evoca acidente aéreo, não
> transtorno de viagem. Numa página que fala de voucher e reacomodação, a imagem de
> queda é desproporcional, macabra e afasta em vez de aproximar — além de ser
> exatamente o tipo de sensacionalismo que o Provimento 205 trata como impróprio. O
> painel virando para CANCELADO carrega a mesma frustração, é imediatamente
> reconhecível por quem já passou por isso, e tem a vantagem de ser tipografia pura —
> combina com o sistema e não precisa de ilustração.
>
> **Mecânica:** cada caractere é um `<span>` com duas faces e `rotateX`; a troca é
> escalonada por índice, com `--ease`. Nada de biblioteca — é CSS e um pequeno laço.
>
> **Reduced-motion:** o painel aparece já no estado final, sem giro.

---

# Seção — A escala

**H2:** Acontece muito mais do que você *imagina*.

Quem voa duas vezes por ano acha que teve azar. Quem voa toda semana sabe que não é
azar — é rotina operacional.

Cancelamento, atraso longo e preterição de embarque acontecem todos os dias, em todos
os aeroportos do país. O overbooking, em particular, **não é um imprevisto**: é uma
prática deliberada, em que a companhia vende mais assentos do que a aeronave comporta,
calculando que parte dos passageiros não vai aparecer. Quando todos aparecem, alguém
fica em terra.

A conta que sustenta isso é simples: sai mais barato indenizar os poucos que
reclamam do que deixar de vender os assentos extras.

**A maior parte das pessoas não reclama.** Aceita o voucher no balcão, agradece e vai
embora — e é por isso que a conta continua fechando.

> **Componente:** `<ContadorEscala>` — três números grandes subindo em `tabular-nums`
> ao entrar na viewport, com a fonte citada abaixo de cada um.
>
> ⚠ **Preencher com dados reais e citar a fonte.** ANAC e Justiça em Números publicam
> estatísticas de voos e de litígios de transporte aéreo. Número em site de advocacia
> sem fonte é passivo. Se não houver dado confiável e atual, **cortar o componente** —
> a seção funciona sem ele.

---

# Seção — As três situações

**H2:** Elas não são a mesma *coisa*.

## Atraso
A partir de determinado tempo de espera nasce o dever de assistência material:
comunicação, alimentação e, conforme a duração, hospedagem e transporte.

## Cancelamento
Além da assistência, você escolhe entre reacomodação em outro voo, reembolso integral
ou execução do serviço por outra modalidade. **A escolha é sua, não da companhia.**

## Overbooking
Preterição de embarque. Além da assistência e da reacomodação, há regra específica de
compensação — e, aqui, o fato de a prática ser deliberada pesa na discussão.

→ Ver a página completa · `/consumidor/voo-e-overbooking`

---

# Seção — No aeroporto

**H2:** Se está acontecendo *agora*, faça isso.

**Peça o motivo por escrito.** A companhia deve informar a razão do atraso ou
cancelamento. Peça no balcão e guarde.

**Exija a assistência.** Alimentação, comunicação, hospedagem conforme o tempo. Não é
cortesia, é obrigação.

**Guarde todo recibo.** Se você gastou por conta própria, cada comprovante vira prova
de dano material.

**Fotografe o painel.** O status na tela do aeroporto, com data e hora, é prova
excelente e desaparece em minutos.

**Não assine nada sem ler.** Termo assinado no balcão pode encerrar discussões que
ainda nem começaram.

> **Componente:** `<ChecklistAeroporto>` — bloco fixo e destacado, pensado para ser
> lido no celular, em pé, no aeroporto. Letra grande, cinco itens, sem parágrafo
> longo. É a parte da página mais provável de ser aberta em situação real.

---

# Seção — Não é só avião

**H2:** A mesma lógica vale para o *plano de saúde*.

Negativa de cobertura funciona pelo mesmo mecanismo: a operadora nega, a pessoa está
fragilizada, e a maioria não insiste.

Só que aqui existe uma diferença importante — quem define a conduta terapêutica é o
**médico assistente**. O plano define cobertura contratual. E quando há urgência,
existe caminho por liminar, em prazo curto.

→ Ver a página completa · `/consumidor/plano-de-saude`

---

# Seção — Cobrança indevida

**H2:** E para quem foi cobrado pelo que *não contratou*.

Serviço não solicitado, cobrança duplicada, nome negativado por dívida que não é sua.

→ Ver a página completa · `/dividas/nome-negativado`

---

# Seção — Perguntas frequentes

**H2:** O que todo mundo pergunta.

**Aceitei o voucher. Perdi o direito?**
Depende do que o documento dizia. Vale a leitura antes de concluir qualquer coisa.

**A companhia alegou mau tempo. Ainda tenho direito?**
O dever de assistência existe independentemente do motivo. O que muda, conforme o
caso, é a discussão sobre reparação.

**Foi há seis meses. Ainda dá tempo?**
Há prazo, e ele varia conforme o tipo de voo. Quanto antes, melhor a prova.

**Preciso ir ao fórum?**
Não. Todo o atendimento é virtual.

**Meu voo era internacional. Muda alguma coisa?**
Muda o regime aplicável em alguns pontos, inclusive por convenções internacionais.

---

# CTA final

**H2:** Manda os documentos. A avaliação é *gratuita*.

**CTA:** Chamar no WhatsApp · (55) 9 9619-2413
