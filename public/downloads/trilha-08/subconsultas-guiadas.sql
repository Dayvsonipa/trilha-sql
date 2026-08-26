-- SQL do Zero ao Avançado
-- Trilha 08: Subconsultas e relatórios
-- Banco: levelup_store

USE levelup_store;

-- 1. SUBCONSULTA ESCALAR
-- A consulta interna calcula um único valor: a média.
SELECT nome, preco
FROM produtos
WHERE preco > (
  SELECT AVG(preco)
  FROM produtos
)
ORDER BY preco DESC;

-- Teste primeiro apenas a parte interna:
SELECT AVG(preco) AS media_geral
FROM produtos;

-- 2. SUBCONSULTA QUE DEVOLVE UMA LISTA
SELECT id_cliente, nome, email
FROM clientes
WHERE id_cliente IN (
  SELECT id_cliente
  FROM pedidos
  WHERE status = 'PAGO'
)
ORDER BY nome;

-- 3. SUBCONSULTA CORRELACIONADA
-- Para cada produto externo, o banco procura uma venda correspondente.
SELECT p.id_produto, p.nome, p.estoque
FROM produtos AS p
WHERE NOT EXISTS (
  SELECT 1
  FROM itens_pedido AS ip
  WHERE ip.id_produto = p.id_produto
)
ORDER BY p.nome;

-- 4. SUBCONSULTA NO HAVING
SELECT
  c.nome AS categoria,
  COUNT(*) AS produtos,
  ROUND(AVG(p.preco), 2) AS preco_medio
FROM categorias AS c
INNER JOIN produtos AS p
  ON p.id_categoria = c.id_categoria
GROUP BY c.id_categoria, c.nome
HAVING AVG(p.preco) > (
  SELECT AVG(preco)
  FROM produtos
)
ORDER BY preco_medio DESC;

-- 5. CTE: RESULTADO INTERMEDIÁRIO COM NOME
WITH vendas_cliente AS (
  SELECT
    pe.id_cliente,
    COUNT(DISTINCT pe.id_pedido) AS total_pedidos,
    ROUND(SUM(ip.quantidade * ip.preco_unitario), 2) AS total_comprado
  FROM pedidos AS pe
  INNER JOIN itens_pedido AS ip
    ON ip.id_pedido = pe.id_pedido
  WHERE pe.status IN ('PAGO', 'EM_TRANSPORTE', 'ENTREGUE')
  GROUP BY pe.id_cliente
)
SELECT *
FROM vendas_cliente
ORDER BY total_comprado DESC;

-- DICA DE INVESTIGAÇÃO
-- Se a consulta ficou complexa, execute cada camada isoladamente.
-- Confirme o formato da resposta interna: um valor, uma lista ou existência.
