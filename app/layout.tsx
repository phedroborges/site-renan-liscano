import type { Metadata } from "next";
import { Bodoni_Moda, Archivo, IBM_Plex_Mono } from "next/font/google";
import { site, CHAMADA_REUNIAO } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BarraMobile } from "@/components/BarraMobile";
import { AlertaGolpe } from "@/components/AlertaGolpe";
import "./globals.css";

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
  metadataBase: new URL("https://renanliscano.adv.br"),
  title: {
    default: "Renan Liscano Advogados: bancário, tributário, médico e consumidor",
    template: "%s | Renan Liscano Advogados",
  },
  description:
    `Atuação bancária, empresarial e tributária, direito médico e do consumidor. ${CHAMADA_REUNIAO} Atendimento por WhatsApp em todo o Brasil. ${site.oab}.`,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.nome,
  },
};

/** Evita o flash de tema errado: roda antes da pintura. */
const temaScript = `
(function(){try{
  var t = localStorage.getItem('liscano-tema');
  if (t === 'light' || t === 'dark') document.documentElement.setAttribute('data-theme', t);
}catch(e){}})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: site.nome,
    areaServed: { "@type": "Country", name: "BR" },
    url: "https://renanliscano.adv.br",
    telephone: site.telefone,
    founder: {
      "@type": "Person",
      name: site.advogado,
      jobTitle: "Advogado",
      identifier: site.oab,
    },
    knowsAbout: [
      "Direito bancário",
      "Direito empresarial",
      "Direito tributário",
      "Planejamento patrimonial",
      "Superendividamento",
      "Direito médico",
      "Direito do consumidor",
    ],
  };

  return (
    <html lang="pt-BR" className={`${bodoni.variable} ${archivo.variable} ${plex.variable}`}>
      <body>
        <script dangerouslySetInnerHTML={{ __html: temaScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
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
