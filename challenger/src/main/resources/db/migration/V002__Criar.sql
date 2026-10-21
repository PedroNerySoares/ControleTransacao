CREATE TABLE arquivo (
  idarq INT NOT NULL IDENTITY(1,1),
  nmarq VARCHAR(255) NULL,
  nrtamarq DECIMAL(5,2) NULL,
  id_usuario Int not null,

  
  CONSTRAINT PK_arquivo PRIMARY KEY  (idarq));

CREATE TABLE transacao (
  id INT NOT NULL IDENTITY(1,1),
  bancoOrigem VARCHAR(45) NULL,
  agenciaOrigem CHAR(4) NULL,
  ContaOrigem CHAR(7) NULL,
  bancoDestino VARCHAR(45) NULL,
  agenciaDestino CHAR(4) NULL,
  ContaDestino CHAR(7) NULL,
  valorTransacao DECIMAL(10,2) NULL,
  dataHoraTransacao DATE NULL,
  arquivo_idarq INT ,
  CONSTRAINT PK_transacao PRIMARY KEY  (ID));

  
CREATE TABLE usuarios (
    id int IDENTITY(1,1) CONSTRAINT PK_usuarios PRIMARY KEY ,
    usuario VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    status CHAR(1) DEFAULT 'S' CHECK (status IN ('S', 'N')),

    primeiroNome VARCHAR(100),
    ultimoNome VARCHAR(100),
    cpf VARCHAR(14),
    dataNascimento DATE,
    sexo CHAR(1),

    cep VARCHAR(9),
    bairro VARCHAR(100),
    complemento VARCHAR(100),
    estado VARCHAR(2),
    rua VARCHAR(150),
    numero VARCHAR(20),
    municipio VARCHAR(100)
);

  CREATE UNIQUE INDEX UX_usuarios_cpf
    ON usuarios (cpf)
    WHERE cpf IS NOT NULL AND cpf <> '';
