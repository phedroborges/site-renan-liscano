import Link from "next/link";
import { SERVICOS_POR_AREA } from "@/lib/servicos";
import { site, whats } from "@/lib/site";
import { Icon } from "./Icon";
import styles from "./Footer.module.css";

const COLUNAS = [
  ...Object.entries(SERVICOS_POR_AREA).map(([area, servicos]) => ({
    titulo: area === "dividas" ? "Bancário e empresarial" : area === "medico" ? "Direito médico" : "Direito do consumidor",
    itens: servicos.map((servico) => ({ href: servico.slug, label: servico.titulo })),
  })),
  {
    titulo: "Direito tributário",
    itens: [{ href: "/tributario", label: "Dívida ativa e execução fiscal" }],
  },
  {
    titulo: "Escritório",
    itens: [
      { href: "/sobre", label: "Sobre" },
      { href: "/blog", label: "Blog" },
      { href: "/contato", label: "Contato" },
    ],
  },
];

export function Footer() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.chamada}>
        <div className="wrap">
          <p className="kicker">Fale com o advogado</p>
          <h2 className={`titulo-hero ${styles.titulo}`}>
            Manda a sua dúvida. A resposta é <em className="metal">gratuita</em>.
          </h2>
          <p className={styles.apoio}>
            Trinta minutos para saber se existe caso. Sem compromisso de contratar.
          </p>
          <a href={whats("rodapé do site")} className="btn btn-primary btn-lg" target="_blank" rel="noopener">
            <Icon name="whatsapp" size={18} />
            Chamar no WhatsApp
          </a>
          <p className={styles.telefone}>{site.telefone}</p>
        </div>
      </div>

      <div className={`wrap ${styles.aviso}`}>
        <Icon name="shield" size={18} />
        <p>
          <strong>Nenhum pedido de pagamento é feito fora do grupo oficial.</strong>{" "}
          Se alguém chamar você em privado pedindo dinheiro em nome do escritório, é golpe.
        </p>
      </div>

      <div className={`wrap ${styles.mapa}`}>
        {COLUNAS.map((c) => (
          <div key={c.titulo}>
            <p className={styles.colTitulo}>{c.titulo}</p>
            <ul>
              {c.itens.map((i) => (
                <li key={i.href}>
                  <Link href={i.href}>{i.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={`wrap ${styles.base}`}>
        <p>
          {site.nome} · <span className="mono">{site.oab}</span>
        </p>
        <p className={styles.legais}>
          <Link href="/contato#politica-de-privacidade">Política de privacidade</Link>
          <Link href="/contato#aviso-legal">Aviso legal</Link>
        </p>
      </div>
    </footer>
  );
}
