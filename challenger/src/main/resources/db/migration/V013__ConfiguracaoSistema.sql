CREATE TABLE CONFIGURACAO_SISTEMA (
    ID INT IDENTITY(1,1) PRIMARY KEY,
    CHAVE VARCHAR(100) NOT NULL UNIQUE,
    VALOR VARCHAR(255) NOT NULL,
    DESCRICAO VARCHAR(255),
    DATA_ATUALIZACAO DATETIME2
);

insert into CONFIGURACAO_SISTEMA (CHAVE,VALOR,DESCRICAO)
VALUES  ('#TRANSACAO_SUSPEITA','10000','Transações com valores acima do valor parametrizado, serão considerado como suspeitas'),
        ('#AGENCIA_SUSPEITA','100000','Agencia valores acima do valor parametrizado, serão considerado como suspeitas'),
        ('#CONTA_SUSPEITA','5000','Contas valores acima do valor parametrizado, serão considerado como suspeitas')