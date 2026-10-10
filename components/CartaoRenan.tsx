import Image from "next/image";
import { site } from "@/lib/site";
import styles from "./CartaoRenan.module.css";

/**
 * Rosto + nome + inscrição na OAB ao lado de todo ponto de contato.
 * Cumpre duas funções: identificação profissional exigida pelo Código de Ética
 * e a confiança de saber com quem se está falando antes de mandar mensagem.
 */
export function CartaoRenan({ tamanho = "medio" }: { tamanho?: "pequeno" | "medio" | "grande" }) {
  return (
    <div className={`${styles.cartao} ${styles[tamanho]}`}>
      <span className={styles.foto}>
        <span className={styles.recorte}>
          <Image
            src="/img/renan-escritorio.webp"
            alt={`${site.advogado}, advogado`}
            width={1360}
            height={907}
            sizes="320px"
            quality={90}
          />
        </span>
        <span className={styles.online} aria-hidden="true" />
      </span>
      <span className={styles.ids}>
        <strong className={styles.nome}>{site.advogado}</strong>
        <span className={styles.oab}>{site.oab}</span>
        <span className={styles.status}>Responde pelo WhatsApp</span>
      </span>
    </div>
  );
}
