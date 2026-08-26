import Link from "next/link";
import FoundationActivities from "../../components/FoundationActivities";

export default function FoundationsTrail() {
  return (
    <main className="trail-page foundations-page">
      <a className="skip-link" href="#aula">Pular para a aula</a>
      <header className="site-header">
        <Link className="brand" href="/"><span className="brand-mark">D</span><span><strong>Professor Dayvson</strong><small>SQL do Zero ao Avançado</small></span></Link>
        <nav aria-label="Navegação principal"><Link href="/#trilhas">Trilhas</Link><a href="#laboratorio">Práticas</a><a href="#downloads">Downloads</a></nav>
      </header>

      <section className="trail-hero foundations-hero" id="aula">
        <div className="breadcrumb"><Link href="/">Início</Link><span>/</span><span>Trilha 01</span></div>
        <div className="trail-hero-grid">
          <div>
            <span className="trail-pill">TRILHA 01 • FUNDAMENTOS</span>
            <h1>Dados com<br /><em>significado.</em></h1>
            <p>Antes de criar tabelas, você precisa enxergar a lógica que existe por trás delas. Descubra como dados viram informação e como as tabelas representam o mundo real.</p>
            <div className="lesson-chips"><span>DADO</span><span>TABELA</span><span>REGISTRO</span><span>CHAVE</span><span>RELACIONAMENTO</span></div>
          </div>
          <div className="trail-mission-brief foundation-brief">
            <small>SUA MISSÃO</small><h2>Desenhar o mapa da LevelUp Store</h2>
            <p>Você vai reconhecer as peças do banco e explicar como clientes, produtos e pedidos se conectam.</p>
            <div><span><b>4</b> aulas</span><span><b>4</b> práticas</span><span><b>1</b> boss final</span></div>
          </div>
        </div>
      </section>

      <div className="lesson-layout">
        <aside className="lesson-nav" aria-label="Conteúdo da trilha">
          <span className="section-kicker">NESTA TRILHA</span>
          <a className="current" href="#dados"><b>01</b><span>Do dado à decisão<small>Contexto e significado</small></span></a>
          <a href="#tabelas"><b>02</b><span>Anatomia da tabela<small>Linhas e colunas</small></span></a>
          <a href="#chaves"><b>03</b><span>Identidade dos dados<small>Chaves PK e FK</small></span></a>
          <a href="#relacionamentos"><b>04</b><span>Conectando o negócio<small>1:1, 1:N e N:N</small></span></a>
          <a href="#laboratorio"><b>05</b><span>Laboratório<small>Tente antes de revelar</small></span></a>
          <a href="#boss"><b>06</b><span>Boss final<small>Mapa relacional</small></span></a>
          <Link className="back-home" href="/">← Mapa completo</Link>
        </aside>

        <div className="lesson-content">
          <section className="lesson-section" id="dados">
            <span className="lesson-label">AULA 01 • DO DADO À DECISÃO</span>
            <h2>Um número sozinho<br />não conta uma história.</h2>
            <p className="lead"><strong>“12”</strong> é apenas um dado. <strong>“Restam 12 teclados no estoque”</strong> é informação. Quando a gerente decide fazer uma promoção com base nisso, a informação virou ação.</p>
            <div className="information-pipeline" aria-label="Caminho do dado até a decisão">
              <article><small>DADO</small><b>12</b><p>Valor bruto, ainda sem contexto.</p></article><i>+</i>
              <article><small>CONTEXTO</small><b>teclados no estoque</b><p>Explica o que o valor representa.</p></article><i>→</i>
              <article><small>INFORMAÇÃO</small><b>estoque baixo</b><p>O dado agora pode ser interpretado.</p></article><i>→</i>
              <article className="decision-card"><small>DECISÃO</small><b>repor produtos</b><p>A empresa age com mais segurança.</p></article>
            </div>
            <div className="concept-duel"><article><span>SEM BANCO</span><h3>Arquivos espalhados</h3><p>Dados repetidos, versões diferentes e dificuldade para encontrar respostas.</p></article><article><span>COM BANCO</span><h3>Fonte organizada</h3><p>Estrutura compartilhada, regras claras e consultas capazes de cruzar informações.</p></article></div>
            <div className="golden-rule"><span>!</span><p><b>Banco de dados não é só armazenamento</b>É uma estrutura criada para registrar, relacionar, proteger e recuperar dados com sentido.</p></div>
          </section>

          <section className="lesson-section" id="tabelas">
            <span className="lesson-label">AULA 02 • ANATOMIA DA TABELA</span>
            <h2>Uma tabela representa<br />um tipo de coisa.</h2>
            <p className="lead">Na LevelUp Store, a tabela <strong>produtos</strong> representa produtos. Cada linha guarda um produto; cada coluna descreve uma característica comum a todos eles.</p>
            <div className="table-anatomy">
              <div className="anatomy-caption column-caption"><span>COLUNA</span><small>um atributo</small><i>↓</i></div>
              <div className="anatomy-table">
                <div className="anatomy-row anatomy-head"><span>id_produto</span><span>nome</span><span>preco</span><span>estoque</span></div>
                <div className="anatomy-row highlighted"><span>1</span><span>Mouse Pulsefire</span><span>249,90</span><span>18</span></div>
                <div className="anatomy-row"><span>2</span><span>Teclado Kumara</span><span>319,00</span><span>12</span></div>
                <div className="anatomy-row"><span>3</span><span>Monitor Odyssey</span><span>2.199,90</span><span>6</span></div>
              </div>
              <div className="anatomy-caption row-caption"><i>←</i><span>LINHA</span><small>um registro completo</small></div>
            </div>
            <div className="vocabulary-grid">
              <article><b>Tabela</b><p>Conjunto organizado de registros sobre o mesmo assunto.</p></article>
              <article><b>Coluna</b><p>Característica definida para todos os registros.</p></article>
              <article><b>Linha</b><p>Ocorrência individual armazenada na tabela.</p></article>
              <article><b>Campo</b><p>Valor encontrado no encontro entre uma linha e uma coluna.</p></article>
            </div>
          </section>

          <section className="lesson-section" id="chaves">
            <span className="lesson-label">AULA 03 • IDENTIDADE DOS DADOS</span>
            <h2>Todo registro precisa<br />ser encontrado sem dúvida.</h2>
            <p className="lead">Podem existir duas clientes chamadas Ana. Por isso, o banco usa uma identificação própria e única: a <strong>chave primária</strong>.</p>
            <div className="key-lab">
              <article className="key-card primary-key"><span>PK</span><div><small>CHAVE PRIMÁRIA</small><b>clientes.id_cliente</b><p>Identifica cada cliente sem repetição.</p></div></article>
              <div className="key-link"><span>1</span><i>→</i><span>N</span></div>
              <article className="key-card foreign-key"><span>FK</span><div><small>CHAVE ESTRANGEIRA</small><b>pedidos.id_cliente</b><p>Aponta para o cliente responsável pelo pedido.</p></div></article>
            </div>
            <div className="key-rules">
              <article><span>✓</span><p><b>Única</b>Não pode identificar duas linhas diferentes.</p></article>
              <article><span>✓</span><p><b>Obrigatória</b>Uma chave primária não fica vazia.</p></article>
              <article><span>✓</span><p><b>Estável</b>Evite usar algo que muda com frequência.</p></article>
            </div>
            <div className="code-panel"><div className="code-panel-top"><span>observe_a_estrutura.sql</span><small>Leitura, não decore ↗</small></div><pre><code><span className="sql-key">CREATE TABLE</span> pedidos ({`\n`}  id_pedido <span className="sql-type">INT PRIMARY KEY</span>,{`\n`}  id_cliente <span className="sql-type">INT</span>,{`\n`}  <span className="sql-key">FOREIGN KEY</span> (id_cliente){`\n`}    <span className="sql-key">REFERENCES</span> clientes(id_cliente){`\n`});</code></pre></div>
          </section>

          <section className="lesson-section" id="relacionamentos">
            <span className="lesson-label">AULA 04 • RELACIONAMENTOS</span>
            <h2>As tabelas não vivem isoladas.</h2>
            <p className="lead">A cardinalidade descreve quantos registros de um lado podem se relacionar com o outro. Ela nasce das regras do negócio, não de uma escolha aleatória.</p>
            <div className="relation-gallery">
              <article><div><span>USUÁRIO</span><b>1</b></div><i>—</i><strong>1 : 1</strong><i>—</i><div><b>1</b><span>PERFIL</span></div><p>Um usuário possui um perfil; o perfil pertence a um usuário.</p></article>
              <article className="featured"><div><span>CLIENTE</span><b>1</b></div><i>—</i><strong>1 : N</strong><i>—</i><div><b>N</b><span>PEDIDOS</span></div><p>Um cliente realiza vários pedidos; cada pedido possui um cliente.</p></article>
              <article><div><span>PEDIDOS</span><b>N</b></div><i>—</i><strong>N : N</strong><i>—</i><div><b>N</b><span>PRODUTOS</span></div><p>Resolvido pela tabela intermediária <code>itens_pedido</code>.</p></article>
            </div>
            <div className="bridge-diagram">
              <article><small>PEDIDOS</small><b>id_pedido</b></article><i>1 → N</i><article className="bridge"><small>ITENS_PEDIDO</small><b>id_pedido + id_produto</b></article><i>N ← 1</i><article><small>PRODUTOS</small><b>id_produto</b></article>
            </div>
          </section>

          <section className="lesson-section" id="laboratorio">
            <span className="lesson-label">LABORATÓRIO PRÁTICO</span>
            <h2>Pense como quem modela.</h2>
            <p className="lead">Responda com suas palavras antes de comparar. O objetivo é explicar a lógica, não memorizar definições.</p>
            <FoundationActivities />
          </section>

          <section className="lesson-section" id="downloads">
            <span className="lesson-label">KIT DA TRILHA 01</span><h2>Materiais para investigar.</h2>
            <div className="setup-downloads">
              <a href="/downloads/trilha-01/mapa-de-conceitos.txt" download><span>TXT</span><div><b>Mapa de conceitos</b><small>Resumo visual em formato de texto</small></div><i>↓</i></a>
              <a href="/downloads/trilha-01/investigue-o-banco.sql" download><span>SQL</span><div><b>Investigue o banco</b><small>Comandos de observação no Workbench</small></div><i>↓</i></a>
              <a href="/downloads/trilha-01/desafio-modelagem.txt" download><span>TXT</span><div><b>Desafio de modelagem</b><small>Situação-problema sem gabarito</small></div><i>↓</i></a>
              <a href="/downloads/trilha-00/levelup-store-inicial.sql" download><span>SQL</span><div><b>Banco LevelUp Store</b><small>Reimporte caso precise recomeçar</small></div><i>↓</i></a>
            </div>
          </section>

          <section className="boss-card foundation-boss" id="boss">
            <div className="boss-badge">BOSS FINAL</div><span className="boss-icon">◇</span>
            <h2>O mapa secreto da loja</h2>
            <p>A nova área de suporte registra chamados abertos pelos clientes. Proponha tabelas para representar clientes, atendentes e chamados.</p>
            <div className="boss-checks"><span>□ Entidades identificadas</span><span>□ Colunas coerentes</span><span>□ PK em cada tabela</span><span>□ Relacionamentos explicados</span></div>
            <details><summary>Já desenhei — conferir uma solução possível</summary><p>Uma solução possível usa <code>clientes(id_cliente PK)</code>, <code>atendentes(id_atendente PK)</code> e <code>chamados(id_chamado PK, id_cliente FK, id_atendente FK)</code>. Cliente 1:N Chamados e Atendente 1:N Chamados. Outras soluções são válidas quando respeitam as regras apresentadas.</p></details>
          </section>

          <section className="next-mission"><span>PRÓXIMA TRILHA</span><h2>Criando bancos e tabelas</h2><p>Na próxima etapa, esse mapa conceitual começa a virar SQL de verdade.</p><Link href="/trilhas/estrutura">Iniciar Trilha 02 →</Link></section>
        </div>
      </div>
    </main>
  );
}
