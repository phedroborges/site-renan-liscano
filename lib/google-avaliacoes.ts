import { DEPOIMENTOS } from "@/lib/conteudo";
import { site } from "@/lib/site";

export type DepoimentoExibido = {
  texto: string;
  nome: string;
  iniciais: string;
  tamanho: "grande" | "medio" | "curto";
  papel?: string;
  handle?: string;
  nota?: number;
  tempoRelativo?: string;
  perfilAutor?: string;
  fotoAutor?: string;
  linkAvaliacao?: string;
};

export type DadosAvaliacoes = {
  depoimentos: DepoimentoExibido[];
  origem: "google" | "fallback";
  perfilUrl: string;
  notaMedia?: number;
  totalAvaliacoes?: number;
};

type TextoGoogle = {
  text?: string;
  languageCode?: string;
};

type AvaliacaoGoogle = {
  rating?: number;
  relativePublishTimeDescription?: string;
  text?: TextoGoogle;
  originalText?: TextoGoogle;
  googleMapsUri?: string;
  authorAttribution?: {
    displayName?: string;
    uri?: string;
    photoUri?: string;
  };
};

type LugarGoogle = {
  id?: string;
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: AvaliacaoGoogle[];
};

const UM_DIA = 60 * 60 * 24;
const CAMPOS_LUGAR = "id,rating,userRatingCount,googleMapsUri,reviews";

function obterIniciais(nome: string) {
  return nome
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((parte) => parte[0]?.toUpperCase())
    .join("");
}

function tamanhoDoTexto(texto: string): DepoimentoExibido["tamanho"] {
  if (texto.length >= 220) return "grande";
  if (texto.length >= 90) return "medio";
  return "curto";
}

function fallback(): DadosAvaliacoes {
  return {
    depoimentos: DEPOIMENTOS,
    origem: "fallback",
    perfilUrl: site.avaliacoesGoogle,
  };
}

async function buscarPorId(chave: string, placeId: string): Promise<LugarGoogle> {
  const resposta = await fetch(
    `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?languageCode=pt-BR`,
    {
      headers: {
        "X-Goog-Api-Key": chave,
        "X-Goog-FieldMask": CAMPOS_LUGAR,
      },
      next: { revalidate: UM_DIA },
    },
  );

  if (!resposta.ok) throw new Error(`Google Places respondeu ${resposta.status}`);
  return resposta.json() as Promise<LugarGoogle>;
}

async function buscarPorTexto(chave: string, consulta: string): Promise<LugarGoogle | undefined> {
  const resposta = await fetch("https://places.googleapis.com/v1/places:searchText", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": chave,
      "X-Goog-FieldMask": `places.${CAMPOS_LUGAR.split(",").join(",places.")}`,
    },
    body: JSON.stringify({
      textQuery: consulta,
      languageCode: "pt-BR",
      regionCode: "BR",
      maxResultCount: 1,
    }),
    next: { revalidate: UM_DIA },
  });

  if (!resposta.ok) throw new Error(`Google Places respondeu ${resposta.status}`);
  const dados = (await resposta.json()) as { places?: LugarGoogle[] };
  return dados.places?.[0];
}

export async function carregarAvaliacoesGoogle(): Promise<DadosAvaliacoes> {
  const chave = process.env.GOOGLE_PLACES_API_KEY?.trim();
  if (!chave) return fallback();

  try {
    const placeId = process.env.GOOGLE_PLACE_ID?.trim();
    const consulta =
      process.env.GOOGLE_PLACE_QUERY?.trim() ||
      "Renan Liscano Advogados, Rua Souza Dutra 482, Florianópolis, SC";
    const lugar = placeId ? await buscarPorId(chave, placeId) : await buscarPorTexto(chave, consulta);

    const depoimentos = (lugar?.reviews ?? [])
      .map((avaliacao): DepoimentoExibido | null => {
        const texto = avaliacao.text?.text?.trim() || avaliacao.originalText?.text?.trim();
        const nome = avaliacao.authorAttribution?.displayName?.trim();
        if (!texto || !nome) return null;

        return {
          texto,
          nome,
          iniciais: obterIniciais(nome),
          tamanho: tamanhoDoTexto(texto),
          nota: avaliacao.rating,
          tempoRelativo: avaliacao.relativePublishTimeDescription,
          perfilAutor: avaliacao.authorAttribution?.uri,
          fotoAutor: avaliacao.authorAttribution?.photoUri,
          linkAvaliacao: avaliacao.googleMapsUri || lugar?.googleMapsUri || site.avaliacoesGoogle,
        };
      })
      .filter((avaliacao): avaliacao is DepoimentoExibido => avaliacao !== null);

    if (!lugar || depoimentos.length === 0) return fallback();

    return {
      depoimentos,
      origem: "google",
      perfilUrl: lugar.googleMapsUri || site.avaliacoesGoogle,
      notaMedia: lugar.rating,
      totalAvaliacoes: lugar.userRatingCount,
    };
  } catch (erro) {
    console.warn("Não foi possível carregar as avaliações do Google Places.", erro);
    return fallback();
  }
}

