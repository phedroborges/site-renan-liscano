import { Resultados } from "@/components/Resultados";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { site, whats } from "@/lib/site";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { Capitulo, Portico } from "@/components/Pilares";
import { MapaBrasil } from "@/components/MapaBrasil";
import { CartaoRenan } from "@/components/CartaoRenan";
import { Equipe } from "@/components/Equipe";
import s from "./sobre.module.css";

export const metadata: Metadata = {
  title: "Quem é Renan Liscano",
  description:
    "Conheça Renan Liscano, sua trajetória na advocacia, a atuação bancária e empresarial e a equipe do escritório. OAB/RS 120.306.",
  alternates: { canonical: "/sobre" },
};

export default function Sobre() {
  return (
    <>
      <header className={s.hero}>
        <div className={`wrap ${s.apresentacao}`}>
          <div className={s.bio}>
            <p className="kicker">O advogado e o escritório</p>
            <h1 className={s.h1}>
              Quem é <em className="metal">Renan Liscano</em>.
            </h1>
            <p className={s.registro}>{site.oab}</p>
            <p className={s.sub}>
              Advogado à frente do escritório Renan Liscano Advogados, com atuação voltada ao
              direito bancário e empresarial, à gestão de dívidas e à defesa de pessoas e empresas
              em processos de execução.
            </p>
            <p className={s.sub}>
              Sua trajetória começou no atendimento a médicos e se ampliou para as questões
              financeiras e patrimoniais de seus clientes. Hoje, coordena uma equipe com atuação
              também em direito tributário, médico e do consumidor.
            </p>
            <a href={whats("quero conhecer o trabalho do Renan")} className="btn btn-primary" target="_blank" rel="noopener">
              <Icon name="whatsapp" size={18} />
              Fale com o escritório
            </a>
          </div>
          <div className={s.retrato}>
            <Image
              src="/img/renan-escritorio.webp"
              alt="Renan Liscano em seu escritório"
              width={1360}
              height={907}
              sizes="(max-width: 900px) 100vw, 50vw"
              quality={90}
              priority
            />
          </div>
        </div>
      </header>

      <Equipe />

      <section className="section wrap">
        <Capitulo n={1}>
          <h2>O início no <em>direito médico</em>.</h2>
          <p>
            Renan começou na advocacia com demandas de médicos residentes, especialmente relacionadas
            ao auxílio-moradia. O trabalho também passou a abranger o financiamento estudantil pelo
            FIES e a defesa em processos éticos no CRM.
          </p>
          <p>
            Essa atuação permanece no escritório e acompanha diferentes momentos da carreira médica,
            da residência às questões profissionais e financeiras.
          </p>
          <Link href="/medico" className="btn btn-quiet">Conheça a atuação médica <Icon name="arrow" size={15} /></Link>
        </Capitulo>

        <Capitulo n={2}>
          <h2>A atuação <em>bancária e empresarial</em>.</h2>
          <p>
            A experiência com o FIES abriu caminho para o direito bancário. Ao assumir carteiras de
            passivo de clientes, Renan ampliou sua atuação na análise de contratos, na negociação com
            credores e na defesa em execuções e ações de busca e apreensão.
          </p>
          <p>
            Hoje, esse é o foco principal de seu trabalho: compreender o conjunto de dívidas,
            garantias e processos para definir os caminhos de defesa e negociação de pessoas e empresas.
          </p>
          <Link href="/dividas" className="btn btn-quiet">Conheça os serviços bancários e empresariais <Icon name="arrow" size={15} /></Link>
        </Capitulo>

        <Capitulo n={3}>
          <h2>Uma equipe sob sua <em>coordenação</em>.</h2>
          <p>
            Renan participa do relacionamento com os clientes e coordena o trabalho jurídico do
            escritório. A equipe reúne profissionais que atuam conforme o assunto de cada caso.
          </p>
          <p>
            A atuação tributária contempla dívidas fiscais, inscrições em dívida ativa e defesa em
            execuções. O escritório também atende questões de planejamento patrimonial e direito
            do consumidor, como problemas com planos de saúde, transporte aéreo e cobranças indevidas.
          </p>
          <div className={s.linksAreas}>
            <Link href="/tributario" className="btn btn-quiet">Direito tributário <Icon name="arrow" size={15} /></Link>
            <Link href="/consumidor" className="btn btn-quiet">Direito do consumidor <Icon name="arrow" size={15} /></Link>
          </div>
        </Capitulo>
      </section>

      <Resultados />

      <section className="section wrap">
        <Reveal>
          <div className="section-head">
            <h2>
              Como o escritório <em>trabalha</em>.
            </h2>
          </div>
        </Reveal>
        <div className={s.principios}>
          {[
            {
              t: "Orientação sobre a viabilidade",
              d: "A análise inicial apresenta os caminhos possíveis e as limitações do caso, inclusive quando não há fundamento para propor uma ação.",
            },
            {
              t: "Análise antes de proposta",
              d: "Os documentos são examinados antes da proposta de contratação. O cliente recebe uma orientação por escrito para decidir como seguir.",
            },
            {
              t: "Comunicação clara",
              d: "As informações sobre o caso são explicadas em linguagem acessível. O atendimento acontece por WhatsApp e, quando necessário, por videochamada.",
            },
            {
              t: "Canais oficiais de atendimento",
              d: "O grupo oficial reúne o cliente e os profissionais responsáveis. Pedidos de pagamento recebidos por fora devem ser conferidos com o escritório.",
            },
          ].map((p, i) => (
            <Reveal key={p.t} delay={i * 60}>
              <div className={s.principio}>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section wrap">
        <Reveal>
          <div className="section-head">
            <h2>
              Atendimento em <em>todo o Brasil</em>.
            </h2>
            <p className="note">
              O atendimento pode ser feito por WhatsApp, videochamada e assinatura eletrônica,
              permitindo o acompanhamento de clientes em diferentes estados.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <MapaBrasil />
        </Reveal>
      </section>

      <section className="section wrap">
        <Reveal>
          <Portico>
            <h2 className={s.fechaTitulo}>
              Converse com o escritório sobre <em className="metal">o seu caso</em>.
            </h2>
            <div className={s.fechaAcoes}>
              <a href={whats("página sobre")} className="btn btn-primary btn-lg" target="_blank" rel="noopener">
                <Icon name="whatsapp" size={18} />
                Falar no WhatsApp
              </a>
              <Link href="/contato" className="btn btn-quiet">
                Ver os canais de contato <Icon name="arrow" size={15} />
              </Link>
            </div>
            <p className={s.fechaOab}>
              {site.nome} · <span className="mono">{site.oab}</span>
            </p>
          </Portico>
        </Reveal>
      </section>
    </>
  );
}
