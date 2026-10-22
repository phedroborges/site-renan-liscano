import { PAGINAS } from "@/lib/navegacao";
import { Resultados } from "./Resultados";
import Link from "next/link";
import Image from "next/image";
import { whats, SELOS_ATENDIMENTO } from "@/lib/site";
import type { PaginaServico as Dados } from "@/lib/tipos";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { Acordeao } from "./Acordeao";
import { CartaoEscritorio } from "./CartaoEscritorio";
import { CartaoSituacao } from "./CartaoSituacao";
import { CenaContrato } from "./CenaContrato";
import { Depoimentos } from "./Depoimentos";
import { Diferenciais } from "./Diferenciais";
import { Etapas } from "./Etapas";
import s from "./PaginaServico.module.css";

/** Aplica o itálico platinado no trecho marcado como ênfase. */
function comEnfase(texto: string, enfase?: string) {
  if (!enfase || !texto.includes(enfase)) return texto;
  const [antes, ...resto] = texto.split(enfase);
  return (
    <>
      {antes}
      <em className="metal">{enfase}</em>
      {resto.join(enfase)}
    </>
  );
}

export function PaginaServico({ dados, servicos = [] }: { dados: Dados; servicos?: Dados[] }) {
  const ctaTexto = dados.hero.ctaTexto ?? "Falar no WhatsApp";
  const segmento = dados.slug.split("/")[1];
  const area = segmento === "medico" || segmento === "dividas" || segmento === "tributario" ? segmento : "consumidor";
  const paginaFilha = dados.slug.split("/").length > 2;
  const paginaArea = PAGINAS.find((pagina) => pagina.href === `/${area}`);
  /* Quem manda no hero é o dado da página, não a área: basta declarar
     heroImagem em lib/paginas para a página ganhar o hero sangrado. */
  const heroImagem = paginaFilha ? undefined : dados.heroImagem;
  const heroImersivo = Boolean(heroImagem);
  const perguntas = dados.faq ?? [];
  const faqSchema = perguntas.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: perguntas.map((item) => ({
          "@type": "Question",
          name: item.p,
          acceptedAnswer: { "@type": "Answer", text: item.r },
        })),
      }
    : null;

  return (
    <div data-tema={dados.tema ?? "padrao"} className={s.pagina}>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
        />
      )}
      <header className={`hero ${heroImersivo ? s.heroImersivo : ""}`}>
        <div className="wrap">
          <div className={s.heroTexto}>
          <nav className={s.breadcrumb} aria-label="Navegação estrutural">
            <Link href="/">Início</Link>
            <Icon name="arrow" size={12} />
            {paginaFilha && paginaArea && <>
              <Link href={paginaArea.href}>{paginaArea.label}</Link>
              <Icon name="arrow" size={12} />
            </>}
            <span aria-current="page">{dados.titulo}</span>
          </nav>
          <p className="kicker">{dados.hero.kicker}</p>
          <h1 className="titulo-hero">{comEnfase(dados.hero.h1, dados.hero.enfase)}</h1>
          <p className={`sub-hero ${s.sub}`}>{dados.hero.sub}</p>

          {dados.baseLegal && (
            <p className={s.baseLegal}>
              <Icon name="scale" size={15} />
              Base legal: {dados.baseLegal}
            </p>
          )}

          {dados.hero.urgencia && (
            <p className={s.urgencia}>
              <Icon name="clock" size={15} />
              {dados.hero.urgencia}
            </p>
          )}

          <div className="acoes">
            <a href={whats(dados.titulo)} className="btn btn-primary btn-lg" target="_blank" rel="noopener">
              <Icon name="whatsapp" size={18} />
              {ctaTexto}
            </a>
            <CartaoEscritorio />
          </div>

          <ul className="provas" aria-label="Informações do atendimento">
            {SELOS_ATENDIMENTO.map((selo) => (
              <li key={selo}><Icon name="check" size={14} />{selo}</li>
            ))}
          </ul>
          </div>
        </div>

        {/* Depois do texto no DOM de propósito: no desktop é fundo absoluto, no
            celular volta ao fluxo e aparece embaixo, inteira. */}
        {heroImagem && (
          <div className={s.heroFundo}>
            <Image
              src={heroImagem.imagem}
              alt={heroImagem.alt}
              fill
              priority
              quality={90}
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center right" }}
            />
            <span className={s.heroVeu} aria-hidden="true" />
          </div>
        )}
      </header>

      {!paginaFilha && <Resultados area={area} />}

      {dados.blocos.map((b, i) => (
        <section className="section wrap" key={i}>
          <Reveal>{renderBloco(b)}</Reveal>
        </section>
      ))}

      {/* O processo do escritório é o mesmo em qualquer área: mesma seção,
          mesma fonte (ETAPAS). A chamada vem logo depois porque é ali que a
          pessoa acabou de entender o que acontece se ela mandar mensagem. */}
      {!paginaFilha && (
        <>
          <section className="section wrap">
            <Reveal>
              <Etapas />
            </Reveal>
          </section>
          <section className="wrap">
            <Reveal>
              <div className={s.chamadaMeio}>
                <div>
                  <p className="kicker">Primeiro passo</p>
                  <h2>{comEnfase(dados.cta.titulo, dados.cta.enfase)}</h2>
                  {dados.cta.texto && <p className={s.chamadaApoio}>{dados.cta.texto}</p>}
                </div>
                <a href={whats(dados.titulo)} className="btn btn-primary btn-lg" target="_blank" rel="noopener">
                  <Icon name="whatsapp" size={18} />
                  {ctaTexto}
                </a>
              </div>
            </Reveal>
          </section>
        </>
      )}

      {/* Como o escritório trabalha. Mesmo bloco em todas as áreas, alimentado
          por DIFERENCIAIS: é o que responde "por que com o Renan". */}
      {!paginaFilha && (
        <section className="section wrap" aria-labelledby="diferenciais-titulo">
          <Reveal>
            <div className="section-head">
              <h2 id="diferenciais-titulo">Quem vai cuidar do seu caso.</h2>
              <p className="note">A trajetória do escritório e como o atendimento é dividido.</p>
            </div>
          </Reveal>
          <Reveal>
            <Diferenciais />
          </Reveal>
        </section>
      )}

      {/* Prova social antes do índice de serviços: quem ainda não confia não
          clica em nada, e quem já confia precisa de um lugar para onde ir. */}
      {!paginaFilha && (
        <section className="section wrap" aria-labelledby="depoimentos-titulo">
          <Reveal>
            <div className="section-head">
              <h2 id="depoimentos-titulo">Quem já passou por isso.</h2>
              <p className="note">Depoimentos públicos, com perfil verificável.</p>
            </div>
          </Reveal>
          <Reveal>
            <Depoimentos />
          </Reveal>
        </section>
      )}

      {/* Depois do conteúdo, de propósito: na segunda dobra este bloco tirava
          o visitante da página antes de qualquer argumento. */}
      {servicos.length > 0 && (
        <nav className={`wrap ${s.atalhos}`} aria-label="Serviços da área">
          <p>Encontre o seu assunto</p>
          <div>
            {servicos.map((servico) => (
              <Link key={servico.slug} href={servico.slug}>{servico.titulo} <Icon name="arrow" size={14} /></Link>
            ))}
          </div>
        </nav>
      )}

      {dados.faq && dados.faq.length > 0 && (
        <section className="section wrap">
          <Reveal>
            <div className="section-head">
              <h2>Perguntas frequentes</h2>
              <p className="note">As que mais recebemos sobre este assunto.</p>
            </div>
          </Reveal>
          <Reveal>
            <Acordeao itens={dados.faq} />
          </Reveal>
        </section>
      )}

      <section className="section wrap">
        <Reveal>
          <div className={`painel ${s.fechamento}`}>
            <h2 className="titulo-destaque">{comEnfase(dados.cta.titulo, dados.cta.enfase)}</h2>
            {dados.cta.texto && <p>{dados.cta.texto}</p>}
            <div className="acoes">
              <a href={whats(dados.titulo)} className="btn btn-primary btn-lg" target="_blank" rel="noopener">
                <Icon name="whatsapp" size={18} />
                {ctaTexto}
              </a>
              <CartaoEscritorio />
            </div>
            {dados.disclaimer && (
              <p className={s.disclaimer}>
                Estimativas e faixas citadas nesta página têm base na legislação vigente e em
                decisões já proferidas. Não constituem garantia de resultado.
              </p>
            )}
          </div>
        </Reveal>
      </section>
    </div>
  );
}

function renderBloco(b: Dados["blocos"][number], interno = false) {
  const Titulo = interno ? "h3" : "h2";
  const Subtitulo = interno ? "h4" : "h3";
  switch (b.tipo) {
    case "texto":
      return (
        <div className={s.bloco}>
          <div className="section-head">
            <Titulo>{b.h2}</Titulo>
            {b.destaque && <p className="note">{b.destaque}</p>}
          </div>
          <div className={s.prosa}>
            {b.paras.map((p) => <p key={p}>{p}</p>)}
          </div>
        </div>
      );

    case "bullets": {
      /* A cena "contrato" só fecha com 4 itens, 2 de cada lado da folha.
         Com qualquer outro número cai na grade normal de cartões. */
      const comFolha = b.cena === "contrato" && b.itens.length === 4;
      return (
        <div className={s.bloco}>
          <div className="section-head">
            <Titulo>{b.h2}</Titulo>
            {b.intro && <p className="note">{b.intro}</p>}
          </div>
          {comFolha ? (
            <CenaContrato itens={b.itens} nivel={Subtitulo} />
          ) : (
            <div className="grade-cartoes">
              {b.itens.map((i) => (
                <div key={i.titulo} className="cartao">
                  <Subtitulo className="cartao-titulo">{i.titulo}</Subtitulo>
                  <p className="cartao-texto">{i.texto}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }

    case "callout":
      return (
        <div className={s.callout}>
          <Subtitulo>
            {b.icone && <Icon name={b.icone} size={19} />}
            {b.titulo}
          </Subtitulo>
          {b.paras.map((p) => <p key={p}>{p}</p>)}
        </div>
      );

    case "passos":
      return (
        <div className={s.bloco}>
          <div className="section-head">
            <Titulo>{b.h2}</Titulo>
            {b.intro && <p className="note">{b.intro}</p>}
          </div>
          <ol className={s.passos}>
            {b.itens.map((i, n) => (
              <li key={i.titulo}>
                <span className={s.passoN}>{String(n + 1).padStart(2, "0")}</span>
                <div>
                  <Subtitulo>{i.titulo}</Subtitulo>
                  <p>{i.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      );

    case "documentos":
      return (
        <div className={s.bloco}>
          <div className="section-head">
            <Titulo>{b.h2}</Titulo>
            {b.intro && <p className="note">{b.intro}</p>}
          </div>
          <ul className={s.docs}>
            {b.itens.map((i) => (
              <li key={i}>
                <Icon name="doc" size={16} />
                {i}
              </li>
            ))}
          </ul>
          {b.nota && <p className={s.docNota}>{b.nota}</p>}
        </div>
      );

    case "situacoes":
      return (
        <div className={s.bloco}>
          <div className="section-head">
            <Titulo>{b.h2}</Titulo>
            {b.intro && <p className="note">{b.intro}</p>}
          </div>
          <div className="grade-cartoes">
            {b.itens.map((c) => (
              <CartaoSituacao key={c.href} situacao={c} nivel={Subtitulo} />
            ))}
          </div>
        </div>
      );
  }
}
