import { RESULTADOS, RESULTADOS_POR_AREA, RESULTADOS_PROTOTIPO_HOME, formatarResultado, type AreaResultados } from "@/lib/resultados";
import s from "./Resultados.module.css";

const TITULOS: Record<AreaResultados, string> = {
  geral: "O trabalho do escritório, em números.",
  tributario: "Atuação tributária, em números.",
  dividas: "Redução de dívidas, em números.",
  medico: "Direitos dos médicos, em números.",
  consumidor: "Direitos do consumidor, em números.",
};

export function Resultados({ area = "geral" }: { area?: AreaResultados }) {
  const exibirSimulado = area === "geral" || area === "tributario";
  /* Sem número nenhum a seção virava um "R$ —" solitário, que numa página de
     conversão pesa contra. Some inteira e volta sozinha quando o levantamento
     preencher RESULTADOS, não preencher com estimativa. */
  const temAlgumValor = RESULTADOS_POR_AREA[area].some((chave) =>
    Boolean(formatarResultado(RESULTADOS[chave]) ?? (exibirSimulado ? RESULTADOS_PROTOTIPO_HOME[chave] : undefined)),
  );
  if (!temAlgumValor) return null;

  return (
    <section className={`section ${s.secao}`} data-resultados={area} aria-labelledby={`resultados-${area}`}>
      <div className="wrap">
        <p className="kicker">Resultados</p>
        <div className="section-head">
          <h2 id={`resultados-${area}`}>{TITULOS[area]}</h2>
          <p className="note">Dívidas reduzidas e valores recuperados, apresentados separadamente.</p>
        </div>
        <dl className={s.grade}>
          {RESULTADOS_POR_AREA[area].map((chave) => {
            const resultado = RESULTADOS[chave];
            const valor = formatarResultado(resultado);
            const valorSimulado = exibirSimulado && !valor ? RESULTADOS_PROTOTIPO_HOME[chave] : undefined;
            return (
              <div className={s.card} key={chave} data-indicador={chave}>
                <dt>{resultado.rotulo}</dt>
                <dd className={s.valor}>{valor ?? valorSimulado ?? <span aria-label="Valor ainda não disponível">R$ —</span>}</dd>
                <dd className={s.descricao}>{resultado.descricao}</dd>
                <dd className={s.periodo}>{valor ? `Período: ${resultado.periodo}` : valorSimulado ? "Valor simulado · Protótipo" : "Valores em levantamento"}</dd>
              </div>
            );
          })}
        </dl>
        <p className={s.nota}>Resultados anteriores não garantem o desfecho de outros casos. Cada situação depende de análise individual.</p>
      </div>
    </section>
  );
}
