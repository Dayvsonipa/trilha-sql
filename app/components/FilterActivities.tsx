"use client";

import { useState } from "react";
import type { ReactNode } from "react";

type Activity = {
  number: string;
  title: string;
  briefing: string;
  target: string;
  badge: string;
  solution: ReactNode;
};

const activities: Activity[] = [
  {
    number: "01",
    title: "Vitrine premium",
    badge: "COMPARAÇÃO",
    briefing: "A equipe comercial quer revisar apenas os produtos de maior valor.",
    target: "Mostre nome e preço dos produtos que custam R$ 1.000 ou mais.",
    solution: <><pre><code><span className="sql-key">SELECT</span> nome, preco{`\n`}<span className="sql-key">FROM</span> produtos{`\n`}<span className="sql-key">WHERE</span> preco &gt;= <span className="sql-number">1000</span>;</code></pre><p>O operador <code>&gt;=</code> inclui também o produto que custar exatamente R$ 1.000.</p></>,
  },
  {
    number: "02",
    title: "Prontos para vender",
    badge: "AND",
    briefing: "Uma campanha precisa de produtos acessíveis que ainda estejam disponíveis no estoque.",
    target: "Liste nome, preço e estoque dos produtos entre R$ 200 e R$ 400 e com estoque maior que zero.",
    solution: <><pre><code><span className="sql-key">SELECT</span> nome, preco, estoque{`\n`}<span className="sql-key">FROM</span> produtos{`\n`}<span className="sql-key">WHERE</span> preco <span className="sql-key">BETWEEN</span> <span className="sql-number">200</span> <span className="sql-key">AND</span> <span className="sql-number">400</span>{`\n`}  <span className="sql-key">AND</span> estoque &gt; <span className="sql-number">0</span>;</code></pre><p><code>BETWEEN</code> inclui os dois limites. O segundo <code>AND</code> acrescenta outra exigência.</p></>,
  },
  {
    number: "03",
    title: "Fila de acompanhamento",
    badge: "IN",
    briefing: "O atendimento precisa acompanhar pedidos que ainda estão em andamento.",
    target: "Exiba pedido, status e valor dos pedidos com status PAGO ou EM_TRANSPORTE.",
    solution: <><pre><code><span className="sql-key">SELECT</span> id_pedido, status, valor_total{`\n`}<span className="sql-key">FROM</span> pedidos{`\n`}<span className="sql-key">WHERE</span> status <span className="sql-key">IN</span> (<span className="sql-string">&apos;PAGO&apos;</span>, <span className="sql-string">&apos;EM_TRANSPORTE&apos;</span>);</code></pre><p><code>IN</code> deixa a comparação com várias opções mais clara que uma sequência de <code>OR</code>.</p></>,
  },
  {
    number: "04",
    title: "Busca por nome",
    badge: "LIKE",
    briefing: "O suporte lembra apenas que o nome da cliente começa com a letra A.",
    target: "Mostre nome, e-mail e cidade dos clientes cujo nome começa com A.",
    solution: <><pre><code><span className="sql-key">SELECT</span> nome, email, cidade{`\n`}<span className="sql-key">FROM</span> clientes{`\n`}<span className="sql-key">WHERE</span> nome <span className="sql-key">LIKE</span> <span className="sql-string">&apos;A%&apos;</span>;</code></pre><p>O símbolo <code>%</code> aceita qualquer quantidade de caracteres depois da letra A.</p></>,
  },
];

function FilterCard({ activity }: { activity: Activity }) {
  const [attempted, setAttempted] = useState(false);
  const [revealed, setRevealed] = useState(false);

  return <article className="filter-activity">
    <div className="mission-top"><span className="mission-number">MISSÃO {activity.number}</span><span className="difficulty">{activity.badge}</span></div>
    <h3>{activity.title}</h3>
    <p>{activity.briefing}</p>
    <div className="mission-target"><b>Seu objetivo</b><span>{activity.target}</span></div>
    {!attempted ? <button className="button button-primary full-button" onClick={() => setAttempted(true)}>Já tentei no Workbench <span>✓</span></button>
      : !revealed ? <div className="attempt-confirmed"><span>✓ Tentativa registrada nesta visita</span><button className="button button-primary" onClick={() => setRevealed(true)}>Revelar correção</button></div>
      : <div className="setup-solution" aria-live="polite"><small>CORREÇÃO COMENTADA</small>{activity.solution}</div>}
  </article>;
}

export default function FilterActivities() {
  return <div className="filter-activities">{activities.map(activity => <FilterCard activity={activity} key={activity.number} />)}</div>;
}
