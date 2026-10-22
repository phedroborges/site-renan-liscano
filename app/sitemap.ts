import type { MetadataRoute } from "next";
import { PAGINAS } from "@/lib/navegacao";
import { todosOsArtigos } from "@/lib/artigos-painel";
import { SERVICOS } from "@/lib/servicos";

const BASE = "https://renanliscano.adv.br";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const artigos = await todosOsArtigos();
  const agora = new Date();
  return [
    ...PAGINAS.map((p) => ({
      url: `${BASE}${p.href}`,
      lastModified: agora,
      priority: p.priority,
      changeFrequency: "monthly" as const,
    })),
    ...SERVICOS.map((servico) => ({
      url: `${BASE}${servico.slug}`,
      lastModified: agora,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    })),
    ...artigos.map((a) => ({
      url: `${BASE}/blog/${a.slug}`,
      lastModified: new Date(a.data),
      priority: 0.7,
      changeFrequency: "monthly" as const,
    })),
  ];
}
