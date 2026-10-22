# renanliscano.adv.br

Site do escritório Renan Liscano Advogados, em Next.js 15. Todas as páginas são geradas no build (estáticas); o servidor Node só entrega o HTML pronto e otimiza as imagens.

## Rodar no computador

```bash
npm install
npm run dev -- -p 3002   # http://localhost:3002
```

## Publicar na VPS com Easypanel

O repositório já tem um `Dockerfile` de produção. No Easypanel:

1. **Create Service > App**.
2. **Source > GitHub**: repositório `phedroborges/site-renan-liscano`, branch `main`, caminho `/`.
3. **Build > Dockerfile** (arquivo `Dockerfile`). Nenhuma variável de ambiente é necessária.
4. **Deploy**.
5. **Domains**: adicione `renanliscano.adv.br` e `www.renanliscano.adv.br` com HTTPS ligado e **porta 80** (o padrão do Easypanel; o container escuta na 80).
6. No DNS do domínio, aponte os registros `A` de `renanliscano.adv.br` e `www` para o IP da VPS.

O `www` é redirecionado para o domínio sem `www` pelo próprio site. Para atualizar o site depois, faça push na `main` e clique em **Deploy** (ou ative o **Auto Deploy**).

## Painel de artigos (fase de teste, sem login)

Publica, edita e apaga artigos do blog sem mexer no código e sem novo deploy. Não usa banco de dados: cada artigo do painel é um arquivo JSON em `dados/artigos`.

**No computador:** `npm run dev` e abra http://localhost:3002/painel. Os artigos ficam em `dados/artigos`, que está fora do git.

**No site:** https://renanliscano.adv.br/painel. O painel fica sempre ligado; não precisa configurar nada.

Para os artigos e comentários não sumirem a cada deploy, monte um volume em `/app/dados` (Easypanel > **Mounts > Add Volume**).

**Atenção:** enquanto não houver login, qualquer pessoa que souber o endereço consegue publicar no site. Para desligar o painel sem mexer no código, defina `PAINEL_ATIVO=0` em **Environment** e faça Deploy.

Como funciona:

- Os 6 artigos originais continuam em `lib/artigos.ts`. Editar um deles no painel grava uma versão no `dados/artigos` que passa a valer; "Desfazer edição" apaga essa versão e o original volta.
- Artigos criados no painel podem ser apagados. O endereço (`/blog/...`) é gerado a partir da pergunta e não muda depois de publicado.
- Ao salvar, blog, página do artigo, home e sitemap são atualizados na hora.
- **Comentários:** o leitor comenta no fim de cada artigo. Todo comentário entra como pendente (arquivo em `dados/comentarios`) e só aparece no site depois de aprovado no painel, onde também pode ser apagado. O envio funciona mesmo com o painel desligado; a aprovação precisa dele ligado.
- **Leitura:** o artigo abre no modo escuro, com botões de tamanho do texto e de modo escuro/claro. A escolha fica salva no navegador do leitor (`components/Leitor.tsx`).
- A exportação estática (`npm run build:vizantu`) não inclui o painel nem o envio de comentários: os arquivos `*.servidor.tsx`/`*.servidor.ts` só viram rota quando há servidor (`pageExtensions` em `next.config.mjs`).

## O que a build de produção faz

- `output: "standalone"`: imagem Docker enxuta, rodando com usuário sem privilégios.
- Imagens servidas em WebP no tamanho de cada tela, com cache de um ano.
- HTML comprimido (gzip) e cabeçalhos de segurança (HSTS, nosniff, frame, referrer, permissions).
- Healthcheck em `/robots.txt` para o Easypanel saber quando o container está pronto.

## Outros comandos

- `npm run build && npm start`: produção sem Docker (porta 3000).
- `docker build -t renanliscano . && docker run -p 8080:80 renanliscano`: testar a imagem em http://localhost:8080.
- `npm run build:vizantu`: exportação estática usada na hospedagem da Vizantu.

## Onde editar o que se repete no site

Estes itens aparecem em várias páginas e têm **um lugar só** para editar. Mudou ali, muda o site inteiro.

| O que | Onde aparece | Arquivo |
|---|---|---|
| Números de resultados (R$ 6,3 mi, +300, +R$ 2,9 mi, 23 Estados) e quais áreas mostram cada um | Home, Sobre, Contato, Blog e páginas de área | `lib/resultados.ts` |
| Passos "Como funciona nosso procedimento" | Home e páginas de serviço | `ETAPAS` em `lib/conteudo.ts` (título em `components/Etapas.tsx`) |
| Selos do topo (✓ Análise sem custo, ✓ Atendimento em todo o Brasil, ✓ Atendimento online) | Home e todas as páginas de serviço | `SELOS_ATENDIMENTO` em `lib/site.ts` |
| Título "Como atuamos?" | Todas as páginas de serviço | `TITULO_COMO_ATUAMOS` em `lib/site.ts` |
| Frase "Reunião online sem custo antes da proposta." | Descrições das páginas no Google | `CHAMADA_REUNIAO` em `lib/site.ts` |
| Nota "Envie o que você já tiver…" | Listas de documentos | `NOTA_DOCUMENTOS` em `lib/site.ts` |
| Nome, OAB, telefone, WhatsApp, Instagram | Site inteiro | `site` em `lib/site.ts` |
| Link "Veja todas as nossas avaliações no Google" | Abaixo dos depoimentos | `avaliacoesGoogle` em `lib/site.ts` |
| Tamanhos de título, subtítulo do topo, grades e cartões | Site inteiro | Tokens (`--t-hero`, `--t-destaque`, `--t-sub`, `--cartao-titulo-tam`) e classes (`.titulo-hero`, `.grade-cartoes`, `.cartao`…) em `app/globals.css` |
| Cartão de atendimento (logo, nome do escritório, OAB, online) | Topos, fechamentos, contato e artigos | `components/CartaoEscritorio.tsx` |
| Cartões "Alguma dessas é a sua situação?" | Home e páginas de área | Lista em `SITUACOES` (`lib/conteudo.ts`), visual em `components/CartaoSituacao.tsx` |

O site é sempre escuro: não há tema claro nem botão de troca. As superfícies de leitura (artigo e depoimentos) continuam claras pelos tokens `--read-*`.
