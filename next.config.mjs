const staticExport = process.env.STATIC_EXPORT === "1";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: staticExport ? ".next-static" : ".next",
  ...(staticExport
    ? { output: "export", trailingSlash: true }
    : {
        async redirects() {
          return [
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
      }),
  images: {
    unoptimized: staticExport,
    qualities: [85, 90],
  },
};

export default nextConfig;
