/** Páginas principais; os serviços de cada área têm rotas próprias. */
export const PAGINAS = [
  { href: "/", label: "Home", priority: 1 },
  { href: "/dividas", label: "Bancário", priority: 0.9 },
  { href: "/tributario", label: "Tributário", priority: 0.9 },
  { href: "/medico", label: "Direito médico", priority: 0.9 },
  { href: "/consumidor", label: "Direito do consumidor", priority: 0.9 },
  { href: "/blog", label: "Blog", priority: 0.7 },
  { href: "/sobre", label: "Sobre", priority: 0.6 },
  { href: "/contato", label: "Contato", priority: 0.6 },
] as const;
