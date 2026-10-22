export type AreaResultados = "geral" | "tributario" | "dividas" | "medico" | "consumidor";

/** Indicadores informados pelo Renan no documento de correções.
 * Os totais não devem ser somados: representam medidas diferentes.
 * Nenhum período foi informado no documento.
 */
export const RESULTADOS = {
  bancario: { rotulo: "Em reduções bancárias e indenizações", valor: "R$ 6,3 mi" },
  empresas: { rotulo: "Empresas protegidas", valor: "+300" },
  medico: { rotulo: "Em direitos médicos", valor: "+R$ 2,9 mi" },
  presenca: { rotulo: "Presença combativa", valor: "23 Estados" },
};

export const RESULTADOS_POR_AREA: Record<AreaResultados, (keyof typeof RESULTADOS)[]> = {
  geral: ["bancario", "empresas", "medico", "presenca"],
  dividas: ["bancario", "empresas"],
  tributario: [],
  medico: ["medico"],
  consumidor: [],
};
