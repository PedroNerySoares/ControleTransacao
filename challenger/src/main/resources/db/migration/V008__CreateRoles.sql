


  CREATE TABLE `roles` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(45) NULL,
    PRIMARY KEY (`id`)
);


  CREATE TABLE usuarios_roles (
    usuario_id INT,
    role_id INT,
    createdAt date,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (role_id) REFERENCES roles(id)
);


INSERT INTO `roles` (`nome`) VALUES ('admnistrador');
INSERT INTO `roles` (`nome`) VALUES ('usuário');
 insert into usuarios_roles
 values
    (1,1,curdate()),
 	(2,2,curdate()),
 	(3,2,curdate()),
 	(4,2,curdate()),
 	(5,2,curdate()),
 	(6,2,curdate()),
 	(7,2,curdate()),
 	(8,1,curdate())

