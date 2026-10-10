import { site } from "@/lib/site";
import { PaginaLegal } from "@/components/PaginaLegal";

export function Privacidade() {
  return (
    <PaginaLegal id="politica-de-privacidade" titulo="Política de privacidade" atualizado="31 de agosto de 2026">
      <p>
        Esta política descreve como os dados pessoais informados neste site são tratados, conforme a
        Lei 13.709/2018 (LGPD).
      </p>

      <h3>Quem trata os dados</h3>
      <p>
        {site.nome}, {site.oab}. Contato para assuntos de privacidade: WhatsApp {site.telefone}.
      </p>

      <h3>Que dados coletamos</h3>
      <p>
        <strong>Dados que você informa.</strong> Nome, telefone, e-mail e as informações que você
        compartilha voluntariamente ao descrever a sua situação, por triagem ou WhatsApp.
      </p>
      <p>
        <strong>Dados de navegação.</strong> Páginas visitadas, origem do acesso, tipo de dispositivo
        e dados agregados de uso, coletados por ferramentas de análise.
      </p>
      <p>
        Não solicitamos dados pessoais sensíveis por formulário. Documentos relativos ao seu caso,
        incluindo dados de saúde, são recebidos apenas por canal direto, quando você os envia.
      </p>

      <h3>Para que usamos</h3>
      <ul>
        <li>Responder ao seu contato e avaliar preliminarmente a sua situação;</li>
        <li>Prestar o serviço advocatício, havendo contratação;</li>
        <li>Cumprir obrigações legais e regulatórias;</li>
        <li>Entender o uso do site e melhorar o conteúdo, de forma agregada.</li>
      </ul>
      <p>
        <strong>Não vendemos, alugamos nem cedemos dados pessoais a terceiros para fins comerciais.</strong>
      </p>

      <h3>Base legal</h3>
      <p>
        Conforme o caso: consentimento, execução de contrato ou procedimentos preliminares a ele,
        cumprimento de obrigação legal, e legítimo interesse para a operação do site.
      </p>

      <h3>Sigilo profissional</h3>
      <p>
        Informações compartilhadas em contato preliminar são protegidas pelo sigilo profissional
        previsto no Estatuto da Advocacia,{" "}
        <strong>independentemente de haver contratação posterior</strong>. Esse dever é mais amplo
        que a própria LGPD e não se encerra com o fim do atendimento.
      </p>

      <h3>Compartilhamento</h3>
      <p>
        Dados podem ser compartilhados com prestadores de serviço necessários à operação
        (hospedagem, e-mail, ferramentas de comunicação) e com autoridades, quando exigido por lei ou
        ordem judicial.
      </p>

      <h3>Por quanto tempo guardamos</h3>
      <p>
        Contatos que não resultam em contratação são mantidos pelo tempo necessário ao atendimento.
        Dados de clientes seguem os prazos legais e de guarda documental aplicáveis à advocacia.
      </p>

      <h3>Seus direitos</h3>
      <p>
        A LGPD garante a você: confirmação da existência de tratamento, acesso, correção,
        anonimização, portabilidade, informação sobre compartilhamentos, revogação do consentimento e
        eliminação dos dados tratados com base em consentimento.
      </p>
      <p>Para exercer qualquer um deles, entre em contato pelo WhatsApp acima.</p>
      <p>
        Há um limite: dados necessários ao cumprimento de obrigação legal ou à defesa de direitos em
        processo podem ser mantidos mesmo após pedido de eliminação.
      </p>

      <h3>Cookies</h3>
      <p>
        Este site utiliza cookies necessários ao funcionamento e, mediante seu aceite, cookies de
        análise. Você pode gerenciar as preferências nas configurações do seu navegador.
      </p>

      <h3>Alterações</h3>
      <p>Esta política pode ser atualizada. A data no topo indica a última revisão.</p>
    </PaginaLegal>
  );
}
