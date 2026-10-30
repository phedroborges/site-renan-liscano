const staticExport = process.env.STATIC_EXPORT === "1";

const UM_ANO = 60 * 60 * 24 * 365;

/** Cabeçalhos de segurança aplicados a todas as respostas. */
const cabecalhosSeguranca = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=31536000" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Rotas *.servidor.tsx/.ts (painel de artigos, envio de comentários) gravam
  // arquivos no servidor. Na exportação estática não há servidor, então ficam
  // de fora.
  pageExtensions: staticExport ? ["tsx", "ts"] : ["tsx", "ts", "servidor.tsx", "servidor.ts"],
  distDir: staticExport ? ".next-static" : ".next",
  ...(staticExport
    ? { output: "export", trailingSlash: true }
    : {
        // Gera .next/standalone: servidor Node enxuto usado pelo Dockerfile.
        output: "standalone",
        async redirects() {
          return [
            {
              source: "/:path*",
              has: [{ type: "host", value: "www.renanliscano.adv.br" }],
              destination: "https://renanliscano.adv.br/:path*",
              permanent: true,
            },
            {
              source: "/inicio",
              destination: "/",
              permanent: true,
            },
            {
              source: "/conteudo/:path*",
              destination: "/blog/:path*",
              permanent: true,
            },
            {
              source: "/politica-de-privacidade",
              destination: "/contato#politica-de-privacidade",
              permanent: true,
            },
            {
              source: "/aviso-legal",
              destination: "/contato#aviso-legal",
              permanent: true,
            },
          ];
        },
        async headers() {
          return [
            { source: "/:path*", headers: cabecalhosSeguranca },
            {
              // Arquivos de /public não têm hash no nome: cache longo, mas revalidável.
              source: "/img/:path*",
              headers: [
                { key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" },
              ],
            },
          ];
        },
      }),
  images: {
    unoptimized: staticExport,
    qualities: [85, 90],
    minimumCacheTTL: UM_ANO,
  },
};

export default nextConfig;
