CREATE TABLE `hiusuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario_id` int NOT NULL,
  `campo_modificado` varchar(100) DEFAULT NULL,
  `valor_antigo` text,
  `valor_novo` text,
  `atualizado_em` datetime DEFAULT CURRENT_TIMESTAMP,
  `transacao_id` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DELIMITER $$

CREATE TRIGGER after_update_usuario
AFTER UPDATE ON usuarios
FOR EACH ROW
BEGIN
    DECLARE trx_id VARCHAR(36);
    SET trx_id = (SELECT UUID());

    IF NOT OLD.senha <=> NEW.senha THEN
        INSERT INTO hiusuario (usuario_id, campo_modificado, valor_antigo, valor_novo, atualizado_em, transacao_id)
        VALUES (OLD.id, 'senha', OLD.senha, NEW.senha, NOW(), trx_id);
    END IF;

    IF NOT OLD.primeiroNome <=> NEW.primeiroNome THEN
        INSERT INTO hiusuario (usuario_id, campo_modificado, valor_antigo, valor_novo, atualizado_em, transacao_id)
        VALUES (OLD.id, 'primeiroNome', OLD.primeiroNome, NEW.primeiroNome, NOW(), trx_id);
    END IF;

    IF NOT OLD.ultimoNome <=> NEW.ultimoNome THEN
        INSERT INTO hiusuario (usuario_id, campo_modificado, valor_antigo, valor_novo, atualizado_em, transacao_id)
        VALUES (OLD.id, 'ultimoNome', OLD.ultimoNome, NEW.ultimoNome, NOW(), trx_id);
    END IF;

    IF NOT OLD.dataNascimento <=> NEW.dataNascimento THEN
        INSERT INTO hiusuario (usuario_id, campo_modificado, valor_antigo, valor_novo, atualizado_em, transacao_id)
        VALUES (OLD.id, 'dataNascimento', OLD.dataNascimento, NEW.dataNascimento, NOW(), trx_id);
    END IF;

    IF NOT OLD.CPF <=> NEW.CPF THEN
        INSERT INTO hiusuario (usuario_id, campo_modificado, valor_antigo, valor_novo, atualizado_em, transacao_id)
        VALUES (OLD.id, 'CPF', OLD.CPF, NEW.CPF, NOW(), trx_id);
    END IF;

    IF NOT OLD.status <=> NEW.status THEN
        INSERT INTO hiusuario (usuario_id, campo_modificado, valor_antigo, valor_novo, atualizado_em, transacao_id)
        VALUES (OLD.id, 'status', OLD.status, NEW.status, NOW(), trx_id);
    END IF;

    IF NOT OLD.sexo <=> NEW.sexo THEN
        INSERT INTO hiusuario (usuario_id, campo_modificado, valor_antigo, valor_novo, atualizado_em, transacao_id)
        VALUES (OLD.id, 'sexo', OLD.sexo, NEW.sexo, NOW(), trx_id);
    END IF;

END