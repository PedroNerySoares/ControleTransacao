ALTER TABLE banco
ADD [status] BIT NOT NULL
    CONSTRAINT DF_banco_status DEFAULT 0;
go

update a
   set a.[status]=1
  from banco a
 where a.numeroBanco in(
                        '001','033',
                        '079','260',
                        '237','479',
                        '104')
