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
    title: "Acima da média",
    badge: "ESCALAR",
    briefing: "O comercial quer destacar produtos com preço superior à média atual do catálogo, sem calcular esse valor manualmente.",
    target: "Mostre nome e preço dos produtos acima da média geral de preços. Ordene do maior para o menor preço.",
    solution: <pre><code><span className="sql-key">SELECT</span> nome, preco{`\n`}<span className="sql-key">FROM</span> produtos{`\n`}<span className="sql-key">WHERE</span> preco &gt; ({`\n`}  <span className="sql-key">SELECT AVG</span>(preco){`\n`}  <span className="sql-key">FROM</span> produtos{`\n`}){`\n`}<span className="sql-key">ORDER BY</span> preco <span className="sql-key">DESC</span>;</code></pre>,
  },
  {
    number: "02",
    title: "Clientes com compra válida",
    badge: "IN",
    briefing: "A equipe de relacionamento precisa falar apenas com clientes que possuem ao menos um pedido pago.",
    target: "Liste ID e nome dos clientes cujo código aparece em pedidos com status PAGO. Ordene pelo nome.",
    solution: <pre><code><span className="sql-key">SELECT</span> id_cliente, nome{`\n`}<span className="sql-key">FROM</span> clientes{`\n`}<span className="sql-key">WHERE</span> id_cliente <span className="sql-key">IN</span> ({`\n`}  <span className="sql-key">SELECT</span> id_cliente{`\n`}  <span className="sql-key">FROM</span> pedidos{`\n`}  <span className="sql-key">WHERE</span> status = <span className="sql-number">&apos;PAGO&apos;</span>{`\n`}){`\n`}<span className="sql-key">ORDER BY</span> nome;</code></pre>,
  },
  {
    number: "03",
    title: "Produtos nunca vendidos",
    badge: "NOT EXISTS",
    briefing: "O estoque quer localizar produtos que ainda não aparecem em nenhum item de pedido.",
    target: "Mostre ID, nome e estoque de cada produto sem venda registrada, usando uma subconsulta correlacionada.",
    solution: <><pre><code><span className="sql-key">SELECT</span> p.id_produto, p.nome, p.estoque{`\n`}<span className="sql-key">FROM</span> produtos <span className="sql-key">AS</span> p{`\n`}<span className="sql-key">WHERE NOT EXISTS</span> ({`\n`}  <span className="sql-key">SELECT</span> <span className="sql-number">1</span>{`\n`}  <span className="sql-key">FROM</span> itens_pedido <span className="sql-key">AS</span> ip{`\n`}  <span className="sql-key">WHERE</span> ip.id_produto = p.id_produto{`\n`}){`\n`}<span className="sql-key">ORDER BY</span> p.nome;</code></pre><p>A comparação com <code>p.id_produto</code> conecta a consulta interna à linha que está sendo examinada na consulta externa.</p></>,
  },
  {
    number: "04",
    title: "Categorias premium",
    badge: "HAVING + SUBQUERY",
    briefing: "A curadoria quer saber quais categorias têm preço médio superior à média de todos os produtos da loja.",
    target: "Mostre categoria, quantidade de produtos e preço médio. Mantenha apenas categorias cuja média supere a média global.",
    solution: <pre><code><span className="sql-key">SELECT</span>{`\n`}  c.nome <span className="sql-key">AS</span> categoria,{`\n`}  <span className="sql-key">COUNT</span>(*) <span className="sql-key">AS</span> produtos,{`\n`}  <span className="sql-key">ROUND</span>(<span className="sql-key">AVG</span>(p.preco), <span className="sql-number">2</span>) <span className="sql-key">AS</span> preco_medio{`\n`}<span className="sql-key">FROM</span> categorias <span className="sql-key">AS</span> c{`\n`}<span className="sql-key">INNER JOIN</span> produtos <span className="sql-key">AS</span> p{`\n`}  <span className="sql-key">ON</span> p.id_categoria = c.id_categoria{`\n`}<span className="sql-key">GROUP BY</span> c.id_categoria, c.nome{`\n`}<span className="sql-key">HAVING AVG</span>(p.preco) &gt; ({`\n`}  <span className="sql-key">SELECT AVG</span>(preco) <span className="sql-key">FROM</span> produtos{`\n`});</code></pre>,
  },
];

function SubqueryCard({ activity }: { activity: Activity }) {
  const [attempted, setAttempted] = useState(false);
  const [revealed, setRevealed] = useState(false);

  return <article className="subquery-activity">
    <div className="mission-top"><span className="mission-number">MISSÃO {activity.number}</span><span className="difficulty">{activity.badge}</span></div>
    <h3>{activity.title}</h3>
    <p>{activity.briefing}</p>
    <div className="mission-target"><b>Seu objetivo</b><span>{activity.target}</span></div>
    {!attempted ? <button className="button button-primary full-button" onClick={() => setAttempted(true)}>Já tentei no Workbench <span>✓</span></button>
      : !revealed ? <div className="attempt-confirmed"><span>✓ Tentativa registrada nesta visita</span><button className="button button-primary" onClick={() => setRevealed(true)}>Revelar correção</button></div>
      : <div className="setup-solution" aria-live="polite"><small>CORREÇÃO COMENTADA</small>{activity.solution}</div>}
  </article>;
}

export default function SubqueryActivities() {
  return <div className="subquery-activities">{activities.map(activity => <SubqueryCard activity={activity} key={activity.number} />)}</div>;
}
