-- SQL do Zero ao Avancado | Trilha 02
-- Laboratorio seguro para criacao de estruturas

DROP DATABASE IF EXISTS levelup_lab;
CREATE DATABASE levelup_lab
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE levelup_lab;

SELECT DATABASE() AS banco_em_uso;

CREATE TABLE categorias (
  id_categoria INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(80) NOT NULL UNIQUE,
  ativa BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE produtos (
  id_produto INT PRIMARY KEY AUTO_INCREMENT,
  id_categoria INT NOT NULL,
  nome VARCHAR(120) NOT NULL,
  preco DECIMAL(10,2) NOT NULL,
  estoque INT NOT NULL DEFAULT 0,
  criado_em DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT chk_produtos_preco CHECK (preco >= 0),
  CONSTRAINT chk_produtos_estoque CHECK (estoque >= 0),
  CONSTRAINT fk_produtos_categorias
    FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria)
);

SHOW TABLES;
DESCRIBE categorias;
DESCRIBE produtos;
