"use client";

import Link from "next/link";
import { useState } from "react";

const trails = [
  { number: "00", title: "Preparando o ambiente", tag: "Trilha completa", tone: "cyan", href: "/trilhas/ambiente" },
  { number: "01", title: "Fundamentos de bancos", tag: "Trilha completa", tone: "cyan", href: "/trilhas/fundamentos" },
  { number: "02", title: "Criando bancos e tabelas", tag: "Trilha completa", tone: "blue", href: "/trilhas/estrutura" },
  { number: "03", title: "Primeiras consultas", tag: "Trilha completa", tone: "blue", href: "/trilhas/select" },
  { number: "04", title: "Filtros e buscas", tag: "Trilha completa", tone: "violet", href: "/trilhas/filtros" },
  { number: "05", title: "Manipulando dados", tag: "Trilha completa", tone: "violet", href: "/trilhas/manipulacao" },
  { number: "06", title: "Funções e análise", tag: "Trilha completa", tone: "magenta", href: "/trilhas/funcoes" },
  { number: "07", title: "Conectando tabelas", tag: "Trilha completa", tone: "magenta", href: "/trilhas/joins" },
  { number: "08", title: "Subconsultas e relatórios", tag: "Trilha completa", tone: "amber", href: "/trilhas/subconsultas" },
  { number: "09", title: "Projeto final", tag: "Jornada completa", tone: "amber", href: "/trilhas/projeto-final" },
];

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <main className={`home-page theme-${theme}`}>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Página inicial">
          <span className="brand-mark">D</span>
          <span><strong>Professor Dayvson</strong><small>Central de Aulas</small></span>
        </Link>
        <div className="header-actions">
          <nav aria-label="Navegação principal">
            <a href="#trilhas">Trilhas</a>
            <Link href="/trilhas/select">Laboratório</Link>
            <a href="#downloads">Downloads</a>
          </nav>
          <div className="theme-switch" role="group" aria-label="Escolher tema da página">
            <button className={theme === "light" ? "selected" : ""} aria-pressed={theme === "light"} onClick={() => setTheme("light")} title="Usar tema claro"><span aria-hidden="true">☀</span><small>Claro</small></button>
            <button className={theme === "dark" ? "selected" : ""} aria-pressed={theme === "dark"} onClick={() => setTheme("dark")} title="Usar tema escuro"><span aria-hidden="true">◐</span><small>Escuro</small></button>
          </div>
        </div>
      </header>

      <section className="hero" id="conteudo">
        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />
        <div className="hero-copy">
          <div className="eyebrow"><span /> MYSQL • JORNADA COMPLETA</div>
          <h1>Do primeiro comando ao<br /><em>relatório que decide.</em></h1>
          <p>
            Aprenda SQL construindo a inteligência da LevelUp Store. Entenda o problema,
            teste no Workbench e avance por missões que realmente fazem sentido.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/trilhas/ambiente">Começar pela Trilha 00 <span>→</span></Link>
            <a className="button button-ghost" href="#trilhas">Ver mapa das trilhas</a>
          </div>
          <div className="hero-facts" aria-label="Informações do curso">
            <span><strong>10</strong> trilhas</span>
            <span><strong>41</strong> aulas</span>
            <span><strong>1</strong> projeto evolutivo</span>
          </div>
        </div>

        <div className="query-console" aria-label="Exemplo de consulta SQL">
          <div className="console-top">
            <div className="console-dots"><i /><i /><i /></div>
            <span>levelup_store / missao_03.sql</span>
            <b>MYSQL</b>
          </div>
          <pre><code><span className="sql-key">SELECT</span> p.nome, p.preco{`\n`}<span className="sql-key">FROM</span> produtos <span className="sql-key">AS</span> p{`\n`}<span className="sql-key">WHERE</span> p.estoque &gt; <span className="sql-number">0</span>{`\n`}<span className="sql-key">ORDER BY</span> p.preco <span className="sql-key">DESC</span>{`\n`}<span className="sql-key">LIMIT</span> <span className="sql-number">3</span>;</code></pre>
          <div className="result-label"><span>✓</span> Consulta executada <small>3 linhas em 0,002s</small></div>
          <div className="result-table" role="table" aria-label="Resultado da consulta">
            <div className="result-row result-head" role="row"><span>nome</span><span>preco</span></div>
            <div className="result-row" role="row"><span>Notebook Legion Pro</span><span>8.499,90</span></div>
            <div className="result-row" role="row"><span>Console PlayStation 5</span><span>3.799,00</span></div>
            <div className="result-row" role="row"><span>Monitor Odyssey G5</span><span>2.199,90</span></div>
          </div>
          <div className="console-note"><span className="pulse" /> Você não decora. Você investiga.</div>
        </div>
      </section>

      <section className="section" id="trilhas">
        <div className="section-heading">
          <div><span className="section-kicker">MAPA DA JORNADA</span><h2>Um caminho claro. Acesso livre.</h2></div>
          <p>Siga a ordem recomendada ou abra diretamente o conteúdo de que precisa.</p>
        </div>
        <div className="trail-grid">
          {trails.map((trail) => {
            const content = (
              <>
                <div className={`trail-orb ${trail.tone}`}>{trail.number}</div>
                <div className="trail-content"><small>TRILHA {trail.number}</small><h3>{trail.title}</h3><span>{trail.tag}</span></div>
                <div className="trail-arrow">{trail.href ? "→" : "·"}</div>
              </>
            );
            return trail.href ? <Link className="trail-card active" href={trail.href} key={trail.number}>{content}</Link> : <article className="trail-card" key={trail.number}>{content}</article>;
          })}
        </div>
        <p className="prototype-note"><span>●</span> Todas as 10 trilhas estão completas e conectadas em sequência.</p>
      </section>

      <section className="section method-section">
        <div className="section-heading compact">
          <div><span className="section-kicker">APRENDER FAZENDO</span><h2>SQL ganha sentido quando resolve algo.</h2></div>
        </div>
        <div className="method-grid">
          <article><b>01</b><span className="method-icon">?</span><h3>Entenda</h3><p>Comece por uma pergunta real, não por uma lista de comandos.</p></article>
          <article><b>02</b><span className="method-icon">›_</span><h3>Execute</h3><p>Teste cada consulta no MySQL Workbench e observe o resultado.</p></article>
          <article><b>03</b><span className="method-icon">⌕</span><h3>Investigue</h3><p>Altere filtros, provoque erros e descubra o motivo de cada resposta.</p></article>
          <article><b>04</b><span className="method-icon">◆</span><h3>Conquiste</h3><p>Finalize cada trilha com uma missão capaz de reunir o aprendizado.</p></article>
        </div>
      </section>

      <section className="section levelup-section">
        <div className="levelup-copy">
          <span className="section-kicker">PROJETO EVOLUTIVO</span>
          <h2>Uma loja. Sete tabelas.<br />Dezenas de decisões.</h2>
          <p>A LevelUp Store cresce junto com você. O mesmo banco que apresenta seu primeiro SELECT será usado nos relatórios avançados.</p>
          <ul>
            <li><span>✓</span> Dados coerentes e prontos para investigar</li>
            <li><span>✓</span> Cenários de estoque, vendas e clientes</li>
            <li><span>✓</span> Consultas que evoluem sem saltos</li>
          </ul>
          <Link className="text-link" href="/trilhas/select">Conhecer a LevelUp Store →</Link>
        </div>
        <div className="schema-card" aria-label="Relacionamentos do banco LevelUp Store">
          <div className="schema-title"><span>LEVELUP_STORE</span><small>7 tabelas conectadas</small></div>
          <div className="schema-map">
            <div className="schema-node node-a"><b>categorias</b><small>1 : N</small></div>
            <div className="schema-node node-b"><b>produtos</b><small>40 registros</small></div>
            <div className="schema-node node-c"><b>itens_pedido</b><small>tabela associativa</small></div>
            <div className="schema-node node-d"><b>pedidos</b><small>60 registros</small></div>
            <div className="schema-node node-e"><b>clientes</b><small>1 : N</small></div>
          </div>
        </div>
      </section>

      <section className="section download-section" id="downloads">
        <div className="download-card">
          <div className="download-icon">DB</div>
          <div><span className="section-kicker">ARQUIVO DE EXEMPLO</span><h2>Leve a LevelUp Store para o Workbench.</h2><p>Baixe uma amostra do banco usada no protótipo e execute suas primeiras consultas.</p></div>
          <a className="button button-primary" href="/downloads/levelup-store-amostra.sql" download>Baixar banco <span>↓</span></a>
        </div>
      </section>

      <footer>
        <div className="brand"><span className="brand-mark">D</span><span><strong>Professor Dayvson</strong><small>SQL do Zero ao Avançado</small></span></div>
        <p>Material criado para aprender fazendo.</p>
        <a href="#conteudo">Voltar ao topo ↑</a>
      </footer>
    </main>
  );
}
