"use client";

import { TICKER } from "@/lib/conteudo";
import styles from "./Ticker.module.css";

/**
 * Faixa de serviços no rodapé da primeira dobra.
 * É a única parte da dobra que nomeia os produtos: o H1 fala da dúvida,
 * o subtítulo das áreas, o ticker dos serviços — sem ocupar leitura.
 * Uma volta em ~40s. Pausa no hover. Vira lista estática em reduced-motion.
 */
export function Ticker() {
  return (
    <div className={styles.faixa} aria-label="Serviços do escritório">
      <div className={styles.trilha}>
        {/* duplicado para o loop não ter emenda visível */}
        {[0, 1].map((volta) => (
          <ul className={styles.lista} key={volta} aria-hidden={volta === 1}>
            {TICKER.map((item) => (
              <li key={item}>
                <span className={styles.item}>{item}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
