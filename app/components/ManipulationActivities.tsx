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
    title: "Nova categoria",
    badge: "INSERT",
    briefing: "A LevelUp Store passará a vender itens de iluminação para setups.",
    target: "Cadastre a categoria Iluminacao RGB sem informar manualmente o id_categoria.",
    solution: <><pre><code><span className="sql-key">INSERT INTO</span> categorias (nome){`\n`}<span className="sql-key">VALUES</span> (<span className="sql-string">&apos;Iluminacao RGB&apos;</span>);</code></pre><p>O banco gera <code>id_categoria</code> porque essa coluna utiliza <code>AUTO_INCREMENT</code>.</p></>,
  },
  {
    number: "02",
    title: "Cliente na comunidade",
    badge: "INSERT",
    briefing: "Uma nova cliente concluiu o cadastro pelo atendimento da loja.",
    target: "Cadastre Fernanda Rocha, fernanda@exemplo.com, de Ipatinga, com a data 2026-08-25.",
    solution: <pre><code><span className="sql-key">INSERT INTO</span> clientes{`\n`}  (nome, email, cidade, data_cadastro){`\n`}<span className="sql-key">VALUES</span>{`\n`}  (<span className="sql-string">&apos;Fernanda Rocha&apos;</span>, <span className="sql-string">&apos;fernanda@exemplo.com&apos;</span>,{`\n`}   <span className="sql-string">&apos;Ipatinga&apos;</span>, <span className="sql-string">&apos;2026-08-25&apos;</span>);</code></pre>,
  },
  {
    number: "03",
    title: "Reposição confirmada",
    badge: "UPDATE",
    briefing: "Chegaram dez unidades do produto de código 6 ao estoque.",
    target: "Confira o produto, altere o estoque para 10 e consulte novamente para validar.",
    solution: <pre><code><span className="sql-key">SELECT</span> id_produto, nome, estoque{`\n`}<span className="sql-key">FROM</span> produtos{`\n`}<span className="sql-key">WHERE</span> id_produto = <span className="sql-number">6</span>;{`\n\n`}<span className="sql-key">UPDATE</span> produtos{`\n`}<span className="sql-key">SET</span> estoque = <span className="sql-number">10</span>{`\n`}<span className="sql-key">WHERE</span> id_produto = <span className="sql-number">6</span>;{`\n\n`}<span className="sql-key">SELECT</span> id_produto, nome, estoque{`\n`}<span className="sql-key">FROM</span> produtos{`\n`}<span className="sql-key">WHERE</span> id_produto = <span className="sql-number">6</span>;</code></pre>,
  },
  {
    number: "04",
    title: "Limpeza controlada",
    badge: "DELETE",
    briefing: "O cadastro de treinamento da Fernanda deve ser removido depois dos testes.",
    target: "Localize pelo e-mail, exclua somente esse cadastro e confirme que ele não aparece mais.",
    solution: <><pre><code><span className="sql-key">SELECT</span> id_cliente, nome, email{`\n`}<span className="sql-key">FROM</span> clientes{`\n`}<span className="sql-key">WHERE</span> email = <span className="sql-string">&apos;fernanda@exemplo.com&apos;</span>;{`\n\n`}<span className="sql-key">DELETE FROM</span> clientes{`\n`}<span className="sql-key">WHERE</span> email = <span className="sql-string">&apos;fernanda@exemplo.com&apos;</span>;{`\n\n`}<span className="sql-key">SELECT</span> id_cliente, nome, email{`\n`}<span className="sql-key">FROM</span> clientes{`\n`}<span className="sql-key">WHERE</span> email = <span className="sql-string">&apos;fernanda@exemplo.com&apos;</span>;</code></pre><p>O último <code>SELECT</code> deve retornar zero linhas. Se a cliente possuir pedidos relacionados, a chave estrangeira pode impedir a exclusão.</p></>,
  },
];

function ManipulationCard({ activity }: { activity: Activity }) {
  const [attempted, setAttempted] = useState(false);
  const [revealed, setRevealed] = useState(false);

  return <article className="manipulation-activity">
    <div className="mission-top"><span className="mission-number">MISSÃO {activity.number}</span><span className="difficulty">{activity.badge}</span></div>
    <h3>{activity.title}</h3>
    <p>{activity.briefing}</p>
    <div className="mission-target"><b>Seu objetivo</b><span>{activity.target}</span></div>
    {!attempted ? <button className="button button-primary full-button" onClick={() => setAttempted(true)}>Já tentei no Workbench <span>✓</span></button>
      : !revealed ? <div className="attempt-confirmed"><span>✓ Tentativa registrada nesta visita</span><button className="button button-primary" onClick={() => setRevealed(true)}>Revelar correção</button></div>
      : <div className="setup-solution" aria-live="polite"><small>CORREÇÃO COMENTADA</small>{activity.solution}</div>}
  </article>;
}

export default function ManipulationActivities() {
  return <div className="manipulation-activities">{activities.map(activity => <ManipulationCard activity={activity} key={activity.number} />)}</div>;
}
