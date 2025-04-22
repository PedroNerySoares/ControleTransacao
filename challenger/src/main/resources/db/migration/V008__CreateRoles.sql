
  ALTER TABLE `transacao`.`usuario`
  ADD COLUMN `primeiroNome` VARCHAR(45) NULL AFTER `senha`,
  ADD COLUMN `ultimoNome` VARCHAR(45) NULL AFTER `primeiroNome`,
  ADD COLUMN `dateNascimento` VARCHAR(45) NULL AFTER `ultimoNome`,
  ADD COLUMN `CPF` VARCHAR(45) NULL AFTER `dateNascimento`,
  ADD COLUMN `sexo` VARCHAR(45) NULL AFTER `CPF`;




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

