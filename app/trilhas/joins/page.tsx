import Link from "next/link";
import JoinActivities from "../../components/JoinActivities";

export default function JoinTrail() {
  return (
    <main className="trail-page join-page">
      <a className="skip-link" href="#aula">Pular para a aula</a>
      <header className="site-header">
        <Link className="brand" href="/"><span className="brand-mark">D</span><span><strong>Professor Dayvson</strong><small>SQL do Zero ao Avançado</small></span></Link>
        <nav aria-label="Navegação principal"><Link href="/#trilhas">Trilhas</Link><a href="#laboratorio">Práticas</a><a href="#downloads">Downloads</a></nav>
      </header>

      <section className="trail-hero join-hero" id="aula">
        <div className="breadcrumb"><Link href="/">Início</Link><span>/</span><span>Trilha 07</span></div>
        <div className="trail-hero-grid">
          <div><span className="trail-pill">TRILHA 07 • JOINs</span><h1>Os dados estavam<br /><em>separados. Até agora.</em></h1><p>Use as chaves do banco para combinar tabelas e produzir respostas completas sobre produtos, clientes, pedidos e vendas.</p><div className="lesson-chips"><span>PK</span><span>FK</span><span>ON</span><span>INNER JOIN</span><span>LEFT JOIN</span><span>ALIASES</span></div></div>
          <div className="trail-mission-brief join-brief"><small>SUA MISSÃO</small><h2>Reconectar o ecossistema da LevelUp Store</h2><p>Cada tabela guarda uma parte da história. Você vai construir as pontes que permitem ler a operação como um todo.</p><div><span><b>4</b> aulas</span><span><b>4</b> práticas</span><span><b>1</b> boss final</span></div></div>
        </div>
      </section>

      <div className="lesson-layout">
        <aside className="lesson-nav" aria-label="Conteúdo da trilha">
          <span className="section-kicker">NESTA TRILHA</span>
          <a className="current" href="#chaves"><b>01</b><span>Construa a ponte<small>Chaves, ON e apelidos</small></span></a>
          <a href="#inner"><b>02</b><span>Encontre correspondências<small>INNER JOIN</small></span></a>
          <a href="#cadeia"><b>03</b><span>Conecte a história inteira<small>Várias tabelas</small></span></a>
          <a href="#left"><b>04</b><span>Preserve quem está à esquerda<small>LEFT JOIN e ausências</small></span></a>
          <a href="#laboratorio"><b>05</b><span>Laboratório<small>Tente antes de revelar</small></span></a>
          <a href="#boss"><b>06</b><span>Boss final<small>Relatório de vendas</small></span></a>
          <Link className="back-home" href="/">← Mapa completo</Link>
        </aside>

        <div className="lesson-content">
          <section className="lesson-section" id="chaves">
            <span className="lesson-label">AULA 01 • CHAVES, ON E APELIDOS</span><h2>O JOIN não adivinha.<br />Você mostra a ponte.</h2>
            <p className="lead">A chave estrangeira guarda o valor da chave primária relacionada. A condição <strong>ON</strong> informa exatamente quais colunas representam a mesma identidade.</p>
            <div className="join-key-bridge" aria-label="Ligação entre produtos e categorias"><article><small>PRODUTOS • p</small><span><b>id_produto</b> PK</span><span className="bridge-key"><b>id_categoria</b> FK • 1</span><span>nome • Mouse</span></article><div><i /><code>p.id_categoria{`\n`}= c.id_categoria</code><i /></div><article><small>CATEGORIAS • c</small><span className="bridge-key"><b>id_categoria</b> PK • 1</span><span>nome • Periféricos</span></article></div>
            <div className="code-panel"><div className="code-panel-top"><span>ponte_produto_categoria.sql</span><small>A condição de ligação ↗</small></div><pre><code><span className="sql-key">SELECT</span> p.nome, c.nome{`\n`}<span className="sql-key">FROM</span> produtos <span className="sql-key">AS</span> p{`\n`}<span className="sql-key">INNER JOIN</span> categorias <span className="sql-key">AS</span> c{`\n`}  <span className="sql-key">ON</span> p.id_categoria = c.id_categoria;</code></pre></div>
            <div className="alias-rules"><article><span>p.nome</span><p><b>Quem é o dono?</b>O prefixo elimina a ambiguidade entre colunas com o mesmo nome.</p></article><article><span>AS p</span><p><b>Apelido curto</b>O apelido torna consultas longas mais legíveis sem renomear a tabela.</p></article><article><span>ON</span><p><b>Como se ligam?</b>A condição descreve o relacionamento, não um filtro de negócio.</p></article></div>
          </section>

          <section className="lesson-section" id="inner">
            <span className="lesson-label">AULA 02 • INNER JOIN</span><h2>Somente quando os dois<br />lados se encontram.</h2>
            <p className="lead"><strong>INNER JOIN</strong> mantém apenas as linhas que possuem correspondência nas duas tabelas. É a escolha natural quando a resposta exige uma relação existente.</p>
            <div className="inner-match"><div className="match-source"><small>PEDIDOS</small><span>Pedido 1 • cliente 1</span><span>Pedido 2 • cliente 2</span><span>Pedido 3 • cliente 3</span></div><div className="match-core"><b>INNER</b><span>IDs iguais</span></div><div className="match-source"><small>CLIENTES</small><span>1 • Ana Souza</span><span>2 • Bruno Lima</span><span>3 • Carla Mendes</span></div><div className="match-output"><span>Pedido 1 → Ana Souza</span><span>Pedido 2 → Bruno Lima</span><span>Pedido 3 → Carla Mendes</span></div></div>
            <div className="code-panel"><div className="code-panel-top"><span>pedidos_com_clientes.sql</span><small>Informação legível ↗</small></div><pre><code><span className="sql-key">SELECT</span>{`\n`}  pe.id_pedido,{`\n`}  c.nome <span className="sql-key">AS</span> cliente,{`\n`}  pe.status,{`\n`}  pe.valor_total{`\n`}<span className="sql-key">FROM</span> pedidos <span className="sql-key">AS</span> pe{`\n`}<span className="sql-key">INNER JOIN</span> clientes <span className="sql-key">AS</span> c{`\n`}  <span className="sql-key">ON</span> pe.id_cliente = c.id_cliente;</code></pre></div>
            <div className="golden-rule"><span>!</span><p><b>JOIN reúne colunas; não duplica por acaso</b>Se o resultado cresce além do esperado, verifique se a condição <code>ON</code> usa as chaves corretas. Uma ponte errada combina linhas indevidamente.</p></div>
          </section>

          <section className="lesson-section" id="cadeia">
            <span className="lesson-label">AULA 03 • VÁRIAS TABELAS</span><h2>Uma história completa<br />usa várias pontes.</h2>
            <p className="lead">Você pode acrescentar novos `JOINs` seguindo o caminho dos relacionamentos. Cada nova tabela precisa de sua própria condição <strong>ON</strong>.</p>
            <div className="join-chain"><article><small>CLIENTES</small><b>quem comprou</b></article><i>id_cliente</i><article><small>PEDIDOS</small><b>qual venda</b></article><i>id_pedido</i><article><small>ITENS_PEDIDO</small><b>quanto levou</b></article><i>id_produto</i><article><small>PRODUTOS</small><b>o que comprou</b></article></div>
            <div className="code-panel"><div className="code-panel-top"><span>historia_da_venda.sql</span><small>Quatro tabelas conectadas ↗</small></div><pre><code><span className="sql-key">SELECT</span>{`\n`}  pe.id_pedido,{`\n`}  c.nome <span className="sql-key">AS</span> cliente,{`\n`}  pr.nome <span className="sql-key">AS</span> produto,{`\n`}  ip.quantidade{`\n`}<span className="sql-key">FROM</span> pedidos <span className="sql-key">AS</span> pe{`\n`}<span className="sql-key">INNER JOIN</span> clientes <span className="sql-key">AS</span> c{`\n`}  <span className="sql-key">ON</span> pe.id_cliente = c.id_cliente{`\n`}<span className="sql-key">INNER JOIN</span> itens_pedido <span className="sql-key">AS</span> ip{`\n`}  <span className="sql-key">ON</span> ip.id_pedido = pe.id_pedido{`\n`}<span className="sql-key">INNER JOIN</span> produtos <span className="sql-key">AS</span> pr{`\n`}  <span className="sql-key">ON</span> ip.id_produto = pr.id_produto;</code></pre></div>
            <div className="join-reading-order"><span>LEIA EM BLOCOS</span><div><b>1</b><p>Comece na tabela central da pergunta.</p></div><div><b>2</b><p>Siga uma chave estrangeira por vez.</p></div><div><b>3</b><p>Execute após cada nova conexão.</p></div></div>
          </section>

          <section className="lesson-section" id="left">
            <span className="lesson-label">AULA 04 • LEFT JOIN</span><h2>Quem não tem par<br />também pode importar.</h2>
            <p className="lead"><strong>LEFT JOIN</strong> preserva todas as linhas da tabela à esquerda. Quando não há correspondência à direita, as colunas daquele lado aparecem como <code>NULL</code>.</p>
            <div className="join-choice"><article><span>INNER JOIN</span><div><b>Ana</b><small>pedido 1</small></div><div><b>Bruno</b><small>pedido 2</small></div><p>Mostra somente clientes com pedido.</p></article><article className="left-choice"><span>LEFT JOIN</span><div><b>Ana</b><small>pedido 1</small></div><div><b>Bruno</b><small>pedido 2</small></div><div className="empty-match"><b>Eduardo</b><small>NULL</small></div><p>Mantém também o cliente sem pedido.</p></article></div>
            <div className="code-panel"><div className="code-panel-top"><span>clientes_sem_pedido.sql</span><small>Ausência como informação ↗</small></div><pre><code><span className="sql-key">SELECT</span> c.id_cliente, c.nome{`\n`}<span className="sql-key">FROM</span> clientes <span className="sql-key">AS</span> c{`\n`}<span className="sql-key">LEFT JOIN</span> pedidos <span className="sql-key">AS</span> pe{`\n`}  <span className="sql-key">ON</span> pe.id_cliente = c.id_cliente{`\n`}<span className="sql-key">WHERE</span> pe.id_pedido <span className="sql-key">IS NULL</span>;</code></pre></div>
            <div className="left-direction"><span>ESQUERDA</span><p><b>A ordem das tabelas importa.</b> Em <code>clientes LEFT JOIN pedidos</code>, todos os clientes são preservados. Inverta as tabelas e a pergunta também muda.</p></div>
          </section>

          <section className="lesson-section" id="laboratorio"><span className="lesson-label">LABORATÓRIO PRÁTICO</span><h2>Construa as conexões.</h2><p className="lead">Use o banco <strong>levelup_store</strong>. Identifique primeiro a informação desejada, encontre a tabela que a possui e percorra as chaves até chegar nela. A correção aparece apenas depois da tentativa.</p><JoinActivities /></section>

          <section className="lesson-section" id="erros"><span className="lesson-label error-label">LABORATÓRIO DE ERROS</span><h2>Uma ponte errada muda toda a resposta.</h2><div className="join-errors"><details><summary><code>Column &apos;nome&apos; in field list is ambiguous</code></summary><p>Mais de uma tabela possui a coluna <code>nome</code>. Use o apelido para indicar a origem: <code>p.nome</code> ou <code>c.nome</code>.</p></details><details><summary><code>JOIN categorias c ON p.id_produto = c.id_categoria</code></summary><p>As colunas têm números, mas não representam a mesma identidade. A ligação correta usa <code>p.id_categoria = c.id_categoria</code>.</p></details><details><summary><code>LEFT JOIN ... WHERE pe.status = &apos;PAGO&apos;</code></summary><p>O filtro descarta as linhas em que o lado direito é <code>NULL</code> e pode fazer o resultado se comportar como um `INNER JOIN`. Reavalie se o filtro pertence ao <code>ON</code>.</p></details></div></section>

          <section className="lesson-section" id="downloads"><span className="lesson-label">KIT DA TRILHA 07</span><h2>Arquivos para conectar.</h2><div className="setup-downloads">
            <a href="/downloads/trilha-07/joins-guiados.sql" download><span>SQL</span><div><b>JOINs guiados</b><small>Conexões progressivas e comentadas</small></div><i>↓</i></a>
            <a href="/downloads/trilha-07/atividades-joins.sql" download><span>SQL</span><div><b>Atividades práticas</b><small>Missões sem respostas</small></div><i>↓</i></a>
            <a href="/downloads/trilha-07/guia-joins.txt" download><span>TXT</span><div><b>Guia de JOINs</b><small>Mapa de chaves e consulta rápida</small></div><i>↓</i></a>
            <a href="/downloads/trilha-00/levelup-store-inicial.sql" download><span>SQL</span><div><b>Banco LevelUp Store</b><small>Base completa para os exercícios</small></div><i>↓</i></a>
          </div></section>

          <section className="boss-card join-boss" id="boss"><div className="boss-badge">BOSS FINAL</div><span className="boss-icon">⌘</span><h2>Relatório completo de vendas</h2><p>A diretoria quer uma linha para cada item vendido, mostrando pedido, data, cliente, produto, quantidade, preço unitário e subtotal. Considere pedidos pagos, em transporte ou entregues.</p><div className="boss-checks"><span>□ Quatro tabelas conectadas</span><span>□ Cada ON usa as chaves corretas</span><span>□ Subtotal calculado</span><span>□ Filtro e ordem claros</span></div><details><summary>Já executei — revelar uma solução</summary><p><code>SELECT pe.id_pedido, DATE_FORMAT(pe.data_pedido, &apos;%d/%m/%Y&apos;) AS data, c.nome AS cliente, pr.nome AS produto, ip.quantidade, ip.preco_unitario, ROUND(ip.quantidade * ip.preco_unitario, 2) AS subtotal FROM pedidos AS pe INNER JOIN clientes AS c ON pe.id_cliente = c.id_cliente INNER JOIN itens_pedido AS ip ON ip.id_pedido = pe.id_pedido INNER JOIN produtos AS pr ON ip.id_produto = pr.id_produto WHERE pe.status IN (&apos;PAGO&apos;, &apos;EM_TRANSPORTE&apos;, &apos;ENTREGUE&apos;) ORDER BY pe.id_pedido, pr.nome;</code></p></details></section>

          <section className="next-mission"><span>PRÓXIMA TRILHA</span><h2>Subconsultas e relatórios</h2><p>Na próxima etapa, uma consulta poderá alimentar outra para responder perguntas ainda mais sofisticadas.</p><Link href="/trilhas/subconsultas">Começar a Trilha 08 →</Link></section>
        </div>
      </div>
    </main>
  );
}
