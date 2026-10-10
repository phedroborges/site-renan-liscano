import { DEPOIMENTOS } from "@/lib/conteudo";
import { Icon } from "./Icon";
import styles from "./Depoimentos.module.css";

export function Depoimentos() {
  return (
    <div className={styles.parede}>
      {DEPOIMENTOS.map((d) => (
        <figure key={d.nome} className={`${styles.card} ${d.tamanho === "grande" ? styles.destaque : ""}`}>
          <span className={styles.aspas} aria-hidden="true">&ldquo;</span>
          <blockquote className={styles.texto}>{d.texto}</blockquote>
          <figcaption className={styles.autor}>
            <span className={styles.avatar} aria-hidden="true">{d.iniciais}</span>
            <span className={styles.ids}>
              <span className={styles.nome}>{d.nome}</span>
              {d.papel && <span className={styles.papel}>{d.papel}</span>}
              {d.handle && (
                <span className={styles.linha2}>
                  <a
                    className={styles.handle}
                    href={`https://instagram.com/${d.handle}`}
                    target="_blank"
                    rel="noopener nofollow"
                  >
                    <Icon name="instagram" size={12} />@{d.handle}
                  </a>
                  <span className={styles.verificado}>
                    <Icon name="check" size={9} />
                    verificável
                  </span>
                </span>
              )}
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
