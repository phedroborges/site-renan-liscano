"use client";

import { useEffect, useRef, useState } from "react";
import { ETAPAS } from "@/lib/conteudo";
import styles from "./Etapas.module.css";

const POREXTENSO = ["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez"];

/**
 * Linha do tempo que se preenche conforme a rolagem.
 * Um passo por vez: o ponto acende, o texto sai do apagado.
 * A linguagem é do cliente, não do escritório, nada de processo interno.
 *
 * O cabeçalho vem junto de propósito: o processo do escritório é o mesmo em
 * qualquer área, então a seção inteira é a mesma em qualquer página. Editar
 * ETAPAS em lib/conteudo.ts muda o site todo.
 */
export function Etapas() {
  const contagem = POREXTENSO[ETAPAS.length] ?? String(ETAPAS.length);
  const refs = useRef<(HTMLLIElement | null)[]>([]);
  const [ativos, setAtivos] = useState<boolean[]>(() => ETAPAS.map(() => false));

  useEffect(() => {
    const reduzido = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduzido || typeof IntersectionObserver === "undefined") {
      setAtivos(ETAPAS.map(() => true));
      return;
    }
    const io = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (!e.isIntersecting) return;
          const i = Number((e.target as HTMLElement).dataset.i);
          setAtivos((prev) => {
            if (prev[i]) return prev;
            const p = [...prev];
            p[i] = true;
            return p;
          });
          io.unobserve(e.target);
        });
      },
      { rootMargin: "0px 0px -25% 0px", threshold: 0.4 }
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const preenchido = ativos.lastIndexOf(true) + 1;
  const progresso = ETAPAS.length > 1 ? (Math.max(0, preenchido - 1) / (ETAPAS.length - 1)) * 100 : 0;

  return (
    <>
      <div className="section-head">
        <h2>
          Como funciona nosso procedimento, do começo <em>ao fim</em>.
        </h2>
        <p className="note">
          {contagem.charAt(0).toUpperCase() + contagem.slice(1)} passos. Nenhum deles exige que
          você saia de casa ou entenda de direito.
        </p>
      </div>
      <ol className={styles.linha}>
      <span className={styles.trilho} aria-hidden="true" />
      <span className={styles.trilhoAtivo} style={{ height: `${progresso}%` }} aria-hidden="true" />

      {ETAPAS.map((e, i) => (
        <li
          key={e.titulo}
          data-i={i}
          ref={(el) => { refs.current[i] = el; }}
          className={`${styles.item} ${ativos[i] ? styles.ativo : ""} ${e.destaque ? styles.destaque : ""}`}
        >
          <span className={styles.marcador} aria-hidden="true">
            <span className={styles.miolo} />
          </span>
          <div className={styles.corpo}>
            <span className={styles.n}>{String(i + 1).padStart(2, "0")}</span>
            <h3>{e.titulo}</h3>
            <p>{e.texto}</p>
          </div>
        </li>
      ))}
      </ol>
    </>
  );
}
