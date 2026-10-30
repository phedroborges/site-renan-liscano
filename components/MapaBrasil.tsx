"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ESTADOS, TOTAL_ESTADOS_ATENDIDOS } from "@/lib/site";
import { CONTORNO } from "@/lib/brasil";
import styles from "./MapaBrasil.module.css";

/**
 * Silhueta do Brasil com um ponto por unidade federativa.
 *
 * A ordem de acendimento não é alfabética nem aleatória: começa no RS
 * (origem, OAB/RS), passa pelo PR (onde ele está hoje) e segue pelo vizinho
 * mais próximo — que é como a base cresceu, por indicação.
 */

const LAT = { min: -34.6, max: 6.0 };
const LNG = { min: -74.8, max: -34.0 };
const W = 100;
// latitude média ~-14°: o grau de longitude encolhe por cos(14°)
const H = (W * (LAT.max - LAT.min)) / ((LNG.max - LNG.min) * Math.cos((14 * Math.PI) / 180));

function projetar(lat: number, lng: number) {
  return {
    x: ((lng - LNG.min) / (LNG.max - LNG.min)) * W,
    y: ((LAT.max - lat) / (LAT.max - LAT.min)) * H,
  };
}

const PATH =
  CONTORNO.map(([lat, lng], i) => {
    const { x, y } = projetar(lat, lng);
    return `${i === 0 ? "M" : "L"}${x.toFixed(2)} ${y.toFixed(2)}`;
  }).join(" ") + " Z";

function ordemDeCrescimento() {
  const pontos = ESTADOS.map((e) => ({ ...e, ...projetar(e.lat, e.lng) }));
  const ordem = [pontos.find((p) => p.uf === "RS")!];
  const restantes = pontos.filter((p) => p.uf !== "RS");
  while (restantes.length) {
    let idx = 0;
    let melhor = Infinity;
    restantes.forEach((c, i) => {
      const d = Math.min(...ordem.map((o) => (o.x - c.x) ** 2 + (o.y - c.y) ** 2));
      if (d < melhor) { melhor = d; idx = i; }
    });
    ordem.push(restantes.splice(idx, 1)[0]);
  }
  return ordem;
}

const DURACAO = 2200;

export function MapaBrasil({ compacto = false }: { compacto?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const ordem = useMemo(() => ordemDeCrescimento().slice(0, TOTAL_ESTADOS_ATENDIDOS), []);
  const [aceso, setAceso] = useState(0);
  const [tracado, setTracado] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduzido = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduzido || typeof IntersectionObserver === "undefined") {
      setTracado(true);
      setAceso(ordem.length);
      return;
    }

    const io = new IntersectionObserver(
      (entradas) => {
        if (!entradas.some((e) => e.isIntersecting)) return;
        io.disconnect();
        setTracado(true);
        const passo = DURACAO / ordem.length;
        let i = 0;
        const t = window.setInterval(() => {
          i += 1;
          setAceso(i);
          if (i >= ordem.length) window.clearInterval(t);
        }, passo);
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ordem.length]);

  return (
    <div ref={ref} className={`${styles.bloco} ${compacto ? styles.compacto : ""}`}>
      <div className={styles.molduraMapa}>
        <svg
          viewBox={`-4 -4 ${W + 8} ${H + 8}`}
          className={styles.mapa}
          role="img"
          aria-label={`Mapa do Brasil com atendimento em ${ordem.length} estados`}
        >
          <path d={PATH} className={`${styles.silhueta} ${tracado ? styles.tracado : ""}`} />
          {ordem.map((p, i) => (
            <g key={p.uf} className={i < aceso ? styles.on : styles.off}>
              <circle cx={p.x} cy={p.y} r={2.6} className={styles.halo} />
              <circle cx={p.x} cy={p.y} r={0.95} className={styles.ponto} />
              <title>{p.uf}</title>
            </g>
          ))}
        </svg>
      </div>

      <div className={styles.dado}>
        <span className={styles.somenteLeitor}>{ordem.length}</span>
        <span className={styles.numero} aria-hidden="true">{aceso}</span>
        <span className={styles.legenda}>
          estados
          <br />
          com atendimento virtual
        </span>
      </div>
    </div>
  );
}
