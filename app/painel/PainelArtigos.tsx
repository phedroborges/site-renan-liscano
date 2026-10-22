"use client";

import { useState, useTransition, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { Artigo } from "@/lib/artigos";
import type { ArtigoComOrigem, Origem } from "@/lib/artigos-painel";
import type { Comentario } from "@/lib/comentarios";
import { excluirArtigo, moderarComentario, salvarArtigo } from "./acoes";
import s from "./painel.module.css";

type Destino = { href: string; titulo: string };
type Opcao = { valor: string; rotulo: string };

/* O formulário trabalha com texto corrido: parágrafos separados por linha em
   branco e itens de lista no formato "Título: descrição". A conversão para o
   formato do artigo acontece só na hora de salvar. */
type SecaoRascunho = { h2: string; texto: string; lista: string };
type Rascunho = {
  slug: string;
  pergunta: string;
  resposta: string;
  publico: string;
  tema: string;
  data: string;
  baseLegal: string;
  secoes: SecaoRascunho[];
  ressalvaH2: string;
  ressalvaTexto: string;
  servicoHref: string;
  servicoTexto: string;
  relacionados: string[];
};

const ROTULO_ORIGEM: Record<Origem, string> = {
  codigo: "Original do site",
  editado: "Original, editado no painel",
  painel: "Criado no painel",
};

const hoje = () => new Date().toLocaleDateString("sv-SE");

function paraEndereco(texto: string) {
  return texto
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80)
    .replace(/-+$/g, "");
}

const juntarParagrafos = (paras: string[]) => paras.join("\n\n");
const separarParagrafos = (texto: string) => texto.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);

function rascunhoVazio(): Rascunho {
  return {
    slug: "",
    pergunta: "",
    resposta: "",
    publico: "",
    tema: "",
    data: hoje(),
    baseLegal: "",
    secoes: [{ h2: "", texto: "", lista: "" }],
    ressalvaH2: "Quando isso não se aplica",
    ressalvaTexto: "",
    servicoHref: "",
    servicoTexto: "",
    relacionados: [],
  };
}

function paraRascunho(a: Artigo): Rascunho {
  return {
    slug: a.slug,
    pergunta: a.pergunta,
    resposta: a.resposta,
    publico: a.publico,
    tema: a.tema,
    data: a.data,
    baseLegal: a.baseLegal ?? "",
    secoes: a.secoes.map((sec) => ({
      h2: sec.h2,
      texto: juntarParagrafos(sec.paras),
      lista: (sec.lista ?? []).map((i) => `${i.t}: ${i.d}`).join("\n"),
    })),
    ressalvaH2: a.ressalva.h2,
    ressalvaTexto: juntarParagrafos(a.ressalva.paras),
    servicoHref: a.servico.href,
    servicoTexto: a.servico.texto,
    relacionados: a.relacionados,
  };
}

function paraArtigo(r: Rascunho) {
  return {
    slug: r.slug,
    pergunta: r.pergunta,
    resposta: r.resposta,
    publico: r.publico,
    tema: r.tema,
    data: r.data,
    baseLegal: r.baseLegal,
    secoes: r.secoes.map((sec) => ({
      h2: sec.h2,
      paras: separarParagrafos(sec.texto),
      lista: sec.lista
        .split("\n")
        .map((linha) => linha.trim())
        .filter(Boolean)
        .map((linha) => {
          const corte = linha.indexOf(":");
          return corte === -1 ? { t: linha, d: "" } : { t: linha.slice(0, corte).trim(), d: linha.slice(corte + 1).trim() };
        }),
    })),
    ressalva: { h2: r.ressalvaH2, paras: separarParagrafos(r.ressalvaTexto) },
    servico: { href: r.servicoHref, texto: r.servicoTexto },
    relacionados: r.relacionados,
  };
}

type Edicao = { novo: boolean; origem: Origem | null; rascunho: Rascunho; enderecoManual: boolean };
type Aviso = { tipo: "ok" | "erro"; texto: string; slug?: string };

export function PainelArtigos({
  artigos,
  comentarios,
  destinos,
  publicos,
}: {
  artigos: ArtigoComOrigem[];
  comentarios: Comentario[];
  destinos: Destino[];
  publicos: Opcao[];
}) {
  const router = useRouter();
  const [edicao, setEdicao] = useState<Edicao | null>(null);
  const [aviso, setAviso] = useState<Aviso | null>(null);
  const [confirmarExclusao, setConfirmarExclusao] = useState(false);
  const [salvando, iniciar] = useTransition();
  // id do comentário com o "Apagar" aberto para confirmação
  const [apagandoComentario, setApagandoComentario] = useState<string | null>(null);

  function abrir(artigo: ArtigoComOrigem | null) {
    setAviso(null);
    setConfirmarExclusao(false);
    setEdicao(
      artigo
        ? { novo: false, origem: artigo.origem, rascunho: paraRascunho(artigo), enderecoManual: true }
        : { novo: true, origem: null, rascunho: rascunhoVazio(), enderecoManual: false }
    );
    window.scrollTo({ top: 0 });
  }

  function mudar(campos: Partial<Rascunho>) {
    setEdicao((e) => {
      if (!e) return e;
      const rascunho = { ...e.rascunho, ...campos };
      // Enquanto o endereço não foi mexido à mão, ele acompanha a pergunta.
      if (e.novo && !e.enderecoManual && campos.pergunta !== undefined) rascunho.slug = paraEndereco(campos.pergunta);
      return { ...e, rascunho };
    });
  }

  function mudarSecao(i: number, campos: Partial<SecaoRascunho>) {
    if (!edicao) return;
    mudar({ secoes: edicao.rascunho.secoes.map((sec, j) => (j === i ? { ...sec, ...campos } : sec)) });
  }

  function moverSecao(i: number, passo: -1 | 1) {
    if (!edicao) return;
    const secoes = [...edicao.rascunho.secoes];
    const destino = i + passo;
    if (destino < 0 || destino >= secoes.length) return;
    [secoes[i], secoes[destino]] = [secoes[destino], secoes[i]];
    mudar({ secoes });
  }

  function salvar(evento: FormEvent) {
    evento.preventDefault();
    if (!edicao) return;
    iniciar(async () => {
      const resultado = await salvarArtigo(paraArtigo(edicao.rascunho), edicao.novo);
      if (resultado.ok) {
        setAviso({ tipo: "ok", texto: edicao.novo ? "Artigo publicado." : "Alterações publicadas.", slug: resultado.slug });
        setEdicao({ ...edicao, novo: false, origem: edicao.origem === "codigo" ? "editado" : edicao.origem ?? "painel", enderecoManual: true });
        router.refresh();
      } else {
        setAviso({ tipo: "erro", texto: resultado.erro });
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  function excluir() {
    if (!edicao) return;
    iniciar(async () => {
      const resultado = await excluirArtigo(edicao.rascunho.slug);
      if (resultado.ok) {
        setAviso({
          tipo: "ok",
          texto: edicao.origem === "editado" ? "Edição desfeita: o artigo voltou ao texto original." : "Artigo apagado.",
        });
        setEdicao(null);
        router.refresh();
      } else {
        setAviso({ tipo: "erro", texto: resultado.erro });
      }
      setConfirmarExclusao(false);
    });
  }

  function moderar(c: Comentario, acao: "aprovar" | "apagar") {
    iniciar(async () => {
      const resultado = await moderarComentario(c.slug, c.id, acao);
      setAviso(
        resultado.ok
          ? { tipo: "ok", texto: acao === "aprovar" ? `Comentário de ${c.nome} publicado.` : "Comentário apagado.", slug: acao === "aprovar" ? c.slug : undefined }
          : { tipo: "erro", texto: resultado.erro }
      );
      setApagandoComentario(null);
      router.refresh();
    });
  }

  const tituloDe = (slug: string) => artigos.find((a) => a.slug === slug)?.pergunta ?? slug;
  const pendentes = comentarios.filter((c) => c.status === "pendente").length;

  const avisoBloco = aviso && (
    <p className={aviso.tipo === "ok" ? s.avisoOk : s.avisoErro} role="status">
      {aviso.texto}{" "}
      {aviso.slug && (
        <Link href={`/blog/${aviso.slug}`} target="_blank">
          Ver no site
        </Link>
      )}
    </p>
  );

  /* ---------------- lista ---------------- */
  if (!edicao) {
    return (
      <section className={`wrap ${s.pagina}`}>
        <p className="kicker">Painel · modo de teste, sem login</p>
        <div className={s.topo}>
          <h1 className="titulo-destaque">Artigos do blog</h1>
          <button type="button" className="btn btn-primary" onClick={() => abrir(null)}>
            Novo artigo
          </button>
        </div>
        {avisoBloco}

        {comentarios.length > 0 && (
          <div className={s.comentarios}>
            <h2>
              Comentários
              {pendentes > 0 && <span className={s.contador}>{pendentes} aguardando aprovação</span>}
            </h2>
            <ul>
              {comentarios.map((c) => (
                <li key={c.id} className={c.status === "pendente" ? s.pendente : undefined}>
                  <p className={s.meta}>
                    <span className={c.status === "pendente" ? s.origem_editado : s.origem_painel}>
                      {c.status === "pendente" ? "Aguardando" : "Publicado"}
                    </span>{" "}
                    · {new Date(c.data).toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" })} · em “{tituloDe(c.slug)}”
                  </p>
                  <p className={s.comentarioTexto}>
                    <strong>{c.nome}:</strong> {c.texto}
                  </p>
                  <div className={s.linhaAcoes}>
                    {c.status === "pendente" && (
                      <button type="button" className={s.botaoSecundario} onClick={() => moderar(c, "aprovar")} disabled={salvando}>
                        Aprovar
                      </button>
                    )}
                    {apagandoComentario === c.id ? (
                      <span className={s.confirmar}>
                        Apagar de vez?
                        <button type="button" className={s.botaoPerigo} onClick={() => moderar(c, "apagar")} disabled={salvando}>Confirmar</button>
                        <button type="button" className={s.botaoSecundario} onClick={() => setApagandoComentario(null)}>Cancelar</button>
                      </span>
                    ) : (
                      <button type="button" className={s.botaoSecundario} onClick={() => setApagandoComentario(c.id)}>
                        Apagar
                      </button>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        <h2 className={s.subtitulo}>Artigos</h2>
        <ul className={s.lista}>
          {artigos.map((a) => (
            <li key={a.slug} className={s.linha}>
              <div className={s.linhaTexto}>
                <strong>{a.pergunta}</strong>
                <span className={s.meta}>
                  {a.publicoRotulo} · {a.tema} · {new Date(`${a.data}T12:00:00`).toLocaleDateString("pt-BR")} ·{" "}
                  <span className={s[`origem_${a.origem}`]}>{ROTULO_ORIGEM[a.origem]}</span>
                </span>
              </div>
              <div className={s.linhaAcoes}>
                <Link href={`/blog/${a.slug}`} target="_blank" className="btn btn-quiet">
                  Ver
                </Link>
                <button type="button" className={s.botaoSecundario} onClick={() => abrir(a)}>
                  Editar
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  /* ---------------- editor ---------------- */
  const r = edicao.rascunho;
  const outros = artigos.filter((a) => a.slug !== r.slug);

  return (
    <section className={`wrap ${s.pagina}`}>
      <p className="kicker">{edicao.novo ? "Novo artigo" : ROTULO_ORIGEM[edicao.origem ?? "painel"]}</p>
      <div className={s.topo}>
        <h1 className="titulo-destaque">{edicao.novo ? "Escrever artigo" : "Editar artigo"}</h1>
        <button type="button" className="btn btn-quiet" onClick={() => { setEdicao(null); setAviso(null); }}>
          Voltar para a lista
        </button>
      </div>
      {avisoBloco}

      <form className={s.form} onSubmit={salvar}>
        <fieldset className={s.grupo}>
          <legend>O artigo</legend>
          <label className={s.campo}>
            <span>Pergunta (título do artigo)</span>
            <input value={r.pergunta} onChange={(e) => mudar({ pergunta: e.target.value })} maxLength={200} required />
          </label>
          <label className={s.campo}>
            <span>Endereço</span>
            <span className={s.endereco}>
              <span>renanliscano.adv.br/blog/</span>
              <input
                value={r.slug}
                onChange={(e) => setEdicao({ ...edicao, enderecoManual: true, rascunho: { ...r, slug: paraEndereco(e.target.value) } })}
                disabled={!edicao.novo}
                maxLength={90}
                required
              />
            </span>
            <small>{edicao.novo ? "Preenchido a partir da pergunta. Depois de publicado, não muda, para não quebrar links." : "O endereço não muda depois de publicado."}</small>
          </label>
          <label className={s.campo}>
            <span>Resposta curta</span>
            <textarea value={r.resposta} onChange={(e) => mudar({ resposta: e.target.value })} rows={3} maxLength={600} required />
            <small>Aparece em destaque no começo do artigo e no cartão do blog. Responda a pergunta direto.</small>
          </label>
          <div className={s.colunas}>
            <label className={s.campo}>
              <span>Público</span>
              <select value={r.publico} onChange={(e) => mudar({ publico: e.target.value })} required>
                <option value="">Escolha</option>
                {publicos.map((p) => (
                  <option key={p.valor} value={p.valor}>{p.rotulo}</option>
                ))}
              </select>
            </label>
            <label className={s.campo}>
              <span>Tema</span>
              <input value={r.tema} onChange={(e) => mudar({ tema: e.target.value })} maxLength={40} placeholder="Ex.: FIES" required />
            </label>
            <label className={s.campo}>
              <span>Data</span>
              <input type="date" value={r.data} onChange={(e) => mudar({ data: e.target.value })} required />
            </label>
          </div>
          <label className={s.campo}>
            <span>Base legal (opcional)</span>
            <input value={r.baseLegal} onChange={(e) => mudar({ baseLegal: e.target.value })} maxLength={200} placeholder="Ex.: Lei 10.260/2001, art. 6º-B" />
          </label>
        </fieldset>

        <fieldset className={s.grupo}>
          <legend>Seções</legend>
          {r.secoes.map((sec, i) => (
            <div key={i} className={s.secao}>
              <div className={s.secaoTopo}>
                <span className={s.secaoN}>{String(i + 1).padStart(2, "0")}</span>
                <div className={s.secaoAcoes}>
                  <button type="button" onClick={() => moverSecao(i, -1)} disabled={i === 0} aria-label={`Subir a seção ${i + 1}`}>↑</button>
                  <button type="button" onClick={() => moverSecao(i, 1)} disabled={i === r.secoes.length - 1} aria-label={`Descer a seção ${i + 1}`}>↓</button>
                  <button type="button" onClick={() => mudar({ secoes: r.secoes.filter((_, j) => j !== i) })} disabled={r.secoes.length === 1}>
                    Remover
                  </button>
                </div>
              </div>
              <label className={s.campo}>
                <span>Título da seção</span>
                <input value={sec.h2} onChange={(e) => mudarSecao(i, { h2: e.target.value })} maxLength={160} required />
              </label>
              <label className={s.campo}>
                <span>Texto</span>
                <textarea value={sec.texto} onChange={(e) => mudarSecao(i, { texto: e.target.value })} rows={6} />
                <small>Deixe uma linha em branco entre um parágrafo e outro.</small>
              </label>
              <label className={s.campo}>
                <span>Lista (opcional)</span>
                <textarea value={sec.lista} onChange={(e) => mudarSecao(i, { lista: e.target.value })} rows={3} placeholder={"A localidade: Não basta ter trabalhado em UBS.\nA comprovação: Contrato, portaria, declaração."} />
                <small>Um item por linha, no formato “Título: descrição”.</small>
              </label>
            </div>
          ))}
          <button type="button" className={s.botaoSecundario} onClick={() => mudar({ secoes: [...r.secoes, { h2: "", texto: "", lista: "" }] })}>
            Adicionar seção
          </button>
        </fieldset>

        <fieldset className={s.grupo}>
          <legend>Ressalva</legend>
          <label className={s.campo}>
            <span>Título</span>
            <input value={r.ressalvaH2} onChange={(e) => mudar({ ressalvaH2: e.target.value })} maxLength={160} required />
          </label>
          <label className={s.campo}>
            <span>Texto</span>
            <textarea value={r.ressalvaTexto} onChange={(e) => mudar({ ressalvaTexto: e.target.value })} rows={4} required />
            <small>Quando a resposta não vale. Fica num quadro no fim do artigo.</small>
          </label>
        </fieldset>

        <fieldset className={s.grupo}>
          <legend>Ligações</legend>
          <div className={s.colunas}>
            <label className={s.campo}>
              <span>Página de serviço indicada</span>
              <select value={r.servicoHref} onChange={(e) => mudar({ servicoHref: e.target.value })} required>
                <option value="">Escolha</option>
                {destinos.map((d) => (
                  <option key={d.href} value={d.href}>{d.titulo}</option>
                ))}
              </select>
            </label>
            <label className={s.campo}>
              <span>Texto do link</span>
              <input value={r.servicoTexto} onChange={(e) => mudar({ servicoTexto: e.target.value })} maxLength={80} placeholder="Ex.: Entender o abatimento do FIES" required />
            </label>
          </div>
          <div className={s.campo}>
            <span>Artigos relacionados (até 6)</span>
            <div className={s.marcas}>
              {outros.map((a) => {
                const marcado = r.relacionados.includes(a.slug);
                return (
                  <label key={a.slug}>
                    <input
                      type="checkbox"
                      checked={marcado}
                      disabled={!marcado && r.relacionados.length >= 6}
                      onChange={() => mudar({ relacionados: marcado ? r.relacionados.filter((x) => x !== a.slug) : [...r.relacionados, a.slug] })}
                    />
                    {a.pergunta}
                  </label>
                );
              })}
            </div>
          </div>
        </fieldset>

        <div className={s.rodape}>
          <button type="submit" className="btn btn-primary btn-lg" disabled={salvando}>
            {salvando ? "Publicando…" : edicao.novo ? "Publicar artigo" : "Publicar alterações"}
          </button>
          {!edicao.novo && edicao.origem !== "codigo" && (
            confirmarExclusao ? (
              <span className={s.confirmar}>
                {edicao.origem === "editado" ? "Voltar ao texto original?" : "Apagar o artigo do site?"}
                <button type="button" className={s.botaoPerigo} onClick={excluir} disabled={salvando}>Confirmar</button>
                <button type="button" className={s.botaoSecundario} onClick={() => setConfirmarExclusao(false)}>Cancelar</button>
              </span>
            ) : (
              <button type="button" className={s.botaoSecundario} onClick={() => setConfirmarExclusao(true)}>
                {edicao.origem === "editado" ? "Desfazer edição" : "Apagar artigo"}
              </button>
            )
          )}
        </div>
      </form>
    </section>
  );
}
