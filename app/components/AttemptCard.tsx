"use client";

import { useState } from "react";

const solution = `SELECT nome, preco, estoque
FROM produtos
WHERE estoque > 0
ORDER BY preco DESC
LIMIT 5;`;

export default function AttemptCard() {
  const [attempted, setAttempted] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  async function copySolution() {
    await navigator.clipboard.writeText(solution);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <article className="mission-card">
      <div className="mission-top">
        <span className="mission-number">MISSÃO 01</span>
        <span className="difficulty">INICIANTE</span>
      </div>
      <h3>A vitrine dos mais valiosos</h3>
      <p>A gerente quer exibir os cinco produtos mais caros que ainda estão disponíveis no estoque.</p>
      <div className="mission-target"><b>Seu objetivo</b><span>Mostre nome, preço e estoque. Ordene do maior para o menor preço e limite a cinco resultados.</span></div>
      {!attempted ? (
        <button className="button button-primary full-button" onClick={() => setAttempted(true)}>Já tentei no Workbench <span>✓</span></button>
      ) : !revealed ? (
        <div className="attempt-confirmed">
          <span>✓ Tentativa registrada nesta visita</span>
          <button className="button button-primary" onClick={() => setRevealed(true)}>Revelar correção</button>
        </div>
      ) : (
        <div className="solution-panel" aria-live="polite">
          <div className="solution-header"><span><b>✓ Solução comentada</b><small>Uma das respostas possíveis</small></span><button onClick={copySolution}>{copied ? "Copiado!" : "Copiar SQL"}</button></div>
          <pre><code><span className="sql-key">SELECT</span> nome, preco, estoque{`\n`}<span className="sql-key">FROM</span> produtos{`\n`}<span className="sql-key">WHERE</span> estoque &gt; <span className="sql-number">0</span>{`\n`}<span className="sql-key">ORDER BY</span> preco <span className="sql-key">DESC</span>{`\n`}<span className="sql-key">LIMIT</span> <span className="sql-number">5</span>;</code></pre>
          <div className="explanation-grid">
            <p><b>WHERE estoque &gt; 0</b><span>Remove os produtos indisponíveis.</span></p>
            <p><b>ORDER BY preco DESC</b><span>Coloca os maiores preços primeiro.</span></p>
            <p><b>LIMIT 5</b><span>Mantém somente as cinco primeiras linhas.</span></p>
          </div>
        </div>
      )}
    </article>
  );
}
