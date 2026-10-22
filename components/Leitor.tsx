"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import styles from "./Leitor.module.css";

const CHAVE_TAMANHO = "liscano-corpo";
const CHAVE_MODO = "liscano-leitura";
const TAMANHOS = ["p", "m", "g"] as const;
const MODOS = ["escuro", "claro"] as const;
type Tamanho = (typeof TAMANHOS)[number];
type Modo = (typeof MODOS)[number];

/**
 * Experiência de leitura longa. O que faz diferença, em ordem:
 * medida travada em ~65 caracteres, tamanho do texto e modo escuro/claro que
 * persistem entre artigos, barra de progresso e nada que interrompa.
 *
 * O modo é aplicado no elemento [data-papel] que envolve o artigo: é ali que
 * moram os tokens --read-*, então a página inteira troca junto.
 */
export function Leitor({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tamanho, setTamanho] = useState<Tamanho>("m");
  const [modo, setModo] = useState<Modo>("escuro");
  const [progresso, setProgresso] = useState(0);

  useEffect(() => {
    try {
      const t = localStorage.getItem(CHAVE_TAMANHO) as Tamanho | null;
      if (t && TAMANHOS.includes(t)) setTamanho(t);
      const m = localStorage.getItem(CHAVE_MODO) as Modo | null;
      if (m && MODOS.includes(m)) setModo(m);
    } catch { /* sem storage, segue no padrão */ }
  }, []);

  useEffect(() => {
    const papel = ref.current?.closest<HTMLElement>("[data-papel]");
    if (papel) papel.dataset.leitura = modo;
  }, [modo]);

  useEffect(() => {
    const onScroll = () => {
      const alt = document.documentElement.scrollHeight - window.innerHeight;
      setProgresso(alt > 0 ? Math.min(100, (window.scrollY / alt) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function trocarTamanho(t: Tamanho) {
    setTamanho(t);
    try { localStorage.setItem(CHAVE_TAMANHO, t); } catch { /* sem persistência */ }
  }

  function trocarModo(m: Modo) {
    setModo(m);
    try { localStorage.setItem(CHAVE_MODO, m); } catch { /* sem persistência */ }
  }

  return (
    <div ref={ref}>
      <div className={styles.progresso} aria-hidden="true">
        <span style={{ width: `${progresso}%` }} />
      </div>

      <div className={styles.barra}>
        <div className={styles.grupo} role="group" aria-label="Tamanho do texto">
          {TAMANHOS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => trocarTamanho(t)}
              aria-pressed={tamanho === t}
              className={`${styles[`a_${t}`]} ${tamanho === t ? styles.ativo : ""}`}
            >
              <span aria-hidden="true">A</span>
              <span className="sr">{{ p: "Texto pequeno", m: "Texto médio", g: "Texto grande" }[t]}</span>
            </button>
          ))}
        </div>
        <div className={styles.grupo} role="group" aria-label="Modo de leitura">
          {MODOS.map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => trocarModo(m)}
              aria-pressed={modo === m}
              className={`${styles.modo} ${modo === m ? styles.ativo : ""}`}
            >
              {m === "escuro" ? "Escuro" : "Claro"}
            </button>
          ))}
        </div>
      </div>

      <div className={`${styles.leitura} ${styles[`t_${tamanho}`]}`}>{children}</div>
    </div>
  );
}
