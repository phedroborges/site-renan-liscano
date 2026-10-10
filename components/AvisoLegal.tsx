import { site } from "@/lib/site";
import { PaginaLegal } from "@/components/PaginaLegal";

export function AvisoLegal() {
  return (
    <PaginaLegal id="aviso-legal" titulo="Aviso legal">
      <h3>Natureza do conteúdo</h3>
      <p>
        Este site tem finalidade <strong>exclusivamente informativa</strong>. O conteúdo publicado
        não constitui consulta, parecer ou orientação jurídica para caso concreto.
      </p>
      <p>
        Cada situação depende de análise individual de documentos, prazos e circunstâncias. Nenhuma
        informação aqui publicada substitui a avaliação de um advogado sobre o seu caso específico.
      </p>

      <h3>Ausência de garantia de resultado</h3>
      <p>
        Valores, percentuais, prazos e cenários eventualmente mencionados neste site são estimativas
        baseadas na legislação vigente e em decisões já proferidas em casos semelhantes.
      </p>
      <p>
        <strong>Não constituem promessa nem garantia de resultado.</strong> O desfecho de qualquer
        demanda depende de fatores que não podem ser antecipados, incluindo prova, entendimento do
        juízo e circunstâncias próprias de cada caso.
      </p>

      <h3>Publicidade na advocacia</h3>
      <p>
        Este site observa o Código de Ética e Disciplina da OAB e o Provimento 205/2021 do Conselho
        Federal da OAB, que disciplinam a publicidade e a informação na advocacia.
      </p>
      <p>
        O conteúdo aqui publicado tem caráter informativo e educacional, sem captação de clientela,
        sem mercantilização da profissão e sem comparação com outros profissionais ou escritórios.
      </p>

      <h3>Relação advogado-cliente</h3>
      <p>
        O acesso a este site, o envio de mensagens ou o preenchimento de formulários{" "}
        <strong>não estabelecem, por si só, relação advogado-cliente</strong>. Essa relação se
        constitui apenas mediante contratação formal.
      </p>
      <p>
        Ainda assim, informações compartilhadas em contato preliminar são protegidas pelo sigilo
        profissional previsto no Estatuto da Advocacia.
      </p>

      <h3>Segurança do cliente</h3>
      <p>
        Após a contratação, toda comunicação acontece em grupo com os advogados identificados.
        <strong> Nenhum pedido de pagamento é feito fora desse grupo.</strong> Contatos privados
        pedindo transferências em nome deste escritório são fraude, ainda que utilizem nome, imagem
        ou número de inscrição corretos.
      </p>

      <h3>Links externos</h3>
      <p>
        Este site pode conter links para páginas de terceiros. Não temos controle sobre o conteúdo
        dessas páginas e não respondemos por ele.
      </p>

      <h3>Contato</h3>
      <p>
        {site.nome}
        <br />
        {site.oab}
        <br />
        WhatsApp {site.telefone}
      </p>
    </PaginaLegal>
  );
}
