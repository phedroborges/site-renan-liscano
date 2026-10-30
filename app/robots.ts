import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/painel", "/api/"] }],
    sitemap: "https://renanliscano.adv.br/sitemap.xml",
  };
}
