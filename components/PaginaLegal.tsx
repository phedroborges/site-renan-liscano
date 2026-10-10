import type { ReactNode } from "react";
import s from "./PaginaLegal.module.css";

export function PaginaLegal({ id, titulo, atualizado, children }: { id: string; titulo: string; atualizado?: string; children: ReactNode }) {
  return (
    <section id={id} className={s.papel} aria-labelledby={`${id}-titulo`}>
      <div className={`wrap ${s.caixa}`}>
        <details>
          <summary><h2 id={`${id}-titulo`} className={s.h1}>{titulo}</h2></summary>
          {atualizado && <p className={s.data}>Última atualização: {atualizado}</p>}
          <div className={s.corpo}>{children}</div>
        </details>
      </div>
    </section>
  );
}
