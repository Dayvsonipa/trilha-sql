import Link from "next/link";
import FinalProjectStudio from "../../components/FinalProjectStudio";

export default function FinalProjectTrail() {
  return (
    <main className="trail-page final-page">
      <a className="skip-link" href="#aula">Pular para o projeto</a>
      <header className="site-header">
        <Link className="brand" href="/"><span className="brand-mark">D</span><span><strong>Professor Dayvson</strong><small>SQL do Zero ao Avançado</small></span></Link>
        <nav aria-label="Navegação principal"><Link href="/#trilhas">Trilhas</Link><a href="#entregas">Entregas</a><a href="#downloads">Downloads</a></nav>
      </header>

      <section className="trail-hero final-hero" id="aula">
        <div className="breadcrumb"><Link href="/">Início</Link><span>/</span><span>Trilha 09</span></div>
        <div className="trail-hero-grid">
          <div><span className="trail-pill">TRILHA 09 • PROJETO FINAL</span><h1>Você aprendeu SQL.<br /><em>Agora faça decidir.</em></h1><p>Assuma uma consultoria para a LevelUp Store, construa quatro relatórios executivos e transforme o resultado das consultas em recomendações claras.</p><div className="lesson-chips"><span>SELECT</span><span>FILTROS</span><span>FUNÇÕES</span><span>JOINs</span><span>SUBCONSULTAS</span><span>CTE</span></div></div>
          <div className="trail-mission-brief final-brief"><small>CONTRATO DE MISSÃO</small><h2>Diagnóstico executivo LevelUp Store</h2><p>A diretoria não quer apenas tabelas. Ela precisa entender o que está acontecendo, onde agir e quais dados sustentam cada conclusão.</p><div><span><b>4</b> etapas</span><span><b>4</b> entregas</span><span><b>1</b> apresentação final</span></div></div>
        </div>
      </section>

      <div className="lesson-layout">
        <aside className="lesson-nav" aria-label="Etapas do projeto">
          <span className="section-kicker">SUA MISSÃO FINAL</span>
          <a className="current" href="#briefing"><b>01</b><span>Receba o briefing<small>Problema e perguntas</small></span></a>
          <a href="#planejamento"><b>02</b><span>Planeje a solução<small>Arquivo e evidências</small></span></a>
          <a href="#entregas"><b>03</b><span>Construa os relatórios<small>Quatro entregas</small></span></a>
          <a href="#comunique"><b>04</b><span>Explique a decisão<small>Dados viram recomendação</small></span></a>
          <a href="#qualidade"><b>05</b><span>Revise a qualidade<small>Checklist final</small></span></a>
          <a href="#boss"><b>06</b><span>Conclua a jornada<small>Defesa do projeto</small></span></a>
          <Link className="back-home" href="/">← Mapa completo</Link>
        </aside>

        <div className="lesson-content">
          <section className="lesson-section" id="briefing">
            <span className="lesson-label">ETAPA 01 • BRIEFING</span><h2>A LevelUp cresceu.<br />As decisões ficaram difíceis.</h2>
            <p className="lead">Você foi chamado para transformar o banco <strong>levelup_store</strong> em um diagnóstico executivo. Cada afirmação precisa nascer de uma consulta reproduzível no MySQL Workbench.</p>
            <div className="executive-board" aria-label="Painel com as perguntas da diretoria"><header><span>CENTRAL DA DIRETORIA</span><small>4 perguntas aguardando resposta</small></header><div><article><b>01</b><span>Qual é o tamanho atual da operação?</span></article><article><b>02</b><span>Quais categorias geram mais vendas?</span></article><article><b>03</b><span>Onde estão os riscos de estoque?</span></article><article><b>04</b><span>Quem são os clientes de maior valor?</span></article></div></div>
            <div className="consultant-rule"><span>SQL</span><p><b>Consulta sem interpretação é metade da entrega.</b> Para cada relatório, registre uma conclusão curta: o que o resultado mostra e qual ação você recomenda.</p></div>
          </section>

          <section className="lesson-section" id="planejamento">
            <span className="lesson-label">ETAPA 02 • PLANEJAMENTO</span><h2>Organize antes de<br />escrever a primeira linha.</h2>
            <p className="lead">Um projeto profissional permite que outra pessoa entenda, execute e confira o trabalho. Use comentários, nomes legíveis e uma seção independente para cada entrega.</p>
            <div className="delivery-architecture"><article><span>01</span><small>IDENTIFIQUE</small><b>Pergunta de negócio</b><p>Escreva em uma frase o que precisa ser descoberto.</p></article><i>→</i><article><span>02</span><small>CONSTRUA</small><b>Consulta SQL</b><p>Conecte somente as tabelas e regras necessárias.</p></article><i>→</i><article><span>03</span><small>VALIDE</small><b>Evidência</b><p>Confira linhas, totais, nulos e alguns registros.</p></article><i>→</i><article><span>04</span><small>COMUNIQUE</small><b>Recomendação</b><p>Traduza o resultado para uma decisão possível.</p></article></div>
            <div className="project-file-map"><div className="file-top"><span>projeto-final.sql</span><small>Estrutura recomendada</small></div><pre><code><span className="sql-comment">-- PROJETO FINAL | LEVELUP STORE</span>{`\n`}<span className="sql-comment">-- Analista: seu nome</span>{`\n\n`}<span className="sql-key">USE</span> levelup_store;{`\n\n`}<span className="sql-comment">-- ENTREGA 01: RAIO-X DA OPERAÇÃO</span>{`\n`}<span className="sql-comment">-- Pergunta:</span>{`\n`}<span className="sql-comment">-- Consulta:</span>{`\n`}<span className="sql-comment">-- Conclusão:</span>{`\n`}<span className="sql-comment">-- Recomendação:</span></code></pre></div>
            <div className="planning-rules"><article><span>✓</span><p><b>Uma etapa por vez</b>Execute cada relatório isoladamente antes de reuni-los.</p></article><article><span>✓</span><p><b>Aliases que explicam</b>O nome da coluna deve fazer sentido para quem recebe o relatório.</p></article><article><span>✓</span><p><b>Totais verificáveis</b>Confira manualmente ao menos um registro ou grupo.</p></article></div>
          </section>

          <section className="lesson-section" id="entregas">
            <span className="lesson-label">ETAPA 03 • LABORATÓRIO DO PROJETO</span><h2>Quatro perguntas.<br />Quatro decisões sustentadas.</h2>
            <p className="lead">Resolva cada entrega no Workbench e só depois compare com a referência. Soluções diferentes são válidas quando produzem a resposta correta e podem ser explicadas.</p>
            <FinalProjectStudio />
          </section>

          <section className="lesson-section" id="comunique">
            <span className="lesson-label">ETAPA 04 • LEITURA EXECUTIVA</span><h2>O resultado responde.<br />Você explica por que importa.</h2>
            <p className="lead">O papel do analista não termina quando a consulta executa. Observe padrões, limites da base e ações possíveis — sem afirmar algo que os dados não demonstram.</p>
            <div className="data-to-decision"><article><small>DADO</small><b>Headset Cloud Stinger</b><span>estoque = 0</span></article><i>→</i><article><small>LEITURA</small><b>Indisponibilidade atual</b><span>o produto não pode ser vendido</span></article><i>→</i><article><small>DECISÃO</small><b>Revisar reposição</b><span>validar demanda antes da compra</span></article></div>
            <div className="interpretation-grid"><article><span>O QUE MOSTRA?</span><p>Descreva o padrão visível no resultado, com números quando possível.</p></article><article><span>POR QUE IMPORTA?</span><p>Relacione o padrão a vendas, estoque, clientes ou operação.</p></article><article><span>O QUE FAZER?</span><p>Proponha uma ação proporcional à evidência encontrada.</p></article><article><span>QUAL O LIMITE?</span><p>Registre quando a base é pequena ou quando faltam dados para concluir.</p></article></div>
            <div className="ethical-alert"><span>!</span><p><b>Não invente certezas.</b> “O produto está sem estoque” é fato. “O produto é o mais desejado da loja” exigiria dados de demanda que esta base não possui.</p></div>
          </section>

          <section className="lesson-section" id="qualidade">
            <span className="lesson-label">CHECKPOINT DE QUALIDADE</span><h2>Antes de entregar,<br />execute como avaliador.</h2>
            <div className="quality-console"><div className="quality-score"><span>10</span><small>VERIFICAÇÕES</small></div><div className="quality-list"><span>□ O arquivo começa com <code>USE levelup_store;</code></span><span>□ As quatro entregas executam sem erro</span><span>□ JOINs usam as chaves corretas</span><span>□ Pedidos válidos usam os três status definidos</span><span>□ Faturamento usa quantidade × preço unitário</span><span>□ Agrupamentos não duplicam pedidos</span><span>□ Aliases tornam as colunas compreensíveis</span><span>□ Cada relatório tem uma conclusão</span><span>□ Cada conclusão possui uma recomendação</span><span>□ Uma pergunta autoral foi acrescentada</span></div></div>
            <div className="review-method"><span>EXECUTE → LEIA → DUVIDE → CONFIRA</span><p>Uma consulta que não apresenta erro de sintaxe ainda pode responder à pergunta errada. Compare os resultados com registros conhecidos antes de confiar no relatório.</p></div>
          </section>

          <section className="lesson-section" id="downloads"><span className="lesson-label">KIT DO PROJETO FINAL</span><h2>Arquivos para a entrega.</h2><div className="setup-downloads">
            <a href="/downloads/trilha-09/projeto-final-template.sql" download><span>SQL</span><div><b>Template do projeto</b><small>Estrutura pronta, sem respostas</small></div><i>↓</i></a>
            <a href="/downloads/trilha-09/roteiro-projeto-final.txt" download><span>TXT</span><div><b>Roteiro da missão</b><small>Requisitos e entregáveis</small></div><i>↓</i></a>
            <a href="/downloads/trilha-09/checklist-entrega.txt" download><span>TXT</span><div><b>Checklist de qualidade</b><small>Revisão antes da apresentação</small></div><i>↓</i></a>
            <a href="/downloads/trilha-00/levelup-store-inicial.sql" download><span>SQL</span><div><b>Banco LevelUp Store</b><small>Base completa do projeto</small></div><i>↓</i></a>
          </div></section>

          <section className="boss-card final-boss" id="boss"><div className="boss-badge">MISSÃO CONCLUÍDA</div><span className="boss-icon">09</span><h2>Defenda seu diagnóstico</h2><p>Apresente os quatro relatórios em uma sequência lógica. Para cada um, explique a pergunta, mostre a consulta, interprete o resultado e recomende uma ação. Finalize com uma quinta pergunta criada por você.</p><div className="boss-checks"><span>□ Quatro relatórios executáveis</span><span>□ Quatro conclusões justificadas</span><span>□ Quatro recomendações responsáveis</span><span>□ Uma investigação autoral</span></div><details><summary>Minha entrega está pronta — revelar orientação final</summary><p>Não procure uma consulta “perfeita”. Demonstre domínio explicando cada escolha: por que começou naquela tabela, como evitou duplicações, o que o filtro exclui e qual resultado comprova sua conclusão. Se você consegue defender essas decisões, concluiu a jornada.</p></details></section>

          <section className="course-complete"><span>JORNADA COMPLETA • 00 → 09</span><h2>Do primeiro SELECT<br />à decisão sustentada por dados.</h2><p>Você preparou o ambiente, modelou tabelas, consultou, filtrou, manipulou, analisou, conectou e construiu relatórios avançados. O próximo banco pode mudar. Seu raciocínio fica.</p><Link href="/">Voltar ao início da jornada →</Link></section>
        </div>
      </div>
    </main>
  );
}
