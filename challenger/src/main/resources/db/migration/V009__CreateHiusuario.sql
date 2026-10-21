CREATE TABLE hiusuario (
  id INT NOT NULL IDENTITY(1,1),
  usuario_id INT NOT NULL,
  campo_modificado VARCHAR(100) NULL,
  valor_antigo VARCHAR(MAX) NULL,
  valor_novo VARCHAR(MAX) NULL,
  atualizado_em DATETIME DEFAULT GETDATE(),
  transacao_id VARCHAR(36) NULL,
  CONSTRAINT PK_hiusuario PRIMARY KEY (id)
);