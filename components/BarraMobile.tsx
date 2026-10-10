"use client";

import { site, whats } from "@/lib/site";
import { Icon } from "./Icon";
import styles from "./BarraMobile.module.css";

/** Barra fixa de contato, só abaixo de 760px. */
export function BarraMobile() {
  return (
    <div className={styles.barra}>
      <a href={`tel:+55${site.telefone.replace(/\D/g, "")}`} className={styles.item}>
        <Icon name="phone" size={16} />
        Ligar
      </a>
      <a
        href={whats("barra do celular")}
        className={`${styles.item} ${styles.principal}`}
        target="_blank"
        rel="noopener"
      >
        <Icon name="whatsapp" size={16} />
        WhatsApp
      </a>
    </div>
  );
}
