import Link from "next/link";
import AnalysisActivities from "../../components/AnalysisActivities";

export default function AnalysisTrail() {
  return (
    <main className="trail-page analysis-page">
      <a className="skip-link" href="#aula">Pular para a aula</a>
      <header className="site-header">
        <Link className="brand" href="/"><span className="brand-mark">D</span><span><strong>Professor Dayvson</strong><small>SQL do Zero ao Avançado</small></span></Link>
        <nav aria-label="Navegação principal"><Link href="/#trilhas">Trilhas</Link><a href="#laboratorio">Práticas</a><a href="#downloads">Downloads</a></nav>
      </header>

      <section className="trail-hero analysis-hero" id="aula">
        <div className="breadcrumb"><Link href="/">Início</Link><span>/</span><span>Trilha 06</span></div>
        <div className="trail-hero-grid">
          <div><span className="trail-pill">TRILHA 06 • INDICADORES</span><h1>Muitas linhas.<br /><em>Uma decisão.</em></h1><p>Calcule, transforme e resuma os dados da LevelUp Store até que o banco responda com números prontos para orientar a gestão.</p><div className="lesson-chips"><span>ROUND</span><span>CONCAT</span><span>DATE_FORMAT</span><span>COUNT</span><span>SUM</span><span>AVG</span><span>GROUP BY</span><span>HAVING</span></div></div>
          <div className="trail-mission-brief analysis-brief"><small>SUA MISSÃO</small><h2>Ativar o painel de inteligência da LevelUp Store</h2><p>Você vai transformar registros individuais em medidas, padrões e indicadores que revelam o comportamento do catálogo.</p><div><span><b>4</b> aulas</span><span><b>4</b> práticas</span><span><b>1</b> boss final</span></div></div>
        </div>
      </section>

      <div className="lesson-layout">
        <aside className="lesson-nav" aria-label="Conteúdo da trilha">
          <span className="section-kicker">NESTA TRILHA</span>
          <a className="current" href="#numeros"><b>01</b><span>Calcule novas medidas<small>Aritmética e ROUND</small></span></a>
          <a href="#textos"><b>02</b><span>Transforme textos<small>CONCAT, UPPER e LOWER</small></span></a>
          <a href="#datas"><b>03</b><span>Leia o tempo<small>Datas e intervalos</small></span></a>
          <a href="#agregacoes"><b>04</b><span>Resuma os dados<small>Agregações e grupos</small></span></a>
          <a href="#laboratorio"><b>05</b><span>Laboratório<small>Tente antes de revelar</small></span></a>
          <a href="#boss"><b>06</b><span>Boss final<small>Painel do estoque</small></span></a>
          <Link className="back-home" href="/">← Mapa completo</Link>
        </aside>

        <div className="lesson-content">
          <section className="lesson-section" id="numeros">
            <span className="lesson-label">AULA 01 • CÁLCULOS E ROUND</span><h2>A coluna pode gerar<br />uma nova medida.</h2>
            <p className="lead">Uma expressão calcula um resultado para cada linha sem alterar os dados originais. Use apelidos para nomear a nova informação e <strong>ROUND</strong> para controlar as casas decimais.</p>
            <div className="metric-forge" aria-label="Transformação de preço e estoque em valor de estoque"><div><small>PREÇO</small><b>249,90</b></div><i>×</i><div><small>ESTOQUE</small><b>18</b></div><i>=</i><div className="metric-output"><small>VALOR EM ESTOQUE</small><b>4.498,20</b></div></div>
            <div className="math-tools"><article><code>+</code><span>somar</span></article><article><code>-</code><span>subtrair</span></article><article><code>*</code><span>multiplicar</span></article><article><code>/</code><span>dividir</span></article><article className="wide"><code>ROUND(valor, 2)</code><span>arredondar para duas casas</span></article></div>
            <div className="code-panel"><div className="code-panel-top"><span>valor_estoque.sql</span><small>Expressão por linha ↗</small></div><pre><code><span className="sql-key">SELECT</span>{`\n`}  nome,{`\n`}  preco,{`\n`}  estoque,{`\n`}  <span className="sql-key">ROUND</span>(preco * estoque, <span className="sql-number">2</span>) <span className="sql-key">AS</span> valor_em_estoque{`\n`}<span className="sql-key">FROM</span> produtos;</code></pre></div>
            <div className="golden-rule"><span>!</span><p><b>O cálculo não altera a tabela</b>O resultado existe apenas na consulta. Para gravar uma mudança no banco seria necessário usar <code>UPDATE</code>.</p></div>
          </section>

          <section className="lesson-section" id="textos">
            <span className="lesson-label">AULA 02 • FUNÇÕES DE TEXTO</span><h2>Padronize a forma<br />de apresentar.</h2>
            <p className="lead">Funções de texto limpam, combinam e apresentam valores. Elas recebem dados entre parênteses e devolvem um novo resultado.</p>
            <div className="text-transform"><article><small>UPPER</small><span>Ana Souza</span><i>→</i><b>ANA SOUZA</b></article><article><small>LOWER</small><span>PIX</span><i>→</i><b>pix</b></article><article><small>CHAR_LENGTH</small><span>Sao Paulo</span><i>→</i><b>9</b></article></div>
            <div className="concat-machine"><div><span>Ana Souza</span><small>nome</small></div><i>+</i><div><span> • </span><small>separador</small></div><i>+</i><div><span>Sao Paulo</span><small>cidade</small></div><b>ANA SOUZA • Sao Paulo</b></div>
            <div className="code-panel"><div className="code-panel-top"><span>etiqueta_cliente.sql</span><small>Texto composto ↗</small></div><pre><code><span className="sql-key">SELECT</span>{`\n`}  <span className="sql-key">CONCAT</span>({`\n`}    <span className="sql-key">UPPER</span>(nome),{`\n`}    <span className="sql-string">&apos; • &apos;</span>,{`\n`}    cidade{`\n`}  ) <span className="sql-key">AS</span> identificacao{`\n`}<span className="sql-key">FROM</span> clientes;</code></pre></div>
          </section>

          <section className="lesson-section" id="datas">
            <span className="lesson-label">AULA 03 • FUNÇÕES DE DATA</span><h2>Datas também contam<br />uma história.</h2>
            <p className="lead">O MySQL pode extrair partes de uma data, calcular intervalos e criar formatos próprios para apresentação — sem transformar a coluna original em texto.</p>
            <div className="date-lens"><div className="date-source"><small>DATA_PEDIDO</small><b>2026-03-04 14:20:00</b></div><div className="date-rays"><span>YEAR <b>2026</b></span><span>MONTH <b>3</b></span><span>DAY <b>4</b></span><span>DATE_FORMAT <b>03/2026</b></span></div></div>
            <div className="date-toolkit"><article><code>YEAR(data)</code><p>extrai o ano</p></article><article><code>MONTH(data)</code><p>extrai o mês</p></article><article><code>DATEDIFF(a, b)</code><p>dias entre duas datas</p></article><article><code>CURDATE()</code><p>data atual do servidor</p></article></div>
            <div className="code-panel"><div className="code-panel-top"><span>tempo_de_cliente.sql</span><small>Diferença em dias ↗</small></div><pre><code><span className="sql-key">SELECT</span>{`\n`}  nome,{`\n`}  data_cadastro,{`\n`}  <span className="sql-key">DATEDIFF</span>(<span className="sql-key">CURDATE</span>(), data_cadastro) <span className="sql-key">AS</span> dias_como_cliente{`\n`}<span className="sql-key">FROM</span> clientes;</code></pre></div>
            <div className="date-warning"><span>DATA ≠ TEXTO</span><p>Use funções para apresentar datas. Evite armazenar valores como “25/08/2026” em uma coluna de texto, pois isso dificulta ordenações e cálculos.</p></div>
          </section>

          <section className="lesson-section" id="agregacoes">
            <span className="lesson-label">AULA 04 • AGREGAÇÕES, GROUP BY E HAVING</span><h2>Muitas linhas entram.<br />Um resumo sai.</h2>
            <p className="lead">Funções de agregação observam um conjunto de linhas. Com <strong>GROUP BY</strong>, o banco cria um conjunto para cada valor diferente e calcula uma resposta por grupo.</p>
            <div className="aggregate-deck"><article><span>COUNT</span><b>quantas linhas?</b><code>COUNT(*)</code></article><article><span>SUM</span><b>qual é o total?</b><code>SUM(valor_total)</code></article><article><span>AVG</span><b>qual é a média?</b><code>AVG(preco)</code></article><article><span>MIN / MAX</span><b>quais os extremos?</b><code>MIN(preco)</code></article></div>
            <div className="group-visual"><div className="group-lines"><span><i>A</i> Mouse</span><span><i>A</i> Teclado</span><span><i>B</i> Monitor</span><span><i>A</i> Headset</span></div><i>GROUP BY</i><div className="group-result"><span>Grupo A <b>3 produtos</b></span><span>Grupo B <b>1 produto</b></span></div></div>
            <div className="code-panel"><div className="code-panel-top"><span>resumo_categorias.sql</span><small>Uma linha por grupo ↗</small></div><pre><code><span className="sql-key">SELECT</span>{`\n`}  id_categoria,{`\n`}  <span className="sql-key">COUNT</span>(*) <span className="sql-key">AS</span> quantidade,{`\n`}  <span className="sql-key">ROUND</span>(<span className="sql-key">AVG</span>(preco), <span className="sql-number">2</span>) <span className="sql-key">AS</span> preco_medio{`\n`}<span className="sql-key">FROM</span> produtos{`\n`}<span className="sql-key">GROUP BY</span> id_categoria{`\n`}<span className="sql-key">HAVING COUNT</span>(*) &gt;= <span className="sql-number">2</span>;</code></pre></div>
            <div className="where-having"><article><span>WHERE</span><b>filtra linhas</b><p>Acontece <strong>antes</strong> dos grupos serem calculados.</p><code>WHERE ativo = 1</code></article><i>→</i><article><span>GROUP BY</span><b>forma grupos</b><p>Reúne linhas com o mesmo valor.</p><code>GROUP BY id_categoria</code></article><i>→</i><article><span>HAVING</span><b>filtra grupos</b><p>Acontece <strong>depois</strong> da agregação.</p><code>HAVING COUNT(*) &gt;= 2</code></article></div>
            <div className="count-null-note"><span>COUNT(*) × COUNT(comentario)</span><p><code>COUNT(*)</code> conta linhas. <code>COUNT(comentario)</code> conta apenas as linhas em que comentário não é <code>NULL</code>.</p></div>
          </section>

          <section className="lesson-section" id="laboratorio"><span className="lesson-label">LABORATÓRIO PRÁTICO</span><h2>Transforme dados em sinais.</h2><p className="lead">Use o banco <strong>levelup_store</strong>. Primeiro defina qual indicador responde à pergunta; depois escolha as funções e confira se cada coluna do resultado tem significado claro.</p><AnalysisActivities /></section>

          <section className="lesson-section" id="erros"><span className="lesson-label error-label">LABORATÓRIO DE ERROS</span><h2>O resultado denuncia a regra quebrada.</h2><div className="analysis-errors"><details><summary><code>SELECT id_categoria, nome, AVG(preco) ... GROUP BY id_categoria</code></summary><p><code>nome</code> não pertence ao agrupamento nem está dentro de uma função agregadora. Um grupo possui vários nomes: qual deles deveria aparecer?</p></details><details><summary><code>WHERE COUNT(*) &gt; 2</code></summary><p><code>WHERE</code> acontece antes da contagem existir. Para filtrar o resultado de uma agregação, use <code>HAVING</code>.</p></details><details><summary><code>AVG(preco) = 2559.600000...</code></summary><p>A média pode produzir muitas casas decimais. Use <code>ROUND(AVG(preco), 2)</code> quando o relatório exigir duas casas.</p></details></div></section>

          <section className="lesson-section" id="downloads"><span className="lesson-label">KIT DA TRILHA 06</span><h2>Arquivos para analisar.</h2><div className="setup-downloads">
            <a href="/downloads/trilha-06/funcoes-guiadas.sql" download><span>SQL</span><div><b>Funções guiadas</b><small>Exemplos numéricos, textuais e temporais</small></div><i>↓</i></a>
            <a href="/downloads/trilha-06/atividades-analise.sql" download><span>SQL</span><div><b>Atividades práticas</b><small>Missões sem respostas</small></div><i>↓</i></a>
            <a href="/downloads/trilha-06/guia-funcoes.txt" download><span>TXT</span><div><b>Guia de funções</b><small>Consulta rápida para o Workbench</small></div><i>↓</i></a>
            <a href="/downloads/trilha-00/levelup-store-inicial.sql" download><span>SQL</span><div><b>Banco LevelUp Store</b><small>Base completa para os exercícios</small></div><i>↓</i></a>
          </div></section>

          <section className="boss-card analysis-boss" id="boss"><div className="boss-badge">BOSS FINAL</div><span className="boss-icon">⌁</span><h2>Painel estratégico do estoque</h2><p>A diretoria quer um resumo por categoria dos produtos ativos: quantidade de produtos, estoque total, preço médio e valor total em estoque. Mostre apenas categorias com estoque total superior a dez e ordene pelo maior valor em estoque.</p><div className="boss-checks"><span>□ Somente produtos ativos</span><span>□ Uma linha por categoria</span><span>□ Quatro indicadores claros</span><span>□ HAVING e ordem corretos</span></div><details><summary>Já executei — revelar uma solução</summary><p><code>SELECT id_categoria, COUNT(*) AS quantidade_produtos, SUM(estoque) AS estoque_total, ROUND(AVG(preco), 2) AS preco_medio, ROUND(SUM(preco * estoque), 2) AS valor_em_estoque FROM produtos WHERE ativo = 1 GROUP BY id_categoria HAVING SUM(estoque) &gt; 10 ORDER BY valor_em_estoque DESC;</code></p></details></section>

          <section className="next-mission"><span>PRÓXIMA TRILHA</span><h2>Conectando tabelas</h2><p>Na próxima etapa, você trocará códigos por informações completas usando relacionamentos e JOINs.</p><Link href="/trilhas/joins">Começar a Trilha 07 →</Link></section>
        </div>
      </div>
    </main>
  );
}
