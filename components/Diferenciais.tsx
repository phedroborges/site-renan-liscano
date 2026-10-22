import { DIFERENCIAIS } from "@/lib/conteudo";
import { Icon } from "./Icon";

/**
 * O mesmo bloco de diferenciais em todas as áreas. A lista vive em
 * lib/conteudo.ts e o visual vem da grade e do cartão do globals.css: mudar
 * qualquer um dos dois muda o site inteiro, sem editar página por página.
 */
export function Diferenciais() {
  return (
    <ul className="grade-cartoes">
      {DIFERENCIAIS.map((d) => (
        <li key={d.titulo} className="cartao">
          <span className="cartao-icone" aria-hidden="true">
            <Icon name={d.icone} size={19} />
          </span>
          <h3 className="cartao-titulo">{d.titulo}</h3>
          <p className="cartao-texto">{d.texto}</p>
        </li>
      ))}
    </ul>
  );
}
