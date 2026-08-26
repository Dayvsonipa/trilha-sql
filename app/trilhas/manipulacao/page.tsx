import Link from "next/link";
import ManipulationActivities from "../../components/ManipulationActivities";

export default function ManipulationTrail() {
  return (
    <main className="trail-page manipulation-page">
      <a className="skip-link" href="#aula">Pular para a aula</a>
      <header className="site-header">
        <Link className="brand" href="/"><span className="brand-mark">D</span><span><strong>Professor Dayvson</strong><small>SQL do Zero ao Avançado</small></span></Link>
        <nav aria-label="Navegação principal"><Link href="/#trilhas">Trilhas</Link><a href="#laboratorio">Práticas</a><a href="#downloads">Downloads</a></nav>
      </header>

      <section className="trail-hero manipulation-hero" id="aula">
        <div className="breadcrumb"><Link href="/">Início</Link><span>/</span><span>Trilha 05</span></div>
        <div className="trail-hero-grid">
          <div><span className="trail-pill">TRILHA 05 • CRUD</span><h1>Dados mudam.<br /><em>Você controla.</em></h1><p>Cadastre, atualize e remova informações com uma rotina que protege o banco antes, durante e depois de cada alteração.</p><div className="lesson-chips"><span>INSERT</span><span>UPDATE</span><span>DELETE</span><span>SET</span><span>TRANSACTION</span><span>ROLLBACK</span></div></div>
          <div className="trail-mission-brief manipulation-brief"><small>SUA MISSÃO</small><h2>Assumir a central de operações da LevelUp Store</h2><p>Você deixará de apenas consultar o banco e passará a alterar seu estado — sempre sabendo quais linhas serão afetadas.</p><div><span><b>4</b> aulas</span><span><b>4</b> práticas</span><span><b>1</b> boss final</span></div></div>
        </div>
      </section>

      <div className="lesson-layout">
        <aside className="lesson-nav" aria-label="Conteúdo da trilha">
          <span className="section-kicker">NESTA TRILHA</span>
          <a className="current" href="#insert"><b>01</b><span>Cadastre dados<small>INSERT INTO e VALUES</small></span></a>
          <a href="#update"><b>02</b><span>Atualize com precisão<small>UPDATE e SET</small></span></a>
          <a href="#delete"><b>03</b><span>Remova com segurança<small>DELETE e relacionamentos</small></span></a>
          <a href="#transacoes"><b>04</b><span>Confirme ou desfaça<small>Transações e modo seguro</small></span></a>
          <a href="#laboratorio"><b>05</b><span>Laboratório<small>Tente antes de revelar</small></span></a>
          <a href="#boss"><b>06</b><span>Boss final<small>Operação promoção</small></span></a>
          <Link className="back-home" href="/">← Mapa completo</Link>
        </aside>

        <div className="lesson-content">
          <section className="lesson-section" id="insert">
            <span className="lesson-label">AULA 01 • INSERT INTO</span><h2>Uma nova linha<br />entra em cena.</h2>
            <p className="lead"><strong>INSERT INTO</strong> informa a tabela e as colunas. <strong>VALUES</strong> entrega os valores na mesma ordem. O banco valida tipos, restrições e relacionamentos antes de aceitar a linha.</p>
            <div className="crud-map" aria-label="As quatro operações do CRUD"><article className="create"><span>C</span><b>CREATE</b><code>INSERT</code><small>cria uma linha</small></article><article><span>R</span><b>READ</b><code>SELECT</code><small>lê as linhas</small></article><article><span>U</span><b>UPDATE</b><code>UPDATE</code><small>altera linhas</small></article><article><span>D</span><b>DELETE</b><code>DELETE</code><small>remove linhas</small></article></div>
            <div className="insert-anatomy"><div><small>COLUNAS</small><code>(nome, email, cidade, data_cadastro)</code></div><i>mesma ordem</i><div><small>VALORES</small><code>(&apos;Diego&apos;, &apos;diego@exemplo.com&apos;, &apos;Ipatinga&apos;, &apos;2026-08-25&apos;)</code></div></div>
            <div className="code-panel"><div className="code-panel-top"><span>novo_cliente.sql</span><small>Uma linha por comando ↗</small></div><pre><code><span className="sql-key">INSERT INTO</span> clientes{`\n`}  (nome, email, cidade, data_cadastro){`\n`}<span className="sql-key">VALUES</span>{`\n`}  (<span className="sql-string">&apos;Diego Martins&apos;</span>, <span className="sql-string">&apos;diego@exemplo.com&apos;</span>,{`\n`}   <span className="sql-string">&apos;Ipatinga&apos;</span>, <span className="sql-string">&apos;2026-08-25&apos;</span>);</code></pre></div>
            <div className="insert-notes"><article><span>AUTO</span><p><b>Não invente o ID</b>Colunas com <code>AUTO_INCREMENT</code> podem ser omitidas.</p></article><article><span>1:1</span><p><b>Ordem precisa combinar</b>O primeiro valor pertence à primeira coluna informada.</p></article><article><span>×N</span><p><b>Várias linhas</b>Separe conjuntos de valores por vírgula no mesmo <code>INSERT</code>.</p></article></div>
          </section>

          <section className="lesson-section" id="update">
            <span className="lesson-label">AULA 02 • UPDATE E SET</span><h2>Altere o necessário.<br />Somente o necessário.</h2>
            <p className="lead"><strong>UPDATE</strong> escolhe a tabela, <strong>SET</strong> define os novos valores e <strong>WHERE</strong> decide quais linhas serão alteradas.</p>
            <div className="safety-pipeline"><article><span>01</span><b>LOCALIZE</b><code>SELECT ... WHERE</code><p>Confira as linhas-alvo.</p></article><i>→</i><article><span>02</span><b>ALTERE</b><code>UPDATE ... SET</code><p>Use o mesmo filtro.</p></article><i>→</i><article><span>03</span><b>VALIDE</b><code>SELECT ... WHERE</code><p>Confira o novo estado.</p></article></div>
            <div className="before-after-data"><article><small>ANTES</small><div><b>Headset Cloud Stinger</b><span>estoque: 0</span></div></article><i>→</i><article className="changed"><small>DEPOIS</small><div><b>Headset Cloud Stinger</b><span>estoque: 10</span></div></article></div>
            <div className="code-panel"><div className="code-panel-top"><span>reposicao_estoque.sql</span><small>Filtro pela chave ↗</small></div><pre><code><span className="sql-key">UPDATE</span> produtos{`\n`}<span className="sql-key">SET</span> estoque = <span className="sql-number">10</span>{`\n`}<span className="sql-key">WHERE</span> id_produto = <span className="sql-number">6</span>;</code></pre></div>
            <div className="danger-rule"><span>SEM WHERE</span><p><b>Todas as linhas podem ser alteradas.</b> Antes de executar um <code>UPDATE</code>, transforme-o em um <code>SELECT</code> e confirme exatamente quem será atingido.</p></div>
          </section>

          <section className="lesson-section" id="delete">
            <span className="lesson-label">AULA 03 • DELETE</span><h2>Excluir é simples.<br />Decidir é a parte difícil.</h2>
            <p className="lead"><strong>DELETE FROM</strong> remove linhas inteiras. Ele não apaga apenas o conteúdo de uma coluna e pode ser bloqueado quando outros registros dependem daquela linha.</p>
            <div className="delete-decision"><article><span>1</span><b>O filtro retorna só o alvo?</b><p>Execute um <code>SELECT</code> com o mesmo <code>WHERE</code>.</p></article><article><span>2</span><b>Há dados relacionados?</b><p>Pedidos podem depender de clientes; itens podem depender de produtos.</p></article><article><span>3</span><b>Precisa apagar mesmo?</b><p>Em alguns sistemas, marcar como inativo preserva o histórico.</p></article></div>
            <div className="code-panel"><div className="code-panel-top"><span>remover_teste.sql</span><small>Identificador único ↗</small></div><pre><code><span className="sql-key">SELECT</span> id_cliente, nome, email{`\n`}<span className="sql-key">FROM</span> clientes{`\n`}<span className="sql-key">WHERE</span> email = <span className="sql-string">&apos;teste@exemplo.com&apos;</span>;{`\n\n`}<span className="sql-key">DELETE FROM</span> clientes{`\n`}<span className="sql-key">WHERE</span> email = <span className="sql-string">&apos;teste@exemplo.com&apos;</span>;</code></pre></div>
            <div className="foreign-key-wall"><div><span>clientes</span><b>id_cliente = 2</b></div><i>PROTEÇÃO FK</i><div><span>pedidos</span><b>pedido depende do cliente</b></div><p>Se uma chave estrangeira protege o relacionamento, o MySQL impede uma exclusão que deixaria registros “órfãos”. Leia a mensagem: ela está protegendo a integridade do banco.</p></div>
          </section>

          <section className="lesson-section" id="transacoes">
            <span className="lesson-label">AULA 04 • TRANSAÇÕES E MODO SEGURO</span><h2>Teste a mudança<br />antes de torná-la definitiva.</h2>
            <p className="lead">Uma transação agrupa alterações. Enquanto você não executa <strong>COMMIT</strong>, pode usar <strong>ROLLBACK</strong> para desfazer o trabalho ainda não confirmado.</p>
            <div className="transaction-flow"><article><span>INÍCIO</span><code>START TRANSACTION</code></article><i>→</i><article><span>ALTERAÇÃO</span><code>UPDATE / DELETE</code></article><i>→</i><div><article className="commit"><span>CONFIRMAR</span><code>COMMIT</code></article><article className="rollback"><span>DESFAZER</span><code>ROLLBACK</code></article></div></div>
            <div className="code-panel"><div className="code-panel-top"><span>teste_seguro.sql</span><small>Nada definitivo até o COMMIT ↗</small></div><pre><code><span className="sql-key">START TRANSACTION</span>;{`\n\n`}<span className="sql-key">UPDATE</span> produtos{`\n`}<span className="sql-key">SET</span> preco = preco * <span className="sql-number">0.90</span>{`\n`}<span className="sql-key">WHERE</span> id_categoria = <span className="sql-number">1</span>;{`\n\n`}<span className="sql-key">SELECT</span> nome, preco{`\n`}<span className="sql-key">FROM</span> produtos{`\n`}<span className="sql-key">WHERE</span> id_categoria = <span className="sql-number">1</span>;{`\n\n`}<span className="sql-key">ROLLBACK</span>;</code></pre></div>
            <div className="safe-update-card"><span>ERROR 1175</span><div><b>O Workbench está tentando proteger você.</b><p>O modo de atualizações seguras pode bloquear alterações sem filtro por uma coluna-chave. Em vez de desligar a proteção por hábito, reveja o <code>WHERE</code> e confirme o alvo.</p></div></div>
          </section>

          <section className="lesson-section" id="laboratorio"><span className="lesson-label">LABORATÓRIO PRÁTICO</span><h2>Assuma o controle.</h2><p className="lead">Execute as missões na ordem. Antes de qualquer alteração, leia a regra, confira os dados atuais e só então escreva o comando. A correção continua escondida até você tentar.</p><ManipulationActivities /></section>

          <section className="lesson-section" id="erros"><span className="lesson-label error-label">LABORATÓRIO DE ERROS</span><h2>Quando o banco recusa, ele explica.</h2><div className="manipulation-errors"><details><summary><code>Column count doesn&apos;t match value count</code></summary><p>A quantidade de valores não corresponde à quantidade de colunas. Confira também se eles estão na mesma ordem.</p></details><details><summary><code>Duplicate entry</code></summary><p>Você tentou repetir um valor protegido por <code>UNIQUE</code>, como um e-mail já cadastrado.</p></details><details><summary><code>Cannot delete or update a parent row</code></summary><p>Outra tabela possui registros relacionados. A chave estrangeira está impedindo que o banco fique inconsistente.</p></details></div></section>

          <section className="lesson-section" id="downloads"><span className="lesson-label">KIT DA TRILHA 05</span><h2>Arquivos para operar com segurança.</h2><div className="setup-downloads">
            <a href="/downloads/trilha-05/crud-guiado.sql" download><span>SQL</span><div><b>CRUD guiado</b><small>Inserções, atualizações e exclusões comentadas</small></div><i>↓</i></a>
            <a href="/downloads/trilha-05/atividades-manipulacao.sql" download><span>SQL</span><div><b>Atividades práticas</b><small>Missões sem respostas</small></div><i>↓</i></a>
            <a href="/downloads/trilha-05/checklist-seguranca.txt" download><span>TXT</span><div><b>Checklist de segurança</b><small>Antes, durante e depois da alteração</small></div><i>↓</i></a>
            <a href="/downloads/trilha-00/levelup-store-inicial.sql" download><span>SQL</span><div><b>Banco LevelUp Store</b><small>Restaure a base quando precisar recomeçar</small></div><i>↓</i></a>
          </div></section>

          <section className="boss-card manipulation-boss" id="boss"><div className="boss-badge">BOSS FINAL</div><span className="boss-icon">⟳</span><h2>Operação promoção segura</h2><p>A loja quer simular 10% de desconto nos periféricos ativos e em estoque. Você deve abrir uma transação, localizar os produtos, aplicar o desconto, validar o resultado e desfazer a simulação.</p><div className="boss-checks"><span>□ Transação iniciada</span><span>□ Alvos conferidos com SELECT</span><span>□ UPDATE usa filtro preciso</span><span>□ Resultado validado e revertido</span></div><details><summary>Já executei — revelar uma solução</summary><p><code>START TRANSACTION; SELECT id_produto, nome, preco FROM produtos WHERE id_categoria = 1 AND ativo = 1 AND estoque &gt; 0; UPDATE produtos SET preco = preco * 0.90 WHERE id_categoria = 1 AND ativo = 1 AND estoque &gt; 0; SELECT id_produto, nome, preco FROM produtos WHERE id_categoria = 1 AND ativo = 1 AND estoque &gt; 0; ROLLBACK;</code></p></details></section>

          <section className="next-mission"><span>PRÓXIMA TRILHA</span><h2>Funções e análise</h2><p>Na próxima etapa, você transformará linhas em indicadores usando cálculos, textos, datas e agrupamentos.</p><Link href="/trilhas/funcoes">Começar a Trilha 06 →</Link></section>
        </div>
      </div>
    </main>
  );
}
