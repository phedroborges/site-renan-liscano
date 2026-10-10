---
titulo: Renan Liscano Advogados
slug: /
tipo: institucional
meta_titulo: Renan Liscano Advogados — Dívidas, direito médico e consumidor
meta_descricao: Advogado para dívidas bancárias, direito médico e direito do consumidor. Parecer técnico antes da proposta. Atendimento por WhatsApp em todo o Brasil. OAB/RS 120.306.
cta_unico: Chamar no WhatsApp
---

# Hero

**Kicker:** Advocacia · OAB/RS 120.306

**H1:** Antes de contratar advogado, você precisa saber se *tem caso*.

**Subtítulo:**
Dívidas, direito médico e direito do consumidor. A primeira conversa é gratuita e
serve exatamente para isso — inclusive para dizer que não há o que fazer.
Atendimento por WhatsApp, em todo o Brasil.

**CTA único:** Chamar no WhatsApp

> **CTA:** um só na dobra. "Ver como funciona" foi removido — era um link de âncora
> disfarçado de decisão. Quem quer entender antes rola a página; quem já decidiu
> clica. Duas portas para a mesma sala só dividem a atenção.

## Ticker da dobra

> **Componente:** `<Ticker>` — a resposta ao "os nomes animados, é como?"
>
> Uma faixa horizontal no rodapé da primeira dobra, correndo devagar da direita para
> a esquerda em loop contínuo. Os termos são separados por um ponto em platina e cada
> um é link para a página correspondente.
>
> - Velocidade lenta — é ambiente, não chamariz. Uma volta completa em ~40s.
> - Pausa no hover, e o item sob o cursor ganha a cor de destaque.
> - Duplicação do conteúdo em sequência para o loop não ter emenda visível.
> - Sob `prefers-reduced-motion`, vira lista estática quebrada em linhas. Sem exceção.
>
> **Por que existe:** é a única parte da dobra que nomeia os serviços. O H1 fala da
> dúvida, o subtítulo fala das áreas, e o ticker fala dos produtos — sem ocupar
> espaço de leitura.

**Conteúdo do ticker:**
Dívida bancária · Revisão de contrato · Superendividamento · Nome negativado ·
Auxílio moradia · FIES para médicos · Processo ético no CRM · Registro de marca ·
Plano de saúde negado · Voo cancelado · Overbooking

---

# Seção — Qual é a sua situação?

**H2:** Alguma dessas é a *sua* situação?

**Apoio:** Cada pergunta leva a uma explicação completa, com a lei que trata do
assunto. Se a sua não estiver aqui, pergunte mesmo assim.

> **Sem rótulo de área.** Os cards não carregam mais "Direito médico" ou "Dívidas"
> como etiqueta. Ninguém procura o nome da disciplina — procura o problema. A área
> aparece só no destino.

## As parcelas comprometeram o que você precisa para viver?
Cartão que virou rotativo, empréstimo para pagar empréstimo, parcela maior do que
sobra no fim do mês. A Lei 14.181 permite juntar todos os credores numa audiência
só e refazer o pagamento a partir da sua renda real.
→ `/dividas/superendividamento`

## Você olhou o contrato e não entendeu por que a dívida cresceu tanto?
Juros acima da média do período, tarifa embutida, seguro que ninguém contratou. Dá
para conferir — e a conferência vem antes de qualquer proposta.
→ `/dividas/revisional`

## Você fez residência médica e nunca recebeu auxílio moradia?
A Lei 6.932 garante moradia ao residente desde 1981. Quase nenhuma instituição
implementou, e a Justiça vem reconhecendo a indenização retroativa.
**Atenção · Prazo:** o direito prescreve. Quem terminou há mais tempo tem menos margem.
→ `/medico/auxilio-moradia`

## Você se formou com FIES e a dívida só cresceu?
O art. 6º-B da Lei 10.260 prevê abatimento do saldo devedor para quem atuou na
Estratégia de Saúde da Família, nas Forças Armadas, no Mais Médicos ou na linha de
frente da COVID-19.
**Atenção · Modalidade:** o percentual depende de onde e por quanto tempo. Não é automático.
→ `/medico/fies`

## Você foi notificado de um processo ético no CRM?
A sindicância parece formalidade e não é. O que se diz nela acompanha todas as fases
seguintes.
**Atenção · Urgência:** o prazo de defesa começa a correr na notificação.
→ `/medico/processo-etico`

## Seu nome foi negativado por uma dívida que você não reconhece?
Cobrança duplicada, dívida já paga, contrato aberto por terceiro. Cada uma dessas
situações tem tratamento próprio.
→ `/dividas/nome-negativado`

## O plano de saúde negou um procedimento que o seu médico pediu?
Quem define a conduta é o médico assistente. Peça a negativa por escrito antes de
qualquer coisa — é ela que sustenta o caso.
→ `/consumidor/plano-de-saude`

## Seu voo foi cancelado, atrasou muito ou você ficou em terra?
Acontece muito mais do que se imagina, e quase todo mundo aceita um voucher e vai
embora.
→ `/consumidor/voo-e-overbooking`

**CTA da seção:** Nenhuma delas? Conte o seu caso · WhatsApp

---

# Seção — Alcance nacional

**H2:** O processo corre onde você *está*. Nós também.

**Texto:**
Todo o atendimento é virtual — WhatsApp, videochamada e assinatura eletrônica. Não
existe deslocamento, não existe sala de espera, e a distância nunca foi obstáculo
para nenhum caso.

> ⚠ **Confirmar antes de publicar:** o site atual diz "23 estados" numa página e
> "25 estados" em outra. A orientação foi de que hoje é o Brasil inteiro. Definir a
> frase única — "todos os 26 estados e o Distrito Federal" ou "todo o Brasil" — e
> usar a mesma em todas as páginas. Número afirmado em site de advocacia precisa ser
> verdadeiro e verificável.

> **Componente:** `<MapaBrasil>` — animação de cobertura nacional.
>
> **O que acontece:** o mapa do Brasil entra em traço fino de platina, apenas o
> contorno dos estados. Ao entrar na viewport, os estados vão sendo preenchidos em
> sequência — não todos de uma vez, e não em ordem alfabética: começa pelo Rio Grande
> do Sul (origem, OAB/RS), passa pelo Paraná (onde ele está hoje), e daí se espalha
> por proximidade, como quem cresce por indicação. É exatamente como a base cresceu.
>
> **Marcadores:** a cada estado preenchido, o ícone `LR` da marca aparece no
> centroide, pequeno, com um leve fade-in escalonado.
>
> **Contador:** um número sobe junto com o preenchimento, em `tabular-nums`, e para
> no total final. O contador é o elemento que carrega a informação; o mapa é o que
> carrega a sensação.
>
> **Timing:** ~2,2s do primeiro ao último estado, com `--ease`. Roda uma única vez,
> disparado por `IntersectionObserver`. Não repete no scroll de volta — repetição
> transforma dado em enfeite.
>
> **Reduced-motion:** mapa completo já preenchido e o número final estático.
>
> **Implementação:** SVG inline com `path` por estado e `stroke-dasharray` para o
> traço; nada de biblioteca de mapas. O arquivo do Brasil simplificado tem poucos KB.

---

# Seção — Como funciona

**H2:** O que acontece depois que você *manda a mensagem*.

**Apoio:** Sete etapas. A terceira é a que separa este escritório da maioria.

**01 · Você fala com o advogado, não com um vendedor**
A primeira mensagem cai direto no WhatsApp. Não há SDR, não há robô fazendo
qualificação, não há fila. Quem lê o seu caso é quem vai decidir se ele tem
fundamento.

**02 · Perguntas objetivas, conforme o assunto**
Cada tipo de caso tem seu próprio conjunto de perguntas, e elas são curtas de
propósito:
- **Dívida bancária:** qual o valor, qual a instituição, e o envio do contrato.
- **FIES:** valor global da dívida, se o contrato é anterior a 2018, e se houve
  atuação no SUS, no Mais Médicos, nas Forças Armadas ou na pandemia.
- **Auxílio moradia:** onde foi a residência, quando terminou, e qual era a bolsa.
- **Registro de marca:** qual é a atividade principal do negócio, para saber se o
  registro é viável antes de pesquisar no INPI.

**03 · Parecer técnico antes de qualquer proposta**
Esta é a etapa que quase ninguém oferece.

O contrato é analisado contra a **série histórica de taxas do Banco Central** para o
período exato da contratação, contra as **decisões vinculantes do STF e do STJ** e
contra o entendimento dos tribunais estaduais sobre abusividade. Entram na conta os
encargos acessórios, o seguro prestamista e o impacto real sobre o custo efetivo
total.

O resultado é um parecer escrito, em papel timbrado, dizendo se há ou não
fundamento.

**E quando não há, o parecer diz isso.** Com a explicação do porquê. Você recebe o
documento do mesmo jeito, sem custo e sem proposta anexada.

**04 · Proposta de honorários por escrito**
Havendo fundamento, a proposta vai junto com o parecer. Valor, forma de cobrança e
cenários — tudo antes de qualquer assinatura. Não existe surpresa no meio do
processo.

**05 · Contrato e procuração digitais**
Documentos enviados para assinatura eletrônica. Nada precisa ser impresso,
reconhecido em cartório ou entregue presencialmente.

**06 · Grupo de WhatsApp com toda a equipe**
Assinado o contrato, é criado um grupo com você e os advogados que vão atuar no seu
processo. Toda a comunicação passa a acontecer ali.

**07 · Distribuição e controle de prazos**
O caso é distribuído ao advogado responsável pela matéria, com os prazos lançados no
controle interno do escritório. Cada movimentação relevante do processo vira uma
mensagem no grupo, escrita em português.

**CTA:** Começar pela primeira etapa · WhatsApp

> **Nota para decisão do Renan:** a etapa 03 descreve a análise assistida por
> tecnologia sem usar a palavra "IA". A recomendação é manter assim. Dizer
> "inteligência artificial analisa seu contrato" num site de advocacia levanta a
> dúvida de quem assina o parecer — e a resposta correta é: o advogado. A tecnologia
> é meio, não argumento de venda. Se preferir explicitar, é uma decisão sua, mas
> convém vir acompanhada da frase de que a responsabilidade técnica é do profissional
> inscrito na OAB.

---

# Seção — Segurança (destaque)

**H2:** O golpe do falso advogado acontece *toda semana*. Aqui ele não tem por onde entrar.

**Texto:**
Existe uma fraude comum e crescente: alguém se passa pelo seu advogado, entra em
contato por fora e pede um pagamento urgente — custas, taxa, acordo. A pessoa já está
ansiosa com o processo, reconhece o nome do escritório e paga.

Por isso todo cliente tem um grupo de WhatsApp desde o primeiro dia, com os advogados
identificados. E por isso existe uma regra que não tem exceção:

**Nenhum pedido de pagamento é feito fora do grupo. Nunca. Em hipótese alguma.**

Se alguém chamar você em conversa privada pedindo dinheiro em nome deste escritório,
é golpe — mesmo que use o nome, a foto e o número de inscrição corretos. Leve a
mensagem para o grupo e pergunte.

> **Componente:** `<AvisoSeguranca>` — bloco de destaque com borda de 2px,
> contraste alto, ícone de escudo. É o único bloco da home com tratamento visual
> diferente dos demais: precisa parar o scroll.
>
> Este bloco também se repete, em versão compacta, no rodapé de todas as páginas de
> serviço.

---

# Seção — Áreas

**H2:** Quatro frentes, um *método*.

## Dívidas bancárias e empresariais
Para pessoas e empresas. Contratos bancários, defesa em execução, negociação de
dívidas e planejamento patrimonial.
→ `/dividas`

## Direito tributário
Para quem enfrenta cobranças fiscais. Dívida ativa, análise de débitos, negociação
e defesa em execução fiscal.
→ `/tributario`

## Direito médico
Para quem exerce medicina. Residência, financiamento estudantil, conselho
profissional e marca pessoal.
→ `/medico`

## Direito do consumidor
Para quem foi lesado. Plano de saúde, transporte aéreo e cobrança indevida.
→ `/consumidor`

---

# Seção — Quem é Renan Liscano

**Kicker:** O advogado

**H2:** Quem é *Renan Liscano*.

**Identificação:** OAB/RS 120.306

**Foto:** `/img/renan-escritorio.webp`, fornecida pelo responsável pelo projeto.
Retrato em destaque ao lado do texto no desktop e acima do texto no celular.

**Texto:**
Renan Liscano é advogado e coordena o escritório que leva seu nome. Sua atuação se
concentra em direito bancário e empresarial, com foco na gestão de dívidas e na
defesa de pessoas e empresas em processos de execução.

Começou sua trajetória atendendo médicos, em demandas de auxílio-moradia, FIES e
defesa no CRM. Hoje, reúne uma equipe com atuação também em direito tributário e
do consumidor.

**CTA:** Conheça Renan e o escritório → `/sobre`

---

# Seção — Depoimentos

**H2:** O que dizem quem já *passou por aqui*.

> **Layout:** grade assimétrica proposital. Um depoimento longo ocupando duas colunas,
> dois médios, dois curtos. Depoimento de tamanho uniforme parece formulário
> preenchido; tamanho desigual parece gente falando.

## Longo — destaque, ocupa 2 colunas
> Super recomendo. Profissionais excelentes, com explicações bem claras e de bom
> entendimento, sempre disponíveis. Vai muito além de uma empresa de advocacia, é uma
> verdadeira família. Fui muito bem acolhida. Quero agradecer em especial ao Dr.
> Renan.
> — **Susan Apolinário**

## Médio
> Renan, só tenho a agradecer suas orientações e seu acompanhamento no meu caso. Sua
> empatia e comprometimento profissional foram incríveis. Parabéns pelo seu trabalho.
> — **Keila Milena**

## Médio
> Atendimento eficaz e atencioso. Sempre explicando todas as etapas do procedimento,
> o que já foi feito e o que ainda está por fazer.
> — **Alessandra Padula**, delegada · @padula.ale ✓

## Médio
> Equipe solícita, todos sempre disponíveis para a resolução de eventuais
> intercorrências do cotidiano médico. Recomendo os serviços do escritório.
> — **Dr. Matheus Batista**, radiologista · @mdbatista ✓

## Curto
> Excelentes profissionais, muito competentes. Recomendo.
> — **Dr. Leonardo Volante**, urologista · @drleonardourologista ✓

## Curto
> Obrigado pelos serviços e por toda a assessoria prestada por ti e pela tua equipe.
> Preocupação real com o cliente.
> — **Dr. Rafael** · @rafagmend ✓

> ⚠ **Depoimento editado por conformidade.** O texto original do Dr. Rafael continha
> "sem dúvidas o melhor escritório de advocacia". Superlativo e comparação com outros
> profissionais são vedados pelo Provimento 205/2021 — e a vedação alcança o
> escritório que **publica** o elogio, não quem o escreveu. A frase foi cortada e o
> resto mantido na íntegra. Mesma checagem vale para qualquer depoimento novo.

**Nota da seção:** Depoimentos publicados com autorização. Onde há `@`, o perfil está
linkado e a avaliação pode ser conferida na origem.

---

# Seção — Conteúdo

**H2:** A maior parte das dúvidas não precisa virar *processo*.

**Texto:**
Perguntas respondidas por escrito, com a lei que trata do assunto e sem cobrança.
Muita gente lê, resolve sozinha e nunca precisa contratar ninguém. Está tudo bem.

**CTA:** Ver a biblioteca → `/blog`

---

# Seção — Perguntas frequentes

**H2:** Antes de mandar mensagem.

**A primeira conversa custa alguma coisa?**
Não. E ela pode terminar com "não há o que fazer no seu caso" — que é uma resposta
tão válida quanto a outra.

**Preciso ir até o escritório?**
Não, em nenhuma etapa. Todo o atendimento é virtual, inclusive para quem mora perto.

**Vocês atendem no meu estado?**
Sim. O processo corre no foro competente do seu caso, e a atuação é virtual em todo
o país.

**Quanto tempo demora para ter uma resposta?**
A triagem inicial acontece na conversa. O parecer técnico, quando envolve análise de
contrato, depende do envio dos documentos.

**Como sei que estou falando com o escritório de verdade?**
Depois do contrato, toda comunicação acontece no grupo com os advogados
identificados. E nenhum pedido de pagamento é feito fora dele.

**Vocês cobram para analisar meu contrato?**
Não. A análise e o parecer são entregues sem custo, inclusive quando a conclusão é
de que não há fundamento.

**E se eu não tiver todos os documentos?**
Traga o que tiver. Levantar documento faz parte do trabalho.

---

# CTA final

**H2:** Manda a sua dúvida. A resposta é *gratuita*.

**Texto:** Trinta minutos para saber se existe caso. Sem compromisso de contratar.

**CTA:** Chamar no WhatsApp · (55) 9 9619-2413

---

# Rodapé

**Navegação:** Dívidas · Direito médico · Consumidor · Conteúdo · Sobre · Contato
**Aviso de segurança compacto:** Nenhum pedido de pagamento é feito fora do grupo oficial.
**Legal:** Renan Liscano Advogados · OAB/RS 120.306 · Política de privacidade · Aviso legal
