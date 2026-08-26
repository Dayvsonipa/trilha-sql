"use client";

import { useState } from "react";
import type { ReactNode } from "react";

type Sprint = {
  number: string;
  title: string;
  badge: string;
  briefing: string;
  target: string;
  evidence: string;
  solution: ReactNode;
};

const sprints: Sprint[] = [
  {
    number: "01",
    title: "Raio-X da operação",
    badge: "DIAGNÓSTICO",
    briefing: "Antes de recomendar qualquer ação, a diretoria precisa de uma visão única do tamanho atual da loja.",
    target: "Entregue uma linha com total de produtos ativos, clientes, pedidos válidos e faturamento calculado pelos itens.",
    evidence: "A consulta deve devolver exatamente uma linha e quatro métricas com aliases legíveis.",
    solution: <pre><code><span className="sql-key">SELECT</span>{`\n`}  (<span className="sql-key">SELECT COUNT</span>(*) <span className="sql-key">FROM</span> produtos{`\n`}   <span className="sql-key">WHERE</span> ativo = <span className="sql-number">TRUE</span>) <span className="sql-key">AS</span> produtos_ativos,{`\n`}  (<span className="sql-key">SELECT COUNT</span>(*) <span className="sql-key">FROM</span> clientes) <span className="sql-key">AS</span> clientes,{`\n`}  (<span className="sql-key">SELECT COUNT</span>(*) <span className="sql-key">FROM</span> pedidos{`\n`}   <span className="sql-key">WHERE</span> status <span className="sql-key">IN</span> (<span className="sql-number">&apos;PAGO&apos;</span>, <span className="sql-number">&apos;EM_TRANSPORTE&apos;</span>, <span className="sql-number">&apos;ENTREGUE&apos;</span>)) <span className="sql-key">AS</span> pedidos_validos,{`\n`}  (<span className="sql-key">SELECT ROUND</span>(<span className="sql-key">SUM</span>(ip.quantidade * ip.preco_unitario), <span className="sql-number">2</span>){`\n`}   <span className="sql-key">FROM</span> itens_pedido <span className="sql-key">AS</span> ip{`\n`}   <span className="sql-key">INNER JOIN</span> pedidos <span className="sql-key">AS</span> pe{`\n`}     <span className="sql-key">ON</span> pe.id_pedido = ip.id_pedido{`\n`}   <span className="sql-key">WHERE</span> pe.status <span className="sql-key">IN</span> (<span className="sql-number">&apos;PAGO&apos;</span>, <span className="sql-number">&apos;EM_TRANSPORTE&apos;</span>, <span className="sql-number">&apos;ENTREGUE&apos;</span>)) <span className="sql-key">AS</span> faturamento;</code></pre>,
  },
  {
    number: "02",
    title: "Categorias que movem a loja",
    badge: "VENDAS",
    briefing: "A diretoria quer comparar o desempenho comercial das categorias e descobrir onde está o faturamento.",
    target: "Mostre categoria, itens vendidos e faturamento. Considere pedidos válidos e ordene pelo maior faturamento.",
    evidence: "O total precisa vir de quantidade × preço unitário, agrupado pelo ID e nome da categoria.",
    solution: <pre><code><span className="sql-key">SELECT</span>{`\n`}  c.nome <span className="sql-key">AS</span> categoria,{`\n`}  <span className="sql-key">SUM</span>(ip.quantidade) <span className="sql-key">AS</span> itens_vendidos,{`\n`}  <span className="sql-key">ROUND</span>(<span className="sql-key">SUM</span>(ip.quantidade * ip.preco_unitario), <span className="sql-number">2</span>) <span className="sql-key">AS</span> faturamento{`\n`}<span className="sql-key">FROM</span> categorias <span className="sql-key">AS</span> c{`\n`}<span className="sql-key">INNER JOIN</span> produtos <span className="sql-key">AS</span> p{`\n`}  <span className="sql-key">ON</span> p.id_categoria = c.id_categoria{`\n`}<span className="sql-key">INNER JOIN</span> itens_pedido <span className="sql-key">AS</span> ip{`\n`}  <span className="sql-key">ON</span> ip.id_produto = p.id_produto{`\n`}<span className="sql-key">INNER JOIN</span> pedidos <span className="sql-key">AS</span> pe{`\n`}  <span className="sql-key">ON</span> pe.id_pedido = ip.id_pedido{`\n`}<span className="sql-key">WHERE</span> pe.status <span className="sql-key">IN</span> (<span className="sql-number">&apos;PAGO&apos;</span>, <span className="sql-number">&apos;EM_TRANSPORTE&apos;</span>, <span className="sql-number">&apos;ENTREGUE&apos;</span>){`\n`}<span className="sql-key">GROUP BY</span> c.id_categoria, c.nome{`\n`}<span className="sql-key">ORDER BY</span> faturamento <span className="sql-key">DESC</span>;</code></pre>,
  },
  {
    number: "03",
    title: "Estoque sob investigação",
    badge: "RISCO",
    briefing: "Produtos parados ocupam espaço, enquanto itens sem estoque podem representar vendas perdidas.",
    target: "Liste produtos com estoque zero ou que nunca foram vendidos. Mostre produto, categoria, estoque e quantidade já vendida.",
    evidence: "Produtos sem correspondência em itens_pedido precisam permanecer no resultado com total vendido igual a zero.",
    solution: <pre><code><span className="sql-key">SELECT</span>{`\n`}  p.nome <span className="sql-key">AS</span> produto,{`\n`}  c.nome <span className="sql-key">AS</span> categoria,{`\n`}  p.estoque,{`\n`}  <span className="sql-key">COALESCE</span>(<span className="sql-key">SUM</span>(ip.quantidade), <span className="sql-number">0</span>) <span className="sql-key">AS</span> total_vendido{`\n`}<span className="sql-key">FROM</span> produtos <span className="sql-key">AS</span> p{`\n`}<span className="sql-key">INNER JOIN</span> categorias <span className="sql-key">AS</span> c{`\n`}  <span className="sql-key">ON</span> c.id_categoria = p.id_categoria{`\n`}<span className="sql-key">LEFT JOIN</span> itens_pedido <span className="sql-key">AS</span> ip{`\n`}  <span className="sql-key">ON</span> ip.id_produto = p.id_produto{`\n`}<span className="sql-key">GROUP BY</span> p.id_produto, p.nome, c.nome, p.estoque{`\n`}<span className="sql-key">HAVING</span> p.estoque = <span className="sql-number">0</span> <span className="sql-key">OR SUM</span>(ip.quantidade) <span className="sql-key">IS NULL</span>{`\n`}<span className="sql-key">ORDER BY</span> p.estoque, p.nome;</code></pre>,
  },
  {
    number: "04",
    title: "Clientes de alto valor",
    badge: "ESTRATÉGIA",
    briefing: "O relacionamento precisa identificar compradores que gastaram acima da média para uma ação de fidelização.",
    target: "Use uma CTE para mostrar cliente, pedidos e total comprado apenas de quem supera a média dos compradores.",
    evidence: "A CTE deve consolidar cada cliente antes de a consulta externa calcular e aplicar a média.",
    solution: <pre><code><span className="sql-key">WITH</span> vendas_cliente <span className="sql-key">AS</span> ({`\n`}  <span className="sql-key">SELECT</span>{`\n`}    c.id_cliente,{`\n`}    c.nome <span className="sql-key">AS</span> cliente,{`\n`}    <span className="sql-key">COUNT</span>(<span className="sql-key">DISTINCT</span> pe.id_pedido) <span className="sql-key">AS</span> pedidos,{`\n`}    <span className="sql-key">ROUND</span>(<span className="sql-key">SUM</span>(ip.quantidade * ip.preco_unitario), <span className="sql-number">2</span>) <span className="sql-key">AS</span> total_comprado{`\n`}  <span className="sql-key">FROM</span> clientes <span className="sql-key">AS</span> c{`\n`}  <span className="sql-key">INNER JOIN</span> pedidos <span className="sql-key">AS</span> pe{`\n`}    <span className="sql-key">ON</span> pe.id_cliente = c.id_cliente{`\n`}  <span className="sql-key">INNER JOIN</span> itens_pedido <span className="sql-key">AS</span> ip{`\n`}    <span className="sql-key">ON</span> ip.id_pedido = pe.id_pedido{`\n`}  <span className="sql-key">WHERE</span> pe.status <span className="sql-key">IN</span> (<span className="sql-number">&apos;PAGO&apos;</span>, <span className="sql-number">&apos;EM_TRANSPORTE&apos;</span>, <span className="sql-number">&apos;ENTREGUE&apos;</span>){`\n`}  <span className="sql-key">GROUP BY</span> c.id_cliente, c.nome{`\n`}){`\n`}<span className="sql-key">SELECT</span> cliente, pedidos, total_comprado{`\n`}<span className="sql-key">FROM</span> vendas_cliente{`\n`}<span className="sql-key">WHERE</span> total_comprado &gt; ({`\n`}  <span className="sql-key">SELECT AVG</span>(total_comprado) <span className="sql-key">FROM</span> vendas_cliente{`\n`}){`\n`}<span className="sql-key">ORDER BY</span> total_comprado <span className="sql-key">DESC</span>;</code></pre>,
  },
];

function SprintCard({ sprint }: { sprint: Sprint }) {
  const [attempted, setAttempted] = useState(false);
  const [revealed, setRevealed] = useState(false);

  return <article className="final-sprint-card">
    <div className="mission-top"><span className="mission-number">ENTREGA {sprint.number}</span><span className="difficulty">{sprint.badge}</span></div>
    <h3>{sprint.title}</h3>
    <p>{sprint.briefing}</p>
    <div className="mission-target"><b>Requisito</b><span>{sprint.target}</span></div>
    <div className="sprint-evidence"><b>Evidência de qualidade</b><span>{sprint.evidence}</span></div>
    {!attempted ? <button className="button button-primary full-button" onClick={() => setAttempted(true)}>Concluí minha consulta <span>✓</span></button>
      : !revealed ? <div className="attempt-confirmed"><span>✓ Entrega marcada nesta visita</span><button className="button button-primary" onClick={() => setRevealed(true)}>Comparar com referência</button></div>
      : <div className="setup-solution" aria-live="polite"><small>SOLUÇÃO DE REFERÊNCIA</small>{sprint.solution}<p>Sua consulta não precisa ser idêntica. Ela está correta se responder ao requisito e produzir totais coerentes.</p></div>}
  </article>;
}

export default function FinalProjectStudio() {
  return <div className="final-project-studio">{sprints.map(sprint => <SprintCard sprint={sprint} key={sprint.number} />)}</div>;
}
