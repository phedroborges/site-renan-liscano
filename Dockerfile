# Site renanliscano.adv.br — imagem de produção (Next.js standalone).
# Usado pelo Easypanel: App > Source GitHub > Build "Dockerfile".

FROM node:22-alpine AS base
ENV NEXT_TELEMETRY_DISABLED=1

# 1) Dependências (inclui as de desenvolvimento, necessárias para o build)
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

# 2) Build
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# 3) Execução: só o necessário para servir o site
FROM base AS runner
WORKDIR /app
# Porta 80: é a porta que o Easypanel usa por padrão nos domínios.
ENV NODE_ENV=production \
    PORT=80 \
    HOSTNAME=0.0.0.0

# Permite que o Node (sem root) escute na porta 80.
RUN apk add --no-cache libcap \
 && setcap cap_net_bind_service=+ep "$(readlink -f "$(which node)")" \
 && addgroup -S -g 1001 nodejs && adduser -S -u 1001 -G nodejs nextjs

COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Artigos publicados pelo painel e comentários dos leitores. Montar um Volume
# do Easypanel em /app/dados, senão os dois somem a cada deploy. A pasta já nasce com dono nextjs, e o
# volume herda essa permissão na primeira montagem.
RUN mkdir -p /app/dados/artigos /app/dados/comentarios && chown -R nextjs:nodejs /app/dados

USER nextjs
EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD wget -q -O /dev/null "http://127.0.0.1:${PORT}/robots.txt" || exit 1

CMD ["node", "server.js"]
