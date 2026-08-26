-- SQL DO ZERO AO AVANCADO
-- Professor Dayvson
-- LevelUp Store: banco de amostra do prototipo

CREATE DATABASE IF NOT EXISTS levelup_store;
USE levelup_store;

CREATE TABLE categorias (
    id_categoria INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(80) NOT NULL UNIQUE,
    descricao VARCHAR(255)
);

CREATE TABLE produtos (
    id_produto INT PRIMARY KEY AUTO_INCREMENT,
    id_categoria INT NOT NULL,
    nome VARCHAR(120) NOT NULL,
    marca VARCHAR(80) NOT NULL,
    plataforma VARCHAR(40),
    preco DECIMAL(10,2) NOT NULL,
    custo DECIMAL(10,2) NOT NULL,
    estoque INT NOT NULL DEFAULT 0,
    data_lancamento DATE,
    ativo BOOLEAN NOT NULL DEFAULT TRUE,
    FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria)
);

INSERT INTO categorias (nome, descricao) VALUES
('Perifericos', 'Acessorios para computadores e consoles'),
('Consoles', 'Consoles e videogames'),
('Monitores', 'Monitores para jogos'),
('Notebooks', 'Notebooks de alto desempenho');

INSERT INTO produtos
(id_categoria, nome, marca, plataforma, preco, custo, estoque, data_lancamento, ativo)
VALUES
(1, 'Mouse HyperX Pulsefire', 'HyperX', 'PC', 249.90, 150.00, 18, '2024-03-12', TRUE),
(1, 'Teclado Redragon Kumara', 'Redragon', 'PC', 319.00, 205.00, 12, '2023-08-05', TRUE),
(2, 'Console PlayStation 5', 'Sony', 'PlayStation', 3799.00, 3150.00, 6, '2020-11-19', TRUE),
(3, 'Monitor Odyssey G5', 'Samsung', 'PC', 2199.90, 1640.00, 8, '2024-01-15', TRUE),
(4, 'Notebook Legion Pro', 'Lenovo', 'PC', 8499.90, 7030.00, 3, '2025-02-10', TRUE),
(1, 'Headset Cloud Stinger', 'HyperX', 'Multiplataforma', 299.90, 190.00, 0, '2022-06-20', TRUE);

SELECT nome, preco
FROM produtos;
