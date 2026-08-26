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
    title: "Capital no estoque",
    badge: "CÁLCULO",
    briefing: "A gestão precisa descobrir quanto dinheiro está imobilizado em cada produto.",
    target: "Mostre nome e preço × estoque como valor_em_estoque, arredondado para duas casas, do maior para o menor.",
    solution: <><pre><code><span className="sql-key">SELECT</span>{`\n`}  nome,{`\n`}  <span className="sql-key">ROUND</span>(preco * estoque, <span className="sql-number">2</span>) <span className="sql-key">AS</span> valor_em_estoque{`\n`}<span className="sql-key">FROM</span> produtos{`\n`}<span className="sql-key">ORDER BY</span> valor_em_estoque <span className="sql-key">DESC</span>;</code></pre><p>O cálculo acontece em cada linha. O apelido pode ser reutilizado no <code>ORDER BY</code>.</p></>,
  },
  {
    number: "02",
    title: "Etiqueta de atendimento",
    badge: "TEXTO",
    briefing: "O suporte quer uma identificação compacta para localizar clientes rapidamente.",
    target: "Crie uma coluna identificacao no formato NOME EM MAIÚSCULAS • cidade.",
    solution: <pre><code><span className="sql-key">SELECT</span>{`\n`}  <span className="sql-key">CONCAT</span>({`\n`}    <span className="sql-key">UPPER</span>(nome),{`\n`}    <span className="sql-string">&apos; • &apos;</span>,{`\n`}    cidade{`\n`}  ) <span className="sql-key">AS</span> identificacao{`\n`}<span className="sql-key">FROM</span> clientes;</code></pre>,
  },
  {
    number: "03",
    title: "Calendário de pedidos",
    badge: "DATA",
    briefing: "A coordenação quer enxergar em qual mês e ano cada pedido foi realizado.",
    target: "Exiba id_pedido, data_pedido e uma coluna periodo no formato mês/ano.",
    solution: <><pre><code><span className="sql-key">SELECT</span>{`\n`}  id_pedido,{`\n`}  data_pedido,{`\n`}  <span className="sql-key">DATE_FORMAT</span>(data_pedido, <span className="sql-string">&apos;%m/%Y&apos;</span>) <span className="sql-key">AS</span> periodo{`\n`}<span className="sql-key">FROM</span> pedidos;</code></pre><p><code>DATE_FORMAT</code> apresenta a data em outro formato; não altera o valor armazenado.</p></>,
  },
  {
    number: "04",
    title: "Raio-X das categorias",
    badge: "GROUP BY",
    briefing: "A diretoria quer comparar a composição do catálogo sem usar ainda nomes de outras tabelas.",
    target: "Por id_categoria, mostre quantidade de produtos, estoque total e preço médio; mantenha apenas grupos com dois ou mais produtos.",
    solution: <pre><code><span className="sql-key">SELECT</span>{`\n`}  id_categoria,{`\n`}  <span className="sql-key">COUNT</span>(*) <span className="sql-key">AS</span> quantidade_produtos,{`\n`}  <span className="sql-key">SUM</span>(estoque) <span className="sql-key">AS</span> estoque_total,{`\n`}  <span className="sql-key">ROUND</span>(<span className="sql-key">AVG</span>(preco), <span className="sql-number">2</span>) <span className="sql-key">AS</span> preco_medio{`\n`}<span className="sql-key">FROM</span> produtos{`\n`}<span className="sql-key">GROUP BY</span> id_categoria{`\n`}<span className="sql-key">HAVING COUNT</span>(*) &gt;= <span className="sql-number">2</span>;</code></pre>,
  },
];

function AnalysisCard({ activity }: { activity: Activity }) {
  const [attempted, setAttempted] = useState(false);
  const [revealed, setRevealed] = useState(false);

  return <article className="analysis-activity">
    <div className="mission-top"><span className="mission-number">MISSÃO {activity.number}</span><span className="difficulty">{activity.badge}</span></div>
    <h3>{activity.title}</h3>
    <p>{activity.briefing}</p>
    <div className="mission-target"><b>Seu objetivo</b><span>{activity.target}</span></div>
    {!attempted ? <button className="button button-primary full-button" onClick={() => setAttempted(true)}>Já tentei no Workbench <span>✓</span></button>
      : !revealed ? <div className="attempt-confirmed"><span>✓ Tentativa registrada nesta visita</span><button className="button button-primary" onClick={() => setRevealed(true)}>Revelar correção</button></div>
      : <div className="setup-solution" aria-live="polite"><small>CORREÇÃO COMENTADA</small>{activity.solution}</div>}
  </article>;
}

export default function AnalysisActivities() {
  return <div className="analysis-activities">{activities.map(activity => <AnalysisCard activity={activity} key={activity.number} />)}</div>;
}
