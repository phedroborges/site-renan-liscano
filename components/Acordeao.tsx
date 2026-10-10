"use client";

import { useId, useState } from "react";
import { Icon } from "./Icon";
import styles from "./Acordeao.module.css";

export function Acordeao({ itens, nivel = 3 }: { itens: { p: string; r: string }[]; nivel?: 3 | 4 }) {
  const id = useId();
  const Titulo = nivel === 4 ? "h4" : "h3";
  const [aberto, setAberto] = useState<number | null>(0);

  return (
    <div className={styles.lista}>
      {itens.map((item, i) => {
        const on = aberto === i;
        return (
          <div key={item.p} className={styles.item}>
            <Titulo className={styles.cabecalho}>
              <button
                type="button"
                className={styles.botao}
                aria-expanded={on}
                aria-controls={`${id}-faq-${i}`}
                onClick={() => setAberto(on ? null : i)}
              >
                <span>{item.p}</span>
                <Icon name="plus" size={18} className={on ? styles.girado : undefined} />
              </button>
            </Titulo>
            <div id={`${id}-faq-${i}`} className={styles.corpo} hidden={!on}>
              <p>{item.r}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
