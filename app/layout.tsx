/* O globals.css vem antes de qualquer componente: a ordem dos imports é a
   ordem do CSS final, e o módulo de cada componente precisa vir depois do
   sistema para conseguir ajustá-lo. */
import "./globals.css";
import type { Metadata } from "next";
import { Bodoni_Moda, Archivo, IBM_Plex_Mono } from "next/font/google";
import { site, CHAMADA_REUNIAO } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BarraMobile } from "@/components/BarraMobile";
import { AlertaGolpe } from "@/components/AlertaGolpe";

const URL_SITE = "https://renanliscano.adv.br";
const TITULO_SITE = "Renan Liscano Advogados: bancário, tributário, médico e consumidor";
const DESCRICAO_SITE =
  "Atuação bancária, empresarial e tributária, direito médico e do consumidor. " +
  CHAMADA_REUNIAO +
  " Atendimento por WhatsApp em " +
  site.alcance +
  ". " +
  site.oab +
  ".";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bodoni",
  style: ["normal", "italic"],
});

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
});

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-plex",
});

export const metadata: Metadata = {
  metadataBase: new URL(URL_SITE),
  applicationName: site.nome,
  title: {
    default: TITULO_SITE,
    template: "%s | Renan Liscano Advogados",
  },
  description: DESCRICAO_SITE,
  authors: [{ name: site.advogado, url: "/sobre" }],
  creator: site.advogado,
  publisher: site.nome,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: URL_SITE,
    title: TITULO_SITE,
    description: DESCRICAO_SITE,
    siteName: site.nome,
    images: [
      {
        url: "/img/hero-escritorio.jpg",
        alt: "Renan Liscano Advogados",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITULO_SITE,
    description: DESCRICAO_SITE,
    images: ["/img/hero-escritorio.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LegalService"],
        "@id": URL_SITE + "/#organization",
        name: site.nome,
        legalName: site.nome,
        url: URL_SITE,
        logo: {
          "@type": "ImageObject",
          url: URL_SITE + "/img/logo-horizontal.webp",
        },
        image: URL_SITE + "/img/hero-escritorio.jpg",
        telephone: site.telefone,
        areaServed: { "@type": "Country", name: "Brasil" },
        availableLanguage: "pt-BR",
        sameAs: [site.instagram, site.avaliacoesGoogle],
        founder: { "@id": URL_SITE + "/sobre#renan-liscano" },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: site.telefone,
          contactType: "atendimento",
          areaServed: "BR",
          availableLanguage: "Portuguese",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Áreas de atuação",
          itemListElement: [
            ["Dívidas bancárias e empresariais", "/dividas"],
            ["Direito tributário", "/tributario"],
            ["Direito médico", "/medico"],
            ["Direito do consumidor", "/consumidor"],
          ].map(([name, url]) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name,
              url: URL_SITE + url,
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": URL_SITE + "/#website",
        url: URL_SITE,
        name: site.nome,
        description: DESCRICAO_SITE,
        inLanguage: "pt-BR",
        publisher: { "@id": URL_SITE + "/#organization" },
      },
      {
        "@type": "Person",
        "@id": URL_SITE + "/sobre#renan-liscano",
        name: site.advogado,
        url: URL_SITE + "/sobre",
        jobTitle: "Advogado",
        identifier: {
          "@type": "PropertyValue",
          propertyID: "OAB/RS",
          value: "120.306",
        },
        worksFor: { "@id": URL_SITE + "/#organization" },
      },
    ],
  };

  return (
    <html lang="pt-BR" className={[bodoni.variable, archivo.variable, plex.variable].join(" ")}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
        />
        <div className="rails" aria-hidden="true">
          <span /><span /><span /><span /><span /><span />
        </div>
        <a href="#conteudo" className="pular">Pular para o conteúdo</a>
        <Header />
        <main className="page" id="conteudo">{children}</main>
        <Footer />
        <BarraMobile />
        <AlertaGolpe />
      </body>
    </html>
  );
}
