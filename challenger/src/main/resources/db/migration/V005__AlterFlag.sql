ALTER TABLE `challenger`.`usuario` 
ADD COLUMN `status` ENUM('S', 'N') NULL DEFAULT 'S' AFTER `senha`;
