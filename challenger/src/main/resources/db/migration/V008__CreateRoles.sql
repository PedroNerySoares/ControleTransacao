  CREATE TABLE `roles` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(45) NULL,
    PRIMARY KEY (`id`)
);

  CREATE TABLE usuarios_roles (
    usuario_id INT,
    role_id INT,
    createdAt date,
    FOREIGN KEY (usuario_id) REFERENCES usuario(id),
    FOREIGN KEY (role_id) REFERENCES roles(id)
);