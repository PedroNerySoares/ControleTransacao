ALTER TABLE usuarios_roles
ADD CONSTRAINT DF_usuarios_roles_createdAt DEFAULT (CONVERT(DATE, GETDATE())) FOR createdAt;