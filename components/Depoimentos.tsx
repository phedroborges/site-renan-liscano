import { carregarAvaliacoesGoogle } from "@/lib/google-avaliacoes";
import { Icon } from "./Icon";
import styles from "./Depoimentos.module.css";

function Estrelas({ nota }: { nota: number }) {
  const estrelas = Math.max(0, Math.min(5, Math.round(nota)));

  return (
    <span className={styles.estrelas} aria-label={`${nota} de 5 estrelas`}>
      {"â˜…".repeat(estrelas)}
      <span className={styles.estrelasVazias} aria-hidden="true">
        {"â˜…".repeat(5 - estrelas)}
      </span>
    </span>
  );
}

export async function Depoimentos() {
  const dados = await carregarAvaliacoesGoogle();

  return (
    <>
      {dados.origem === "google" && (
        <div className={styles.resumo}>
          <span className={styles.fonte}>AvaliaÃ§Ãµes do Google Maps</span>
          {dados.notaMedia !== undefined && <strong>{dados.notaMedia.toFixed(1)}</strong>}
          {dados.notaMedia !== undefined && <Estrelas nota={dados.notaMedia} />}
          {dados.totalAvaliacoes !== undefined && (
            <span className={styles.total}>{dados.totalAvaliacoes} avaliaÃ§Ãµes</span>
          )}
        </div>
      )}

      <div className={styles.parede}>
        {dados.depoimentos.map((depoimento) => (
          <figure
            key={`${depoimento.nome}-${depoimento.texto.slice(0, 24)}`}
            className={`${styles.card} ${depoimento.tamanho === "grande" ? styles.destaque : ""}`}
          >
            {depoimento.nota !== undefined ? <Estrelas nota={depoimento.nota} /> : null}
            <span className={styles.aspas} aria-hidden="true">
              &ldquo;
            </span>
            <blockquote className={styles.texto}>{depoimento.texto}</blockquote>
            <figcaption className={styles.autor}>
              {depoimento.fotoAutor ? (
                // A URL Ã© fornecida pela prÃ³pria API do Google Maps e pode variar por autor.
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  className={styles.avatarFoto}
                  src={depoimento.fotoAutor}
                  alt=""
                  width={40}
                  height={40}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <span className={styles.avatar} aria-hidden="true">
                  {depoimento.iniciais}
                </span>
              )}
              <span className={styles.ids}>
                {depoimento.perfilAutor ? (
                  <a
                    className={styles.nomeLink}
                    href={depoimento.perfilAutor}
                    target="_blank"
                    rel="noopener nofollow"
                  >
                    {depoimento.nome}
                  </a>
                ) : (
                  <span className={styles.nome}>{depoimento.nome}</span>
                )}
                {depoimento.papel && <span className={styles.papel}>{depoimento.papel}</span>}
                {depoimento.tempoRelativo && <span className={styles.tempo}>{depoimento.tempoRelativo}</span>}
                {depoimento.linkAvaliacao ? (
                  <a
                    className={styles.origem}
                    href={depoimento.linkAvaliacao}
                    target="_blank"
                    rel="noopener nofollow"
                  >
                    Ver avaliaÃ§Ã£o no Google Maps
                  </a>
                ) : null}
                {depoimento.handle && (
                  <span className={styles.linha2}>
                    <a
                      className={styles.handle}
                      href={`https://instagram.com/${depoimento.handle}`}
                      target="_blank"
                      rel="noopener nofollow"
                    >
                      <Icon name="instagram" size={12} />@{depoimento.handle}
                    </a>
                    <span className={styles.verificado}>
                      <Icon name="check" size={9} />
                      verificÃ¡vel
                    </span>
                  </span>
                )}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      {dados.origem === "google" && (
        <p className={styles.aviso}>
          O Google Maps seleciona e ordena as avaliaÃ§Ãµes por relevÃ¢ncia. As avaliaÃ§Ãµes nÃ£o sÃ£o verificadas pelo
          Google, que identifica e remove conteÃºdo falso quando detectado.
        </p>
      )}

      <div className={`acoes ${styles.google}`}>
        <a href={dados.perfilUrl} className="btn btn-quiet" target="_blank" rel="noopener">
          Veja todas as avaliaÃ§Ãµes no Google Maps <Icon name="arrow" size={15} />
        </a>
      </div>
    </>
  );
}

