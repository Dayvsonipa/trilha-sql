-- ==========================================================
-- SQL do Zero ao Avancado | Trilha 07
-- Conectando tabelas | Exemplos guiados
-- Projeto: LevelUp Store
-- ==========================================================

USE levelup_store;

-- 1. Produtos com o nome de suas categorias.
SELECT
  p.nome AS produto,
  c.nome AS categoria
FROM produtos AS p
INNER JOIN categorias AS c
  ON p.id_categoria = c.id_categoria
ORDER BY c.nome, p.nome;

-- 2. Pedidos com o nome dos clientes.
SELECT
  pe.id_pedido,
  c.nome AS cliente,
  pe.status,
  pe.valor_total
FROM pedidos AS pe
INNER JOIN clientes AS c
  ON pe.id_cliente = c.id_cliente
ORDER BY pe.data_pedido DESC;

-- 3. Itens com o nome do produto e subtotal calculado.
SELECT
  ip.id_pedido,
  pr.nome AS produto,
  ip.quantidade,
  ip.preco_unitario,
  ROUND(ip.quantidade * ip.preco_unitario, 2) AS subtotal
FROM itens_pedido AS ip
INNER JOIN produtos AS pr
  ON ip.id_produto = pr.id_produto
ORDER BY ip.id_pedido, pr.nome;

-- 4. A historia completa de cada item vendido.
SELECT
  pe.id_pedido,
  c.nome AS cliente,
  pr.nome AS produto,
  ip.quantidade
FROM pedidos AS pe
INNER JOIN clientes AS c
  ON pe.id_cliente = c.id_cliente
INNER JOIN itens_pedido AS ip
  ON ip.id_pedido = pe.id_pedido
INNER JOIN produtos AS pr
  ON ip.id_produto = pr.id_produto
ORDER BY pe.id_pedido, pr.nome;

-- 5. Todos os clientes, inclusive sem pedidos.
SELECT
  c.id_cliente,
  c.nome AS cliente,
  pe.id_pedido
FROM clientes AS c
LEFT JOIN pedidos AS pe
  ON pe.id_cliente = c.id_cliente
ORDER BY c.nome;

-- 6. Somente clientes sem pedidos.
SELECT
  c.id_cliente,
  c.nome AS cliente
FROM clientes AS c
LEFT JOIN pedidos AS pe
  ON pe.id_cliente = c.id_cliente
WHERE pe.id_pedido IS NULL;

-- 7. Quantidade de pedidos de cada cliente, incluindo zero.
SELECT
  c.id_cliente,
  c.nome AS cliente,
  COUNT(pe.id_pedido) AS total_pedidos
FROM clientes AS c
LEFT JOIN pedidos AS pe
  ON pe.id_cliente = c.id_cliente
GROUP BY c.id_cliente, c.nome
ORDER BY total_pedidos DESC, c.nome;

-- 8. Boss: relatorio completo de vendas.
SELECT
  pe.id_pedido,
  DATE_FORMAT(pe.data_pedido, '%d/%m/%Y') AS data,
  c.nome AS cliente,
  pr.nome AS produto,
  ip.quantidade,
  ip.preco_unitario,
  ROUND(ip.quantidade * ip.preco_unitario, 2) AS subtotal
FROM pedidos AS pe
INNER JOIN clientes AS c
  ON pe.id_cliente = c.id_cliente
INNER JOIN itens_pedido AS ip
  ON ip.id_pedido = pe.id_pedido
INNER JOIN produtos AS pr
  ON ip.id_produto = pr.id_produto
WHERE pe.status IN ('PAGO', 'EM_TRANSPORTE', 'ENTREGUE')
ORDER BY pe.id_pedido, pr.nome;
