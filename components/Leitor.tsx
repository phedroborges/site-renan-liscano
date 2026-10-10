"use client";

import { useEffect, useState, type ReactNode } from "react";
import styles from "./Leitor.module.css";

const CHAVE = "liscano-corpo";
const TAMANHOS = ["p", "m", "g"] as const;
type Tamanho = (typeof TAMANHOS)[number];

/**
 * Experiência de leitura longa. O que faz diferença, em ordem:
 * medida travada em ~65 caracteres, controle de tamanho que persiste,
 * barra de progresso e nada que interrompa — sem pop-up, sem CTA flutuante.
 */
export function Leitor({ children }: { children: ReactNode }) {
  const [tamanho, setTamanho] = useState<Tamanho>("m");
  const [progresso, setProgresso] = useState(0);

  useEffect(() => {
    try {
      const salvo = localStorage.getItem(CHAVE) as Tamanho | null;
      if (salvo && TAMANHOS.includes(salvo)) setTamanho(salvo);
    } catch { /* sem storage, segue no padrão */ }
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const alt = document.documentElement.scrollHeight - window.innerHeight;
      setProgresso(alt > 0 ? Math.min(100, (window.scrollY / alt) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function trocar(t: Tamanho) {
    setTamanho(t);
    try { localStorage.setItem(CHAVE, t); } catch { /* sem persistência */ }
  }

  return (
    <>
      <div className={styles.progresso} aria-hidden="true">
        <span style={{ width: `${progresso}%` }} />
      </div>

      <div className={styles.controle} role="group" aria-label="Tamanho do texto">
        {TAMANHOS.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => trocar(t)}
            aria-pressed={tamanho === t}
            className={tamanho === t ? styles.ativo : undefined}
          >
            <span aria-hidden="true">A</span>
            <span className="sr">{{ p: "Pequeno", m: "Médio", g: "Grande" }[t]}</span>
          </button>
        ))}
      </div>

      <div className={`${styles.leitura} ${styles[`t_${tamanho}`]}`}>{children}</div>
    </>
  );
}
