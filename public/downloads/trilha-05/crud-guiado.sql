-- ==========================================================
-- SQL do Zero ao Avancado | Trilha 05
-- Manipulando dados | Exemplos guiados
-- Projeto: LevelUp Store
-- ==========================================================

USE levelup_store;

-- 1. CREATE: inserir uma linha.
-- O id_categoria e gerado automaticamente.
INSERT INTO categorias (nome)
VALUES ('Iluminacao RGB');

-- Confira o resultado da insercao.
SELECT *
FROM categorias
WHERE nome = 'Iluminacao RGB';

-- 2. Inserir varias linhas no mesmo comando.
INSERT INTO categorias (nome)
VALUES
  ('Realidade Virtual'),
  ('Streaming');

-- 3. Inserir uma linha informando varias colunas.
INSERT INTO clientes
  (nome, email, cidade, data_cadastro)
VALUES
  ('Diego Martins', 'diego@exemplo.com', 'Ipatinga', '2026-08-25');

-- 4. Rotina segura para UPDATE:
-- primeiro localize, depois altere, por fim valide.
SELECT id_produto, nome, estoque
FROM produtos
WHERE id_produto = 6;

UPDATE produtos
SET estoque = 10
WHERE id_produto = 6;

SELECT id_produto, nome, estoque
FROM produtos
WHERE id_produto = 6;

-- 5. Alterar mais de uma coluna.
UPDATE produtos
SET preco = 279.90,
    estoque = 15
WHERE id_produto = 1;

-- 6. Rotina segura para DELETE.
SELECT id_cliente, nome, email
FROM clientes
WHERE email = 'diego@exemplo.com';

DELETE FROM clientes
WHERE email = 'diego@exemplo.com';

SELECT id_cliente, nome, email
FROM clientes
WHERE email = 'diego@exemplo.com';

-- 7. Simulacao com transacao.
-- ROLLBACK desfaz as mudancas ainda nao confirmadas.
START TRANSACTION;

SELECT id_produto, nome, preco
FROM produtos
WHERE id_categoria = 1
  AND ativo = 1
  AND estoque > 0;

UPDATE produtos
SET preco = preco * 0.90
WHERE id_categoria = 1
  AND ativo = 1
  AND estoque > 0;

SELECT id_produto, nome, preco
FROM produtos
WHERE id_categoria = 1
  AND ativo = 1
  AND estoque > 0;

ROLLBACK;

-- Para tornar uma transacao definitiva, use COMMIT no lugar de ROLLBACK.
