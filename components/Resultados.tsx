import { RESULTADOS, RESULTADOS_POR_AREA, type AreaResultados } from "@/lib/resultados";
import { NumeroAnimado } from "@/components/NumeroAnimado";
import s from "./Resultados.module.css";

const TITULOS: Record<AreaResultados, string> = {
  geral: "O trabalho do escritório, em números.",
  tributario: "Atuação tributária, em números.",
  dividas: "Redução de dívidas, em números.",
  medico: "Direitos dos médicos, em números.",
  consumidor: "Direitos do consumidor, em números.",
};

export function Resultados({ area = "geral" }: { area?: AreaResultados }) {
  if (RESULTADOS_POR_AREA[area].length === 0) return null;

  return (
    <section className={`section ${s.secao}`} data-resultados={area} aria-labelledby={`resultados-${area}`}>
      <div className="wrap">
        <p className="kicker">Resultados</p>
        <div className="section-head">
          <h2 id={`resultados-${area}`}>{TITULOS[area]}</h2>
          <p className="note">Reduções, indenizações, empresas protegidas e presença do escritório.</p>
        </div>
        <dl className={s.grade}>
          {RESULTADOS_POR_AREA[area].map((chave) => {
            const resultado = RESULTADOS[chave];
            return (
              <div className={s.card} key={chave} data-indicador={chave}>
                <dt>{resultado.rotulo}</dt>
                <dd className={s.valor}>
                  <span className={s.somenteLeitor}>{resultado.valor}</span>
                  <NumeroAnimado valor={resultado.valor} />
                </dd>
              </div>
            );
          })}
        </dl>
        <p className={s.nota}>Resultados anteriores não garantem o desfecho de outros casos. Cada situação depende de análise individual.</p>
      </div>
    </section>
  );
}
