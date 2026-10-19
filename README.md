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
5. **Domains**: adicione `renanliscano.adv.br` e `www.renanliscano.adv.br` com HTTPS ligado e **porta 3000**.
6. No DNS do domínio, aponte os registros `A` de `renanliscano.adv.br` e `www` para o IP da VPS.

O `www` é redirecionado para o domínio sem `www` pelo próprio site. Para atualizar o site depois, faça push na `main` e clique em **Deploy** (ou ative o **Auto Deploy**).

## O que a build de produção faz

- `output: "standalone"`: imagem Docker enxuta, rodando com usuário sem privilégios.
- Imagens servidas em WebP no tamanho de cada tela, com cache de um ano.
- HTML comprimido (gzip) e cabeçalhos de segurança (HSTS, nosniff, frame, referrer, permissions).
- Healthcheck em `/robots.txt` para o Easypanel saber quando o container está pronto.

## Outros comandos

- `npm run build && npm start`: produção sem Docker (porta 3000).
- `npm run build:vizantu`: exportação estática usada na hospedagem da Vizantu.
