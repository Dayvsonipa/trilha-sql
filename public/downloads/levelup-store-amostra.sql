-- ==========================================================
-- ARQUIVO DE COMPATIBILIDADE
-- Este endereco antigo agora entrega o mesmo banco oficial
-- usado em todas as trilhas do curso.
-- Projeto: LevelUp Store
-- ATENCAO: este script recria o banco levelup_store.
-- Use-o apenas no ambiente de estudos.
-- ==========================================================

DROP DATABASE IF EXISTS levelup_store;
CREATE DATABASE levelup_store
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE levelup_store;

CREATE TABLE categorias (
  id_categoria INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(80) NOT NULL UNIQUE
);

CREATE TABLE clientes (
  id_cliente INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(120) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  cidade VARCHAR(80) NOT NULL,
  data_cadastro DATE NOT NULL
);

CREATE TABLE produtos (
  id_produto INT PRIMARY KEY AUTO_INCREMENT,
  id_categoria INT NOT NULL,
  nome VARCHAR(120) NOT NULL,
  preco DECIMAL(10,2) NOT NULL,
  estoque INT NOT NULL DEFAULT 0,
  ativo BOOLEAN NOT NULL DEFAULT TRUE,
  CONSTRAINT fk_produtos_categorias
    FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria)
);

CREATE TABLE pedidos (
  id_pedido INT PRIMARY KEY AUTO_INCREMENT,
  id_cliente INT NOT NULL,
  data_pedido DATETIME NOT NULL,
  status VARCHAR(30) NOT NULL,
  valor_total DECIMAL(10,2) NOT NULL,
  CONSTRAINT fk_pedidos_clientes
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
);

CREATE TABLE itens_pedido (
  id_item INT PRIMARY KEY AUTO_INCREMENT,
  id_pedido INT NOT NULL,
  id_produto INT NOT NULL,
  quantidade INT NOT NULL,
  preco_unitario DECIMAL(10,2) NOT NULL,
  CONSTRAINT fk_itens_pedidos
    FOREIGN KEY (id_pedido) REFERENCES pedidos(id_pedido),
  CONSTRAINT fk_itens_produtos
    FOREIGN KEY (id_produto) REFERENCES produtos(id_produto)
);

CREATE TABLE pagamentos (
  id_pagamento INT PRIMARY KEY AUTO_INCREMENT,
  id_pedido INT NOT NULL UNIQUE,
  forma_pagamento VARCHAR(40) NOT NULL,
  status VARCHAR(30) NOT NULL,
  data_pagamento DATETIME,
  CONSTRAINT fk_pagamentos_pedidos
    FOREIGN KEY (id_pedido) REFERENCES pedidos(id_pedido)
);

CREATE TABLE avaliacoes (
  id_avaliacao INT PRIMARY KEY AUTO_INCREMENT,
  id_cliente INT NOT NULL,
  id_produto INT NOT NULL,
  nota TINYINT NOT NULL,
  comentario VARCHAR(255),
  data_avaliacao DATE NOT NULL,
  CONSTRAINT chk_avaliacoes_nota CHECK (nota BETWEEN 1 AND 5),
  CONSTRAINT fk_avaliacoes_clientes
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente),
  CONSTRAINT fk_avaliacoes_produtos
    FOREIGN KEY (id_produto) REFERENCES produtos(id_produto)
);

INSERT INTO categorias (nome) VALUES
  ('Perifericos'), ('Hardware'), ('Consoles'), ('Monitores');

INSERT INTO clientes (nome, email, cidade, data_cadastro) VALUES
  ('Ana Souza', 'ana@exemplo.com', 'Sao Paulo', '2026-02-03'),
  ('Bruno Lima', 'bruno@exemplo.com', 'Campinas', '2026-02-12'),
  ('Carla Mendes', 'carla@exemplo.com', 'Santos', '2026-03-01'),
  ('Eduardo Nunes', 'eduardo@exemplo.com', 'Sao Paulo', '2026-03-15');

INSERT INTO produtos (id_categoria, nome, preco, estoque, ativo) VALUES
  (1, 'Mouse HyperX Pulsefire', 249.90, 18, TRUE),
  (1, 'Teclado Redragon Kumara', 319.00, 12, TRUE),
  (4, 'Monitor Odyssey G5', 2199.90, 6, TRUE),
  (3, 'Console PlayStation 5', 3799.00, 4, TRUE),
  (2, 'Notebook Legion Pro', 8499.90, 2, TRUE),
  (1, 'Headset Cloud Stinger', 289.90, 0, TRUE);

INSERT INTO pedidos (id_cliente, data_pedido, status, valor_total) VALUES
  (1, '2026-03-04 14:20:00', 'ENTREGUE', 568.90),
  (2, '2026-03-05 10:15:00', 'EM_TRANSPORTE', 2199.90),
  (3, '2026-03-06 18:40:00', 'PAGO', 3799.00);

INSERT INTO itens_pedido (id_pedido, id_produto, quantidade, preco_unitario) VALUES
  (1, 1, 1, 249.90), (1, 2, 1, 319.00),
  (2, 3, 1, 2199.90), (3, 4, 1, 3799.00);

INSERT INTO pagamentos (id_pedido, forma_pagamento, status, data_pagamento) VALUES
  (1, 'PIX', 'APROVADO', '2026-03-04 14:21:00'),
  (2, 'CARTAO', 'APROVADO', '2026-03-05 10:17:00'),
  (3, 'PIX', 'APROVADO', '2026-03-06 18:41:00');

INSERT INTO avaliacoes (id_cliente, id_produto, nota, comentario, data_avaliacao) VALUES
  (1, 1, 5, 'Resposta rapida e confortavel.', '2026-03-10'),
  (1, 2, 4, 'Otimo custo-beneficio.', '2026-03-10'),
  (2, 3, 5, 'Imagem excelente.', '2026-03-12');

SELECT 'LevelUp Store criada com sucesso!' AS mensagem;
SHOW TABLES;
