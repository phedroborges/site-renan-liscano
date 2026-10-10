export type AreaResultados = "geral" | "tributario" | "dividas" | "medico" | "consumidor";

type Resultado = {
  rotulo: string;
  descricao: string;
  /** Total em reais. Manter null até receber os dados consolidados. */
  valor: number | null;
  /** Período a que o valor se refere, exibido junto ao número. */
  periodo: string | null;
};

/** Fonte única para todas as páginas. Não preencher com estimativas da reunião.
 * Redução de saldo e dinheiro efetivamente recebido são indicadores distintos.
 * Registrar a documentação de suporte no levantamento privado do escritório.
 */
export const RESULTADOS = {
  bancario: { rotulo: "Dívidas bancárias reduzidas", descricao: "Redução do saldo devedor em acordos e revisões de contratos.", valor: null, periodo: null },
  medico: { rotulo: "Valores recuperados para médicos", descricao: "Valores efetivamente recebidos em demandas de direitos médicos, sem somar abatimentos do FIES.", valor: null, periodo: null },
  fies: { rotulo: "Saldo do FIES reduzido", descricao: "Abatimentos efetivados no financiamento estudantil de médicos.", valor: null, periodo: null },
  tributario: { rotulo: "Passivo tributário reduzido", descricao: "Redução efetivada de débitos fiscais em negociações e defesas.", valor: null, periodo: null },
  consumidor: { rotulo: "Valores recuperados para consumidores", descricao: "Reembolsos, restituições e indenizações efetivamente recebidos.", valor: null, periodo: null },
} satisfies Record<string, Resultado>;

export const RESULTADOS_POR_AREA: Record<AreaResultados, (keyof typeof RESULTADOS)[]> = {
  geral: ["bancario", "medico", "tributario", "consumidor"],
  dividas: ["bancario"],
  tributario: ["tributario"],
  medico: ["medico", "fies"],
  consumidor: ["consumidor"],
};

/** Valores fictícios para a apresentação da home, separados dos dados reais. */
export const RESULTADOS_PROTOTIPO_HOME: Partial<Record<keyof typeof RESULTADOS, string>> = {
  bancario: "R$ 8,5 mi",
  medico: "R$ 2,3 mi",
  tributario: "R$ 4,7 mi",
  consumidor: "R$ 680 mil",
};

export function formatarResultado(resultado: Resultado) {
  if (resultado.valor === null || !Number.isFinite(resultado.valor) || resultado.valor < 0 || !resultado.periodo?.trim()) return null;
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 2 }).format(resultado.valor);
}
