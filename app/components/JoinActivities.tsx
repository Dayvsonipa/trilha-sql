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
    title: "Catálogo traduzido",
    badge: "2 TABELAS",
    briefing: "A equipe não quer receber o código da categoria; ela precisa ler o nome da categoria de cada produto.",
    target: "Mostre produto e categoria conectando produtos a categorias. Ordene por categoria e depois por produto.",
    solution: <pre><code><span className="sql-key">SELECT</span>{`\n`}  p.nome <span className="sql-key">AS</span> produto,{`\n`}  c.nome <span className="sql-key">AS</span> categoria{`\n`}<span className="sql-key">FROM</span> produtos <span className="sql-key">AS</span> p{`\n`}<span className="sql-key">INNER JOIN</span> categorias <span className="sql-key">AS</span> c{`\n`}  <span className="sql-key">ON</span> p.id_categoria = c.id_categoria{`\n`}<span className="sql-key">ORDER BY</span> c.nome, p.nome;</code></pre>,
  },
  {
    number: "02",
    title: "Quem fez o pedido?",
    badge: "INNER JOIN",
    briefing: "O atendimento recebeu uma lista de pedidos que mostra apenas códigos de clientes.",
    target: "Exiba pedido, nome do cliente, status e valor total, do pedido mais recente para o mais antigo.",
    solution: <pre><code><span className="sql-key">SELECT</span>{`\n`}  pe.id_pedido,{`\n`}  c.nome <span className="sql-key">AS</span> cliente,{`\n`}  pe.status,{`\n`}  pe.valor_total{`\n`}<span className="sql-key">FROM</span> pedidos <span className="sql-key">AS</span> pe{`\n`}<span className="sql-key">INNER JOIN</span> clientes <span className="sql-key">AS</span> c{`\n`}  <span className="sql-key">ON</span> pe.id_cliente = c.id_cliente{`\n`}<span className="sql-key">ORDER BY</span> pe.data_pedido <span className="sql-key">DESC</span>;</code></pre>,
  },
  {
    number: "03",
    title: "Itens em linguagem humana",
    badge: "CADEIA",
    briefing: "A tabela itens_pedido possui códigos, quantidades e preços, mas o relatório precisa dos nomes dos produtos.",
    target: "Mostre pedido, produto, quantidade, preço unitário e subtotal calculado para cada item.",
    solution: <pre><code><span className="sql-key">SELECT</span>{`\n`}  ip.id_pedido,{`\n`}  pr.nome <span className="sql-key">AS</span> produto,{`\n`}  ip.quantidade,{`\n`}  ip.preco_unitario,{`\n`}  <span className="sql-key">ROUND</span>(ip.quantidade * ip.preco_unitario, <span className="sql-number">2</span>) <span className="sql-key">AS</span> subtotal{`\n`}<span className="sql-key">FROM</span> itens_pedido <span className="sql-key">AS</span> ip{`\n`}<span className="sql-key">INNER JOIN</span> produtos <span className="sql-key">AS</span> pr{`\n`}  <span className="sql-key">ON</span> ip.id_produto = pr.id_produto{`\n`}<span className="sql-key">ORDER BY</span> ip.id_pedido, pr.nome;</code></pre>,
  },
  {
    number: "04",
    title: "Clientes silenciosos",
    badge: "LEFT JOIN",
    briefing: "O marketing quer enxergar todos os clientes, inclusive aqueles que ainda não fizeram pedidos.",
    target: "Mostre cliente e quantidade de pedidos, mantendo também clientes com zero pedidos.",
    solution: <><pre><code><span className="sql-key">SELECT</span>{`\n`}  c.id_cliente,{`\n`}  c.nome <span className="sql-key">AS</span> cliente,{`\n`}  <span className="sql-key">COUNT</span>(pe.id_pedido) <span className="sql-key">AS</span> total_pedidos{`\n`}<span className="sql-key">FROM</span> clientes <span className="sql-key">AS</span> c{`\n`}<span className="sql-key">LEFT JOIN</span> pedidos <span className="sql-key">AS</span> pe{`\n`}  <span className="sql-key">ON</span> pe.id_cliente = c.id_cliente{`\n`}<span className="sql-key">GROUP BY</span> c.id_cliente, c.nome{`\n`}<span className="sql-key">ORDER BY</span> total_pedidos <span className="sql-key">DESC</span>, c.nome;</code></pre><p>Use <code>COUNT(pe.id_pedido)</code>, não <code>COUNT(*)</code>: quando não há pedido, o ID da tabela direita é <code>NULL</code> e não deve ser contado.</p></>,
  },
];

function JoinCard({ activity }: { activity: Activity }) {
  const [attempted, setAttempted] = useState(false);
  const [revealed, setRevealed] = useState(false);

  return <article className="join-activity">
    <div className="mission-top"><span className="mission-number">MISSÃO {activity.number}</span><span className="difficulty">{activity.badge}</span></div>
    <h3>{activity.title}</h3>
    <p>{activity.briefing}</p>
    <div className="mission-target"><b>Seu objetivo</b><span>{activity.target}</span></div>
    {!attempted ? <button className="button button-primary full-button" onClick={() => setAttempted(true)}>Já tentei no Workbench <span>✓</span></button>
      : !revealed ? <div className="attempt-confirmed"><span>✓ Tentativa registrada nesta visita</span><button className="button button-primary" onClick={() => setRevealed(true)}>Revelar correção</button></div>
      : <div className="setup-solution" aria-live="polite"><small>CORREÇÃO COMENTADA</small>{activity.solution}</div>}
  </article>;
}

export default function JoinActivities() {
  return <div className="join-activities">{activities.map(activity => <JoinCard activity={activity} key={activity.number} />)}</div>;
}
