export const site = {
  nome: "Renan Liscano Advogados",
  advogado: "Renan Liscano",
  oab: "OAB/RS 120.306",
  /** Número do escritório, atendido pela Isa. */
  telefone: "(42) 9 9198-7371",
  whatsapp: "https://wa.me/5542991987371",
  instagram: "https://instagram.com/renanliscano",
  /** Perfil no Google Meu Negócio, onde estão as avaliações públicas. */
  avaliacoesGoogle: "https://share.google/7bAswrGhykxPiyC8E",
  // TODO confirmar: o site atual diz 23 numa página e 25 em outra.
  alcance: "todo o Brasil",
} as const;

/** Mensagem pré-preenchida do WhatsApp, por contexto de origem. */
export function whats(contexto?: string) {
  const base = "Olá! Vim pelo site";
  const texto = contexto ? `${base}, ${contexto}.` : `${base}.`;
  return `${site.whatsapp}?text=${encodeURIComponent(texto)}`;
}

/** Centroides aproximados dos 26 estados + DF, em graus. */
export const ESTADOS: { uf: string; lat: number; lng: number }[] = [
  { uf: "RR", lat: 2.1, lng: -61.4 },
  { uf: "AP", lat: 1.4, lng: -51.8 },
  { uf: "AM", lat: -4.2, lng: -64.0 },
  { uf: "PA", lat: -4.0, lng: -53.0 },
  { uf: "AC", lat: -9.0, lng: -70.5 },
  { uf: "RO", lat: -10.9, lng: -63.0 },
  { uf: "MA", lat: -5.0, lng: -45.3 },
  { uf: "CE", lat: -5.5, lng: -39.6 },
  { uf: "RN", lat: -5.8, lng: -36.6 },
  { uf: "PB", lat: -7.2, lng: -36.7 },
  { uf: "PE", lat: -8.4, lng: -37.9 },
  { uf: "AL", lat: -9.6, lng: -36.6 },
  { uf: "SE", lat: -10.6, lng: -37.4 },
  { uf: "PI", lat: -7.5, lng: -42.8 },
  { uf: "TO", lat: -10.2, lng: -48.3 },
  { uf: "BA", lat: -12.5, lng: -41.7 },
  { uf: "MT", lat: -13.0, lng: -55.9 },
  { uf: "DF", lat: -15.8, lng: -47.9 },
  { uf: "GO", lat: -16.0, lng: -49.6 },
  { uf: "MG", lat: -18.6, lng: -44.5 },
  { uf: "ES", lat: -19.6, lng: -40.7 },
  { uf: "MS", lat: -20.5, lng: -54.6 },
  { uf: "RJ", lat: -22.2, lng: -42.7 },
  { uf: "SP", lat: -22.2, lng: -48.7 },
  { uf: "PR", lat: -24.6, lng: -51.6 },
  { uf: "SC", lat: -27.3, lng: -50.5 },
  { uf: "RS", lat: -29.7, lng: -53.3 },
];
