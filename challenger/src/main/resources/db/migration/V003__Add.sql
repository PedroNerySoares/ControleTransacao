ALTER TABLE `challenger`.`arquivo` 
ADD COLUMN `dttrans` DATE NULL AFTER `dtimp`;

ALTER TABLE `challenger`.`usuario` 
ADD COLUMN `senha` VARCHAR(255) NULL AFTER `email`;

