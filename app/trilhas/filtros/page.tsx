import Link from "next/link";
import FilterActivities from "../../components/FilterActivities";

export default function FilterTrail() {
  return (
    <main className="trail-page filter-page">
      <a className="skip-link" href="#aula">Pular para a aula</a>
      <header className="site-header">
        <Link className="brand" href="/"><span className="brand-mark">D</span><span><strong>Professor Dayvson</strong><small>SQL do Zero ao Avançado</small></span></Link>
        <nav aria-label="Navegação principal"><Link href="/#trilhas">Trilhas</Link><a href="#laboratorio">Práticas</a><a href="#downloads">Downloads</a></nav>
      </header>

      <section className="trail-hero filter-hero" id="aula">
        <div className="breadcrumb"><Link href="/">Início</Link><span>/</span><span>Trilha 04</span></div>
        <div className="trail-hero-grid">
          <div><span className="trail-pill">TRILHA 04 • PRECISÃO</span><h1>Menos linhas.<br /><em>Mais respostas.</em></h1><p>Transforme necessidades reais em condições precisas e encontre somente os dados que ajudam a tomar uma decisão.</p><div className="lesson-chips"><span>WHERE</span><span>AND</span><span>OR</span><span>BETWEEN</span><span>IN</span><span>LIKE</span><span>NULL</span></div></div>
          <div className="trail-mission-brief filter-brief"><small>SUA MISSÃO</small><h2>Operar o radar de buscas da LevelUp Store</h2><p>O banco possui muitos registros. Você vai construir filtros que separam o ruído das respostas úteis.</p><div><span><b>4</b> aulas</span><span><b>4</b> práticas</span><span><b>1</b> boss final</span></div></div>
        </div>
      </section>

      <div className="lesson-layout">
        <aside className="lesson-nav" aria-label="Conteúdo da trilha">
          <span className="section-kicker">NESTA TRILHA</span>
          <a className="current" href="#where"><b>01</b><span>Defina a condição<small>WHERE e comparações</small></span></a>
          <a href="#logica"><b>02</b><span>Combine critérios<small>AND, OR e NOT</small></span></a>
          <a href="#atalhos"><b>03</b><span>Filtre faixas e listas<small>BETWEEN e IN</small></span></a>
          <a href="#padroes"><b>04</b><span>Busque padrões e ausências<small>LIKE e NULL</small></span></a>
          <a href="#laboratorio"><b>05</b><span>Laboratório<small>Tente antes de revelar</small></span></a>
          <a href="#boss"><b>06</b><span>Boss final<small>Radar da campanha</small></span></a>
          <Link className="back-home" href="/">← Mapa completo</Link>
        </aside>

        <div className="lesson-content">
          <section className="lesson-section" id="where">
            <span className="lesson-label">AULA 01 • WHERE E COMPARAÇÕES</span><h2>O WHERE funciona<br />como uma catraca.</h2>
            <p className="lead">Cada linha enfrenta uma condição. Se o resultado for verdadeiro, ela passa para a resposta; se for falso, fica de fora.</p>
            <div className="filter-radar" aria-label="Linhas passando por um filtro de preço">
              <div className="radar-source"><small>TABELA PRODUTOS</small><span>Mouse • 249,90</span><span>Monitor • 2.199,90</span><span>Console • 3.799,00</span></div>
              <div className="radar-gate"><b>WHERE</b><code>preco &gt; 1000</code></div>
              <div className="radar-result"><small>RESULTADO</small><span>✓ Monitor</span><span>✓ Console</span><i>Mouse não passou</i></div>
            </div>
            <div className="code-panel"><div className="code-panel-top"><span>produtos_premium.sql</span><small>A condição vem após FROM ↗</small></div><pre><code><span className="sql-key">SELECT</span> nome, preco{`\n`}<span className="sql-key">FROM</span> produtos{`\n`}<span className="sql-key">WHERE</span> preco &gt; <span className="sql-number">1000</span>;</code></pre></div>
            <div className="operator-board"><article><code>=</code><span>igual a</span></article><article><code>&lt;&gt;</code><span>diferente de</span></article><article><code>&gt;</code><span>maior que</span></article><article><code>&gt;=</code><span>maior ou igual</span></article><article><code>&lt;</code><span>menor que</span></article><article><code>&lt;=</code><span>menor ou igual</span></article></div>
            <div className="golden-rule"><span>!</span><p><b>Texto fica entre aspas simples</b>Números podem ser comparados sem aspas: <code>preco &gt; 1000</code>. Textos precisam delas: <code>status = &apos;PAGO&apos;</code>.</p></div>
          </section>

          <section className="lesson-section" id="logica">
            <span className="lesson-label">AULA 02 • AND, OR E NOT</span><h2>Uma condição pode<br />ter várias peças.</h2>
            <p className="lead"><strong>AND</strong> exige que tudo seja verdadeiro. <strong>OR</strong> aceita ao menos uma alternativa. <strong>NOT</strong> inverte uma condição.</p>
            <div className="logic-deck"><article><span>AND</span><b>Todos os critérios</b><p>Preço baixo <strong>e</strong> estoque disponível.</p><i>restritivo</i></article><article><span>OR</span><b>Uma das opções</b><p>Status pago <strong>ou</strong> entregue.</p><i>amplo</i></article><article><span>NOT</span><b>O contrário</b><p>Produtos que <strong>não</strong> estão inativos.</p><i>inversão</i></article></div>
            <div className="code-panel"><div className="code-panel-top"><span>estoque_acessivel.sql</span><small>Duas exigências ↗</small></div><pre><code><span className="sql-key">SELECT</span> nome, preco, estoque{`\n`}<span className="sql-key">FROM</span> produtos{`\n`}<span className="sql-key">WHERE</span> preco &lt;= <span className="sql-number">500</span>{`\n`}  <span className="sql-key">AND</span> estoque &gt; <span className="sql-number">0</span>;</code></pre></div>
            <div className="precedence-alert"><div><span>SEM PARÊNTESES</span><code>ativo = 1 AND estoque &gt; 0 OR preco &lt; 300</code></div><div className="clear"><span>INTENÇÃO EXPLÍCITA</span><code>ativo = 1 AND (estoque &gt; 0 OR preco &lt; 300)</code></div><p><strong>AND é avaliado antes de OR.</strong> Use parênteses para deixar a regra de negócio visível — inclusive para quem ler sua consulta depois.</p></div>
          </section>

          <section className="lesson-section" id="atalhos">
            <span className="lesson-label">AULA 03 • BETWEEN E IN</span><h2>Escreva a intenção,<br />não uma repetição.</h2>
            <p className="lead">Quando a pergunta envolve uma faixa ou uma lista de opções, existem formas mais legíveis do que repetir comparações.</p>
            <div className="shortcut-compare"><article><small>FAIXA INCLUSIVA</small><b>BETWEEN</b><code>preco BETWEEN 200 AND 400</code><p>Equivale a <code>preco &gt;= 200 AND preco &lt;= 400</code>.</p><div className="range-line"><i /><span>200</span><em>valores aceitos</em><span>400</span><i /></div></article><article><small>LISTA DE OPÇÕES</small><b>IN</b><code>status IN (&apos;PAGO&apos;, &apos;ENTREGUE&apos;)</code><p>Equivale a comparar o mesmo campo com cada opção usando <code>OR</code>.</p><div className="token-list"><span>PAGO</span><span>ENTREGUE</span><span className="off">CANCELADO</span></div></article></div>
            <div className="code-panel"><div className="code-panel-top"><span>pedidos_em_foco.sql</span><small>Lista de estados ↗</small></div><pre><code><span className="sql-key">SELECT</span> id_pedido, status, valor_total{`\n`}<span className="sql-key">FROM</span> pedidos{`\n`}<span className="sql-key">WHERE</span> status <span className="sql-key">IN</span> (<span className="sql-string">&apos;PAGO&apos;</span>, <span className="sql-string">&apos;EM_TRANSPORTE&apos;</span>){`\n`}<span className="sql-key">ORDER BY</span> valor_total <span className="sql-key">DESC</span>;</code></pre></div>
          </section>

          <section className="lesson-section" id="padroes">
            <span className="lesson-label">AULA 04 • LIKE E NULL</span><h2>Nem toda busca conhece<br />o valor inteiro.</h2>
            <p className="lead"><strong>LIKE</strong> encontra padrões em textos. Para verificar ausência de informação, use <strong>IS NULL</strong> — porque ausência não é igual a zero nem a texto vazio.</p>
            <div className="pattern-lab"><article><span className="pattern-symbol">%</span><div><b>Qualquer quantidade</b><code>&apos;A%&apos;</code><p>Começa com A e pode continuar com qualquer texto.</p></div></article><article><span className="pattern-symbol">_</span><div><b>Exatamente um caractere</b><code>&apos;_na%&apos;</code><p>Um caractere, depois “na”, e qualquer continuação.</p></div></article></div>
            <div className="code-panel"><div className="code-panel-top"><span>clientes_por_nome.sql</span><small>Busca por padrão ↗</small></div><pre><code><span className="sql-key">SELECT</span> nome, email{`\n`}<span className="sql-key">FROM</span> clientes{`\n`}<span className="sql-key">WHERE</span> nome <span className="sql-key">LIKE</span> <span className="sql-string">&apos;A%&apos;</span>;</code></pre></div>
            <div className="null-lesson"><div><span>✕</span><code>comentario = NULL</code><small>NULL não é um valor comum</small></div><i>→</i><div className="correct"><span>✓</span><code>comentario IS NULL</code><small>Teste correto de ausência</small></div></div>
            <div className="code-panel compact-code"><pre><code><span className="sql-key">SELECT</span> id_avaliacao, nota{`\n`}<span className="sql-key">FROM</span> avaliacoes{`\n`}<span className="sql-key">WHERE</span> comentario <span className="sql-key">IS NOT NULL</span>;</code></pre></div>
          </section>

          <section className="lesson-section" id="laboratorio"><span className="lesson-label">LABORATÓRIO PRÁTICO</span><h2>Ajuste o radar.</h2><p className="lead">Use o banco <strong>levelup_store</strong>. Traduza a necessidade da loja em condições, execute no Workbench e confira se as linhas retornadas realmente obedecem à regra.</p><FilterActivities /></section>

          <section className="lesson-section" id="erros"><span className="lesson-label error-label">LABORATÓRIO DE ERROS</span><h2>Descubra por que o filtro falhou.</h2><div className="filter-errors"><details><summary><code>WHERE status = PAGO</code></summary><p><code>PAGO</code> é texto e precisa estar entre aspas simples: <code>WHERE status = &apos;PAGO&apos;</code>.</p></details><details><summary><code>WHERE preco &gt; 200 AND &lt; 400</code></summary><p>Cada comparação precisa mencionar a coluna: <code>preco &gt; 200 AND preco &lt; 400</code>. Ou use <code>BETWEEN</code>.</p></details><details><summary><code>WHERE comentario = NULL</code></summary><p>Comparações comuns com <code>NULL</code> não resultam em verdadeiro. Use <code>IS NULL</code> ou <code>IS NOT NULL</code>.</p></details></div></section>

          <section className="lesson-section" id="downloads"><span className="lesson-label">KIT DA TRILHA 04</span><h2>Arquivos para consultar.</h2><div className="setup-downloads">
            <a href="/downloads/trilha-04/filtros-guiados.sql" download><span>SQL</span><div><b>Filtros guiados</b><small>Exemplos progressivos e comentados</small></div><i>↓</i></a>
            <a href="/downloads/trilha-04/atividades-filtros.sql" download><span>SQL</span><div><b>Atividades práticas</b><small>Missões sem respostas</small></div><i>↓</i></a>
            <a href="/downloads/trilha-04/guia-operadores.txt" download><span>TXT</span><div><b>Guia de operadores</b><small>Consulta rápida para o Workbench</small></div><i>↓</i></a>
            <a href="/downloads/trilha-00/levelup-store-inicial.sql" download><span>SQL</span><div><b>Banco LevelUp Store</b><small>Base completa para os exercícios</small></div><i>↓</i></a>
          </div></section>

          <section className="boss-card filter-boss" id="boss"><div className="boss-badge">BOSS FINAL</div><span className="boss-icon">⌖</span><h2>Radar da campanha</h2><p>O marketing quer selecionar produtos ativos, disponíveis, entre R$ 200 e R$ 3.000 e pertencentes às categorias 1 ou 4. A lista deve mostrar primeiro os mais caros e trazer no máximo cinco resultados.</p><div className="boss-checks"><span>□ Produto ativo e em estoque</span><span>□ Faixa de preço inclusiva</span><span>□ Categorias 1 ou 4</span><span>□ Ordem e limite corretos</span></div><details><summary>Já executei — revelar uma solução</summary><p><code>SELECT nome, preco, estoque FROM produtos WHERE ativo = 1 AND estoque &gt; 0 AND preco BETWEEN 200 AND 3000 AND id_categoria IN (1, 4) ORDER BY preco DESC LIMIT 5;</code></p></details></section>

          <section className="next-mission"><span>PRÓXIMA TRILHA</span><h2>Manipulando dados</h2><p>Depois de encontrar as linhas certas, você aprenderá a inserir, atualizar e remover dados com segurança.</p><Link href="/trilhas/manipulacao">Começar a Trilha 05 →</Link></section>
        </div>
      </div>
    </main>
  );
}
