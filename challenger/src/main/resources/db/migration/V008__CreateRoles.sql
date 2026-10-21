


  CREATE TABLE roles (
    id INT NOT NULL IDENTITY(1,1),
    nome VARCHAR(45) NULL,
    CONSTRAINT PK_roles PRIMARY KEY (id)
);


  CREATE TABLE usuarios_roles (
    usuario_id INT,
    role_id INT,
    createdAt date,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (role_id) REFERENCES roles(id)
);


INSERT INTO roles (nome) VALUES ('admnistrador');
INSERT INTO roles (nome) VALUES ('usuário');
 insert into usuarios_roles
 values
    (1,1,CAST(GETDATE() AS DATE)),
    (2,2,CAST(GETDATE() AS DATE)),
    (3,2,CAST(GETDATE() AS DATE)),
    (4,2,CAST(GETDATE() AS DATE)),
    (5,2,CAST(GETDATE() AS DATE)),
    (6,2,CAST(GETDATE() AS DATE)),
    (7,2,CAST(GETDATE() AS DATE)),
    (8,1,CAST(GETDATE() AS DATE));

