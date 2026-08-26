-- ==========================================================
-- SQL do Zero ao Avancado | Trilha 06
-- Funcoes e analise | Exemplos guiados
-- Projeto: LevelUp Store
-- ==========================================================

USE levelup_store;

-- 1. Calculo por linha: valor aproximado do estoque.
SELECT
  nome,
  preco,
  estoque,
  ROUND(preco * estoque, 2) AS valor_em_estoque
FROM produtos
ORDER BY valor_em_estoque DESC;

-- 2. Funcoes de texto.
SELECT
  nome,
  UPPER(nome) AS nome_maiusculo,
  LOWER(email) AS email_minusculo,
  CHAR_LENGTH(nome) AS caracteres_nome
FROM clientes;

-- 3. CONCAT combina textos e colunas.
SELECT
  CONCAT(UPPER(nome), ' • ', cidade) AS identificacao
FROM clientes;

-- 4. Extraindo partes de uma data.
SELECT
  id_pedido,
  data_pedido,
  YEAR(data_pedido) AS ano,
  MONTH(data_pedido) AS mes,
  DAY(data_pedido) AS dia
FROM pedidos;

-- 5. Formatando para apresentacao.
SELECT
  id_pedido,
  DATE_FORMAT(data_pedido, '%m/%Y') AS periodo
FROM pedidos;

-- 6. Intervalo entre datas.
SELECT
  nome,
  data_cadastro,
  DATEDIFF(CURDATE(), data_cadastro) AS dias_como_cliente
FROM clientes;

-- 7. Um resumo de toda a tabela.
SELECT
  COUNT(*) AS quantidade_produtos,
  SUM(estoque) AS estoque_total,
  ROUND(AVG(preco), 2) AS preco_medio,
  MIN(preco) AS menor_preco,
  MAX(preco) AS maior_preco
FROM produtos;

-- 8. Um resumo para cada categoria.
SELECT
  id_categoria,
  COUNT(*) AS quantidade_produtos,
  SUM(estoque) AS estoque_total,
  ROUND(AVG(preco), 2) AS preco_medio
FROM produtos
GROUP BY id_categoria;

-- 9. WHERE filtra linhas; HAVING filtra grupos.
SELECT
  id_categoria,
  COUNT(*) AS quantidade_produtos,
  SUM(estoque) AS estoque_total
FROM produtos
WHERE ativo = 1
GROUP BY id_categoria
HAVING SUM(estoque) > 10;

-- 10. COUNT(*) conta linhas; COUNT(coluna) ignora NULL.
SELECT
  COUNT(*) AS total_avaliacoes,
  COUNT(comentario) AS avaliacoes_com_comentario
FROM avaliacoes;

-- 11. Painel estrategico do estoque.
SELECT
  id_categoria,
  COUNT(*) AS quantidade_produtos,
  SUM(estoque) AS estoque_total,
  ROUND(AVG(preco), 2) AS preco_medio,
  ROUND(SUM(preco * estoque), 2) AS valor_em_estoque
FROM produtos
WHERE ativo = 1
GROUP BY id_categoria
HAVING SUM(estoque) > 10
ORDER BY valor_em_estoque DESC;
