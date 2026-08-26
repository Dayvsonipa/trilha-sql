"use client";

import { useState } from "react";
import type { ReactNode } from "react";

type Activity = {
  number: string;
  title: string;
  briefing: string;
  target: string;
  solution: ReactNode;
};

const activities: Activity[] = [
  {
    number: "01",
    title: "Crie seu laboratório",
    briefing: "Você precisa de um banco separado para testar comandos sem alterar a LevelUp Store principal.",
    target: "Crie o banco levelup_lab, selecione-o e confirme qual banco está em uso.",
    solution: <><pre><code><span className="sql-key">CREATE DATABASE</span> levelup_lab;{`\n`}<span className="sql-key">USE</span> levelup_lab;{`\n`}<span className="sql-key">SELECT</span> DATABASE() <span className="sql-key">AS</span> banco_em_uso;</code></pre><p><code>CREATE DATABASE</code> cria o espaço; <code>USE</code> define onde os próximos objetos serão criados.</p></>,
  },
  {
    number: "02",
    title: "Tipos que fazem sentido",
    briefing: "Uma tabela de campeonatos precisa guardar nome, prêmio em reais, data de início e se as inscrições estão abertas.",
    target: "Escolha um tipo adequado para cada coluna e explique por que o prêmio não deve ser VARCHAR.",
    solution: <p>Uma solução coerente é <code>nome VARCHAR(100)</code>, <code>premio DECIMAL(10,2)</code>, <code>data_inicio DATE</code> e <code>inscricoes_abertas BOOLEAN</code>. O prêmio deve ser numérico para permitir cálculos e comparações corretas.</p>,
  },
  {
    number: "03",
    title: "Tabela com regras",
    briefing: "A LevelUp Store quer cadastrar cupons com código único, percentual obrigatório e estado ativo por padrão.",
    target: "Crie a tabela cupons usando PK automática, UNIQUE, NOT NULL, DEFAULT e CHECK.",
    solution: <pre><code><span className="sql-key">CREATE TABLE</span> cupons ({`\n`}  id_cupom <span className="sql-type">INT PRIMARY KEY AUTO_INCREMENT</span>,{`\n`}  codigo <span className="sql-type">VARCHAR(30) NOT NULL UNIQUE</span>,{`\n`}  percentual <span className="sql-type">DECIMAL(5,2) NOT NULL</span>,{`\n`}  ativo <span className="sql-type">BOOLEAN DEFAULT TRUE</span>,{`\n`}  <span className="sql-key">CHECK</span> (percentual <span className="sql-key">BETWEEN</span> 0 <span className="sql-key">AND</span> 100){`\n`});</code></pre>,
  },
  {
    number: "04",
    title: "Evolução controlada",
    briefing: "A tabela cupons já existe, mas agora precisa guardar uma data de validade opcional.",
    target: "Adicione a coluna validade do tipo DATE sem apagar nem recriar a tabela.",
    solution: <><pre><code><span className="sql-key">ALTER TABLE</span> cupons{`\n`}<span className="sql-key">ADD COLUMN</span> validade <span className="sql-type">DATE</span>;</code></pre><p><code>ALTER TABLE</code> modifica uma estrutura existente. Como a validade pode não ser informada, a coluna aceita <code>NULL</code>.</p></>,
  },
];

function StructureCard({ activity }: { activity: Activity }) {
  const [attempted, setAttempted] = useState(false);
  const [revealed, setRevealed] = useState(false);
  return (
    <article className="structure-activity">
      <div className="mission-top"><span className="mission-number">MISSÃO {activity.number}</span><span className="difficulty">WORKBENCH</span></div>
      <h3>{activity.title}</h3><p>{activity.briefing}</p>
      <div className="mission-target"><b>Seu objetivo</b><span>{activity.target}</span></div>
      {!attempted ? <button className="button button-primary full-button" onClick={() => setAttempted(true)}>Já executei minha tentativa <span>✓</span></button>
        : !revealed ? <div className="attempt-confirmed"><span>✓ Tentativa registrada nesta visita</span><button className="button button-primary" onClick={() => setRevealed(true)}>Revelar correção</button></div>
        : <div className="setup-solution" aria-live="polite"><small>CORREÇÃO COMENTADA</small>{activity.solution}</div>}
    </article>
  );
}

export default function StructureActivities() {
  return <div className="structure-activities">{activities.map(activity => <StructureCard activity={activity} key={activity.number} />)}</div>;
}
