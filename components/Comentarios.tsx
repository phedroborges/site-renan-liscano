"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";
import type { Comentario } from "@/lib/comentarios";
import s from "./Comentarios.module.css";

/**
 * Comentários no fim do artigo. Mostra os aprovados e, onde há servidor,
 * o formulário. O que é enviado entra como pendente e só aparece depois de
 * aprovado no painel: o aviso diz isso antes de a pessoa escrever.
 */
export function Comentarios({ slug, aprovados, aceitaEnvio }: { slug: string; aprovados: Comentario[]; aceitaEnvio: boolean }) {
  const [nome, setNome] = useState("");
  const [texto, setTexto] = useState("");
  const [isca, setIsca] = useState("");
  const [estado, setEstado] = useState<"livre" | "enviando" | "enviado">("livre");
  const [erro, setErro] = useState("");

  async function enviar(evento: FormEvent) {
    evento.preventDefault();
    setEstado("enviando");
    setErro("");
    try {
      const resposta = await fetch("/api/comentarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, nome, texto, site: isca }),
      });
      const dado = await resposta.json().catch(() => ({ ok: false }));
      if (dado.ok) {
        setEstado("enviado");
        setNome("");
        setTexto("");
      } else {
        setErro(dado.erro ?? "Não foi possível enviar agora. Tente de novo.");
        setEstado("livre");
      }
    } catch {
      setErro("Sem conexão. Tente de novo.");
      setEstado("livre");
    }
  }

  return (
    <section className={s.bloco} aria-labelledby="comentarios-titulo">
      <h2 id="comentarios-titulo">Comentários</h2>

      {aprovados.length > 0 ? (
        <ol className={s.lista}>
          {aprovados.map((c) => (
            <li key={c.id}>
              <p className={s.autor}>
                <strong>{c.nome}</strong>
                <time dateTime={c.data}>{new Date(c.data).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}</time>
              </p>
              <p className={s.texto}>{c.texto}</p>
            </li>
          ))}
        </ol>
      ) : (
        <p className={s.vazio}>Nenhum comentário ainda.</p>
      )}

      {aceitaEnvio &&
        (estado === "enviado" ? (
          <p className={s.recebido} role="status">
            Comentário recebido. Ele aparece aqui depois de aprovado pela equipe do escritório.{" "}
            <button type="button" onClick={() => setEstado("livre")}>Escrever outro</button>
          </p>
        ) : (
          <form className={s.form} onSubmit={enviar}>
            <p className={s.aviso}>
              O comentário é público e passa por aprovação antes de aparecer. Não escreva dados pessoais nem
              detalhes do seu caso: para isso, fale com o escritório pelo{" "}
              <a href={site.whatsapp} target="_blank" rel="noopener">WhatsApp</a>.
            </p>
            <label className={s.campo}>
              <span>Nome</span>
              <input value={nome} onChange={(e) => setNome(e.target.value)} maxLength={60} autoComplete="given-name" required />
            </label>
            <label className={s.campo}>
              <span>Comentário</span>
              <textarea value={texto} onChange={(e) => setTexto(e.target.value)} maxLength={1500} rows={4} required />
            </label>
            {/* Armadilha para robôs: fora da tela e fora da navegação por teclado. */}
            <label className={s.isca} aria-hidden="true">
              Site
              <input value={isca} onChange={(e) => setIsca(e.target.value)} tabIndex={-1} autoComplete="off" />
            </label>
            {erro && <p className={s.erro} role="alert">{erro}</p>}
            <button type="submit" className={s.enviar} disabled={estado === "enviando"}>
              {estado === "enviando" ? "Enviando…" : "Enviar comentário"}
            </button>
          </form>
        ))}
    </section>
  );
}
