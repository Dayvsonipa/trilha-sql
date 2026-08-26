"use client";

import { useState } from "react";
import type { ReactNode } from "react";

type Activity = {
  number: string;
  title: string;
  context: string;
  task: string;
  solution: ReactNode;
};

const activities: Activity[] = [
  {
    number: "01",
    title: "Dado ou informação?",
    context: "A gerente recebeu dois elementos: “2199,90” e “O Monitor Odyssey G5 custa R$ 2.199,90”.",
    task: "Classifique cada elemento e explique por que o segundo ajuda mais na tomada de decisão.",
    solution: <p><b>“2199,90” é um dado isolado.</b> Sem contexto, não sabemos o que representa. A segunda frase é informação porque relaciona o valor a um produto e lhe dá significado.</p>,
  },
  {
    number: "02",
    title: "Anatomia de uma tabela",
    context: "Observe um cadastro com as colunas id_produto, nome, preco e estoque. O produto Mouse Pulsefire ocupa uma linha.",
    task: "Explique o que representa a linha e cite dois atributos desse produto.",
    solution: <p><b>A linha representa um registro:</b> um produto específico. Entre seus atributos estão <code>nome</code>, <code>preco</code> e <code>estoque</code>; cada atributo ocupa uma coluna.</p>,
  },
  {
    number: "03",
    title: "Escolha a chave",
    context: "A tabela clientes possui id_cliente, nome, email e cidade. Duas pessoas podem ter o mesmo nome e alguém pode alterar o e-mail.",
    task: "Qual coluna é a melhor candidata a chave primária? Justifique usando unicidade e estabilidade.",
    solution: <p><b><code>id_cliente</code>.</b> Ele deve ser único para cada cliente e não depende de uma informação pessoal que possa mudar. Nome não garante unicidade; e-mail pode ser alterado.</p>,
  },
  {
    number: "04",
    title: "Desvende o relacionamento",
    context: "Um cliente pode realizar vários pedidos, mas cada pedido pertence a um único cliente.",
    task: "Defina a cardinalidade e diga em qual tabela a chave estrangeira deve ficar.",
    solution: <p><b>Relacionamento 1:N.</b> A coluna <code>id_cliente</code> deve aparecer em <code>pedidos</code> como chave estrangeira, apontando para o cliente dono de cada pedido.</p>,
  },
];

function FoundationCard({ activity }: { activity: Activity }) {
  const [attempted, setAttempted] = useState(false);
  const [revealed, setRevealed] = useState(false);

  return (
    <article className="foundation-activity">
      <div className="mission-top"><span className="mission-number">MISSÃO {activity.number}</span><span className="difficulty">CONCEITO + PRÁTICA</span></div>
      <h3>{activity.title}</h3>
      <p>{activity.context}</p>
      <div className="mission-target"><b>Sua investigação</b><span>{activity.task}</span></div>
      {!attempted ? (
        <button className="button button-primary full-button" onClick={() => setAttempted(true)}>Registrei minha resposta <span>✓</span></button>
      ) : !revealed ? (
        <div className="attempt-confirmed"><span>✓ Resposta registrada nesta visita</span><button className="button button-primary" onClick={() => setRevealed(true)}>Revelar correção</button></div>
      ) : (
        <div className="setup-solution" aria-live="polite"><small>CORREÇÃO COMENTADA</small>{activity.solution}</div>
      )}
    </article>
  );
}

export default function FoundationActivities() {
  return <div className="foundation-activities">{activities.map(activity => <FoundationCard key={activity.number} activity={activity} />)}</div>;
}
