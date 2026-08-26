-- BOSS FINAL | LEVELUP CHAMPIONSHIPS
-- Complete as estruturas abaixo.

USE levelup_lab;

-- REGRAS
-- 1. Um jogo pode ter varios campeonatos.
-- 2. Um campeonato pertence a um jogo.
-- 3. Clientes se inscrevem em campeonatos.
-- 4. O mesmo cliente nao pode se inscrever duas vezes no mesmo campeonato.
-- 5. Premio nao pode ser negativo.

-- TABELA jogos
-- Colunas sugeridas: id_jogo, nome, genero, ativo.


-- TABELA campeonatos
-- Colunas sugeridas: id_campeonato, id_jogo, nome, data_inicio,
-- data_fim, premio, status.


-- TABELA inscricoes
-- Colunas sugeridas: id_inscricao, id_campeonato, id_cliente,
-- nickname, data_inscricao.
-- Neste laboratorio, voce pode criar uma tabela clientes simplificada
-- ou adaptar a FK quando integrar ao banco principal.


-- VALIDACAO
SHOW TABLES;
