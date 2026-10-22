import { Resultados } from "@/components/Resultados";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTIGOS, artigoPorSlug } from "@/lib/artigos";
import { site, whats } from "@/lib/site";
import { Icon } from "@/components/Icon";
import { Leitor } from "@/components/Leitor";
import { CartaoEscritorio } from "@/components/CartaoEscritorio";
import s from "./artigo.module.css";

export function generateStaticParams() {
  return ARTIGOS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = artigoPorSlug(slug);
  if (!a) return {};
  return {
    title: a.pergunta,
    description: a.resposta,
    alternates: { canonical: `/blog/${a.slug}` },
    openGraph: { type: "article", title: a.pergunta, description: a.resposta },
  };
}

export default async function Artigo({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = artigoPorSlug(slug);
  if (!a) notFound();

  const relacionados = a.relacionados.map(artigoPorSlug).filter(Boolean);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: a.pergunta,
        description: a.resposta,
        datePublished: a.data,
        dateModified: a.data,
        inLanguage: "pt-BR",
        author: {
          "@type": "Person",
          name: site.advogado,
          jobTitle: "Advogado",
          identifier: site.oab,
          url: "https://renanliscano.adv.br/sobre",
        },
        publisher: { "@type": "Organization", name: site.nome },
        mainEntityOfPage: `https://renanliscano.adv.br/blog/${a.slug}`,
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: a.pergunta,
            acceptedAnswer: { "@type": "Answer", text: a.resposta },
          },
          ...a.secoes
            .filter((sec) => sec.h2.trim().endsWith("?") && sec.paras.length > 0)
            .map((sec) => ({
              "@type": "Question",
              name: sec.h2,
              acceptedAnswer: { "@type": "Answer", text: sec.paras.join(" ") },
            })),
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: "https://renanliscano.adv.br/" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://renanliscano.adv.br/blog" },
          { "@type": "ListItem", position: 3, name: a.pergunta },
        ],
      },
    ],
  };

  return (
    <div className={s.papel}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <article className={`wrap ${s.artigo}`}>
        <nav className={s.migalha} aria-label="Você está em">
          <Link href="/blog">Blog</Link>
          <span aria-hidden="true">/</span>
          <span>{a.tema}</span>
        </nav>

        <h1 className={s.h1}>{a.pergunta}</h1>

        <div className={s.meta}>
          <span>{a.publicoRotulo}</span>
          <span><Icon name="clock" size={13} />{a.leitura} min de leitura</span>
          <span>
            Atualizado em{" "}
            <time dateTime={a.data}>
              {new Date(a.data + "T12:00:00").toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
            </time>
          </span>
        </div>

        <Leitor>
          <p className={s.resposta}>{a.resposta}</p>

          {a.baseLegal && (
            <p className={s.base}>
              <Icon name="scale" size={15} />
              Base legal: <strong>{a.baseLegal}</strong>
            </p>
          )}

          {a.video === null ? null : (
            <div className={s.video}>Vídeo: {a.video}</div>
          )}

          {a.secoes.map((sec) => (
            <section key={sec.h2}>
              <h2>{sec.h2}</h2>
              {sec.paras.map((p) => <p key={p}>{p}</p>)}
              {sec.lista && (
                <ul className={s.lista}>
                  {sec.lista.map((i) => (
                    <li key={i.t}>
                      <strong>{i.t}</strong>
                      {i.d}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section className={s.ressalva}>
            <h2>{a.ressalva.h2}</h2>
            {a.ressalva.paras.map((p) => <p key={p}>{p}</p>)}
          </section>
        </Leitor>

        <aside className={s.autor}>
          <CartaoEscritorio tamanho="grande" />
          <p>
            Escritório com atuação bancária, empresarial, tributária, médica e do consumidor.
            Atendimento virtual em todo o Brasil.
          </p>
        </aside>

        <div className={s.cta}>
          <h2>O seu caso se encaixa aqui?</h2>
          <p>A análise é gratuita, inclusive quando a resposta é que não há o que fazer.</p>
          <div className={s.ctaAcoes}>
            <a href={whats(a.pergunta)} className="btn btn-primary" target="_blank" rel="noopener">
              <Icon name="whatsapp" size={17} />
              Falar no WhatsApp
            </a>
            <Link href={a.servico.href} className="btn btn-quiet">
              {a.servico.texto} <Icon name="arrow" size={15} />
            </Link>
          </div>
        </div>

        {relacionados.length > 0 && (
          <div className={s.relacionados}>
            <h2>Continue lendo</h2>
            <div className={s.relGrade}>
              {relacionados.map((r) => (
                <Link key={r!.slug} href={`/blog/${r!.slug}`}>
                  <span className={s.relTema}>{r!.tema}</span>
                  <strong>{r!.pergunta}</strong>
                  <span className={s.relMin}>{r!.leitura} min</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        <p className={s.aviso}>
          Conteúdo informativo. Não constitui consulta nem orientação jurídica para caso concreto e
          não garante resultado. Cada situação depende de análise individual.
        </p>
      </article>
      <Resultados area={a.publico === "endividado" ? "dividas" : a.publico} />
    </div>
  );
}
