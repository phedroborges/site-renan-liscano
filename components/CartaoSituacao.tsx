import Link from "next/link";
import type { CardSituacao } from "@/lib/tipos";
import { Icon } from "./Icon";
import s from "./CartaoSituacao.module.css";

/**
 * Cartão "Alguma dessas é a sua situação?". O mesmo na home e nas páginas de
 * área: mudar aqui muda os dois lugares.
 */
export function CartaoSituacao({ situacao, nivel = "h3" }: { situacao: CardSituacao; nivel?: "h3" | "h4" }) {
  const Titulo = nivel;
  return (
    <Link href={situacao.href} className="cartao">
      <Titulo className="cartao-titulo">{situacao.pergunta}</Titulo>
      <p className="cartao-texto">{situacao.texto}</p>
      {situacao.alerta && (
        <div className={s.alerta}>
          <span className={s.alertaTag}>
            <Icon name={situacao.alerta.icone} size={13} />
            {situacao.alerta.tag}
          </span>
          <p>{situacao.alerta.texto}</p>
        </div>
      )}
      <span className="cartao-cta">
        Entender o meu caso <Icon name="arrow" size={15} />
      </span>
    </Link>
  );
}
