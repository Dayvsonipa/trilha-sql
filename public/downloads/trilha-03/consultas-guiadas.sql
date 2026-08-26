-- SQL do Zero ao Avancado | Trilha 03
-- Execute uma consulta por vez e observe cada mudanca.

USE levelup_store;

-- 1. Explorar todas as colunas de uma tabela pequena.
SELECT *
FROM categorias;

-- 2. Escolher somente as colunas necessarias.
SELECT nome, preco, estoque
FROM produtos;

-- 3. Criar titulos mais claros no resultado.
SELECT
  nome AS produto,
  preco AS preco_atual
FROM produtos;

-- 4. Mostrar valores diferentes, sem repeticao.
SELECT DISTINCT cidade
FROM clientes;

-- 5. Organizar do menor para o maior.
SELECT nome, preco
FROM produtos
ORDER BY preco ASC;

-- 6. Organizar do maior para o menor.
SELECT nome, preco
FROM produtos
ORDER BY preco DESC;

-- 7. Usar mais de uma coluna na ordenacao.
SELECT cidade, nome
FROM clientes
ORDER BY cidade ASC, nome ASC;

-- 8. Manter apenas as tres primeiras linhas do ranking.
SELECT nome, preco
FROM produtos
ORDER BY preco DESC
LIMIT 3;
