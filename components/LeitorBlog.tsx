import Link from "next/link";
import { ARTIGOS } from "@/lib/artigos";
import { Icon } from "./Icon";
import styles from "./LeitorBlog.module.css";

/** Prévia animada do leitor usada na chamada do blog na home. */
export function LeitorBlog() {
  const artigo = ARTIGOS[0];

  return (
    <Link
      href={`/blog/${artigo.slug}`}
      className={styles.leitor}
      aria-label={`Começar a ler: ${artigo.pergunta}`}
    >
      <span className={styles.topo}>RENAN LISCANO · BLOG</span>
      <strong>{artigo.pergunta}</strong>
      <p>{artigo.resposta}</p>
      <span className={styles.progresso} aria-hidden="true"><i /></span>
      <span className={styles.rodape}>Começar a ler <Icon name="arrow" size={14} /></span>
    </Link>
  );
}
