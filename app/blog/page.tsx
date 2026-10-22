import { Resultados } from "@/components/Resultados";
import type { Metadata } from "next";
import Link from "next/link";
import { ARTIGOS } from "@/lib/artigos";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { LeitorBlog } from "@/components/LeitorBlog";
import s from "./conteudo.module.css";

export const metadata: Metadata = {
  title: "Blog: perguntas respondidas",
  description:
    "Respostas diretas, com a lei que trata do assunto, sobre dívidas bancárias, FIES, residência médica, CRM, plano de saúde e voo cancelado.",
  alternates: { canonical: "/blog" },
};

export default function Blog() {
  return (
    <>
      <header className="hero">
        <div className={`wrap ${s.heroGrade}`}>
          <div>
            <p className="kicker">Blog</p>
            <h1 className="titulo-hero">
              Um <em className="metal">Kindle</em> para entender o seu direito.
            </h1>
            <p className={`sub-hero ${s.sub}`}>
              Textos legíveis, com a lei, o raciocínio inteiro e conexões para continuar pesquisando.
              Sem juridiquês e sem esconder a resposta para forçar um contato.
            </p>
          </div>
          <LeitorBlog />
        </div>
      </header>

      <Resultados />

      <section className="section wrap">
        <div className="grade-cartoes">
          {ARTIGOS.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 2) * 60}>
              <Link href={`/blog/${a.slug}`} className="cartao">
                <div className={s.tags}>
                  <span className={s.tag}>{a.publicoRotulo}</span>
                  <span className={s.tag}>{a.tema}</span>
                </div>
                <h2 className="cartao-titulo">{a.pergunta}</h2>
                <p className={`cartao-texto ${s.resumo}`}>{a.resposta}</p>
                <div className={s.rodape}>
                  <span>
                    <Icon name={a.video ? "play" : "doc"} size={14} />
                    {a.video ? "Com vídeo" : "Leitura"}
                  </span>
                  <span className="mono">
                    <Icon name="clock" size={14} />
                    {a.leitura} min
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
