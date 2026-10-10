import { Resultados } from "@/components/Resultados";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { site, whats } from "@/lib/site";
import { SITUACOES, FAQ } from "@/lib/conteudo";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { Ticker } from "@/components/Ticker";
import { MapaBrasil } from "@/components/MapaBrasil";
import { Depoimentos } from "@/components/Depoimentos";
import { Acordeao } from "@/components/Acordeao";
import { Etapas } from "@/components/Etapas";
import { CartaoRenan } from "@/components/CartaoRenan";
import { LeitorBlog } from "@/components/LeitorBlog";
import { Equipe } from "@/components/Equipe";
import s from "./home.module.css";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.p,
      acceptedAnswer: { "@type": "Answer", text: f.r },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ---------------- HERO ---------------- */}
      <header className={s.hero}>
        <div className={s.heroFundo} aria-hidden="true">
          <Image
            src="/img/hero-escritorio.jpg"
            alt=""
            fill
            priority
            quality={85}
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center right" }}
          />
          <span className={s.heroVeu} />
        </div>

        <div className={`wrap ${s.heroConteudo}`}>
          <p className="kicker">Renan Liscano · Advogado · {site.oab}</p>

          <h1 className={s.h1}>
            Reduzir dívidas. <em className="metal">Proteger seu patrimônio.</em>
          </h1>

          <p className={s.sub}>
            Atuação bancária, empresarial e tributária para pessoas e empresas, além dos direitos
            de médicos e consumidores. A conversa começa pelos documentos e pelos caminhos para o seu caso.
          </p>

          <div className={s.heroAcoes}>
            <a href={whats("primeira dobra")} className="btn btn-primary btn-lg" target="_blank" rel="noopener">
              <Icon name="whatsapp" size={18} />
              Falar agora no WhatsApp
            </a>
            <CartaoRenan />
          </div>

          <ul className={s.heroProvas}>
            <li><Icon name="check" size={14} />Análise sem custo</li>
            <li><Icon name="check" size={14} />Atendimento em todo o Brasil</li>
            <li><Icon name="check" size={14} />Tudo pelo celular, sem cartório</li>
          </ul>
        </div>

        <Ticker />
      </header>

      <Resultados />

      {/* ---------------- SITUAÇÕES ---------------- */}
      <section className="section wrap">
        <Reveal>
          <div className="section-head">
            <h2>
              Alguma dessas é a <em>sua</em> situação?
            </h2>
            <p className="note">
              Cada pergunta leva a uma explicação completa, com a lei que trata do assunto. Se a sua
              não estiver aqui, pergunte mesmo assim.
            </p>
          </div>
        </Reveal>

        <div className={s.situacoes}>
          {SITUACOES.map((c, i) => (
            <Reveal key={c.href} delay={(i % 2) * 70}>
              <Link href={c.href} className={s.card}>
                <h3 className={s.cardTitulo}>{c.pergunta}</h3>
                <p className={s.cardTexto}>{c.texto}</p>
                {c.alerta && (
                  <div className={s.alerta}>
                    <span className={s.alertaTag}>
                      <Icon name={c.alerta.icone} size={13} />
                      {c.alerta.tag}
                    </span>
                    <p>{c.alerta.texto}</p>
                  </div>
                )}
                <span className={s.cardCta}>
                  Entender o meu caso
                  <Icon name="arrow" size={15} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className={s.rodapeSecao}>
            <p>Nenhuma delas é a sua?</p>
            <a href={whats("nenhuma das situações listadas")} className="btn btn-quiet" target="_blank" rel="noopener">
              Conte o seu caso <Icon name="arrow" size={15} />
            </a>
          </div>
        </Reveal>
      </section>

      {/* ---------------- PROCESSO ---------------- */}
      <section className="section wrap">
        <Reveal>
          <Etapas />
        </Reveal>

        <Reveal>
          <div className={s.rodapeSecao}>
            <a href={whats("quero começar")} className="btn btn-primary" target="_blank" rel="noopener">
              <Icon name="whatsapp" size={16} />
              Começar pelo passo 1
            </a>
            <CartaoRenan tamanho="pequeno" />
          </div>
        </Reveal>
      </section>

      {/* ---------------- ALCANCE ---------------- */}
      <section className="section wrap">
        <Reveal>
          <div className="section-head">
            <h2>
              O processo corre onde você <em>está</em>. Nós também.
            </h2>
            <p className="note">
              Atendimento por WhatsApp, videochamada e assinatura eletrônica. Não existe
              deslocamento e não existe sala de espera.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <MapaBrasil />
        </Reveal>
      </section>

      {/* ---------------- ÁREAS ---------------- */}
      <section className="section wrap">
        <Reveal>
          <div className="section-head">
            <h2>
              Quatro frentes, um <em>método</em>.
            </h2>
          </div>
        </Reveal>
        <div className={s.areas}>
          {[
            {
              href: "/dividas",
              titulo: "Dívidas bancárias e empresariais",
              texto:
                "Para pessoas e empresas. Contratos bancários, defesa em execução, negociação de dívidas e planejamento patrimonial.",
              icone: "calc" as const,
            },
            {
              href: "/tributario",
              titulo: "Direito tributário",
              texto: "Para quem enfrenta cobranças fiscais. Dívida ativa, análise de débitos, negociação e defesa em execução fiscal.",
              icone: "doc" as const,
            },
            {
              href: "/medico",
              titulo: "Direito médico",
              texto:
                "Para quem exerce medicina. Residência, financiamento estudantil, conselho profissional e marca pessoal.",
              icone: "scale" as const,
            },
            {
              href: "/consumidor",
              titulo: "Direito do consumidor",
              texto: "Para quem foi lesado. Plano de saúde, transporte aéreo e cobrança indevida.",
              icone: "shield" as const,
            },
          ].map((a, i) => (
            <Reveal key={a.href} delay={i * 80}>
              <Link href={a.href} className={s.area}>
                <Icon name={a.icone} size={26} />
                <h3>{a.titulo}</h3>
                <p>{a.texto}</p>
                <span className={s.cardCta}>
                  Ver a área <Icon name="arrow" size={15} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- SOBRE RENAN ---------------- */}
      <section className="section wrap" aria-labelledby="sobre-renan-titulo">
        <Reveal>
          <div className={s.historia}>
            <div className={s.retrato}>
              <Image
                src="/img/renan-escritorio.webp"
                alt="Renan Liscano em seu escritório"
                width={1360}
                height={907}
                sizes="(max-width: 820px) 100vw, 50vw"
                quality={90}
              />
            </div>
            <div className={s.historiaTexto}>
              <p className="kicker">O advogado</p>
              <h2 id="sobre-renan-titulo" className={s.historiaTitulo}>
                Quem é <em className="metal">Renan Liscano</em>.
              </h2>
              <p className={s.registro}>{site.oab}</p>
              <p>
                Renan Liscano é advogado e coordena o escritório que leva seu nome. Sua atuação se
                concentra em direito bancário e empresarial, com foco na gestão de dívidas e na
                defesa de pessoas e empresas em processos de execução.
              </p>
              <p>
                Começou sua trajetória atendendo médicos, em demandas de auxílio-moradia, FIES e
                defesa no CRM. Hoje, reúne uma equipe com atuação também em direito tributário e
                do consumidor.
              </p>
              <Link href="/sobre" className="btn btn-quiet">
                Conheça Renan e o escritório <Icon name="arrow" size={15} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <Equipe />

      {/* ---------------- DEPOIMENTOS ---------------- */}
      <section className="section wrap">
        <Reveal>
          <div className="section-head">
            <h2>
              O que dizem quem já <em>passou por aqui</em>.
            </h2>
            <p className="note">
              Publicados com autorização. Onde há <span className="mono">@</span>, o perfil está
              linkado e a avaliação pode ser conferida na origem.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <Depoimentos />
        </Reveal>
      </section>

      {/* ---------------- CONTEÚDO ---------------- */}
      <section className="section wrap">
        <Reveal>
          <div className={`${s.conteudo} ${s.conteudoComLeitor}`}>
            <div className={s.conteudoTexto}>
              <p className="kicker">Blog</p>
              <h2 className={s.historiaTitulo}>
                A maior parte das dúvidas não precisa virar <em>processo</em>.
              </h2>
              <p className="lede">
                Perguntas respondidas por escrito, com a lei que trata do assunto e sem cobrança.
                Muita gente lê, resolve sozinha e nunca precisa contratar ninguém. Está tudo bem.
              </p>
              <Link href="/blog" className="btn btn-primary">
                <Icon name="doc" size={16} />
                Ver o blog
              </Link>
            </div>
            <LeitorBlog />
          </div>
        </Reveal>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="section wrap">
        <Reveal>
          <div className="section-head">
            <h2>Perguntas frequentes</h2>
            <p className="note">As que mais recebemos no WhatsApp.</p>
          </div>
        </Reveal>
        <Reveal>
          <Acordeao itens={FAQ} />
        </Reveal>
      </section>
    </>
  );
}
