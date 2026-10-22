import Image from "next/image";
import { EQUIPE } from "@/lib/equipe";
import { Reveal } from "./Reveal";
import styles from "./Equipe.module.css";

export function Equipe() {
  return (
    <section className="section wrap" aria-labelledby="equipe-titulo">
      <Reveal>
        <div className="section-head">
          <p className="kicker">A equipe</p>
          <h2 id="equipe-titulo">
            Seis advogados. <em>Uma equipe por área.</em>
          </h2>
          <p className="note">
            Renan coordena o trabalho jurídico e cada caso segue para o profissional responsável
            pela matéria.
          </p>
        </div>
      </Reveal>

      <div className={`grade-cartoes grade-3 ${styles.grade}`}>
        {EQUIPE.map((membro, indice) => (
          <Reveal key={membro.nome} delay={indice * 55} className={styles.item}>
            <article className={styles.cartao}>
              <div className={styles.foto}>
                <Image
                  src={membro.imagem}
                  alt={membro.alt}
                  fill
                  sizes="(max-width: 360px) 100vw, (max-width: 900px) 50vw, 33vw"
                  quality={90}
                />
                {membro.demonstrativo ? <span className={styles.selo}>Perfil demonstrativo</span> : null}
              </div>
              <div className={styles.corpo}>
                <p className={styles.cargo}>{membro.cargo}</p>
                <h3>{membro.nome}</h3>
                {membro.registro ? <p className={styles.registro}>{membro.registro}</p> : null}
                <p className={styles.area}>{membro.area}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <p className={styles.notaPrototipo}>
        Os cinco perfis marcados como demonstrativos são fictícios e serão substituídos pelos dados
        e retratos da equipe antes da publicação.
      </p>
    </section>
  );
}
