"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import styles from "./Pilares.module.css";

/**
 * Coluna deitada que se levanta quando o capítulo entra na tela.
 * A coluna é o símbolo mais antigo de sustentação, e o gesto de levantar
 * é a própria narrativa da página: um escritório construído em etapas.
 *
 * Traço fino em platina, sem mármore e sem sombra dourada — é o que separa
 * isto de carimbo de papelaria jurídica.
 */
export function Capitulo({ n, children }: { n: number; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [ereto, setEreto] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduzido = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduzido || typeof IntersectionObserver === "undefined") {
      setEreto(true);
      return;
    }
    const io = new IntersectionObserver(
      (es) => {
        if (es.some((e) => e.isIntersecting)) {
          setEreto(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -20% 0px", threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${styles.capitulo} ${ereto ? styles.ereto : ""}`}>
      <div className={styles.colunaBox} aria-hidden="true">
        <Coluna />
        <span className={styles.poeira} />
        <span className={styles.n}>{String(n).padStart(2, "0")}</span>
      </div>
      <div className={styles.texto}>{children}</div>
    </div>
  );
}

/** Coluna dórica simplificada: base, fuste com caneluras, capitel. */
function Coluna() {
  return (
    <svg viewBox="0 0 60 260" className={styles.coluna} role="presentation">
      <g fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="miter">
        {/* base */}
        <rect x="4" y="246" width="52" height="12" />
        <rect x="9" y="236" width="42" height="10" />
        {/* fuste */}
        <path d="M13 236 L15.5 44 L44.5 44 L47 236 Z" />
        {/* caneluras */}
        <path d="M20 232 L21.5 50M27 233 L27.7 49M34 233 L33.3 49M41 232 L39.5 50" strokeWidth="0.55" opacity="0.6" />
        {/* capitel */}
        <path d="M15.5 44 L14 32 L46 32 L44.5 44" />
        <rect x="8" y="20" width="44" height="12" />
        <rect x="3" y="8" width="54" height="12" />
      </g>
    </svg>
  );
}

export function Portico({ children }: { children: ReactNode }) {
  return (
    <div className={styles.portico}>
      <div className={styles.porticoColuna} aria-hidden="true"><Coluna /></div>
      <div className={styles.porticoMiolo}>{children}</div>
      <div className={styles.porticoColuna} aria-hidden="true"><Coluna /></div>
    </div>
  );
}
