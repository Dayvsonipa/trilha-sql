import Link from "next/link";
import EnvironmentActivities from "../../components/EnvironmentActivities";

export default function EnvironmentTrail() {
  return (
    <main className="trail-page setup-page">
      <a className="skip-link" href="#aula">Pular para a aula</a>
      <header className="site-header">
        <Link className="brand" href="/"><span className="brand-mark">D</span><span><strong>Professor Dayvson</strong><small>SQL do Zero ao Avançado</small></span></Link>
        <nav aria-label="Navegação principal"><Link href="/#trilhas">Trilhas</Link><a href="#praticas">Práticas</a><a href="#downloads">Downloads</a></nav>
      </header>

      <section className="trail-hero setup-hero" id="aula">
        <div className="breadcrumb"><Link href="/">Início</Link><span>/</span><span>Trilha 00</span></div>
        <div className="trail-hero-grid">
          <div>
            <span className="trail-pill">TRILHA 00 • PONTO DE PARTIDA</span>
            <h1>Prepare seu<br /><em>ambiente.</em></h1>
            <p>Instale as ferramentas, entenda como elas se conectam e coloque a LevelUp Store no ar. No fim, seu laboratório estará pronto para todas as próximas missões.</p>
            <div className="lesson-chips"><span>MYSQL</span><span>WORKBENCH</span><span>CONEXÃO</span><span>SCHEMA</span><span>IMPORTAÇÃO</span></div>
          </div>
          <div className="trail-mission-brief setup-brief">
            <small>SUA MISSÃO</small><h2>Acender a central da LevelUp Store</h2>
            <p>Você vai sair de uma tela vazia para um banco real, conectado e pronto para receber consultas.</p>
            <div><span><b>3</b> aulas</span><span><b>3</b> práticas</span><span><b>1</b> boss final</span></div>
          </div>
        </div>
      </section>

      <div className="lesson-layout">
        <aside className="lesson-nav" aria-label="Conteúdo da trilha">
          <span className="section-kicker">NESTA TRILHA</span>
          <a className="current" href="#ecossistema"><b>01</b><span>Entenda o ambiente<small>MySQL e Workbench</small></span></a>
          <a href="#conexao"><b>02</b><span>Ligue os sistemas<small>Instalação e conexão</small></span></a>
          <a href="#importacao"><b>03</b><span>Traga o banco para cá<small>Importação e execução</small></span></a>
          <a href="#praticas"><b>04</b><span>Teste seu domínio<small>Laboratório prático</small></span></a>
          <a href="#boss"><b>05</b><span>Boss final<small>Central online</small></span></a>
          <Link className="back-home" href="/">← Mapa completo</Link>
        </aside>

        <div className="lesson-content">
          <section className="lesson-section" id="ecossistema">
            <span className="lesson-label">AULA 01 • O ECOSSISTEMA</span>
            <h2>Workbench é a cabine.<br />MySQL é o motor.</h2>
            <p className="lead">Pense na LevelUp Store como uma central de operações. O <strong>MySQL Server</strong> guarda e processa os dados; o <strong>MySQL Workbench</strong> é a interface visual usada para conversar com ele.</p>
            <div className="ecosystem-flow" aria-label="Fluxo do ambiente de banco de dados">
              <article><span>01</span><b>Workbench</b><small>Você escreve e envia</small></article><i>→</i>
              <article><span>02</span><b>Conexão</b><small>Leva o pedido ao servidor</small></article><i>→</i>
              <article><span>03</span><b>MySQL Server</b><small>Processa o comando</small></article><i>→</i>
              <article><span>04</span><b>Resultado</b><small>Volta para a tela</small></article>
            </div>
            <div className="setup-concepts">
              <article><b>Servidor</b><p>O programa que recebe comandos, protege e organiza os bancos.</p></article>
              <article><b>Conexão</b><p>O caminho configurado entre o Workbench e um servidor.</p></article>
              <article><b>Schema</b><p>No MySQL, é o espaço que agrupa tabelas e outros objetos de um banco.</p></article>
              <article><b>Editor SQL</b><p>A área em que você escreve, executa e testa instruções.</p></article>
            </div>
            <div className="golden-rule"><span>!</span><p><b>Guarde esta ideia</b>Instalar o Workbench sozinho não cria um banco. Ele precisa se conectar a um servidor MySQL.</p></div>
          </section>

          <section className="lesson-section" id="conexao">
            <span className="lesson-label">AULA 02 • PRIMEIRA CONEXÃO</span>
            <h2>Do instalador ao primeiro “olá”.</h2>
            <p className="lead">Use o instalador oficial do MySQL e mantenha juntos o servidor e o Workbench. Durante a configuração, anote a senha do usuário <strong>root</strong>: ela será necessária para conectar.</p>
            <ol className="setup-steps">
              <li><span>1</span><div><b>Instale os componentes</b><p>Inclua MySQL Server e MySQL Workbench. Conclua a configuração do servidor.</p></div></li>
              <li><span>2</span><div><b>Crie a conexão</b><p>No Workbench, use <em>MySQL Connections → +</em>. Nomeie como <code>LevelUp Local</code>.</p></div></li>
              <li><span>3</span><div><b>Confira os dados locais</b><p>Hostname <code>localhost</code>, porta <code>3306</code> e usuário <code>root</code>.</p></div></li>
              <li><span>4</span><div><b>Teste e abra</b><p>Clique em <em>Test Connection</em>, informe sua senha e abra a conexão salva.</p></div></li>
            </ol>
            <div className="workbench-map">
              <div className="workbench-bar"><i /><i /><i /><span>MySQL Workbench — LevelUp Local</span></div>
              <div className="workbench-body">
                <div className="workbench-schemas"><small>NAVIGATOR</small><b>SCHEMAS</b><span>▸ levelup_store</span><span>▸ sys</span></div>
                <div className="workbench-editor"><small>Query 1</small><code><span className="sql-key">SELECT</span> <span className="sql-string">&apos;Olá, SQL!&apos;</span> <span className="sql-key">AS</span> mensagem;</code><div><b>mensagem</b><span>Olá, SQL!</span></div></div>
              </div>
            </div>
            <div className="callout success"><span>✓</span><p><b>Funcionou?</b>Se a grade de resultado mostrou “Olá, SQL!”, seu editor e sua conexão estão prontos.</p></div>
          </section>

          <section className="lesson-section" id="importacao">
            <span className="lesson-label">AULA 03 • IMPORTANDO O PROJETO</span>
            <h2>Agora a loja ganha dados.</h2>
            <p className="lead">Baixe o arquivo inicial no fim desta página. Ele cria o schema <strong>levelup_store</strong>, suas sete tabelas e alguns registros para os primeiros testes.</p>
            <div className="import-route">
              <article><span>1</span><b>Abra o arquivo</b><p><em>File → Open SQL Script</em> e escolha <code>levelup-store-inicial.sql</code>.</p></article>
              <article><span>2</span><b>Execute tudo</b><p>Use o ícone de raio para enviar o script completo ao servidor.</p></article>
              <article><span>3</span><b>Atualize a lista</b><p>Em SCHEMAS, clique no ícone de atualização e abra <code>levelup_store</code>.</p></article>
              <article><span>4</span><b>Valide</b><p>Execute o comando abaixo e confirme as sete tabelas.</p></article>
            </div>
            <div className="code-panel">
              <div className="code-panel-top"><span>validacao.sql</span><small>Execute no Workbench ↗</small></div>
              <pre><code><span className="sql-key">USE</span> levelup_store;{`\n\n`}<span className="sql-key">SHOW TABLES</span>;</code></pre>
            </div>
            <div className="debug-grid">
              <details><summary>“No database selected”</summary><p>Execute <code>USE levelup_store;</code> ou dê duplo clique no schema antes da consulta.</p></details>
              <details><summary>“Access denied”</summary><p>Confira usuário e senha da conexão. A senha é a definida durante a instalação.</p></details>
              <details><summary>“Table doesn&apos;t exist”</summary><p>Atualize SCHEMAS, confirme o nome da tabela e verifique se o script terminou sem erros.</p></details>
            </div>
          </section>

          <section className="lesson-section" id="praticas">
            <span className="lesson-label">LABORATÓRIO PRÁTICO</span>
            <h2>Tente primeiro. Confira depois.</h2>
            <p className="lead">Cada missão libera a correção somente depois que você confirma sua tentativa. Nada é salvo: ao recarregar a página, o laboratório recomeça.</p>
            <EnvironmentActivities />
          </section>

          <section className="lesson-section" id="downloads">
            <span className="lesson-label">KIT DA TRILHA 00</span>
            <h2>Arquivos para praticar.</h2>
            <div className="setup-downloads">
              <a href="/downloads/trilha-00/levelup-store-inicial.sql" download><span>SQL</span><div><b>Banco inicial</b><small>Criação e dados da LevelUp Store</small></div><i>↓</i></a>
              <a href="/downloads/trilha-00/exemplos-comentados.sql" download><span>SQL</span><div><b>Exemplos comentados</b><small>Primeiros comandos explicados</small></div><i>↓</i></a>
              <a href="/downloads/trilha-00/atividades.sql" download><span>SQL</span><div><b>Folha de atividades</b><small>Espaço para resolver as missões</small></div><i>↓</i></a>
              <a href="/downloads/trilha-00/instrucoes.txt" download><span>TXT</span><div><b>Instruções rápidas</b><small>Checklist de instalação e importação</small></div><i>↓</i></a>
            </div>
          </section>

          <section className="boss-card" id="boss">
            <div className="boss-badge">BOSS FINAL</div><span className="boss-icon">◆</span>
            <h2>Central LevelUp online</h2>
            <p>Sem olhar a correção, abra a conexão, importe o banco, escolha o schema e prove que a estrutura chegou inteira.</p>
            <div className="boss-checks"><span>□ Conexão aberta</span><span>□ Banco importado</span><span>□ 7 tabelas encontradas</span><span>□ Primeiro SELECT executado</span></div>
            <details><summary>Conferir critério de conclusão</summary><p>Você concluiu quando <code>SELECT DATABASE();</code> retorna <code>levelup_store</code>, <code>SHOW TABLES;</code> exibe sete tabelas e <code>SELECT &apos;Central online!&apos; AS status;</code> retorna a mensagem sem erro.</p></details>
          </section>

          <section className="next-mission"><span>PRÓXIMA TRILHA</span><h2>Fundamentos de bancos</h2><p>Com o laboratório pronto, você vai entender tabelas, linhas, colunas, chaves e relacionamentos.</p><Link href="/trilhas/fundamentos">Iniciar Trilha 01 →</Link></section>
        </div>
      </div>
    </main>
  );
}
