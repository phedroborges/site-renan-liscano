"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const PADRAO_NUMERO = /(\d+(?:[.,]\d+)?)/;

function decompor(valor: string) {
  const correspondencia = valor.match(PADRAO_NUMERO);
  if (!correspondencia || correspondencia.index === undefined) return null;

  const numeroOriginal = correspondencia[1];
  const inicio = correspondencia.index;
  const fim = inicio + numeroOriginal.length;

  return {
    prefixo: valor.slice(0, inicio),
    numero: Number(numeroOriginal.replace(",", ".")),
    sufixo: valor.slice(fim),
    casas: numeroOriginal.includes(",") || numeroOriginal.includes(".")
      ? numeroOriginal.split(/[.,]/)[1].length
      : 0,
  };
}

export function NumeroAnimado({ valor, duracao = 1600 }: { valor: string; duracao?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const iniciou = useRef(false);
  const quadro = useRef<number | null>(null);
  const partes = decompor(valor);
  const alvo = partes?.numero ?? 0;
  const casas = partes?.casas ?? 0;
  const [numero, setNumero] = useState(0);

  const formatador = useMemo(
    () =>
      new Intl.NumberFormat("pt-BR", {
        minimumFractionDigits: casas,
        maximumFractionDigits: casas,
      }),
    [casas],
  );

  useEffect(() => {
    const elemento = ref.current;
    if (!elemento || !partes) return;

    const iniciar = () => {
      if (iniciou.current) return;
      iniciou.current = true;

      if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
        setNumero(alvo);
        return;
      }

      const inicio = performance.now();
      const animar = (agora: number) => {
        const progresso = Math.min((agora - inicio) / duracao, 1);
        const suavizado = 1 - Math.pow(1 - progresso, 3);
        setNumero(alvo * suavizado);

        if (progresso < 1) quadro.current = window.requestAnimationFrame(animar);
      };

      quadro.current = window.requestAnimationFrame(animar);
    };

    if (typeof IntersectionObserver === "undefined") {
      iniciar();
      return () => {
        if (quadro.current !== null) window.cancelAnimationFrame(quadro.current);
      };
    }

    const observador = new IntersectionObserver(
      (entradas) => {
        if (!entradas.some((entrada) => entrada.isIntersecting)) return;
        observador.disconnect();
        iniciar();
      },
      { threshold: 0.35 },
    );

    observador.observe(elemento);
    return () => {
      observador.disconnect();
      if (quadro.current !== null) window.cancelAnimationFrame(quadro.current);
    };
  }, [alvo, duracao, partes?.prefixo, partes?.sufixo]);

  if (!partes) return <span aria-hidden="true">{valor}</span>;

  return (
    <span ref={ref} aria-hidden="true">
      {partes.prefixo}
      {formatador.format(casas === 0 ? Math.round(numero) : numero)}
      {partes.sufixo}
    </span>
  );
}
