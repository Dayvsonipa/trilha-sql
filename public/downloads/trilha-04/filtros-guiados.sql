-- ==========================================================
-- SQL do Zero ao Avancado | Trilha 04
-- Filtros e buscas | Exemplos guiados
-- Projeto: LevelUp Store
-- ==========================================================

USE levelup_store;

-- 1. WHERE deixa passar apenas as linhas que atendem a condicao.
SELECT nome, preco
FROM produtos
WHERE preco > 1000;

-- 2. Comparando textos: use aspas simples.
SELECT id_pedido, status, valor_total
FROM pedidos
WHERE status = 'PAGO';

-- 3. AND exige que todas as condicoes sejam verdadeiras.
SELECT nome, preco, estoque
FROM produtos
WHERE preco <= 500
  AND estoque > 0;

-- 4. OR aceita uma condicao ou a outra.
SELECT id_pedido, status
FROM pedidos
WHERE status = 'PAGO'
   OR status = 'EM_TRANSPORTE';

-- 5. Parenteses deixam a regra explicita.
SELECT nome, preco, estoque, ativo
FROM produtos
WHERE ativo = 1
  AND (estoque > 0 OR preco < 300);

-- 6. BETWEEN inclui os dois limites.
SELECT nome, preco
FROM produtos
WHERE preco BETWEEN 200 AND 400;

-- 7. IN compara uma coluna com uma lista de opcoes.
SELECT id_pedido, status, valor_total
FROM pedidos
WHERE status IN ('PAGO', 'EM_TRANSPORTE');

-- 8. LIKE encontra padroes em textos.
-- % representa qualquer quantidade de caracteres.
SELECT nome, email
FROM clientes
WHERE nome LIKE 'A%';

-- _ representa exatamente um caractere.
SELECT nome
FROM clientes
WHERE nome LIKE '_na%';

-- 9. NULL exige IS NULL ou IS NOT NULL.
SELECT id_avaliacao, nota, comentario
FROM avaliacoes
WHERE comentario IS NOT NULL;

-- 10. Os filtros podem ser combinados com comandos ja estudados.
SELECT nome, preco, estoque
FROM produtos
WHERE ativo = 1
  AND estoque > 0
  AND preco BETWEEN 200 AND 3000
  AND id_categoria IN (1, 4)
ORDER BY preco DESC
LIMIT 5;
