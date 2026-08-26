"use client";

import { useState } from "react";
import type { ReactNode } from "react";

type Activity = { number: string; title: string; briefing: string; target: string; solution: ReactNode };

const activities: Activity[] = [
  { number: "01", title: "Catálogo essencial", briefing: "A equipe da loja precisa revisar os produtos sem receber colunas desnecessárias.", target: "Mostre apenas nome, preço e estoque da tabela produtos.", solution: <pre><code><span className="sql-key">SELECT</span> nome, preco, estoque{`\n`}<span className="sql-key">FROM</span> produtos;</code></pre> },
  { number: "02", title: "Mapa de cidades", briefing: "O marketing quer saber em quais cidades a loja já possui clientes, sem nomes repetidos.", target: "Mostre somente as cidades diferentes cadastradas em clientes.", solution: <><pre><code><span className="sql-key">SELECT DISTINCT</span> cidade{`\n`}<span className="sql-key">FROM</span> clientes;</code></pre><p><code>DISTINCT</code> elimina repetições considerando as colunas apresentadas no resultado.</p></> },
  { number: "03", title: "Ranking de preços", briefing: "A direção quer visualizar rapidamente os cinco produtos de maior preço.", target: "Mostre nome e preço, organize do maior para o menor preço e limite a cinco linhas.", solution: <pre><code><span className="sql-key">SELECT</span> nome, preco{`\n`}<span className="sql-key">FROM</span> produtos{`\n`}<span className="sql-key">ORDER BY</span> preco <span className="sql-key">DESC</span>{`\n`}<span className="sql-key">LIMIT</span> <span className="sql-number">5</span>;</code></pre> },
  { number: "04", title: "Painel de pedidos", briefing: "A equipe financeira quer os três maiores pedidos, com títulos de coluna mais fáceis de apresentar.", target: "Exiba id_pedido como pedido, valor_total como total e status; ordene pelo total decrescente e limite a três.", solution: <pre><code><span className="sql-key">SELECT</span>{`\n`}  id_pedido <span className="sql-key">AS</span> pedido,{`\n`}  valor_total <span className="sql-key">AS</span> total,{`\n`}  status{`\n`}<span className="sql-key">FROM</span> pedidos{`\n`}<span className="sql-key">ORDER BY</span> valor_total <span className="sql-key">DESC</span>{`\n`}<span className="sql-key">LIMIT</span> <span className="sql-number">3</span>;</code></pre> },
];

function SelectCard({ activity }: { activity: Activity }) {
  const [attempted, setAttempted] = useState(false);
  const [revealed, setRevealed] = useState(false);
  return <article className="select-activity">
    <div className="mission-top"><span className="mission-number">MISSÃO {activity.number}</span><span className="difficulty">CONSULTA</span></div>
    <h3>{activity.title}</h3><p>{activity.briefing}</p><div className="mission-target"><b>Seu objetivo</b><span>{activity.target}</span></div>
    {!attempted ? <button className="button button-primary full-button" onClick={() => setAttempted(true)}>Já tentei no Workbench <span>✓</span></button>
      : !revealed ? <div className="attempt-confirmed"><span>✓ Tentativa registrada nesta visita</span><button className="button button-primary" onClick={() => setRevealed(true)}>Revelar correção</button></div>
      : <div className="setup-solution" aria-live="polite"><small>CORREÇÃO COMENTADA</small>{activity.solution}</div>}
  </article>;
}

export default function SelectActivities() {
  return <div className="select-activities">{activities.map(activity => <SelectCard activity={activity} key={activity.number} />)}</div>;
}
