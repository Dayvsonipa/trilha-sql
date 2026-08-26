-- Trilha 00 | Exemplos comentados

-- 1. Escolhe o banco que recebera os proximos comandos.
USE levelup_store;

-- 2. Mostra qual banco esta selecionado nesta aba.
SELECT DATABASE() AS banco_em_uso;

-- 3. Lista as tabelas existentes no banco selecionado.
SHOW TABLES;

-- 4. Produz um resultado sem consultar uma tabela.
SELECT 'Ola, SQL!' AS mensagem;

-- 5. Mostra a estrutura de uma tabela.
DESCRIBE produtos;

-- 6. Primeira leitura de dados: limite reduzido para facilitar a observacao.
SELECT nome, preco
FROM produtos
LIMIT 3;
