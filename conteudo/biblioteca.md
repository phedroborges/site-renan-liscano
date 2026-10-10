---
titulo: Conteúdo
slug: /blog
tipo: indice
meta_titulo: Perguntas respondidas — dívidas, direito médico e consumidor | Renan Liscano
meta_descricao: Respostas diretas, com a lei que trata do assunto, sobre dívidas bancárias, FIES, residência médica, CRM, plano de saúde e voo cancelado.
---

# Hero

**Kicker:** Conteúdo

**H1:** As perguntas que mais chegam — *respondidas por escrito*.

**Subtítulo:**
Com a lei, o artigo e o raciocínio inteiro. Muita gente lê, resolve sozinha e nunca
precisa contratar ninguém. Está tudo bem.

---

# Filtros

**Por situação:** Dívidas · Médico · Consumidor · Todos
**Por tema:** Superendividamento · Contrato bancário · Negativação · FIES ·
Residência · CRM · Marca · Plano de saúde · Voo

> Filtros operam sobre `publico` e `tema` do frontmatter. Ordenação padrão: mais
> recente primeiro. Cards com `video` preenchido mostram o ícone de play.

---

# EXPERIÊNCIA DE LEITURA — "o Kindle dentro do site"

> **Componente:** `<Leitor>` — envolve todo artigo. É o pedido de "um Kindle dentro
> do site", destrinchado.
>
> **1. Superfície e medida.** Fundo `--read-bg` claro nos dois temas, medida travada
> em **62–68 caracteres**, corpo em `1.125rem` com `line-height: 1.75`. A medida é o
> que mais importa: linha longa é o que cansa, não a cor.
>
> **2. Controle de tamanho.** Três tamanhos — Pequeno, Médio, Grande — num controle
> discreto e fixo. A escolha persiste em `localStorage`, com `try/catch`. É a
> funcionalidade mais usada de qualquer leitor e a mais esquecida em sites.
>
> **3. Barra de progresso.** Filete de 2px em platina no topo, acompanhando o scroll.
> Dá noção de fôlego — é o "faltam 4 minutos" do Kindle.
>
> **4. Sumário lateral.** Os H2 do artigo, fixos na coluna esquerda em telas largas,
> com o item atual destacado. No celular, vira um acordeão recolhido no topo.
>
> **5. Tempo de leitura e data.** Ambos visíveis no topo. Data de **atualização**,
> não só de publicação — importa para o leitor e para o buscador.
>
> **6. Nada interrompe.** Sem pop-up de newsletter, sem banner de cookie sobre o
> texto, sem CTA flutuante cobrindo o rodapé, sem publicidade. A leitura só é
> interrompida pelo fim do artigo.
>
> **7. Continuidade.** Ao voltar a um artigo já começado, o leitor retoma na posição
> em que parou, com um aviso discreto e dispensável. `localStorage`, por artigo.

---

# ESTRUTURA OBRIGATÓRIA DE CADA ARTIGO

> Ordem fixa. Serve à leitura, ao Google e aos motores generativos ao mesmo tempo.

**1. H1 = a pergunta literal**, na segunda pessoa. Nunca o nome do tema.

**2. Resposta direta nas duas primeiras linhas**, em negrito. Quem só leu isso já saiu
sabendo — e é este trecho que um motor generativo tende a citar.

**3. A base legal, nomeada.** Lei, artigo, número. Âncora legal substitui promessa e é
o que dá autoridade extraível.

**4. O desenvolvimento**, em H2 que também são perguntas.

**5. Uma tabela ou lista.** Sempre. Conteúdo estruturado é o que se extrai bem — e
também o que se lê bem no celular.

**6. A ressalva honesta.** Toda peça tem uma seção do tipo "quando isso não se
aplica". É o que separa artigo jurídico de anúncio, e o que faz o leitor confiar no
resto.

**7. Bloco do autor.** Nome, OAB, área de atuação, foto. Ao final de todo artigo, sem
exceção.

**8. CTA contextual, não genérico.** Não "fale conosco": "descubra se o seu caso se
enquadra", ligando à página de serviço daquele tema exato.

**9. Três links internos**, no mínimo: a página de serviço correspondente e dois
artigos relacionados.

---

# SEO E GEO

> GEO = fazer com que os motores generativos encontrem, entendam e **citem** o
> conteúdo. Muda o alvo: não é mais só ranquear, é ser a fonte que a resposta usa.

## Dados estruturados — obrigatórios

- **`Article`** com `author` apontando para uma **`Person`** que tem `identifier` com
  o número da OAB e `jobTitle`. Autoria verificável é o eixo do E-E-A-T jurídico.
- **`FAQPage`** no bloco de perguntas de cada peça.
- **`LegalService`** no site, com `areaServed: BR` e as especialidades.
- **`BreadcrumbList`** em toda página interna.
- **`dateModified`** sempre preenchido e visível na página.

## O que faz um motor citar

**Resposta autossuficiente.** O parágrafo de abertura precisa fazer sentido arrancado
do contexto — é assim que ele será usado.

**Número com fonte.** "1% por mês trabalhado, conforme o art. 6º-B da Lei 10.260" é
citável. "Você pode reduzir bastante" não é.

**Uma pergunta por página.** Peça que responde três coisas não é citada para nenhuma
das três. Melhor dividir.

**Vocabulário do leitor, não do foro.** As pessoas perguntam "quanto reduzo do meu
FIES", não "abatimento de saldo devedor de financiamento estudantil". O título usa o
primeiro; o corpo apresenta o segundo.

**Consistência de fatos entre páginas.** Motores comparam. Se uma página diz 23
estados e outra diz o Brasil inteiro, as duas perdem confiança.

## Implementação

- **`llms.txt`** na raiz, listando as páginas principais e do que cada uma trata.
- **`sitemap.xml`** com `lastmod` real.
- **URLs em português**, curtas, sem data — o artigo é atualizado, não arquivado.
- **Um H1 por página.** Sempre.
- **`alt` descritivo** em toda ilustração, inclusive nas animadas.
- **Sem texto essencial dentro de imagem.**

---

# REGRAS EDITORIAIS

**Escreva a dor, nunca o desfecho.**

**Cite a lei sempre que houver número.**

**Escreva como roteiro.** Cada artigo deve poder ser gravado em vídeo sem reescrita.
Quando a biblioteca de Reels sair do backlog, o roteiro já existe.

**Nenhuma promessa de resultado.** Provimento 205/2021 da OAB.

**Toda página que estime valor carrega o rodapé padrão:** *estimativa com base na
legislação vigente; não constitui garantia de resultado.*
