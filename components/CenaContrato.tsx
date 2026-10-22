"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import s from "./CenaContrato.module.css";

type Item = { titulo: string; texto: string };

/** Passo de cada peça na sequência de "escrita" da folha. */
const passo = (n: number) => ({ "--passo": n }) as CSSProperties;

/* Ordem em que a folha se escreve: blocos de linhas e cláusulas intercalados.
   O número de cada cláusula é o passo em que ela aparece, e o cartão ao lado
   acende no mesmo passo. */
const ROTEIRO = [
  { linhas: [100, 96, 72] },
  { clausula: 0 },
  { linhas: [100, 88] },
  { clausula: 1 },
  { linhas: [94, 100, 64] },
  { clausula: 2 },
  { linhas: [100, 80] },
  { clausula: 3 },
  { linhas: [92, 58] },
] as const;

/**
 * Folha de contrato ao centro, cláusulas ao redor. A folha é desenhada em CSS,
 * não em imagem: fica nítida em qualquer tela e não inventa texto jurídico
 * falso, as linhas são barras e só as quatro cláusulas citadas aparecem.
 *
 * Quando entra na tela, a folha se escreve de cima para baixo e cada cartão
 * acende junto da sua cláusula. Dispara uma vez só. Sem JavaScript, ou com
 * movimento reduzido, tudo já aparece pronto.
 */
export function CenaContrato({ itens, nivel }: { itens: Item[]; nivel: "h3" | "h4" }) {
  const Titulo = nivel;
  const ref = useRef<HTMLDivElement>(null);
  const [fase, setFase] = useState<"pronta" | "aguardando" | "escrita">("pronta");

  useEffect(() => {
    const el = ref.current;
    const reduzido = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (!el || reduzido || typeof IntersectionObserver === "undefined") return;
    setFase("aguardando");
    const io = new IntersectionObserver(
      (entradas) => {
        if (entradas.some((e) => e.isIntersecting)) {
          setFase("escrita");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -15% 0px", threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Numera os passos na ordem do roteiro: topo, linhas, cláusulas, assinatura.
  let n = 1;
  const passoDaClausula: number[] = [];
  const folha = ROTEIRO.map((bloco, b) => {
    if ("clausula" in bloco) {
      const p = n++;
      passoDaClausula[bloco.clausula] = p;
      return (
        <div className={s.folhaClausula} style={passo(p)} key={b}>
          <span className={s.folhaClausulaN}>{String(bloco.clausula + 1).padStart(2, "0")}</span>
          <span className={s.folhaClausulaBarras}>
            <span style={{ width: "82%" }} />
            <span style={{ width: "56%" }} />
          </span>
        </div>
      );
    }
    return (
      <div className={s.folhaBloco} key={b}>
        {bloco.linhas.map((largura, i) => (
          <span key={i} className={s.folhaLinha} style={{ width: `${largura}%`, ...passo(n++) }} />
        ))}
      </div>
    );
  });
  const assinatura = n;

  const cartao = (item: Item, i: number) => (
    <div key={item.titulo} className={s.clausulaCartao} style={passo(passoDaClausula[i])}>
      <span className={s.clausulaN} aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
      <div>
        <Titulo className="cartao-titulo">{item.titulo}</Titulo>
        <p className="cartao-texto">{item.texto}</p>
      </div>
    </div>
  );

  return (
    <div ref={ref} className={s.contrato} data-fase={fase}>
      <div className={s.contratoCol}>{itens.slice(0, 2).map((item, i) => cartao(item, i))}</div>

      <div className={s.folhaEnvelope} aria-hidden="true">
        <div className={s.folha}>
          <div className={s.folhaTopo} style={passo(0)}>
            <span className={s.folhaSelo} />
            <span className={s.folhaTituloBarra} />
          </div>
          {folha}
          <div className={s.folhaAssinatura}>
            <span style={passo(assinatura)} />
            <span style={passo(assinatura + 1)} />
          </div>
        </div>
      </div>

      <div className={s.contratoCol}>{itens.slice(2).map((item, i) => cartao(item, i + 2))}</div>
    </div>
  );
}
