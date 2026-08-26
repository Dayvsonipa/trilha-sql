-- SQL do Zero ao Avancado | Trilha 01
-- Objetivo: observar a estrutura antes de aprender a cria-la.

USE levelup_store;

-- Qual banco esta selecionado?
SELECT DATABASE() AS banco_em_uso;

-- Quais tabelas fazem parte do projeto?
SHOW TABLES;

-- Quais colunas, tipos e chaves existem em produtos?
DESCRIBE produtos;

-- Observe a chave primaria de clientes.
DESCRIBE clientes;

-- Encontre a chave estrangeira id_cliente em pedidos.
DESCRIBE pedidos;

-- Veja como uma linha representa um produto completo.
SELECT *
FROM produtos
LIMIT 3;

-- INVESTIGACAO
-- 1. Qual coluna identifica cada produto?
-- 2. Qual coluna de pedidos aponta para clientes?
-- 3. Por que itens_pedido possui id_pedido e id_produto?
