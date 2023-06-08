ALTER TABLE `arquivo` 
ADD COLUMN `dttrans` DATE NULL AFTER `dtimp`;

ALTER TABLE `usuario` 
ADD COLUMN `senha` VARCHAR(255) NULL AFTER `email`;

