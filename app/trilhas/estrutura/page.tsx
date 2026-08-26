import Link from "next/link";
import StructureActivities from "../../components/StructureActivities";

export default function StructureTrail() {
  return (
    <main className="trail-page structure-page">
      <a className="skip-link" href="#aula">Pular para a aula</a>
      <header className="site-header">
        <Link className="brand" href="/"><span className="brand-mark">D</span><span><strong>Professor Dayvson</strong><small>SQL do Zero ao Avançado</small></span></Link>
        <nav aria-label="Navegação principal"><Link href="/#trilhas">Trilhas</Link><a href="#laboratorio">Práticas</a><a href="#downloads">Downloads</a></nav>
      </header>

      <section className="trail-hero structure-hero" id="aula">
        <div className="breadcrumb"><Link href="/">Início</Link><span>/</span><span>Trilha 02</span></div>
        <div className="trail-hero-grid">
          <div><span className="trail-pill">TRILHA 02 • ESTRUTURA</span><h1>Do modelo<br /><em>ao código.</em></h1><p>Transforme entidades em tabelas, escolha tipos coerentes e declare regras que impedem dados inválidos de entrar no banco.</p><div className="lesson-chips"><span>CREATE DATABASE</span><span>CREATE TABLE</span><span>TIPOS</span><span>CONSTRAINTS</span><span>ALTER TABLE</span></div></div>
          <div className="trail-mission-brief structure-brief"><small>SUA MISSÃO</small><h2>Construir a expansão da LevelUp Store</h2><p>Você vai criar um laboratório seguro e adicionar novas estruturas usando SQL de verdade.</p><div><span><b>4</b> aulas</span><span><b>4</b> práticas</span><span><b>1</b> boss final</span></div></div>
        </div>
      </section>

      <div className="lesson-layout">
        <aside className="lesson-nav" aria-label="Conteúdo da trilha">
          <span className="section-kicker">NESTA TRILHA</span>
          <a className="current" href="#banco"><b>01</b><span>Crie seu espaço<small>DATABASE e USE</small></span></a>
          <a href="#tipos"><b>02</b><span>Escolha os tipos<small>Texto, número e data</small></span></a>
          <a href="#tabelas"><b>03</b><span>Construa com regras<small>TABLE e constraints</small></span></a>
          <a href="#evolucao"><b>04</b><span>Evolua a estrutura<small>ALTER e segurança</small></span></a>
          <a href="#laboratorio"><b>05</b><span>Laboratório<small>Escreva e execute</small></span></a>
          <a href="#boss"><b>06</b><span>Boss final<small>Programa de campeonatos</small></span></a>
          <Link className="back-home" href="/">← Mapa completo</Link>
        </aside>

        <div className="lesson-content">
          <section className="lesson-section" id="banco">
            <span className="lesson-label">AULA 01 • CRIANDO O BANCO</span><h2>Primeiro, defina onde<br />o projeto vai morar.</h2>
            <p className="lead">Um banco organiza tabelas do mesmo projeto. Vamos criar <strong>levelup_lab</strong>: um ambiente separado para experimentar sem colocar o banco principal em risco.</p>
            <div className="command-story">
              <article><span>01</span><code>CREATE DATABASE</code><p>Cria um novo banco no servidor.</p></article><i>→</i>
              <article><span>02</span><code>USE</code><p>Escolhe o banco da aba atual.</p></article><i>→</i>
              <article><span>03</span><code>CREATE TABLE</code><p>Cria estruturas dentro dele.</p></article>
            </div>
            <div className="code-panel"><div className="code-panel-top"><span>primeiro_banco.sql</span><small>Execute por etapas ↗</small></div><pre><code><span className="sql-key">CREATE DATABASE</span> levelup_lab{`\n`}  <span className="sql-key">CHARACTER SET</span> utf8mb4;{`\n\n`}<span className="sql-key">USE</span> levelup_lab;{`\n\n`}<span className="sql-key">SELECT</span> DATABASE() <span className="sql-key">AS</span> banco_em_uso;</code></pre></div>
            <div className="golden-rule"><span>!</span><p><b>Leia antes de executar</b>Comandos estruturais alteram o banco. Selecione somente o trecho pretendido e confirme em qual conexão você está.</p></div>
          </section>

          <section className="lesson-section" id="tipos">
            <span className="lesson-label">AULA 02 • TIPOS DE DADOS</span><h2>Cada coluna faz<br />uma promessa.</h2>
            <p className="lead">O tipo define quais valores a coluna aceita e quais operações poderão ser realizadas. Guardar preço como texto, por exemplo, dificulta cálculos e ordenações.</p>
            <div className="type-grid">
              <article><span>123</span><b>INT</b><p>Números inteiros: IDs, quantidade e estoque.</p><small>estoque INT</small></article>
              <article><span>Abc</span><b>VARCHAR(n)</b><p>Textos de tamanho variável: nomes e e-mails.</p><small>nome VARCHAR(120)</small></article>
              <article><span>9,90</span><b>DECIMAL(p,s)</b><p>Valores exatos com casas decimais: preços.</p><small>preco DECIMAL(10,2)</small></article>
              <article><span>▦</span><b>DATE</b><p>Datas sem horário: nascimento e validade.</p><small>validade DATE</small></article>
              <article><span>◷</span><b>DATETIME</b><p>Data e hora: momento de um pedido.</p><small>criado_em DATETIME</small></article>
              <article><span>0/1</span><b>BOOLEAN</b><p>Estados de sim ou não: ativo e disponível.</p><small>ativo BOOLEAN</small></article>
            </div>
            <div className="type-decision"><div><small>PERGUNTE</small><b>O valor será calculado?</b></div><div><small>PERGUNTE</small><b>Pode ficar vazio?</b></div><div><small>PERGUNTE</small><b>Qual tamanho é realista?</b></div></div>
          </section>

          <section className="lesson-section" id="tabelas">
            <span className="lesson-label">AULA 03 • TABELAS E RESTRIÇÕES</span><h2>A estrutura também<br />protege os dados.</h2>
            <p className="lead">Restrições são regras aplicadas pelo próprio banco. Mesmo que um sistema tente enviar um valor incorreto, a tabela pode recusá-lo.</p>
            <div className="constraint-deck">
              <article><b>PRIMARY KEY</b><p>Identidade única da linha.</p></article><article><b>AUTO_INCREMENT</b><p>Gera o próximo ID automaticamente.</p></article><article><b>NOT NULL</b><p>Exige que o valor seja informado.</p></article><article><b>UNIQUE</b><p>Impede valores repetidos.</p></article><article><b>DEFAULT</b><p>Define um valor quando nada é enviado.</p></article><article><b>CHECK</b><p>Valida uma condição lógica.</p></article>
            </div>
            <div className="code-panel anatomy-code"><div className="code-panel-top"><span>categorias.sql</span><small>Observe linha por linha ↗</small></div><pre><code><span className="sql-key">CREATE TABLE</span> categorias ({`\n`}  id_categoria <span className="sql-type">INT PRIMARY KEY AUTO_INCREMENT</span>,{`\n`}  nome <span className="sql-type">VARCHAR(80) NOT NULL UNIQUE</span>,{`\n`}  ativa <span className="sql-type">BOOLEAN NOT NULL DEFAULT TRUE</span>{`\n`});</code></pre></div>
            <div className="explanation-grid"><p><b>id_categoria</b><span>O banco gera uma identidade única.</span></p><p><b>nome</b><span>É obrigatório e não pode repetir.</span></p><p><b>ativa</b><span>Começa verdadeira quando omitida.</span></p></div>
          </section>

          <section className="lesson-section" id="evolucao">
            <span className="lesson-label">AULA 04 • EVOLUINDO A ESTRUTURA</span><h2>Projetos mudam.<br />O banco também.</h2>
            <p className="lead"><strong>ALTER TABLE</strong> permite adicionar, modificar ou remover colunas. Já <strong>DROP</strong> apaga objetos — por isso exige leitura, contexto e cuidado redobrado.</p>
            <div className="alter-gallery">
              <article><small>ADICIONAR</small><pre><code><span className="sql-key">ALTER TABLE</span> produtos{`\n`}<span className="sql-key">ADD COLUMN</span> peso DECIMAL(8,2);</code></pre></article>
              <article><small>MODIFICAR</small><pre><code><span className="sql-key">ALTER TABLE</span> produtos{`\n`}<span className="sql-key">MODIFY COLUMN</span> nome VARCHAR(160);</code></pre></article>
              <article className="danger-command"><small>REMOVER</small><pre><code><span className="sql-key">ALTER TABLE</span> produtos{`\n`}<span className="sql-key">DROP COLUMN</span> peso;</code></pre></article>
            </div>
            <div className="safety-check"><span>ANTES DE ALTERAR</span><div><b>1</b><p>Confirme a conexão e o banco.</p></div><div><b>2</b><p>Leia exatamente o que será alterado.</p></div><div><b>3</b><p>Em dados reais, tenha backup e plano de retorno.</p></div></div>
            <div className="error-lab"><div><small>CONSULTA COM PROBLEMA</small><pre><code><span className="sql-key">CREATE TABLE</span> torneios ({`\n`}  id INT <span className="sql-type">PRIMARY KEY AUTO_INCREMENT</span>,{`\n`}  nome VARCHAR(80) <span className="sql-type">NOT NULL</span>{`\n`}  premio DECIMAL(10,2){`\n`});</code></pre></div><details><summary>Já investiguei — mostrar o erro</summary><p>Falta uma vírgula após <code>nome VARCHAR(80) NOT NULL</code>. Em uma tabela, as definições de colunas e restrições são separadas por vírgulas.</p></details></div>
          </section>

          <section className="lesson-section" id="laboratorio"><span className="lesson-label">LABORATÓRIO PRÁTICO</span><h2>Construa, teste e ajuste.</h2><p className="lead">Use o banco <strong>levelup_lab</strong>. Execute uma missão por vez e só revele a correção depois de observar o resultado no Workbench.</p><StructureActivities /></section>

          <section className="lesson-section" id="downloads"><span className="lesson-label">KIT DA TRILHA 02</span><h2>Arquivos para construir.</h2><div className="setup-downloads">
            <a href="/downloads/trilha-02/laboratorio-estrutura.sql" download><span>SQL</span><div><b>Laboratório guiado</b><small>Base segura para acompanhar a trilha</small></div><i>↓</i></a>
            <a href="/downloads/trilha-02/atividades-estrutura.sql" download><span>SQL</span><div><b>Atividades práticas</b><small>Missões sem respostas</small></div><i>↓</i></a>
            <a href="/downloads/trilha-02/guia-tipos-e-restricoes.txt" download><span>TXT</span><div><b>Guia de consulta</b><small>Tipos e restrições essenciais</small></div><i>↓</i></a>
            <a href="/downloads/trilha-02/boss-campeonatos.sql" download><span>SQL</span><div><b>Arquivo do boss</b><small>Briefing e espaço de implementação</small></div><i>↓</i></a>
          </div></section>

          <section className="boss-card structure-boss" id="boss"><div className="boss-badge">BOSS FINAL</div><span className="boss-icon">⬡</span><h2>LevelUp Championships</h2><p>Crie as estruturas do novo programa de campeonatos: jogos, campeonatos e inscrições de jogadores.</p><div className="boss-checks"><span>□ Tipos coerentes</span><span>□ PK automática</span><span>□ Regras obrigatórias</span><span>□ FKs conectadas</span></div><details><summary>Concluí minha versão — revelar arquitetura</summary><p>Uma solução possível usa <code>jogos(id_jogo PK)</code>, <code>campeonatos(id_campeonato PK, id_jogo FK)</code> e <code>inscricoes(id_inscricao PK, id_campeonato FK, id_cliente FK)</code>. Inclua datas, prêmio, status e uma regra <code>UNIQUE(id_campeonato, id_cliente)</code> para evitar inscrição duplicada.</p></details></section>

          <section className="next-mission"><span>PRÓXIMA TRILHA</span><h2>Primeiras consultas</h2><p>Com as tabelas construídas, chegou a hora de pedir respostas ao banco.</p><Link href="/trilhas/select">Iniciar Trilha 03 →</Link></section>
        </div>
      </div>
    </main>
  );
}
