import Link from "next/link";
import SubqueryActivities from "../../components/SubqueryActivities";

export default function SubqueryTrail() {
  return (
    <main className="trail-page subquery-page">
      <a className="skip-link" href="#aula">Pular para a aula</a>
      <header className="site-header">
        <Link className="brand" href="/"><span className="brand-mark">D</span><span><strong>Professor Dayvson</strong><small>SQL do Zero ao Avançado</small></span></Link>
        <nav aria-label="Navegação principal"><Link href="/#trilhas">Trilhas</Link><a href="#laboratorio">Práticas</a><a href="#downloads">Downloads</a></nav>
      </header>

      <section className="trail-hero subquery-hero" id="aula">
        <div className="breadcrumb"><Link href="/">Início</Link><span>/</span><span>Trilha 08</span></div>
        <div className="trail-hero-grid">
          <div><span className="trail-pill">TRILHA 08 • SUBCONSULTAS</span><h1>Uma pergunta<br /><em>dentro da outra.</em></h1><p>Faça uma consulta produzir a informação de que outra precisa e transforme dados conectados em relatórios que apoiam decisões.</p><div className="lesson-chips"><span>SUBQUERY</span><span>IN</span><span>EXISTS</span><span>HAVING</span><span>WITH</span><span>RELATÓRIOS</span></div></div>
          <div className="trail-mission-brief subquery-brief"><small>SUA MISSÃO</small><h2>Construir a inteligência da LevelUp Store</h2><p>Você investigará médias, presença, ausência e resultados consolidados sem levar cálculos manuais para fora do banco.</p><div><span><b>4</b> aulas</span><span><b>4</b> práticas</span><span><b>1</b> boss final</span></div></div>
        </div>
      </section>

      <div className="lesson-layout">
        <aside className="lesson-nav" aria-label="Conteúdo da trilha">
          <span className="section-kicker">NESTA TRILHA</span>
          <a className="current" href="#escalar"><b>01</b><span>Produza um valor<small>Subconsulta escalar</small></span></a>
          <a href="#listas"><b>02</b><span>Compare com uma lista<small>IN e NOT IN</small></span></a>
          <a href="#exists"><b>03</b><span>Teste se algo existe<small>EXISTS correlacionado</small></span></a>
          <a href="#relatorios"><b>04</b><span>Organize o relatório<small>CTE com WITH</small></span></a>
          <a href="#laboratorio"><b>05</b><span>Laboratório<small>Tente antes de revelar</small></span></a>
          <a href="#boss"><b>06</b><span>Boss final<small>Clientes acima da média</small></span></a>
          <Link className="back-home" href="/">← Mapa completo</Link>
        </aside>

        <div className="lesson-content">
          <section className="lesson-section" id="escalar">
            <span className="lesson-label">AULA 01 • SUBCONSULTA ESCALAR</span><h2>A consulta interna<br />entrega uma resposta.</h2>
            <p className="lead">Uma subconsulta é uma instrução <strong>SELECT</strong> dentro de outra. Quando ela devolve um único valor, pode participar de comparações como <code>&gt;</code>, <code>&lt;</code> ou <code>=</code>.</p>
            <div className="nested-query" aria-label="A consulta interna calcula a média e alimenta a consulta externa"><article className="outer-query"><small>CONSULTA EXTERNA</small><b>Quais produtos custam mais?</b><code>WHERE preco &gt; ( resultado )</code><article className="inner-query"><small>CONSULTA INTERNA • EXECUTA PRIMEIRO</small><b>Qual é a média?</b><code>SELECT AVG(preco) FROM produtos</code><span>Resultado: 2.559,60</span></article></article><div className="query-result"><span>RESPOSTA FINAL</span><b>Produtos acima de R$ 2.559,60</b></div></div>
            <div className="code-panel"><div className="code-panel-top"><span>produtos_acima_da_media.sql</span><small>De dentro para fora ↗</small></div><pre><code><span className="sql-key">SELECT</span> nome, preco{`\n`}<span className="sql-key">FROM</span> produtos{`\n`}<span className="sql-key">WHERE</span> preco &gt; ({`\n`}  <span className="sql-key">SELECT AVG</span>(preco){`\n`}  <span className="sql-key">FROM</span> produtos{`\n`});</code></pre></div>
            <div className="scalar-rules"><article><span>1 COLUNA</span><p>A consulta interna precisa devolver a informação que será comparada.</p></article><article><span>1 LINHA</span><p>Operadores simples esperam somente um valor. Uma lista exige outra estratégia.</p></article><article><span>( )</span><p>Os parênteses delimitam a consulta interna e deixam clara a ordem lógica.</p></article></div>
          </section>

          <section className="lesson-section" id="listas">
            <span className="lesson-label">AULA 02 • IN E NOT IN</span><h2>Uma resposta também<br />pode ser uma lista.</h2>
            <p className="lead">Use <strong>IN</strong> quando a consulta interna devolver vários valores possíveis. A consulta externa mantém as linhas cujo valor está naquela lista.</p>
            <div className="list-subquery"><article><small>SUBCONSULTA</small><h3>Clientes com pedido PAGO</h3><div><span>3</span></div></article><i>entra em</i><article><small>CONSULTA EXTERNA</small><h3>Cadastro completo</h3><p><code>id_cliente IN (3)</code></p></article></div>
            <div className="code-panel"><div className="code-panel-top"><span>clientes_com_pedido_pago.sql</span><small>Lista produzida pelo banco ↗</small></div><pre><code><span className="sql-key">SELECT</span> id_cliente, nome, email{`\n`}<span className="sql-key">FROM</span> clientes{`\n`}<span className="sql-key">WHERE</span> id_cliente <span className="sql-key">IN</span> ({`\n`}  <span className="sql-key">SELECT</span> id_cliente{`\n`}  <span className="sql-key">FROM</span> pedidos{`\n`}  <span className="sql-key">WHERE</span> status = <span className="sql-number">&apos;PAGO&apos;</span>{`\n`});</code></pre></div>
            <div className="null-trap"><span>NULL</span><p><b>Cuidado com NOT IN.</b> Se a lista interna puder conter <code>NULL</code>, a comparação se torna desconhecida e pode não retornar nenhuma linha. Para investigar ausências, prefira <code>NOT EXISTS</code>.</p></div>
          </section>

          <section className="lesson-section" id="exists">
            <span className="lesson-label">AULA 03 • EXISTS E CORRELAÇÃO</span><h2>Não traga o valor.<br />Teste se a linha existe.</h2>
            <p className="lead"><strong>EXISTS</strong> responde verdadeiro assim que encontra uma correspondência. Em uma subconsulta correlacionada, a consulta interna usa a linha que a consulta externa está analisando naquele momento.</p>
            <div className="exists-loop"><article><small>LINHA EXTERNA</small><b>Headset Cloud Stinger • ID 6</b><p>O produto está sendo investigado.</p></article><i>procure ID 6</i><article><small>CONSULTA INTERNA</small><b>itens_pedido</b><p>Existe alguma linha com esse produto?</p></article><i className="loop-return">não existe</i><article className="kept-row"><small>NOT EXISTS = VERDADEIRO</small><b>Manter no resultado</b><p>O produto nunca foi vendido.</p></article></div>
            <div className="code-panel"><div className="code-panel-top"><span>produtos_nunca_vendidos.sql</span><small>A correlação está no WHERE ↗</small></div><pre><code><span className="sql-key">SELECT</span> p.id_produto, p.nome, p.estoque{`\n`}<span className="sql-key">FROM</span> produtos <span className="sql-key">AS</span> p{`\n`}<span className="sql-key">WHERE NOT EXISTS</span> ({`\n`}  <span className="sql-key">SELECT</span> <span className="sql-number">1</span>{`\n`}  <span className="sql-key">FROM</span> itens_pedido <span className="sql-key">AS</span> ip{`\n`}  <span className="sql-key">WHERE</span> ip.id_produto = p.id_produto{`\n`});</code></pre></div>
            <div className="golden-rule amber-rule"><span>1</span><p><b>SELECT 1 comunica a intenção</b>O <code>EXISTS</code> não precisa dos dados da linha encontrada; ele verifica somente a existência. Ao achar a primeira correspondência, já pode responder.</p></div>
          </section>

          <section className="lesson-section" id="relatorios">
            <span className="lesson-label">AULA 04 • CTE E RELATÓRIOS</span><h2>Dê nome às etapas<br />do seu raciocínio.</h2>
            <p className="lead">Uma CTE, criada com <strong>WITH</strong>, transforma uma consulta intermediária em um resultado nomeado que existe durante uma única instrução. Assim, relatórios longos ficam legíveis e testáveis.</p>
            <div className="report-pipeline"><article><span>01</span><small>WITH</small><b>Crie a base</b><p>Calcule vendas por cliente.</p></article><i>→</i><article><span>02</span><small>SELECT</small><b>Consulte a base</b><p>Escolha as métricas finais.</p></article><i>→</i><article><span>03</span><small>WHERE</small><b>Responda</b><p>Compare com a média calculada.</p></article></div>
            <div className="code-panel"><div className="code-panel-top"><span>relatorio_com_cte.sql</span><small>Resultado intermediário nomeado ↗</small></div><pre><code><span className="sql-key">WITH</span> vendas_cliente <span className="sql-key">AS</span> ({`\n`}  <span className="sql-key">SELECT</span> pe.id_cliente,{`\n`}    <span className="sql-key">SUM</span>(ip.quantidade * ip.preco_unitario) <span className="sql-key">AS</span> total{`\n`}  <span className="sql-key">FROM</span> pedidos <span className="sql-key">AS</span> pe{`\n`}  <span className="sql-key">INNER JOIN</span> itens_pedido <span className="sql-key">AS</span> ip{`\n`}    <span className="sql-key">ON</span> ip.id_pedido = pe.id_pedido{`\n`}  <span className="sql-key">GROUP BY</span> pe.id_cliente{`\n`}){`\n`}<span className="sql-key">SELECT</span> * <span className="sql-key">FROM</span> vendas_cliente;</code></pre></div>
            <div className="cte-note"><span>MYSQL 8+</span><p><b>Leia o relatório em camadas.</b> Execute primeiro a consulta que ficará dentro do <code>WITH</code>. Quando o resultado estiver correto, use o nome da CTE na consulta final.</p></div>
          </section>

          <section className="lesson-section" id="laboratorio"><span className="lesson-label">LABORATÓRIO PRÁTICO</span><h2>Faça uma consulta alimentar a outra.</h2><p className="lead">Use o banco <strong>levelup_store</strong>. Antes de escrever, determine se a consulta interna deve devolver um valor, uma lista ou apenas confirmar uma existência. A correção aparece somente depois da tentativa.</p><SubqueryActivities /></section>

          <section className="lesson-section" id="erros"><span className="lesson-label error-label">LABORATÓRIO DE ERROS</span><h2>O formato da resposta precisa combinar.</h2><div className="subquery-errors"><details><summary><code>Subquery returns more than 1 row</code></summary><p>Você usou um operador como <code>=</code> com uma consulta que devolve várias linhas. Reduza a resposta a um valor ou use <code>IN</code>.</p></details><details><summary><code>NOT IN (... NULL ...)</code></summary><p>Uma presença de <code>NULL</code> torna a negação desconhecida. Filtre o nulo na subconsulta ou, de preferência, reformule com <code>NOT EXISTS</code>.</p></details><details><summary><code>EXISTS sem ligação com a linha externa</code></summary><p>Sem uma condição como <code>ip.id_produto = p.id_produto</code>, a consulta interna responde igual para todos os produtos. Revise os apelidos e a correlação.</p></details></div></section>

          <section className="lesson-section" id="downloads"><span className="lesson-label">KIT DA TRILHA 08</span><h2>Arquivos para investigar.</h2><div className="setup-downloads">
            <a href="/downloads/trilha-08/subconsultas-guiadas.sql" download><span>SQL</span><div><b>Subconsultas guiadas</b><small>Exemplos em camadas e comentados</small></div><i>↓</i></a>
            <a href="/downloads/trilha-08/atividades-subconsultas.sql" download><span>SQL</span><div><b>Atividades práticas</b><small>Missões sem respostas</small></div><i>↓</i></a>
            <a href="/downloads/trilha-08/guia-subconsultas.txt" download><span>TXT</span><div><b>Guia de decisão</b><small>Valor, lista, existência ou CTE</small></div><i>↓</i></a>
            <a href="/downloads/trilha-00/levelup-store-inicial.sql" download><span>SQL</span><div><b>Banco LevelUp Store</b><small>Base completa para os exercícios</small></div><i>↓</i></a>
          </div></section>

          <section className="boss-card subquery-boss" id="boss"><div className="boss-badge">BOSS FINAL</div><span className="boss-icon">◇</span><h2>Clientes acima da média</h2><p>A diretoria quer descobrir quais clientes gastaram acima da média dos compradores. Considere apenas pedidos pagos, em transporte ou entregues e apresente cliente, quantidade de pedidos e total comprado.</p><div className="boss-checks"><span>□ CTE consolida cada cliente</span><span>□ Três tabelas conectadas</span><span>□ Status válidos filtrados</span><span>□ Média calculada pela própria CTE</span></div><details><summary>Já executei — revelar uma solução</summary><p><code>WITH vendas_cliente AS (SELECT c.id_cliente, c.nome AS cliente, COUNT(DISTINCT pe.id_pedido) AS total_pedidos, ROUND(SUM(ip.quantidade * ip.preco_unitario), 2) AS total_comprado FROM clientes AS c INNER JOIN pedidos AS pe ON pe.id_cliente = c.id_cliente INNER JOIN itens_pedido AS ip ON ip.id_pedido = pe.id_pedido WHERE pe.status IN (&apos;PAGO&apos;, &apos;EM_TRANSPORTE&apos;, &apos;ENTREGUE&apos;) GROUP BY c.id_cliente, c.nome) SELECT cliente, total_pedidos, total_comprado FROM vendas_cliente WHERE total_comprado &gt; (SELECT AVG(total_comprado) FROM vendas_cliente) ORDER BY total_comprado DESC;</code></p></details></section>

          <section className="next-mission"><span>PRÓXIMA TRILHA</span><h2>Projeto final</h2><p>Na etapa final, todas as habilidades serão reunidas para entregar uma solução completa de análise da LevelUp Store.</p><Link href="/trilhas/projeto-final">Começar a Trilha 09 →</Link></section>
        </div>
      </div>
    </main>
  );
}
