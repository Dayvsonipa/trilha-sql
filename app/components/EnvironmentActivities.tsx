"use client";

import { useState } from "react";
import type { ReactNode } from "react";

type Activity = {
  id: string;
  label: string;
  title: string;
  prompt: string;
  goal: string;
  solution: ReactNode;
};

const activities: Activity[] = [
  {
    id: "conexao",
    label: "MISSÃO 01",
    title: "Raio-X da conexão",
    prompt: "Antes de abrir o editor, identifique qual item guarda o endereço, o usuário e a porta usados para chegar ao servidor.",
    goal: "Escreva o nome desse item e explique, em uma frase, para que ele serve.",
    solution: <p><b>Resposta esperada: conexão.</b> Ela reúne os dados que o Workbench usa para acessar um servidor MySQL, como host, porta e usuário.</p>,
  },
  {
    id: "primeiro-comando",
    label: "MISSÃO 02",
    title: "Seu primeiro sinal para o banco",
    prompt: "Abra uma nova aba SQL e escreva um comando que devolva a mensagem “LevelUp online!”. Execute apenas essa instrução.",
    goal: "O resultado deve ter uma coluna chamada status e uma única linha.",
    solution: <><pre><code><span className="sql-key">SELECT</span> <span className="sql-string">&apos;LevelUp online!&apos;</span> <span className="sql-key">AS</span> status;</code></pre><p><code>SELECT</code> pede um resultado; <code>AS status</code> dá um nome claro à coluna exibida.</p></>,
  },
  {
    id: "importacao",
    label: "MISSÃO 03",
    title: "Banco encontrado",
    prompt: "Importe o arquivo inicial, atualize a área SCHEMAS e confirme se as sete tabelas da LevelUp Store apareceram.",
    goal: "Registre os nomes de três tabelas e execute uma consulta que mostre o banco em uso.",
    solution: <><pre><code><span className="sql-key">USE</span> levelup_store;{`\n`}<span className="sql-key">SELECT</span> DATABASE() <span className="sql-key">AS</span> banco_em_uso;</code></pre><p>Entre as tabelas, você deve encontrar <code>clientes</code>, <code>produtos</code> e <code>pedidos</code>. As outras são <code>categorias</code>, <code>itens_pedido</code>, <code>pagamentos</code> e <code>avaliacoes</code>.</p></>,
  },
];

function ActivityCard({ activity }: { activity: Activity }) {
  const [attempted, setAttempted] = useState(false);
  const [revealed, setRevealed] = useState(false);

  return (
    <article className="setup-activity">
      <div className="mission-top"><span className="mission-number">{activity.label}</span><span className="difficulty">PRÁTICA</span></div>
      <h3>{activity.title}</h3>
      <p>{activity.prompt}</p>
      <div className="mission-target"><b>Critério de sucesso</b><span>{activity.goal}</span></div>
      {!attempted ? (
        <button className="button button-primary full-button" onClick={() => setAttempted(true)}>Já tentei no Workbench <span>✓</span></button>
      ) : !revealed ? (
        <div className="attempt-confirmed"><span>✓ Boa! Compare somente quando estiver pronto.</span><button className="button button-primary" onClick={() => setRevealed(true)}>Revelar correção</button></div>
      ) : (
        <div className="setup-solution" aria-live="polite"><small>CORREÇÃO COMENTADA</small>{activity.solution}</div>
      )}
    </article>
  );
}

export default function EnvironmentActivities() {
  return <div className="setup-activities">{activities.map((activity) => <ActivityCard activity={activity} key={activity.id} />)}</div>;
}
