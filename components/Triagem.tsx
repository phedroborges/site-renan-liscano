"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { Icon } from "./Icon";
import styles from "./Triagem.module.css";

/**
 * Uma pergunta por tela. Nenhum campo de nome, telefone ou e-mail em
 * momento nenhum: o dado de contato é o próprio WhatsApp que abre no fim.
 * Pedir telefone para depois abrir o WhatsApp é pedir duas vezes a mesma coisa.
 */

type Opcao = { rotulo: string; proxima?: string; assunto?: string };
type Tela = { id: string; pergunta: string; apoio?: string; opcoes: Opcao[] };

const TELAS: Tela[] = [
  {
    id: "inicio",
    pergunta: "Qual é a situação?",
    opcoes: [
      { rotulo: "Tenho dívidas que não consigo pagar", proxima: "dividas" },
      { rotulo: "Acho que estão me cobrando a mais", proxima: "contrato" },
      { rotulo: "Sou médico ou profissional de saúde", proxima: "medico" },
      { rotulo: "Fui lesado como consumidor", proxima: "consumidor" },
      { rotulo: "Minha empresa tem dívidas", assunto: "passivo bancário empresarial", proxima: "prazo" },
      { rotulo: "Recebi uma cobrança tributária", assunto: "dívida tributária ou execução fiscal", proxima: "prazo" },
      { rotulo: "Preciso de defesa em execução ou busca e apreensão", assunto: "defesa em execução ou busca e apreensão", proxima: "prazo" },
      { rotulo: "Quero organizar meu patrimônio", assunto: "planejamento patrimonial e holdings", proxima: "prazo" },
      { rotulo: "Outro assunto", assunto: "outro assunto", proxima: "prazo" },
    ],
  },
  {
    id: "dividas",
    pergunta: "O que mais pesa hoje?",
    opcoes: [
      { rotulo: "Cartão de crédito ou cheque especial", assunto: "dívida de cartão ou cheque especial", proxima: "prazo" },
      { rotulo: "Empréstimo ou consignado", assunto: "empréstimo ou consignado", proxima: "prazo" },
      { rotulo: "Financiamento de casa ou carro", assunto: "financiamento de casa ou carro", proxima: "prazo" },
      { rotulo: "Meu nome está negativado", assunto: "nome negativado", proxima: "prazo" },
      { rotulo: "Mais de um desses ao mesmo tempo", assunto: "várias dívidas ao mesmo tempo", proxima: "prazo" },
    ],
  },
  {
    id: "contrato",
    pergunta: "Você tem o contrato em mãos?",
    apoio: "Não ter não impede nada, a instituição é obrigada a fornecer cópia.",
    opcoes: [
      { rotulo: "Tenho o contrato completo", assunto: "revisão de contrato, tenho o contrato completo", proxima: "prazo" },
      { rotulo: "Tenho só o extrato ou as parcelas", assunto: "revisão de contrato, tenho só o extrato", proxima: "prazo" },
      { rotulo: "Não tenho nada, mas sei qual é o banco", assunto: "revisão de contrato, sem os documentos ainda", proxima: "prazo" },
    ],
  },
  {
    id: "medico",
    pergunta: "Qual delas?",
    opcoes: [
      { rotulo: "Fiz residência médica", assunto: "auxílio moradia da residência médica", proxima: "prazo" },
      { rotulo: "Me formei com FIES", assunto: "abatimento do FIES", proxima: "prazo" },
      { rotulo: "Recebi notificação do CRM", assunto: "processo ético no CRM", proxima: "prazo" },
      { rotulo: "Quero registrar meu nome como marca", assunto: "registro de marca", proxima: "prazo" },
    ],
  },
  {
    id: "consumidor",
    pergunta: "O que aconteceu?",
    opcoes: [
      { rotulo: "Plano de saúde negou um procedimento", assunto: "negativa do plano de saúde", proxima: "prazo" },
      { rotulo: "Problema com voo", assunto: "problema com voo", proxima: "prazo" },
      { rotulo: "Cobrança que não reconheço", assunto: "cobrança que não reconheço", proxima: "prazo" },
    ],
  },
  {
    id: "prazo",
    pergunta: "Há algum prazo correndo?",
    apoio: "É a única pergunta que muda a ordem de atendimento, por isso ela existe.",
    opcoes: [
      { rotulo: "Sim, recebi uma notificação com prazo", assunto: "com prazo correndo" },
      { rotulo: "Sim, há urgência de saúde", assunto: "com urgência de saúde" },
      { rotulo: "Não sei dizer", assunto: "sem saber se há prazo" },
      { rotulo: "Não, é uma dúvida sem pressa" },
    ],
  },
];

export function Triagem() {
  const [caminho, setCaminho] = useState<string[]>(["inicio"]);
  const [assuntos, setAssuntos] = useState<string[]>([]);
  const [fim, setFim] = useState(false);

  const telaAtual = TELAS.find((t) => t.id === caminho[caminho.length - 1])!;
  const passo = caminho.length;

  function escolher(o: Opcao) {
    const novos = o.assunto ? [...assuntos, o.assunto] : assuntos;
    setAssuntos(novos);
    if (o.proxima) setCaminho([...caminho, o.proxima]);
    else setFim(true);
  }

  function voltar() {
    if (fim) { setFim(false); return; }
    if (caminho.length > 1) {
      setCaminho(caminho.slice(0, -1));
      setAssuntos(assuntos.slice(0, -1));
    }
  }

  function reiniciar() {
    setCaminho(["inicio"]);
    setAssuntos([]);
    setFim(false);
  }

  const mensagem = assuntos.length
    ? `Olá! Vim pelo site. Meu caso é sobre ${assuntos.join(", ")}.`
    : "Olá! Vim pelo site e queria tirar uma dúvida.";

  const link = `${site.whatsapp}?text=${encodeURIComponent(mensagem)}`;
  const progresso = fim ? 100 : (passo / 3) * 100;

  return (
    <div className={styles.caixa}>
      <div className={styles.barra} aria-hidden="true">
        <span style={{ width: `${Math.min(progresso, 100)}%` }} />
      </div>

      {!fim ? (
        <div className={styles.tela} key={telaAtual.id}>
          <p className={styles.contador}>Pergunta {passo} de 3</p>
          <h3 className={styles.pergunta}>{telaAtual.pergunta}</h3>
          {telaAtual.apoio && <p className={styles.apoio}>{telaAtual.apoio}</p>}

          <div className={styles.opcoes}>
            {telaAtual.opcoes.map((o) => (
              <button key={o.rotulo} type="button" onClick={() => escolher(o)}>
                <span>{o.rotulo}</span>
                <Icon name="arrow" size={16} />
              </button>
            ))}
          </div>

          {caminho.length > 1 && (
            <button type="button" onClick={voltar} className={styles.voltar}>
              Voltar
            </button>
          )}
        </div>
      ) : (
        <div className={styles.tela}>
          <p className={styles.contador}>Pronto</p>
          <h3 className={styles.pergunta}>Sua mensagem está montada.</h3>
          <p className={styles.apoio}>É isto que vai ser enviado. Você pode editar tudo no WhatsApp antes de mandar.</p>

          <blockquote className={styles.previa}>{mensagem}</blockquote>

          <a href={link} className="btn btn-primary btn-lg" target="_blank" rel="noopener">
            <Icon name="whatsapp" size={18} />
            Abrir o WhatsApp
          </a>

          <button type="button" onClick={reiniciar} className={styles.voltar}>
            Recomeçar
          </button>
        </div>
      )}
    </div>
  );
}
