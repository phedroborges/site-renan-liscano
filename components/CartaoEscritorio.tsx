import Image from "next/image";
import { site } from "@/lib/site";
import styles from "./CartaoEscritorio.module.css";

/**
 * Logo + nome do escritório + inscrição na OAB ao lado de todo ponto de
 * contato. Quem responde no WhatsApp é a equipe, não necessariamente o Renan,
 * então o cartão mostra o escritório e não uma pessoa. A OAB do responsável
 * segue junto: é a identificação profissional exigida pelo Código de Ética.
 */
export function CartaoEscritorio({ tamanho = "medio" }: { tamanho?: "pequeno" | "medio" | "grande" }) {
  return (
    <div className={`${styles.cartao} ${styles[tamanho]}`}>
      <span className={styles.foto}>
        <span className={styles.recorte}>
          <Image src="/img/logo-escritorio.webp" alt="" width={160} height={160} sizes="80px" />
        </span>
        <span className={styles.online} aria-hidden="true" />
      </span>
      <span className={styles.ids}>
        <strong className={styles.nome}>{site.nome}</strong>
        <span className={styles.oab}>{site.oab}</span>
        <span className={styles.status}>Responde pelo WhatsApp</span>
      </span>
    </div>
  );
}
