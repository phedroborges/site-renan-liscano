import { DIFERENCIAIS } from "@/lib/conteudo";
import { Icon } from "./Icon";
import s from "./Diferenciais.module.css";

/**
 * O mesmo bloco de diferenciais em todas as áreas. A lista vive em
 * lib/conteudo.ts: mudar lá muda o site inteiro, sem editar página por página.
 */
export function Diferenciais() {
  return (
    <ul className={s.lista}>
      {DIFERENCIAIS.map((d) => (
        <li key={d.titulo} className={s.item}>
          <span className={s.icone} aria-hidden="true">
            <Icon name={d.icone} size={19} />
          </span>
          <h3>{d.titulo}</h3>
          <p>{d.texto}</p>
        </li>
      ))}
    </ul>
  );
}
