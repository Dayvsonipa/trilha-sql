import Link from "next/link";
import SelectActivities from "../../components/SelectActivities";

export default function SelectTrail() {
  return (
    <main className="trail-page select-page">
      <a className="skip-link" href="#aula">Pular para a aula</a>
      <header className="site-header">
        <Link className="brand" href="/"><span className="brand-mark">D</span><span><strong>Professor Dayvson</strong><small>SQL do Zero ao Avançado</small></span></Link>
        <nav aria-label="Navegação principal"><Link href="/#trilhas">Trilhas</Link><a href="#laboratorio">Práticas</a><a href="#downloads">Downloads</a></nav>
      </header>

      <section className="trail-hero select-hero" id="aula">
        <div className="breadcrumb"><Link href="/">Início</Link><span>/</span><span>Trilha 03</span></div>
        <div className="trail-hero-grid">
          <div><span className="trail-pill">TRILHA 03 • CONSULTAS</span><h1>Faça a pergunta.<br /><em>Leia a resposta.</em></h1><p>Aprenda a escolher colunas, melhorar títulos e organizar resultados para transformar tabelas em respostas claras.</p><div className="lesson-chips"><span>SELECT</span><span>FROM</span><span>AS</span><span>DISTINCT</span><span>ORDER BY</span><span>LIMIT</span></div></div>
          <div className="trail-mission-brief select-brief"><small>SUA MISSÃO</small><h2>Montar a vitrine de dados da LevelUp Store</h2><p>A loja já possui registros. Agora você vai decidir o que aparece, com quais nomes e em qual ordem.</p><div><span><b>4</b> aulas</span><span><b>4</b> práticas</span><span><b>1</b> boss final</span></div></div>
        </div>
      </section>

      <div className="lesson-layout">
        <aside className="lesson-nav" aria-label="Conteúdo da trilha">
          <span className="section-kicker">NESTA TRILHA</span>
          <a className="current" href="#select"><b>01</b><span>Escolha o que mostrar<small>SELECT e FROM</small></span></a>
          <a href="#apresentacao"><b>02</b><span>Melhore a apresentação<small>AS e DISTINCT</small></span></a>
          <a href="#ordem"><b>03</b><span>Organize o resultado<small>ORDER BY</small></span></a>
          <a href="#limite"><b>04</b><span>Controle a quantidade<small>LIMIT</small></span></a>
          <a href="#laboratorio"><b>05</b><span>Laboratório<small>Tente antes de revelar</small></span></a>
          <a href="#boss"><b>06</b><span>Boss final<small>Vitrine executiva</small></span></a>
          <Link className="back-home" href="/">← Mapa completo</Link>
        </aside>

        <div className="lesson-content">
          <section className="lesson-section" id="select">
            <span className="lesson-label">AULA 01 • SELECT E FROM</span><h2>Você não abre a tabela.<br />Você faz uma consulta.</h2>
            <p className="lead">Quando a gerente pergunta <strong>“quais produtos temos cadastrados?”</strong>, o <code>SELECT</code> define o que será mostrado e o <code>FROM</code> informa de qual tabela os dados virão.</p>
            <div className="query-sentence"><article><span>SELECT</span><b>nome, preco</b><p>“Quero ver o nome e o preço...”</p></article><i>+</i><article><span>FROM</span><b>produtos</b><p>“...buscando na tabela produtos.”</p></article></div>
            <div className="code-panel"><div className="code-panel-top"><span>primeira_consulta.sql</span><small>Execute no Workbench ↗</small></div><pre><code><span className="sql-key">SELECT</span> nome, preco{`\n`}<span className="sql-key">FROM</span> produtos;</code></pre></div>
            <div className="select-choice"><article><small>EXPLORAR</small><code>SELECT *</code><p>Mostra todas as colunas. Útil para conhecer uma tabela pequena.</p></article><article className="recommended"><small>PREFERIR NO DIA A DIA</small><code>SELECT nome, preco</code><p>Mostra apenas o necessário e deixa a intenção mais clara.</p></article></div>
            <div className="data-preview"><div className="preview-title"><span>RESULTADO</span><small>3 linhas exibidas</small></div><div className="pretty-table"><div className="pretty-row pretty-head"><span>nome</span><span>preco</span></div><div className="pretty-row"><span>Mouse HyperX Pulsefire</span><span>249,90</span></div><div className="pretty-row"><span>Monitor Odyssey G5</span><span>2.199,90</span></div><div className="pretty-row"><span>Console PlayStation 5</span><span>3.799,00</span></div></div></div>
          </section>

          <section className="lesson-section" id="apresentacao">
            <span className="lesson-label">AULA 02 • AS E DISTINCT</span><h2>O resultado também<br />precisa ser entendido.</h2>
            <p className="lead"><strong>AS</strong> cria um título temporário no resultado. <strong>DISTINCT</strong> remove combinações repetidas. Nenhum deles altera os dados originais.</p>
            <div className="before-after-query"><article><small>ANTES</small><div><span>nome</span><span>preco</span></div></article><i>→</i><article><small>COM APELIDOS</small><div><span>produto</span><span>preco_atual</span></div></article></div>
            <div className="code-panel"><div className="code-panel-top"><span>titulos_claros.sql</span><small>Apelidos temporários ↗</small></div><pre><code><span className="sql-key">SELECT</span>{`\n`}  nome <span className="sql-key">AS</span> produto,{`\n`}  preco <span className="sql-key">AS</span> preco_atual{`\n`}<span className="sql-key">FROM</span> produtos;</code></pre></div>
            <div className="distinct-demo"><div><small>SEM DISTINCT</small><span>Ipatinga</span><span>Coronel Fabriciano</span><span>Ipatinga</span><span>Timóteo</span></div><i>→</i><div className="clean-list"><small>COM DISTINCT</small><span>Ipatinga</span><span>Coronel Fabriciano</span><span>Timóteo</span></div></div>
            <div className="code-panel compact-code"><pre><code><span className="sql-key">SELECT DISTINCT</span> cidade{`\n`}<span className="sql-key">FROM</span> clientes;</code></pre></div>
          </section>

          <section className="lesson-section" id="ordem">
            <span className="lesson-label">AULA 03 • ORDER BY</span><h2>Sem ordenar, “primeiro”<br />não tem significado.</h2>
            <p className="lead">Uma tabela não promete uma ordem natural. Use <strong>ORDER BY</strong> sempre que a sequência do resultado fizer parte da pergunta.</p>
            <div className="sort-control"><article><span>ASC</span><b>Menor → maior</b><p>A ordem crescente é o padrão.</p></article><article><span>DESC</span><b>Maior → menor</b><p>Ideal para rankings de maior valor.</p></article></div>
            <div className="code-panel"><div className="code-panel-top"><span>ranking_precos.sql</span><small>Ordem decrescente ↗</small></div><pre><code><span className="sql-key">SELECT</span> nome, preco{`\n`}<span className="sql-key">FROM</span> produtos{`\n`}<span className="sql-key">ORDER BY</span> preco <span className="sql-key">DESC</span>;</code></pre></div>
            <div className="multi-sort"><span>ORDENAÇÃO EM CAMADAS</span><code>ORDER BY cidade ASC, nome ASC;</code><p>Primeiro organiza por cidade. Quando duas linhas têm a mesma cidade, organiza essas linhas pelo nome.</p></div>
          </section>

          <section className="lesson-section" id="limite">
            <span className="lesson-label">AULA 04 • LIMIT</span><h2>Nem toda pergunta<br />precisa de todas as linhas.</h2>
            <p className="lead"><strong>LIMIT</strong> controla quantas linhas chegam ao resultado. Ele é ótimo para testar consultas e montar listas como “os cinco maiores”.</p>
            <div className="limit-visual"><div className="limit-stack"><span>1 • Notebook Legion Pro</span><span>2 • Console PlayStation 5</span><span>3 • Monitor Odyssey G5</span><span className="cut-row">4 • Cadeira ThunderX3</span><span className="cut-row">5 • Teclado Kumara</span></div><div className="limit-gate"><b>LIMIT 3</b><span>Somente três linhas atravessam</span></div></div>
            <div className="code-panel"><div className="code-panel-top"><span>top_3.sql</span><small>Ordene antes de limitar ↗</small></div><pre><code><span className="sql-key">SELECT</span> nome, preco{`\n`}<span className="sql-key">FROM</span> produtos{`\n`}<span className="sql-key">ORDER BY</span> preco <span className="sql-key">DESC</span>{`\n`}<span className="sql-key">LIMIT</span> <span className="sql-number">3</span>;</code></pre></div>
            <div className="golden-rule"><span>!</span><p><b>A sequência lógica importa</b>Primeiro o banco organiza o resultado; depois mantém apenas a quantidade solicitada.</p></div>
          </section>

          <section className="lesson-section" id="laboratorio"><span className="lesson-label">LABORATÓRIO PRÁTICO</span><h2>Agora é com você.</h2><p className="lead">Use o banco <strong>levelup_store</strong>. Leia a necessidade da empresa, escreva sua consulta e observe o resultado antes de revelar a correção.</p><SelectActivities /></section>

          <section className="lesson-section" id="erros"><span className="lesson-label error-label">LABORATÓRIO DE ERROS</span><h2>O banco apontou uma pista.</h2><div className="select-errors"><details><summary><code>SELECT nome preco FROM produtos;</code></summary><p>Sem vírgula, <code>preco</code> pode ser interpretado como apelido de <code>nome</code>. A consulta executa, mas não entrega as duas colunas desejadas.</p></details><details><summary><code>SELECT nome FORM produtos;</code></summary><p>A palavra correta é <code>FROM</code>. Erros de digitação nas palavras-chave geram erro de sintaxe.</p></details><details><summary><code>SELECT nome FROM produto;</code></summary><p>No projeto, a tabela se chama <code>produtos</code>. Confira o nome em SCHEMAS ou com <code>SHOW TABLES;</code>.</p></details></div></section>

          <section className="lesson-section" id="downloads"><span className="lesson-label">KIT DA TRILHA 03</span><h2>Arquivos para consultar.</h2><div className="setup-downloads">
            <a href="/downloads/trilha-03/consultas-guiadas.sql" download><span>SQL</span><div><b>Consultas guiadas</b><small>Exemplos progressivos e comentados</small></div><i>↓</i></a>
            <a href="/downloads/trilha-03/atividades-select.sql" download><span>SQL</span><div><b>Atividades práticas</b><small>Missões sem respostas</small></div><i>↓</i></a>
            <a href="/downloads/trilha-03/guia-select.txt" download><span>TXT</span><div><b>Guia de consulta</b><small>Ordem e função dos comandos</small></div><i>↓</i></a>
            <a href="/downloads/trilha-00/levelup-store-inicial.sql" download><span>SQL</span><div><b>Banco LevelUp Store</b><small>Base completa para os exercícios</small></div><i>↓</i></a>
          </div></section>

          <section className="boss-card select-boss" id="boss"><div className="boss-badge">BOSS FINAL</div><span className="boss-icon">⌁</span><h2>Vitrine executiva</h2><p>A diretoria quer uma lista dos quatro produtos mais caros, pronta para ser apresentada em uma reunião.</p><div className="boss-checks"><span>□ Somente colunas úteis</span><span>□ Títulos claros</span><span>□ Ordem decrescente</span><span>□ Quatro resultados</span></div><details><summary>Já executei — revelar uma solução</summary><p><code>SELECT nome AS produto, preco AS preco_atual, estoque FROM produtos ORDER BY preco DESC LIMIT 4;</code></p></details></section>

          <section className="next-mission"><span>PRÓXIMA TRILHA</span><h2>Filtros e buscas</h2><p>Na próxima etapa, você usará condições para encontrar exatamente as linhas de que precisa.</p><Link href="/trilhas/filtros">Começar a Trilha 04 →</Link></section>
        </div>
      </div>
    </main>
  );
}
