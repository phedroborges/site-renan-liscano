import { superendividamento, revisional, nomeNegativado } from "./paginas/dividas";
import { passivoEmpresarial, defesaExecucao, buscaApreensao, negociacaoDividas, restricaoInterna, planejamentoPatrimonial } from "./paginas/bancario-tributario";
import { auxilioMoradia, fies, processoEtico, registroMarca } from "./paginas/medico";
import { planoSaude, vooOverbooking } from "./paginas/consumidor";
import { registrato, cobranca } from "./paginas/credito-cobranca";

/** Catálogo das páginas individuais, compartilhado por rotas, áreas e sitemap. */
export const SERVICOS_POR_AREA = {
  dividas: [passivoEmpresarial, defesaExecucao, negociacaoDividas, revisional, buscaApreensao, superendividamento, nomeNegativado, restricaoInterna, registrato, planejamentoPatrimonial, cobranca],
  medico: [auxilioMoradia, fies, processoEtico, registroMarca],
  consumidor: [planoSaude, vooOverbooking],
};

export const SERVICOS = Object.values(SERVICOS_POR_AREA).flat();
