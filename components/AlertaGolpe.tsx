"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icon";
import styles from "./AlertaGolpe.module.css";

const CHAVE = "liscano-golpe-visto";

/**
 * Aviso sobre o golpe do falso advogado.
 * Aparece uma vez como painel; depois fica recolhido numa aba lateral,
 * que reabre ao clique. Sai do corpo da página para não roubar a leitura,
 * mas continua acessível — é informação de segurança, não banner de marketing.
 */
export function AlertaGolpe() {
  const [aberto, setAberto] = useState(false);
  const [pronto, setPronto] = useState(false);

  useEffect(() => {
    let visto = false;
    try { visto = localStorage.getItem(CHAVE) === "1"; } catch { /* sem storage */ }
    setPronto(true);
    if (visto) return;
    const t = window.setTimeout(() => setAberto(true), 4200);
    return () => window.clearTimeout(t);
  }, []);

  function fechar() {
    setAberto(false);
    try { localStorage.setItem(CHAVE, "1"); } catch { /* sem storage */ }
  }

  if (!pronto) return null;

  return (
    <>
      <button
        type="button"
        className={`${styles.aba} ${aberto ? styles.abaOculta : ""}`}
        onClick={() => setAberto(true)}
        aria-label="Abrir aviso de segurança sobre o golpe do falso advogado"
      >
        <Icon name="shield" size={17} />
        <span>Segurança</span>
      </button>

      <div className={`${styles.painel} ${aberto ? styles.visivel : ""}`} role="dialog" aria-modal="false" aria-labelledby="golpe-titulo" hidden={!aberto}>
        <div className={styles.topo}>
          <span className={styles.selo}>
            <Icon name="shield" size={15} />
            Aviso de segurança
          </span>
          <button type="button" onClick={fechar} className={styles.fechar} aria-label="Fechar aviso">
            <Icon name="plus" size={17} />
          </button>
        </div>

        <h2 id="golpe-titulo" className={styles.titulo}>
          O golpe do falso advogado acontece <em>toda semana</em>.
        </h2>

        <p>
          Alguém se passa pelo seu advogado, chama por fora e pede um pagamento urgente: custas,
          taxa, acordo. A pessoa está ansiosa com o processo, reconhece o nome e paga.
        </p>

        <p className={styles.regra}>
          Nenhum pedido de pagamento é feito fora do grupo oficial. Nunca.
        </p>

        <p className={styles.rodape}>
          Todo cliente tem um grupo de WhatsApp com os advogados identificados desde o primeiro
          dia. Se chamarem você em privado pedindo dinheiro em nome do escritório, é golpe, mesmo
          com nome, foto e inscrição corretos. Leve ao grupo e pergunte.
        </p>

        <button type="button" onClick={fechar} className="btn btn-primary">
          Entendi
        </button>
      </div>
    </>
  );
}
