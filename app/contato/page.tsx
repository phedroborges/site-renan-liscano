import { Resultados } from "@/components/Resultados";
import { Privacidade } from "@/components/Privacidade";
import { AvisoLegal } from "@/components/AvisoLegal";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site, whats, CHAMADA_REUNIAO } from "@/lib/site";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { Triagem } from "@/components/Triagem";
import { MapaBrasil } from "@/components/MapaBrasil";
import { CartaoEscritorio } from "@/components/CartaoEscritorio";
import s from "./contato.module.css";

export const metadata: Metadata = {
  title: "Falar com o advogado",
  description:
    `Atendimento por WhatsApp em ${site.alcance}. Primeira conversa gratuita. ${CHAMADA_REUNIAO}`,
  alternates: { canonical: "/contato" },
};

export default function Contato() {
  return (
    <>
      <header className="hero">
        <div className="hero-fundo" aria-hidden="true">
          <Image
            src="/img/contato-hero-wide.webp"
            alt=""
            fill
            priority
            quality={90}
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center right" }}
          />
          <span className="hero-veu" />
        </div>

        <div className="wrap hero-conteudo">
          <p className="kicker">Contato</p>
          <h1 className="titulo-hero">
            Manda a sua dúvida. A resposta é <em className="metal">gratuita</em>.
          </h1>
          <p className="sub-hero">
            A primeira conversa serve para uma coisa só: dizer se existe caso. Se não existir, você
            vai ouvir isso, e não vai receber proposta nenhuma.
          </p>

          <p className={s.brasil}><Icon name="check" size={15} /> Atendimento em {site.alcance}, sem deslocamento</p>

          <a href={whats("página de contato")} className={`btn btn-primary ${s.ctaGigante}`} target="_blank" rel="noopener">
            <Icon name="whatsapp" size={22} />
            {site.telefone}
          </a>

          <div className={s.assinatura}>
            <CartaoEscritorio tamanho="grande" />
          </div>
        </div>
      </header>

      <Resultados />

      <section className="section wrap">
        <Reveal>
          <div className="section-head">
            <h2>
              Não sabe por onde começar? Responda <em>três perguntas</em>.
            </h2>
            <p className="note">
              Sem cadastro, sem e-mail e sem telefone. As respostas montam a sua mensagem e abrem o
              WhatsApp com o contexto já escrito.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <Triagem />
        </Reveal>
      </section>

      <section className="section wrap">
        <Reveal>
          <div className="section-head">
            <h2>
              Ou fale <em>direto</em>.
            </h2>
          </div>
        </Reveal>
        <div className="grade-cartoes grade-3">
          <Reveal>
            <a href={whats("canal WhatsApp")} className="cartao" target="_blank" rel="noopener">
              <span className="cartao-icone"><Icon name="whatsapp" size={26} /></span>
              <h3 className="cartao-titulo">WhatsApp</h3>
              <p className={`cartao-texto ${s.canalTexto}`}>Canal principal. É por onde tudo acontece, do primeiro contato ao acompanhamento do processo.</p>
              <span className={s.canalDado}>{site.telefone}</span>
            </a>
          </Reveal>
          <Reveal delay={70}>
            <a href={site.instagram} className="cartao" target="_blank" rel="noopener">
              <span className="cartao-icone"><Icon name="instagram" size={26} /></span>
              <h3 className="cartao-titulo">Instagram</h3>
              <p className={`cartao-texto ${s.canalTexto}`}>Onde saem as explicações em vídeo sobre os temas do escritório.</p>
              <span className={s.canalDado}>Ver o perfil</span>
            </a>
          </Reveal>
          <Reveal delay={140}>
            <Link href="/blog" className="cartao">
              <span className="cartao-icone"><Icon name="doc" size={26} /></span>
              <h3 className="cartao-titulo">Blog</h3>
              <p className={`cartao-texto ${s.canalTexto}`}>Talvez a sua dúvida já esteja respondida por escrito, com a lei que trata do assunto.</p>
              <span className={s.canalDado}>Ver os artigos</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section wrap">
        <Reveal>
          <div className="section-head">
            <h2>
              Onde quer que você <em>esteja</em>.
            </h2>
            <p className="note">
              Atendimento virtual em {site.alcance}. O processo corre no foro competente do seu caso;
              você acompanha pelo WhatsApp.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <MapaBrasil compacto />
        </Reveal>
      </section>

      <section className="section wrap">
        <Reveal>
          <div className="section-head">
            <h2>
              Como funciona a <em>primeira conversa</em>.
            </h2>
          </div>
        </Reveal>
        <div className="grade-cartoes">
          {[
            { t: "Não é consulta comercial", d: "Ninguém vai empurrar contratação." },
            { t: "Não precisa ter tudo", d: "Traga os documentos que tiver. Levantar o resto faz parte do trabalho." },
            { t: "Você sai com uma resposta", d: "Tem caso ou não tem. Se tiver, quais são os cenários." },
            { t: "Análise em reunião online", d: "Previamente combinada, sem custo, para apresentar nosso trabalho e as soluções encontradas." },
          ].map((e, i) => (
            <Reveal key={e.t} delay={i * 60}>
              <div className={s.esperaItem}>
                <Icon name="check" size={17} />
                <div>
                  <h3>{e.t}</h3>
                  <p>{e.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section wrap">
        <Reveal>
          <div className={s.privacidade}>
            <Icon name="shield" size={20} />
            <p>
              O que você compartilhar nesta primeira conversa é protegido pelo sigilo profissional
              previsto no Estatuto da Advocacia, <strong>independentemente de haver contratação
              depois</strong>. Ver a <Link href="/contato#politica-de-privacidade">política de privacidade</Link>.
            </p>
          </div>
        </Reveal>
      </section>
      <Privacidade />
      <AvisoLegal />
    </>
  );
}
