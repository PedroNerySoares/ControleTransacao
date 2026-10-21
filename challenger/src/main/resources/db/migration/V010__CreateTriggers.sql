
CREATE OR ALTER TRIGGER after_update_usuario
ON dbo.usuarios
AFTER UPDATE
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @transacao_id VARCHAR(36) = CONVERT(VARCHAR(36), NEWID());

    INSERT INTO dbo.hiusuario (
        usuario_id,
        campo_modificado,
        valor_antigo,
        valor_novo,
        atualizado_em,
        transacao_id
    )
    SELECT
        i.id,
        c.campo_modificado,
        c.valor_antigo,
        c.valor_novo,
        GETDATE(),
        @transacao_id
    FROM inserted AS i
    INNER JOIN deleted AS d
        ON d.id = i.id
    CROSS APPLY (
        VALUES
        (
            'senha',
            CONVERT(VARCHAR(MAX), d.senha),
            CONVERT(VARCHAR(MAX), i.senha),
            CASE
                WHEN i.senha <> d.senha
                  OR (i.senha IS NULL AND d.senha IS NOT NULL)
                  OR (i.senha IS NOT NULL AND d.senha IS NULL)
                THEN 1 ELSE 0
            END
        ),
        (
            'primeiroNome',
            CONVERT(VARCHAR(MAX), d.primeiroNome),
            CONVERT(VARCHAR(MAX), i.primeiroNome),
            CASE
                WHEN i.primeiroNome <> d.primeiroNome
                  OR (i.primeiroNome IS NULL AND d.primeiroNome IS NOT NULL)
                  OR (i.primeiroNome IS NOT NULL AND d.primeiroNome IS NULL)
                THEN 1 ELSE 0
            END
        ),
        (
            'ultimoNome',
            CONVERT(VARCHAR(MAX), d.ultimoNome),
            CONVERT(VARCHAR(MAX), i.ultimoNome),
            CASE
                WHEN i.ultimoNome <> d.ultimoNome
                  OR (i.ultimoNome IS NULL AND d.ultimoNome IS NOT NULL)
                  OR (i.ultimoNome IS NOT NULL AND d.ultimoNome IS NULL)
                THEN 1 ELSE 0
            END
        ),
        (
            'dataNascimento',
            CONVERT(VARCHAR(MAX), d.dataNascimento, 121),
            CONVERT(VARCHAR(MAX), i.dataNascimento, 121),
            CASE
                WHEN i.dataNascimento <> d.dataNascimento
                  OR (i.dataNascimento IS NULL AND d.dataNascimento IS NOT NULL)
                  OR (i.dataNascimento IS NOT NULL AND d.dataNascimento IS NULL)
                THEN 1 ELSE 0
            END
        ),
        (
            'CPF',
            CONVERT(VARCHAR(MAX), d.CPF),
            CONVERT(VARCHAR(MAX), i.CPF),
            CASE
                WHEN i.CPF <> d.CPF
                  OR (i.CPF IS NULL AND d.CPF IS NOT NULL)
                  OR (i.CPF IS NOT NULL AND d.CPF IS NULL)
                THEN 1 ELSE 0
            END
        ),
        (
            'status',
            CONVERT(VARCHAR(MAX), d.status),
            CONVERT(VARCHAR(MAX), i.status),
            CASE
                WHEN i.status <> d.status
                  OR (i.status IS NULL AND d.status IS NOT NULL)
                  OR (i.status IS NOT NULL AND d.status IS NULL)
                THEN 1 ELSE 0
            END
        ),
        (
            'sexo',
            CONVERT(VARCHAR(MAX), d.sexo),
            CONVERT(VARCHAR(MAX), i.sexo),
            CASE
                WHEN i.sexo <> d.sexo
                  OR (i.sexo IS NULL AND d.sexo IS NOT NULL)
                  OR (i.sexo IS NOT NULL AND d.sexo IS NULL)
                THEN 1 ELSE 0
            END
        )
    ) AS c (
        campo_modificado,
        valor_antigo,
        valor_novo,
        foi_alterado
    )
    WHERE c.foi_alterado = 1;
END;
