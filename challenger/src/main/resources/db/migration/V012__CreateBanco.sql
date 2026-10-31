
CREATE TABLE [dbo].[banco](
	[numeroBanco] [char](3) NOT NULL,
	[ISPB] [char](8) NOT NULL,
	[cnpj] [char](14) NOT NULL,
	[nomeLongo] [nvarchar](150) NOT NULL,
	[nomeCurto] [nvarchar](100) NOT NULL,
	[LogoUrl] [nvarchar](100) NULL,
 CONSTRAINT [PK_banco] PRIMARY KEY CLUSTERED
(
	[numeroBanco] ASC,
	[ISPB] ASC,
	[cnpj] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]



 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'001', N'00000000', N'00000000000191', N'Banco do Brasil S.A.', N'BCO DO BRASIL S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/00000000.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'003', N'04902979', N'04902979000144', N'Banco da Amazônia S.A.', N'BCO DA AMAZONIA S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/04902979.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'004', N'07237373', N'07237373000120', N'Banco do Nordeste do Brasil S.A.', N'BCO DO NORDESTE DO BRASIL S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/07237373.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'007', N'33657248', N'33657248000189', N'BANCO NACIONAL DE DESENVOLVIMENTO ECONOMICO E SOCIAL', N'BNDES', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/33657248.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'010', N'81723108', N'81723108000104', N'CREDICOAMO CREDITO RURAL COOPERATIVA', N'CREDICOAMO', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'011', N'61809182', N'61809182000130', N'UBS (BRASIL) CORRETORA DE VALORES S.A.', N'UBS (BRASIL) CORRETORA DE VALORES S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/png/61809182.png')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'012', N'04866275', N'04866275000163', N'Banco Inbursa S.A.', N'BANCO INBURSA', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'014', N'09274232', N'09274232000102', N'STATE STREET BRASIL S.A. - BANCO COMERCIAL', N'STATE STREET BR S.A. BCO COMERCIAL', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/png/09274232.png')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'015', N'02819125', N'02819125000173', N'UBS BB CORRETORA DE CÂMBIO TÍTUlogos E VALORES MOBILIÁRIOS S.A.', N'UBS BB CCTVM S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/png/02819125.png')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'016', N'04715685', N'04715685000103', N'COOPERATIVA DE CRÉDITO MÚTUO DOS DESPACHANTES DE TRÂNSITO DE SANTA CATARINA E RIO GRANDE DO SUL - SICOOB CREDITRAN', N'CCM DESP TRÂNS SC E RS', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/04891850.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'017', N'42272526', N'42272526000170', N'BNY Mellon Banco S.A.', N'BNY MELLON BCO S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/png/42272526.png')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'018', N'57839805', N'57839805000140', N'Banco Tricury S.A.', N'BCO TRICURY S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'021', N'28127603', N'28127603000178', N'BANESTES S.A. Banco do Estado do Espírito Santo', N'BCO BANESTES S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/28127603.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'023', N'53720128', N'53720128000196', N'CONTA SIMPLES SOCIEDADE DE CRÉDITO DIRETO S.A.', N'CONTA SIMPLES SCD S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'024', N'10866788', N'10866788000177', N'Banco Bandepe S.A.', N'BCO BANDEPE S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'025', N'03323840', N'03323840000183', N'Banco Alfa S.A.', N'BCO ALFA S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/03323840.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'029', N'33885724', N'33885724000119', N'Banco Itaú Consignado S.A.', N'BANCO ITAÚ CONSIGNADO S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'033', N'90400888', N'90400888000142', N'BANCO SANTANDER (BRASIL) S.A.', N'BCO SANTANDER (BRASIL) S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/90400888.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'036', N'06271464', N'06271464000119', N'Banco Bradesco BBI S.A.', N'BCO BBI S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/06271464.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'037', N'04913711', N'04913711000108', N'Banco do Estado do Pará S.A.', N'BCO DO EST. DO PA S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/04913711.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'040', N'03609817', N'03609817000150', N'Banco Cargill S.A.', N'BCO CARGILL S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/png/03609817.png')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'041', N'92702067', N'92702067000196', N'Banco do Estado do Rio Grande do Sul S.A.', N'BCO DO ESTADO DO RS S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/92702067.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'047', N'13009717', N'13009717000146', N'Banco do Estado de Sergipe S.A.', N'BCO DO EST. DE SE S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/13009717.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'060', N'04913129', N'04913129000141', N'CONFIDENCE SOCIEDADE CORRETORA DE CAMBIO S.A.', N'CONFIDENCE CC S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'062', N'03012230', N'03012230000169', N'Hipercard Banco Múltiplo S.A.', N'HIPERCARD BM S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'063', N'04184779', N'04184779000101', N'Banco Bradescard S.A.', N'BANCO BRADESCARD', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/04184779.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'064', N'04332281', N'04332281000130', N'ldman Sachs do Brasil Banco Múltiplo S.A.', N'LDMAN SACHS DO BRASIL BM S.A', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/png/04332281.png')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'065', N'48795256', N'48795256000169', N'Banco AndBank (Brasil) S.A.', N'BCO ANDBANK S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'066', N'02801938', N'02801938000136', N'BANCO MORGAN STANLEY S.A.', N'BCO MORGAN STANLEY S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/png/02801938.png')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'069', N'61033106', N'61033106000186', N'Banco Crefisa S.A.', N'BCO CREFISA S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/61033106.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'070', N'00000208', N'00000208000100', N'BRB - Banco de Brasília S.A.', N'BRB - BCO DE BRASILIA S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/00000208.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'074', N'03017677', N'03017677000120', N'Banco J. Safra S.A.', N'BCO. J.SAFRA S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/03017677.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'075', N'03532415', N'03532415000102', N'BANCO ABN AMRO CLEARING S.A.', N'BANCO ABN AMRO CLEARING S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'076', N'07656500', N'07656500000125', N'Banco KDB do Brasil S.A.', N'BCO KDB BRASIL S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'077', N'00416968', N'00416968000101', N'Banco Inter S.A.', N'BANCO INTER', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/00416968.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'078', N'34111187', N'34111187000112', N'Haitong Banco de Investimento do Brasil S.A.', N'HAITONG BI DO BRASIL S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'079', N'09516419', N'09516419000175', N'PICPAY BANK - BANCO MÚLTIPLO S.A', N'PICPAY BANK - BANCO MÚLTIPLO S.A', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/09516419.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'080', N'73622748', N'73622748000108', N'BT CORRETORA DE CÂMBIO LTDA.', N'BT CC LTDA.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'081', N'10264663', N'10264663000177', N'bancoeguro S.A.', N'bancoEGURO S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'082', N'07679404', N'07679404000100', N'BANCO TOPÁZIO S.A.', N'BANCO TOPÁZIO S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'083', N'10690848', N'10690848000143', N'Banco da China Brasil S.A.', N'BCO DA CHINA BRASIL S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'084', N'02398976', N'02398976000190', N'SISPRIME DO BRASIL - COOPERATIVA DE CRÉDITO', N'SISPRIME DO BRASIL - COOP', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/02398976.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'085', N'05463212', N'05463212000129', N'Cooperativa Central de Crédito - Ailogos', N'COOPCENTRAL AIlogos', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/05463212.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'088', N'11476673', N'11476673000139', N'BANCO RANDON S.A.', N'BANCO RANDON S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'089', N'62109566', N'62109566000103', N'CREDISAN COOPERATIVA DE CRÉDITO', N'CREDISAN CC', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'091', N'01634601', N'01634601000119', N'CENTRAL DE COOPERATIVAS DE ECONOMIA E CRÉDITO MÚTUO DO ESTADO DO RIO GRANDE DO S', N'CCCM UNICRED CENTRAL RS', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'092', N'12865507', N'12865507000197', N'BRK S.A. Crédito Financiamento e Investimento', N'BRK S.A. CFI', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'093', N'07945233', N'07945233000106', N'PÓLOCRED   SOCIEDADE DE CRÉDITO AO MICROEMPREENDEDOR E À EMPRESA DE PEQUENO PORTE LTDA.', N'POLOCRED SCMEPP LTDA.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'094', N'11758741', N'11758741000152', N'Banco Finaxis S.A.', N'BANCO FINAXIS', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'095', N'11703662', N'11703662000144', N'BANCO TRAVELEX S.A.', N'BANCO TRAVELEX S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'096', N'00997185', N'00997185000150', N'Banco B3 S.A.', N'BCO B3 S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'097', N'04632856', N'04632856000130', N'CREDISIS - CENTRAL DE COOPERATIVAS DE CRÉDITO', N'CREDISIS - CENTRAL DE COOPERATIVAS DE CRÉDITO', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'098', N'78157146', N'78157146000132', N'Credialiança Cooperativa de Crédito Rural', N'CREDIALIANÇA CCR', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'099', N'03046391', N'03046391000173', N'UNIPRIME CENTRAL NACIONAL - CENTRAL NACIONAL DE COOPERATIVA DE CREDITO', N'UNIPRIME COOPCENTRAL LTDA.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'100', N'00806535', N'00806535000154', N'Planner Corretora de Valores S.A.', N'PLANNER CV S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/png/00806535.png')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'101', N'62287735', N'62287735000103', N'WARREN RENA DISTRIBUIDORA DE TÍTUlogos E VALORES MOBILIÁRIOS LTDA', N'WARREN RENA DTVM', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/png/62287735.png')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'102', N'02332886', N'02332886000104', N'XP INVESTIMENTOS CORRETORA DE CÂMBIOTÍTUlogos E VALORES MOBILIÁRIOS S/A', N'XP INVESTIMENTOS CCTVM S/A', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/02332886.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'104', N'00360305', N'00360305000104', N'Caixa Econômica Federal', N'CAIXA ECONOMICA FEDERAL', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/00360305.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'105', N'07652226', N'07652226000116', N'Lecca Crédito Financiamento e Investimento S/A', N'LECCA CFI S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/png/07652226.png')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'107', N'15114366', N'15114366000169', N'Banco Bocom BBM S.A.', N'BCO BOCOM BBM S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/png/15114366.png')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'108', N'01800019', N'01800019000185', N'PORTOCRED S.A. - CREDITO FINANCIAMENTO E INVESTIMENTO', N'PORTOCRED S.A. - CFI', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'111', N'36113876', N'36113876000191', N'OLIVEIRA TRUST DISTRIBUIDORA DE TÍTUlogos E VALORES MOBILIARIOS S.A.', N'OLIVEIRA TRUST DTVM S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/png/36113876.png')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'113', N'61723847', N'61723847000199', N'NEON CORRETORA DE TÍTUlogos E VALORES MOBILIÁRIOS S.A.', N'NEON CTVM S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/61723847.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'114', N'05790149', N'05790149000135', N'Central Cooperativa de Crédito no Estado do Espírito Santo - CECOOP', N'CENTRAL COOPERATIVA DE CRÉDITO NO ESTADO DO ESPÍRITO SANTO', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'117', N'92856905', N'92856905000186', N'ADVANCED CORRETORA DE CÂMBIO LTDA - EM LIQUIDAÇÃO EXTRAJUDICIAL', N'ADVANCED CC LTDA - EM LIQUIDAÇÃO EXTRAJUDICIAL', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'119', N'13720915', N'13720915000113', N'Banco Western Union do Brasil S.A.', N'BCO WESTERN UNION', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/13720915.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'120', N'33603457', N'33603457000140', N'BANCO RODOBENS S.A.', N'BCO RODOBENS S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/png/33603457.png')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'121', N'10664513', N'10664513000150', N'Banco Agibank S.A.', N'BCO AGIBANK S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/10664513.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'122', N'33147315', N'33147315000115', N'Banco Bradesco BERJ S.A.', N'BCO BRADESCO BERJ S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/33147315.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'124', N'15357060', N'15357060000133', N'Banco Woori Bank do Brasil S.A.', N'BCO WOORI BANK DO BRASIL S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'125', N'45246410', N'45246410000155', N'BANCO GENIAL S.A.', N'BANCO GENIAL', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/45246410.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'126', N'13220493', N'13220493000117', N'BR Partners Banco de Investimento S.A.', N'BR PARTNERS BI', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'127', N'09512542', N'09512542000118', N'Codepe Corretora de Valores e Câmbio S.A.', N'CODEPE CVC S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'128', N'19307785', N'19307785000178', N'BRAZA BANK S.A. BANCO DE CÂMBIO', N'BRAZA BANK S.A. BCO DE CÂMBIO', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'129', N'18520834', N'18520834000193', N'UBS BB BANCO DE INVESTIMENTO S.A.', N'UBS BB BI S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/png/18520834.png')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'130', N'09313766', N'09313766000109', N'CARUANA S.A. - SOCIEDADE DE CRÉDITO FINANCIAMENTO E INVESTIMENTO', N'CARUANA SCFI', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'131', N'61747085', N'61747085000160', N'TULLETT PREBON BRASIL CORRETORA DE VALORES E CÂMBIO LTDA', N'TULLETT PREBON BRASIL CVC LTDA', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'132', N'17453575', N'17453575000162', N'ICBC do Brasil Banco Múltiplo S.A.', N'ICBC DO BRASIL BM S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'133', N'10398952', N'10398952000169', N'CONFEDERAÇÃO NACIONAL DAS COOPERATIVAS CENTRAIS DE CRÉDITO E ECONOMIA FAMILIAR E SOLIDÁRIA - CRESOL CONFEDERAÇÃO', N'CRESOL CONFEDERAÇÃO', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/10398952.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'134', N'33862244', N'33862244000132', N'BGC LIQUIDEZ DISTRIBUIDORA DE TÍTUlogos E VALORES MOBILIÁRIOS LTDA', N'BGC LIQUIDEZ DTVM LTDA', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'136', N'00315557', N'00315557000111', N'COOPERATIVA CENTRAL DE CRÉDITO UNICRED DO BRASIL - UNICRED DO BRASIL', N'UNICRED DO BRASIL', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/00315557.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'138', N'10853017', N'10853017000145', N'GET MONEY SOCIEDADE CORRETORA DE CÂMBIO S.A.', N'GET MONEY CC LTDA.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'139', N'55230916', N'55230916000120', N'Intesa Sanpaolo Brasil S.A. - Banco Múltiplo', N'INTESA SANPAOLO BRASIL S.A. BM', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'140', N'62169875', N'62169875000179', N'NU INVESTIMENTOS S.A. - CORRETORA DE TÍTUlogos E VALORES MOBILIÁRIOS', N'NU INVESTIMENTOS S.A. - CTVM', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/62169875.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'141', N'09526594', N'09526594000143', N'BANCO MASTER DE INVESTIMENTO S.A. - EM LIQUIDAÇÃO EXTRAJUDICIAL', N'MASTER BI S.A. - EM LIQUIDAÇÃO EXTRAJUDICIAL', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'142', N'16944141', N'16944141000100', N'Broker Brasil Corretora de Câmbio Ltda.', N'BROKER BRASIL CC LTDA.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'143', N'02992317', N'02992317000187', N'INTEX BANK BANCO DE CÂMBIO S.A.', N'INTEX BANK BCO DE CÂMBIO S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/png/02992317.png')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'144', N'13059145', N'13059145000100', N'EBURY BANCO DE CÂMBIO S.A.', N'EBURY BCO DE CÂMBIO S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/png/13059145.png')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'145', N'50579044', N'50579044000196', N'LEVYCAM - CORRETORA DE CAMBIO E VALORES LTDA.', N'LEVYCAM CCV LTDA', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'146', N'24074692', N'24074692000180', N'GUITTA CORRETORA DE CAMBIO LTDA.', N'GUITTA CC LTDA', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'149', N'15581638', N'15581638000130', N'Facta Financeira S.A. - Crédito Financiamento e Investimento', N'FACTA S.A. CFI', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'157', N'09105360', N'09105360000122', N'ICAP do Brasil Corretora de Títulogos e Valores Mobiliários Ltda.', N'ICAP DO BRASIL CTVM LTDA.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'159', N'05442029', N'05442029000147', N'Casa do Crédito S.A. Sociedade de Crédito ao Microempreendedor', N'CASA CREDITO S.A. SCM', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'163', N'23522214', N'23522214000123', N'Commerzbank Brasil S.A. - Banco Múltiplo', N'COMMERZBANK BRASIL S.A. - BCO MÚLTIPLO', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'173', N'13486793', N'13486793000142', N'APEX GROUP DISTRIBUIDORA DE TÍTUlogos E VALORES MOBILIÁRIOS S.A.', N'APEX GROUP DTVM', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'174', N'43180355', N'43180355000112', N'PEFISA S.A. - CRÉDITO FINANCIAMENTO E INVESTIMENTO', N'PEFISA S.A. - C.F.I.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/43180355.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'177', N'65913436', N'65913436000117', N'SAFRA ASSET CORRETORA DE TÍTUlogos E VALORES MOBILIÁRIOS S.A.', N'SAFRA CTVM', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'180', N'02685483', N'02685483000130', N'CM CAPITAL MARKETS CORRETORA DE CÂMBIO TÍTUlogos E VALORES MOBILIÁRIOS LTDA', N'CM CAPITAL MARKETS CCTVM LTDA', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'183', N'09210106', N'09210106000194', N'SOCRED S.A. - SOCIEDADE DE CRÉDITO AO MICROEMPREENDEDOR E À EMPRESA DE PEQUENO PORTE', N'SOCRED SA - SCMEPP', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'184', N'17298092', N'17298092000130', N'Banco Itaú BBA S.A.', N'BCO ITAÚ BBA S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'188', N'33775974', N'33775974000104', N'ATIVA INVESTIMENTOS S.A. CORRETORA DE TÍTUlogos CÂMBIO E VALORES', N'ATIVA S.A. INVESTIMENTOS CCTVM', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'189', N'07512441', N'07512441000111', N'HS FINANCEIRA S/A CREDITO FINANCIAMENTO E INVESTIMENTOS', N'HS FINANCEIRA', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'190', N'03973814', N'03973814000109', N'SERVICOOP - COOPERATIVA DE CRÉDITO DOS SERVIDORES PÚBLICOS ESTADUAIS E MUNICIPAIS DO RIO GRANDE DO SUL', N'SERVICOOP', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'191', N'04257795', N'04257795000179', N'Nova Futura Corretora de Títulogos e Valores Mobiliários Ltda.', N'NOVA FUTURA CTVM LTDA.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'194', N'20155248', N'20155248000139', N'UNIDA DISTRIBUIDORA DE TÍTUlogos E VALORES MOBILIÁRIOS LTDA.', N'UNIDA DTVM LTDA', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'195', N'07799277', N'07799277000175', N'VALOR S/A SOCIEDADE DE CRÉDITO FINANCIAMENTO E INVESTIMENTO', N'VALOR S/A SCFI', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'196', N'32648370', N'32648370000126', N'FAIR SOCIEDADE CORRETORA DE CÂMBIO S.A.', N'FAIR SOCIEDADE CC', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'197', N'16501555', N'16501555000157', N'STONE INSTITUIÇÃO DE PAGAMENTO S.A.', N'STONE IP S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/16501555.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'208', N'30306294', N'30306294000145', N'Banco BTG Pactual S.A.', N'BANCO BTG PACTUAL S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/30306294.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'212', N'92894922', N'92894922000108', N'Banco Original S.A.', N'BANCO ORIGINAL', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/92894922.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'213', N'54403563', N'54403563000150', N'Banco Arbi S.A.', N'BCO ARBI S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/54403563.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'217', N'91884981', N'91884981000132', N'Banco John Deere S.A.', N'BANCO JOHN DEERE S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/png/91884981.png')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'218', N'71027866', N'71027866000134', N'Banco BS2 S.A.', N'BCO BS2 S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/png/71027866.png')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'222', N'75647891', N'75647891000171', N'BANCO CRÉDIT AGRICOLE BRASIL S.A.', N'BCO CRÉDIT AGRICOLE BR S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/png/75647891.png')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'224', N'58616418', N'58616418000108', N'Banco Fibra S.A.', N'BCO FIBRA S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/png/58616418.png')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'233', N'62421979', N'62421979000129', N'BANCO BMG SOLUÇÕES FINANCEIRAS S.A.', N'BANCO BMG SOLUÇÕES FINANCEIRAS S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/62421979.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'237', N'60746948', N'60746948000112', N'Banco Bradesco S.A.', N'BCO BRADESCO S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/60746948.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'241', N'31597552', N'31597552000152', N'BANCO CLASSICO S.A.', N'BCO CLASSICO S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'243', N'33923798', N'33923798000100', N'BANCO MASTER S/A - EM LIQUIDAÇÃO EXTRAJUDICIAL', N'BANCO MASTER - EM LIQUIDAÇÃO EXTRAJUDICIAL', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'246', N'28195667', N'28195667000106', N'Banco ABC Brasil S.A.', N'BCO ABC BRASIL S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/28195667.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'249', N'61182408', N'61182408000116', N'Banco Investcred Unibanco S.A.', N'BANCO INVESTCRED UNIBANCO S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'250', N'50585090', N'50585090000106', N'BANCO BMG CONSIGNADO S.A.', N'BANCO BMG CONSIGNADO S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/50585090.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'253', N'52937216', N'52937216000181', N'Bexs Corretora de Câmbio S/A', N'BEXS CC S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'254', N'14388334', N'14388334000199', N'PARANÁ BANCO S.A.', N'PARANA BCO S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/png/14388334.png')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'259', N'08609934', N'08609934000137', N'MONEYCORP BANCO DE CÂMBIO S.A.', N'MONEYCORP BCO DE CÂMBIO S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'260', N'18236120', N'18236120000158', N'NU PAGAMENTOS S.A. - INSTITUIÇÃO DE PAGAMENTO', N'NU PAGAMENTOS - IP', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/18236120.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'265', N'33644196', N'33644196000106', N'Banco Fator S.A.', N'BCO FATOR S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/png/33644196.png')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'266', N'33132044', N'33132044000124', N'BANCO CEDULA S.A.', N'BCO CEDULA S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'268', N'14511781', N'14511781000193', N'BARI COMPANHIA HIPOTECÁRIA', N'BARI CIA HIPOTECÁRIA', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/png/14511781.png')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'269', N'53518684', N'53518684000184', N'BANCO HSBC S.A.', N'BCO HSBC S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/53518684.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'270', N'61444949', N'61444949000175', N'SAGITUR CORRETORA DE CÂMBIO S.A.', N'SAGITUR CC - EM LIQUIDAÇÃO EXTRAJUDICIAL', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'271', N'27842177', N'27842177000191', N'BPY CORRETORA DE CÂMBIO TÍTUlogos E VALORES MOBILIÁRIOS S.A.', N'BPY CCTVM S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'272', N'00250699', N'00250699000148', N'AGK CORRETORA DE CAMBIO S.A.', N'AGK CC S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'273', N'08253539', N'08253539000164', N'COOPERATIVA DE CREDITO SULCREDI AMPLEA', N'COOP SULCREDI AMPLEA', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'274', N'11581339', N'11581339000145', N'BMP SOCIEDADE DE CRÉDITO AO MICROEMPREENDEDOR E A EMPRESA DE PEQUENO PORTE LTDA.', N'BMP SCMEPP LTDA', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/11581339.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'276', N'11970623', N'11970623000103', N'BANCO SENFF S.A.', N'BCO SENFF S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/png/11970623.png')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'278', N'27652684', N'27652684000162', N'Genial Investimentos Corretora de Valores Mobiliários S.A.', N'GENIAL INVESTIMENTOS CVM S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/27652684.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'279', N'26563270', N'26563270000102', N'PRIMACREDI CREDISIS - COOPERATIVA DE CRÉDITO DE PRIMAVERA DO LESTE', N'COOP DE PRIMAVERA DO LESTE', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'280', N'23862762', N'23862762000100', N'WILL FINANCEIRA S.A. CRÉDITO FINANCIAMENTO E INVESTIMENTO - EM LIQUIDAÇÃO EXTRAJUDICIAL', N'WILL FINANCEIRA S.A.CFI - EM LIQUIDAÇÃO EXTRAJUDICIAL', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'281', N'76461557', N'76461557000191', N'Cooperativa de Crédito Rural Coopavel', N'CCR COOPAVEL', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'283', N'89960090', N'89960090000176', N'RB INVESTIMENTOS DISTRIBUIDORA DE TITUlogos E VALORES MOBILIARIOS LIMITADA', N'RB INVESTIMENTOS DTVM LTDA.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'285', N'71677850', N'71677850000177', N'FRENTE SOCIEDADE CORRETORA DE CÂMBIO S.A. - EM LIQUIDAÇÃO EXTRAJUDICIAL', N'FRENTE SCC S.A - EM LIQUIDAÇÃO EXTRAJUDICIAL', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'286', N'07853842', N'07853842000135', N'UNIPRIME OURO - COOPERATIVA DE CRÉDITO DE OURO', N'UNIPRIME OURO - COOP DE OURO', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'288', N'62237649', N'62237649000188', N'CAROL DISTRIBUIDORA DE TITUlogos E VALORES MOBILIARIOS LTDA.', N'CAROL DTVM LTDA.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'289', N'94968518', N'94968518000167', N'EFX CORRETORA DE CÂMBIO LTDA.', N'EFX CC LTDA.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'290', N'08561701', N'08561701000101', N'PAGSEGURO INTERNET INSTITUIÇÃO DE PAGAMENTO S.A.', N'PAGSEGURO INTERNET IP S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/08561701.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'292', N'28650236', N'28650236000192', N'GALAPAS CAPITAL DISTRIBUIDORA DE TÍTUlogos E VALORES MOBILIÁRIOS S.A.', N'GALAPAS DTVM S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/png/28650236.png')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'293', N'71590442', N'71590442000183', N'Lastro RDV Distribuidora de Títulogos e Valores Mobiliários Ltda.', N'LASTRO RDV DTVM LTDA', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'296', N'04062902', N'04062902000103', N'OZ CORRETORA DE CÂMBIO S.A.', N'OZ CORRETORA DE CÂMBIO S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'298', N'17772370', N'17772370000140', N'VIPS CORRETORA DE CÂMBIO S.A.', N'VIPS CC S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'299', N'04814563', N'04814563000174', N'BANCO AFINZ S.A. - BANCO MÚLTIPLO', N'BCO AFINZ S.A. - BM', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'300', N'33042151', N'33042151000161', N'Banco de la Nacion Argentina', N'BCO LA NACION ARGENTINA', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/33042151.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'301', N'13370835', N'13370835000185', N'DOCK INSTITUIÇÃO DE PAGAMENTO S.A.', N'DOCK IP S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/13370835.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'305', N'40353377', N'40353377000149', N'FOURTRADE CORRETORA DE CÂMBIO LTDA.', N'FOURTRADE COR. DE CAMBIO LTDA', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'306', N'40303299', N'40303299000178', N'PORTOPAR DISTRIBUIDORA DE TITUlogos E VALORES MOBILIARIOS LTDA.', N'PORTOPAR DTVM LTDA', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'307', N'03751794', N'03751794000113', N'Terra Investimentos Distribuidora de Títulogos e Valores Mobiliários Ltda.', N'TERRA INVESTIMENTOS DTVM', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'309', N'14190547', N'14190547000101', N'CAMBIONET CORRETORA DE CÂMBIO LTDA.', N'CAMBIONET CC LTDA', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'310', N'22610500', N'22610500000188', N'VORTX DISTRIBUIDORA DE TITUlogos E VALORES MOBILIARIOS LTDA.', N'VORTX DTVM LTDA.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/png/22610500.png')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'311', N'76641497', N'76641497000199', N'DOURADA CORRETORA DE CÂMBIO LTDA.', N'DOURADA CORRETORA', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'312', N'07693858', N'07693858000128', N'HSCM - SOCIEDADE DE CRÉDITO AO MICROEMPREENDEDOR E À EMPRESA DE PEQUENO PORTE LTDA.', N'HSCM SCMEPP LTDA.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'313', N'16927221', N'16927221000140', N'AMAZÔNIA CORRETORA DE CÂMBIO LTDA.', N'AMAZÔNIA CC LTDA.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'315', N'03502968', N'03502968000104', N'PI Distribuidora de Títulogos e Valores Mobiliários S.A.', N'PI DTVM S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'318', N'61186680', N'61186680000174', N'Banco BMG S.A.', N'BCO BMG S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/61186680.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'319', N'11495073', N'11495073000118', N'OM DISTRIBUIDORA DE TÍTUlogos E VALORES MOBILIÁRIOS LTDA', N'OM DTVM LTDA', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'320', N'07450604', N'07450604000189', N'BANK OF CHINA (BRASIL) BANCO MÚLTIPLO S/A', N'BOC BRASIL', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'321', N'18188384', N'18188384000183', N'CREFAZ SOCIEDADE DE CRÉDITO AO MICROEMPREENDEDOR E A EMPRESA DE PEQUENO PORTE S.A.', N'CREFAZ SCMEPP SA', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'322', N'01073966', N'01073966000111', N'Cooperativa de Crédito Rural de Abelardo Luz - Sulcredi/Crediluz', N'CCR DE ABELARDO LUZ', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'323', N'10573521', N'10573521000191', N'MERCADO PA INSTITUIÇÃO DE PAGAMENTO LTDA.', N'MERCADO PA IP LTDA.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/10573521.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'324', N'21332862', N'21332862000191', N'CARTOS SOCIEDADE DE CRÉDITO DIRETO S.A.', N'CARTOS SCD S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'325', N'13293225', N'13293225000125', N'Órama Distribuidora de Títulogos e Valores Mobiliários S.A.', N'ÓRAMA DTVM S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'326', N'03311443', N'03311443000191', N'MEUTUDO S.A - SOCIEDADE DE CRÉDITO FINANCIAMENTO E INVESTIMENTO', N'MEUTUDO SCFI', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/03311443.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'328', N'05841967', N'05841967000110', N'COOPERATIVA DE ECONOMIA E CRÉDITO MÚTUO DOS FABRICANTES DE CALÇADOS DE SAPIRANGA LTDA.', N'CECM FABRIC CALÇADOS SAPIRANGA', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'329', N'32402502', N'32402502000135', N'QI Sociedade de Crédito Direto S.A.', N'QI SCD S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/32402502.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'330', N'00556603', N'00556603000174', N'BANCO BARI DE INVESTIMENTOS E FINANCIAMENTOS S.A.', N'BANCO BARI S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/png/00556603.png')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'331', N'13673855', N'13673855000125', N'OSLO CAPITAL DISTRIBUIDORA DE TÍTUlogos E VALORES MOBILIÁRIOS S.A', N'OSLO CAPITAL DTVM SA', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'332', N'13140088', N'13140088000199', N'ACESSO SOLUÇÕES DE PAGAMENTO S.A. - INSTITUIÇÃO DE PAGAMENTO', N'ACESSO SOLUÇÕES DE PAGAMENTO S.A. - INSTITUIÇÃO DE PAGAMENTO', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/13140088.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'334', N'15124464', N'15124464000187', N'BANCO BESA S.A.', N'BANCO BESA S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'335', N'27098060', N'27098060000145', N'Banco Digio S.A.', N'BANCO DIGIO', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/27098060.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'336', N'31872495', N'31872495000172', N'Banco C6 S.A.', N'BCO C6 S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/31872495.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'340', N'09554480', N'09554480000107', N'SUPERDIGITAL INSTITUIÇÃO DE PAGAMENTO S.A.', N'SUPERDIGITAL I.P. S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'341', N'60701190', N'60701190000104', N'ITAÚ UNIBANCO S.A.', N'ITAÚ UNIBANCO S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/60701190.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'342', N'32997490', N'32997490000139', N'Creditas Sociedade de Crédito Direto S.A.', N'CREDITAS SCD', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'343', N'24537861', N'24537861000171', N'FFA SOCIEDADE DE CRÉDITO AO MICROEMPREENDEDOR E À EMPRESA DE PEQUENO PORTE LTDA.', N'FFA SCMEPP LTDA.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'348', N'33264668', N'33264668000103', N'Banco XP S.A.', N'BCO XP S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/33264668.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'349', N'27214112', N'27214112000100', N'AL5 S.A. SOCIEDADE DE CRÉDITO FINANCIAMENTO E INVESTIMENTO', N'AL5 S.A. SCFI', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'350', N'01330387', N'01330387000107', N'COOPERATIVA DE CRÉDITO POPULAR DO BRASIL - CREHNOR', N'COOPERATIVA DE CRÉDITO POPULAR DO BRASIL', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'352', N'29162769', N'29162769000198', N'SANTANDER CORRETORA DE TÍTUlogos E VALORES MOBILIÁRIOS S.A.', N'SANTANDER CTVM S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/29162769.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'354', N'52904364', N'52904364000108', N'NECTON INVESTIMENTOS  S.A. CORRETORA DE VALORES MOBILIÁRIOS E COMMODITIES', N'NECTON INVESTIMENTOS S.A CVM', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'355', N'34335592', N'34335592000114', N'ÓTIMO SOCIEDADE DE CRÉDITO DIRETO S.A.', N'ÓTIMO SCD S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'358', N'09464032', N'09464032000112', N'MIDWAY S.A. - SOCIEDADE DE CRÉDITO FINANCIAMENTO E INVESTIMENTO', N'MIDWAY S.A. - SCFI', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/09464032.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'359', N'05351887', N'05351887000186', N'ZEMA CRÉDITO FINANCIAMENTO E INVESTIMENTO S/A', N'ZEMA CFI S/A', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'360', N'02276653', N'02276653000123', N'TRINUS CAPITAL DISTRIBUIDORA DE TÍTUlogos E VALORES MOBILIÁRIOS S.A.', N'TRINUS CAPITAL DTVM', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'362', N'01027058', N'01027058000191', N'CIELO S.A. - INSTITUIÇÃO DE PAGAMENTO', N'CIELO IP S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/01027058.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'363', N'62285390', N'62285390000140', N'QI CORRETORA DE TÍTUlogos E VALORES MOBILIÁRIOS S.A.', N'QI CTVM S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/62285390.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'364', N'09089356', N'09089356000118', N'EFÍ S.A. - INSTITUIÇÃO DE PAGAMENTO', N'EFÍ S.A. - IP', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/09089356.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'365', N'68757681', N'68757681000170', N'BINANCE BRASIL CORRETORA DE CÂMBIO E VALORES MOBILIÁRIOS S.A.', N'BINANCE BRASIL', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'366', N'61533584', N'61533584000155', N'BANCO SOCIETE GENERALE BRASIL S.A.', N'BCO SOCIETE GENERALE BRASIL', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'367', N'34711571', N'34711571000156', N'VITREO DISTRIBUIDORA DE TÍTUlogos E VALORES MOBILIÁRIOS S.A.', N'VITREO DTVM S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'368', N'08357240', N'08357240000150', N'Banco CSF S.A.', N'BCO CSF S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/08357240.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'370', N'61088183', N'61088183000133', N'Banco Mizuho do Brasil S.A.', N'BCO MIZUHO S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/png/61088183.png')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'371', N'92875780', N'92875780000131', N'WARREN CORRETORA DE VALORES MOBILIÁRIOS E CÂMBIO LTDA.', N'WARREN CVMC LTDA', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'373', N'35977097', N'35977097000171', N'UP.P SOCIEDADE DE EMPRÉSTIMO ENTRE PESSOAS S.A.', N'UP.P SEP S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'374', N'27351731', N'27351731000138', N'REALIZE SOCIEDADE DE CRÉDITO FINANCIAMENTO E INVESTIMENTO S.A.', N'REALIZE SCFI S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/27351731.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'376', N'33172537', N'33172537000198', N'BANCO J.P. MORGAN S.A.', N'BCO J.P. MORGAN S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/png/33172537.png')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'377', N'17826860', N'17826860000181', N'BMS SOCIEDADE DE CRÉDITO DIRETO S.A.', N'BMS SCD S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'378', N'01852137', N'01852137000137', N'BANCO BRASILEIRO DE CRÉDITO SOCIEDADE ANÔNIMA', N'BCO BRASILEIRO DE CRÉDITO S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'379', N'01658426', N'01658426000108', N'COOPERFORTE COOPERATIVA DE CRÉDITO E INVESTIMENTOS LTDA', N'COOP COOPERFORTE LTDA.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'380', N'22896431', N'22896431000110', N'PICPAY INSTITUIçãO DE PAGAMENTO S.A.', N'PICPAY', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/22896431.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'381', N'60814191', N'60814191000157', N'BANCO MERCEDES-BENZ DO BRASIL S.A.', N'BCO MERCEDES-BENZ S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/png/60814191.png')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'382', N'04307598', N'04307598000117', N'FIDÚCIA SOCIEDADE DE CRÉDITO AO MICROEMPREENDEDOR E À EMPRESA DE PEQUENO PORTE LIMITADA.', N'FIDUCIA SCMEPP LTDA', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'383', N'21018182', N'21018182000106', N'EBANX INSTITUICAO DE PAGAMENTOS LTDA.', N'EBANX IP LTDA.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/21018182.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'384', N'11165756', N'11165756000107', N'GLOBAL FINANÇAS SOCIEDADE DE CRÉDITO AO MICROEMPREENDEDOR E À EMPRESA DE PEQUENO PORTE LTDA.', N'GLOBAL SCM LTDA', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'385', N'03844699', N'03844699000164', N'COOPERATIVA DE ECONOMIA E CREDITO MUTUO DOS TRABALHADORES PORTUARIOS DA GRANDE VITORIA - CREDESTIVA.', N'CECM DOS TRAB.PORT. DA G.VITOR', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'386', N'30680829', N'30680829000143', N'NU FINANCEIRA S.A. - Sociedade de Crédito Financiamento e Investimento', N'NU FINANCEIRA S.A. CFI', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/30680829.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'387', N'03215790', N'03215790000110', N'Banco Toyota do Brasil S.A.', N'BCO TOYOTA DO BRASIL S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'389', N'17184037', N'17184037000110', N'Banco Mercantil do Brasil S.A.', N'BCO MERCANTIL DO BRASIL S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/17184037.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'390', N'59274605', N'59274605000113', N'BANCO GM S.A.', N'BCO GM S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'391', N'08240446', N'08240446000103', N'COOPERATIVA DE CREDITO RURAL DE IBIAM - SULCREDI/IBIAM', N'CCR DE IBIAM', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'393', N'59109165', N'59109165000149', N'Banco Volkswagen S.A.', N'BCO VOLKSWAGEN S.A', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/png/59109165.png')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'394', N'07207996', N'07207996000150', N'Banco Bradesco Financiamentos S.A.', N'BCO BRADESCO FINANC. S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/png/07207996.png')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'395', N'08673569', N'08673569000120', N'F.D''LD - DISTRIBUIDORA DE TÍTUlogos E VALORES MOBILIÁRIOS LTDA.', N'F D LD DTVM LTDA', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'396', N'13884775', N'13884775000119', N'MAGALUPAY INSTITUIÇÃO DE PAGAMENTO S.A.', N'MAGALUPAY', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/13884775.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'397', N'34088029', N'34088029000199', N'LISTO SOCIEDADE DE CREDITO DIRETO S.A.', N'LISTO SCD S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/34088029.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'398', N'31749596', N'31749596000150', N'IDEAL CORRETORA DE TÍTUlogos E VALORES MOBILIÁRIOS S.A.', N'IDEAL CTVM S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'399', N'01701201', N'01701201000189', N'Kirton Bank S.A. - Banco Múltiplo', N'KIRTON BANK', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'400', N'05491616', N'05491616000126', N'COOPERATIVA DE CRÉDITO POUPANÇA E SERVIÇOS FINANCEIROS - EM LIQUIDAÇÃO EXTRAJUDICIAL', N'COOP CREDITAG - EM LIQUIDAÇÃO EXTRAJUDICIAL', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'401', N'15111975', N'15111975000164', N'IUGU INSTITUIÇÃO DE PAGAMENTO S.A.', N'IUGU IP S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/15111975.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'402', N'36947229', N'36947229000185', N'COBUCCIO S/A - SOCIEDADE DE CRÉDITO FINANCIAMENTO E INVESTIMENTOS', N'COBUCCIO S.A. SCFI', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'403', N'37880206', N'37880206000163', N'CORA SOCIEDADE DE CRÉDITO FINANCIAMENTO E INVESTIMENTO S.A.', N'CORA SCFI', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/37880206.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'404', N'37241230', N'37241230000152', N'SUMUP SOCIEDADE DE CRÉDITO FINANCIAMENTO E INVESTIMENTO S.A.', N'SUMUP SCFI S.A', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/37241230.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'406', N'37715993', N'37715993000198', N'ACCREDITO - SOCIEDADE DE CRÉDITO DIRETO S.A.', N'ACCREDITO SCD S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/37715993.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'407', N'00329598', N'00329598000167', N'SEFER INVESTIMENTOS DISTRIBUIDORA DE TÍTUlogos E VALORES MOBILIÁRIOS LTDA - EM LIQUIDAÇÃO EXTRAJUDICIAL', N'SEFER INVESTIMENTOS DTVM LTDA - EM LIQUIDAÇÃO EXTRAJUDICIAL', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/00329598.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'408', N'36586946', N'36586946000129', N'BONUSPA SOCIEDADE DE CRÉDITO DIRETO S.A.', N'BONUSPA SCD S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'410', N'05684234', N'05684234000119', N'PLANNER SOCIEDADE DE CRÉDITO DIRETO S.A.', N'PLANNER SOCIEDADE DE CRÉDITO DIRETO', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'411', N'05192316', N'05192316000146', N'Via Certa Financiadora S.A. - Crédito Financiamento e Investimentos', N'VIA CERTA FINANCIADORA S.A. - CFI', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'412', N'15173776', N'15173776000180', N'SOCIAL BANK BANCO MÚLTIPLO S/A', N'SOCIAL BANK S/A', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/png/15173776.png')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'413', N'01858774', N'01858774000110', N'BANCO BV S.A.', N'BCO BV S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/01858774.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'414', N'37526080', N'37526080000123', N'LEND SOCIEDADE DE CRÉDITO DIRETO S.A.', N'LEND SCD S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'415', N'17157777', N'17157777000167', N'BANCO NACIONAL S.A.', N'BCO NACIONAL', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'416', N'19324634', N'19324634000128', N'LAMARA SOCIEDADE DE CRÉDITO DIRETO S.A.', N'LAMARA SCD S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'418', N'37414009', N'37414009000159', N'ZIPDIN SOLUÇÕES DIGITAIS SOCIEDADE DE CRÉDITO DIRETO S/A', N'ZIPDIN SCD S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'419', N'38129006', N'38129006000136', N'NUMBRS SOCIEDADE DE CRÉDITO DIRETO S.A.', N'NUMBRS SCD S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'421', N'39343350', N'39343350000196', N'LAR COOPERATIVA DE CRÉDITO - LAR CREDI', N'CC LAR CREDI', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'422', N'58160789', N'58160789000128', N'Banco Safra S.A.', N'BCO SAFRA S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/58160789.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'423', N'00460065', N'00460065000110', N'COLUNA S/A DISTRIBUIDORA DE TITUlogos E VALORES MOBILIÁRIOS', N'COLUNA S.A. DTVM', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'425', N'03881423', N'03881423000156', N'SOCINAL S.A. - CRÉDITO FINANCIAMENTO E INVESTIMENTO', N'SOCINAL S.A. CFI', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'426', N'11285104', N'11285104000106', N'NEON FINANCEIRA - SOCIEDADE DE CRÉDITO FINANCIAMENTO E INVESTIMENTO S.A', N'NEON FINANCEIRA - SCFI S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/11285104.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'427', N'27302181', N'27302181000167', N'COOPERATIVA DE CRÉDITO DOS SERVIDORES DA UNIVERSIDADE FEDERAL DO ESPIRITO SANTO', N'CRED.UFES', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'428', N'39664698', N'39664698000185', N'CREDSYSTEM SOCIEDADE DE CRÉDITO DIRETO S.A.', N'CREDSYSTEM SCD S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/39664698.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'429', N'05676026', N'05676026000178', N'Crediare S.A. - Crédito financiamento e investimento', N'CREDIARE CFI S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'430', N'00204963', N'00204963000107', N'COOPERATIVA DE CREDITO RURAL SEARA - CREDISEARA', N'CCR SEARA', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'433', N'44077014', N'44077014000189', N'BR-CAPITAL DISTRIBUIDORA DE TÍTUlogos E VALORES MOBILIÁRIOS S.A.', N'BR-CAPITAL DTVM S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'435', N'38224857', N'38224857000168', N'DELFINANCE SOCIEDADE DE CREDITO DIRETO S.A.', N'DELFINANCE SCD S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'438', N'67030395', N'67030395000146', N'TRUSTEE DISTRIBUIDORA DE TÍTUlogos E VALORES MOBILIÁRIOS LTDA. - EM LIQUIDAÇÃO EXTRAJUDICIAL', N'TRUSTEE DTVM LTDA. - EM LIQUIDAÇÃO EXTRAJUDICIAL', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'439', N'16695922', N'16695922000109', N'ID CORRETORA DE TÍTUlogos E VALORES MOBILIÁRIOS S.A.', N'ID CTVM', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'440', N'82096447', N'82096447000170', N'CREDI&GENTE - COOPERATIVA DE CRÉDITO E INVESTIMENTOS', N'COOP CREDI&GENTE', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'442', N'87963450', N'87963450000168', N'MAGNETIS - DISTRIBUIDORA DE TÍTUlogos E VALORES MOBILIÁRIOS LTDA', N'MAGNETIS - DTVM', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'443', N'39416705', N'39416705000120', N'OCTA SOCIEDADE DE CRÉDITO DIRETO S.A. - EM LIQUIDAÇÃO EXTRAJUDICIAL', N'OCTA SCD S.A. - EM LIQUIDAÇÃO EXTRAJUDICIAL', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'444', N'40654622', N'40654622000158', N'TRINUS SOCIEDADE DE CRÉDITO DIRETO S.A.', N'TRINUS SCD S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'445', N'35551187', N'35551187000104', N'PLANTAE S.A. - CRÉDITO FINANCIAMENTO E INVESTIMENTO', N'PLANTAE CFI', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'447', N'12392983', N'12392983000138', N'MIRAE ASSET (BRASIL) CORRETORA DE CÂMBIO TÍTUlogos  E VALORES MOBILIÁRIOS LTDA.', N'MIRAE ASSET (BRASIL) CCTVM LTDA.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'448', N'39669186', N'39669186000101', N'HEMERA DISTRIBUIDORA DE TÍTUlogos E VALORES MOBILIÁRIOS LTDA.', N'HEMERA DTVM LTDA.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'449', N'37555231', N'37555231000171', N'DM SOCIEDADE DE CRÉDITO DIRETO S.A.', N'DM', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'450', N'13203354', N'13203354000185', N'FITS INSTITUIÇÃO DE PAGAMENTO S.A.', N'FITS IP', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/13203354.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'451', N'40475846', N'40475846000100', N'J17 - SOCIEDADE DE CRÉDITO DIRETO S/A', N'J17 - SCD S/A', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'452', N'39676772', N'39676772000183', N'CREDIFIT SOCIEDADE DE CRÉDITO DIRETO S.A.', N'CREDIFIT SCD S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'454', N'41592532', N'41592532000142', N'MÉRITO DISTRIBUIDORA DE TÍTUlogos E VALORES MOBILIÁRIOS LTDA.', N'MÉRITO DTVM LTDA.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'455', N'38429045', N'38429045000159', N'VIS DISTRIBUIDORA DE TÍTUlogos E VALORES MOBILIÁRIOS LTDA', N'VIS DTVM LTDA', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'456', N'60498557', N'60498557000126', N'Banco MUFG Brasil S.A.', N'BCO MUFG BRASIL S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'457', N'39587424', N'39587424000130', N'UY3 SOCIEDADE DE CRÉDITO DIRETO S/A', N'UY3 SCD S/A', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'458', N'07253654', N'07253654000176', N'HEDGE INVESTMENTS DISTRIBUIDORA DE TÍTUlogos E VALORES MOBILIÁRIOS LTDA.', N'HEDGE INVESTMENTS DTVM LTDA.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'459', N'04546162', N'04546162000180', N'COOPERATIVA DE CRÉDITO MÚTUO DE SERVIDORES PÚBLICOS DO ESTADO DE SÃO PAULO - CREDIFISCO', N'CCM SERV. PÚBLICOS SP', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'460', N'42047025', N'42047025000190', N'UNAVANTI SOCIEDADE DE CRÉDITO DIRETO S/A', N'UNAVANTI SCD S/A', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'461', N'19540550', N'19540550000121', N'ASAAS GESTÃO FINANCEIRA INSTITUIÇÃO DE PAGAMENTO S.A.', N'ASAAS IP S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/19540550.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'462', N'39908427', N'39908427000128', N'STARK SOCIEDADE DE CRÉDITO DIRETO S.A.', N'STARK SCD S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'463', N'40434681', N'40434681000110', N'AZUMI DISTRIBUIDORA DE TíTUlogos E VALORES MOBILIáRIOS LTDA.', N'AZUMI DTVM', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'464', N'60518222', N'60518222000122', N'Banco Sumitomo Mitsui Brasileiro S.A.', N'BCO SUMITOMO MITSUI BRASIL S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'465', N'40083667', N'40083667000110', N'CAPITAL CONSIG SOCIEDADE DE CRÉDITO DIRETO S.A.', N'CAPITAL CONSIG SCD S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'467', N'33886862', N'33886862000112', N'MASTER S/A CORRETORA DE CÂMBIO TÍTUlogos E VALORES MOBILIÁRIOS - EM LIQUIDAÇÃO EXTRAJUDICIAL', N'MASTER S/A CCTVM - EM LIQUIDAÇÃO EXTRAJUDICIAL', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'468', N'04862600', N'04862600000110', N'PORTOSEG S.A. - CREDITO FINANCIAMENTO E INVESTIMENTO', N'PORTOSEG S.A. CFI', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'469', N'07138049', N'07138049000154', N'PICPAY INVEST DISTRIBUIDORA DE TÍTUlogos E VALORES MOBILIÁRIOS LTDA', N'PICPAY INVEST', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/07138049.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'470', N'18394228', N'18394228000179', N'CDC SOCIEDADE DE CRÉDITO DIRETO S.A.', N'CDC SCD S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'471', N'04831810', N'04831810000140', N'COOPERATIVA DE ECONOMIA E CRÉDITO MÚTUO DOS SERVIDORES PÚBLICOS DE PINHÃO - CRESERV CREDISIS', N'COOP CRESERV CREDISIS', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'473', N'33466988', N'33466988000138', N'Banco Caixa Geral - Brasil S.A.', N'BCO CAIXA GERAL BRASIL S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'475', N'10371492', N'10371492000185', N'Banco Yamaha Motor do Brasil S.A.', N'BCO YAMAHA MOTOR S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/10371492.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'476', N'45860531', N'45860531000192', N'IDEA MAKER INSTITUICAO DE PAGAMENTO LTDA', N'IDEA MAKER IP LTDA', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'477', N'33042953', N'33042953000171', N'Citibank N.A.', N'CITIBANK N.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/33042953.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'478', N'11760553', N'11760553000169', N'GAZINCRED S.A. SOCIEDADE DE CRÉDITO FINANCIAMENTO E INVESTIMENTO', N'GAZINCRED S.A. SCFI', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'479', N'60394079', N'60394079000104', N'Banco ItauBank S.A.', N'BCO ITAUBANK S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/60394079.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'481', N'43599047', N'43599047000126', N'SUPERLÓGICA SOCIEDADE DE CRÉDITO DIRETO S.A.', N'SUPERLÓGICA SCD S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'482', N'42259084', N'42259084000122', N'ARTTA SOCIEDADE DE CRÉDITO DIRETO S.A', N'ARTTA SCD', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'484', N'36864992', N'36864992000142', N'APEX DISTRIBUIDORA DE TÍTUlogos E VALORES MOBILIÁRIOS S.A.', N'APEX DTVM', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'487', N'62331228', N'62331228000111', N'DEUTSCHE BANK S.A. - BANCO ALEMAO', N'DEUTSCHE BANK S.A.BCO ALEMAO', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/png/62331228.png')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'488', N'46518205', N'46518205000164', N'JPMorgan Chase Bank National Association', N'JPMORGAN CHASE BANK', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/png/46518205.png')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'492', N'49336860', N'49336860000190', N'ING Bank N.V.', N'ING BANK N.V.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'495', N'44189447', N'44189447000126', N'Banco de La Provincia de Buenos Aires', N'BCO LA PROVINCIA B AIRES BCE', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'496', N'45283173', N'45283173000100', N'BBVA BRASIL BANCO DE INVESTIMENTO S.A.', N'BBVA BRASIL BI S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'505', N'32062580', N'32062580000138', N'BANCO UBS (BRASIL) S.A.', N'BCO UBS BRASIL', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/png/32062580.png')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'506', N'42066258', N'42066258000130', N'RJI CORRETORA DE TITUlogos E VALORES MOBILIARIOS LTDA', N'RJI', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'507', N'37229413', N'37229413000152', N'SOCIEDADE DE CRÉDITO FINANCIAMENTO E INVESTIMENTO EFÍ S.A.', N'SCFI EFÍ S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/37229413.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'508', N'61384004', N'61384004000105', N'AVENUE SECURITIES BANCO DE INVESTIMENTO S.A.', N'AVENUE SECURITIES BI S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'509', N'13935893', N'13935893000109', N'CELCOIN INSTITUICAO DE PAGAMENTO S.A.', N'CELCOIN IP S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/13935893.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'510', N'39738065', N'39738065000174', N'FFCRED SOCIEDADE DE CRÉDITO DIRETO S.A..', N'FFCRED SCD S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'511', N'44683140', N'44683140000187', N'MAGNUM SOCIEDADE DE CRÉDITO DIRETO S.A.', N'MAGNUM SCD', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'512', N'36266751', N'36266751000100', N'FINVEST DISTRIBUIDORA DE TÍTUlogos E VALORES MOBILIÁRIOS LTDA.', N'FINVEST DTVM', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'513', N'44728700', N'44728700000172', N'ATF SOCIEDADE DE CRÉDITO DIRETO S.A.', N'ATF SCD S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'514', N'73302408', N'73302408000191', N'EXIM SOCIEDADE CORRETORA DE CÂMBIO LTDA', N'EXIM SCC', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'516', N'36583700', N'36583700000101', N'PLACARPAY S.A. - SOCIEDADE DE CRÉDITO FINANCIAMENTO E INVESTIMENTO', N'PLACARPAY S.A - SCFI', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'517', N'03816413', N'03816413000137', N'PAGUEVELOZ INSTITUIÇÃO DE PAGAMENTO LTDA.', N'PAGUEVELOZ IP LTDA.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/03816413.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'518', N'37679449', N'37679449000138', N'MERCADO CRÉDITO SOCIEDADE DE CRÉDITO FINANCIAMENTO E INVESTIMENTO S.A.', N'MERCADO CRÉDITO SCFI S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/37679449.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'519', N'40768766', N'40768766000135', N'LIONS TRUST DISTRIBUIDORA DE TÍTUlogos E VALORES MOBILIÁRIOS LTDA.', N'LIONS TRUST DTVM', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'520', N'44705774', N'44705774000193', N'SOMAPAY SOCIEDADE DE CRÉDITO DIRETO S.A.', N'SOMAPAY SCD S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'521', N'44019481', N'44019481000152', N'PEAK SOCIEDADE DE EMPRÉSTIMO ENTRE PESSOAS S.A.', N'PEAK SEP S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'522', N'47593544', N'47593544000178', N'RED SOCIEDADE DE CRÉDITO DIRETO S.A.', N'RED SCD S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'523', N'44292580', N'44292580000103', N'HR DIGITAL - SOCIEDADE DE CRÉDITO DIRETO S/A', N'HR DIGITAL SCD', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'524', N'45854066', N'45854066000187', N'WNT CAPITAL DISTRIBUIDORA DE TÍTUlogos E VALORES MOBILIÁRIOS S.A.', N'WNT CAPITAL DTVM', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'525', N'34265629', N'34265629000185', N'INTERCAM CORRETORA DE CÂMBIO LTDA.', N'INTERCAM CC LTDA', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'526', N'46026562', N'46026562000105', N'MONETARIE SOCIEDADE DE CRÉDITO DIRETO S.A.', N'MONETARIE SCD', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'527', N'44478623', N'44478623000140', N'ATICCA - SOCIEDADE DE CRÉDITO DIRETO S.A.', N'ATICCA SCD S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'528', N'34829992', N'34829992000186', N'CBSF DISTRIBUIDORA DE TÍTUlogos E VALORES MOBILIÁRIOS S.A.- EM LIQUIDAÇÃO EXTRAJUDICIAL', N'CBSF DTVM -EM LIQUIDAÇÃO EXTRAJUDICIAL', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'529', N'17079937', N'17079937000105', N'PINBANK BRASIL INSTITUIÇÃO DE PAGAMENTO S.A.', N'PINBANK IP', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/png/17079937.png')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'530', N'47873449', N'47873449000128', N'SER FINANCE SOCIEDADE DE CRÉDITO DIRETO S.A.', N'SER FINANCE SCD S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'531', N'34337707', N'34337707000100', N'BMP SOCIEDADE DE CRÉDITO DIRETO S.A', N'BMP SCD S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/34337707.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'532', N'45745537', N'45745537000119', N'FUTURO SOCIEDADE DE CRÉDITO DIRETO S.A.', N'FUTURO SCD', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'533', N'22575466', N'22575466000158', N'SRM BANK INSTITUIÇÃO DE PAGAMENTO S/A', N'SRM BANK', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'534', N'00714671', N'00714671000114', N'EWALLY INSTITUIÇÃO DE PAGAMENTO S.A.', N'EWALLY IP S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/png/00714671.png')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'535', N'39519944', N'39519944000105', N'OPEA SOCIEDADE DE CRÉDITO DIRETO S.A.', N'OPEA SCD', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'536', N'20855875', N'20855875000182', N'NEON PAGAMENTOS S.A. - INSTITUIÇÃO DE PAGAMENTO', N'NEON PAGAMENTOS S.A. IP', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/20855875.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'537', N'45756448', N'45756448000178', N'SELECT CREDIT SOCIEDADE DE CRÉDITO AO MICROEMPREENDEDOR E À EMPRESA DE PEQUENO PORTE LTDA.', N'SELECT CREDIT SCMEPP LTDA.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'538', N'20251847', N'20251847000156', N'SUDACRED SOCIEDADE DE CRÉDITO DIRETO S.A.', N'SUDACRED SCD S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'539', N'00122327', N'00122327000136', N'SANTINVEST S.A. - CREDITO FINANCIAMENTO E INVESTIMENTOS', N'SANTINVEST S.A. - CFI', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'540', N'04849745', N'04849745000180', N'HBI SOCIEDADE DE CRÉDITO DIRETO S/A.', N'HBI SCD', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'541', N'00954288', N'00954288000133', N'FUNDO GARANTIDOR DE CREDITOS - FGC', N'FDO GARANTIDOR CRÉDITOS', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/00954288.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'542', N'18189547', N'18189547000142', N'CLOUDWALK INSTITUIÇÃO DE PAGAMENTO E SERVICOS LTDA', N'CLOUDWALK IP LTDA', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/18189547.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'543', N'92825397', N'92825397000179', N'COOPERATIVA DE ECONOMIA E CRÉDITO MÚTUO DOS ELETRICITÁRIOS E DOS TRABALHADORES DAS EMPRESAS DO SETOR DE ENERGIA - COOPCRECE', N'COOPCRECE', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'544', N'38593706', N'38593706000187', N'MULTICRED SOCIEDADE DE CRÉDITO DIRETO S.A.', N'MULTICRED SCD S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'545', N'17352220', N'17352220000187', N'SENSO CORRETORA DE CAMBIO E VALORES MOBILIARIOS S.A', N'SENSO CCVM S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'546', N'30980539', N'30980539000115', N'OKTO INSTITUIÇÃO DE PAGAMENTO S.A.', N'OKTO IP', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'547', N'45331622', N'45331622000130', N'BNK DIGITAL SOCIEDADE DE CRÉDITO DIRETO S.A.', N'BNK DIGITAL SCD S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'548', N'06249129', N'06249129000114', N'RPW S/A SOCIEDADE DE CRÉDITO FINANCIAMENTO E INVESTIMENTO', N'RPW S.A. SCFI', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'549', N'15489568', N'15489568000195', N'INTRA INVESTIMENTOS DISTRIBUIDORA DE TÍTUlogos E VALORES MOBILIÁRIOS LTDA', N'INTRA DTVM', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'550', N'32074986', N'32074986000130', N'BEETELLER INSTITUIÇÃO DE PAGAMENTO LTDA.', N'BEETELLER IP LTDA.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'551', N'48967968', N'48967968000118', N'VERT DISTRIBUIDORA DE TÍTUlogos E VALORES MOBILIÁRIOS LTDA', N'VERT DTVM LTDA.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'552', N'32192325', N'32192325000100', N'UZZIPAY INSTITUIÇÃO DE PAGAMENTO S.A.', N'UZZIPAY IP S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'553', N'48707451', N'48707451000190', N'PERCAPITAL SOCIEDADE DE CRÉDITO DIRETO S.A.', N'PERCAPITAL SCD S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'554', N'28811341', N'28811341000166', N'BANCO STONEX S.A.', N'BCO STONEX S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/28811341.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'555', N'02682287', N'02682287000102', N'PAN FINANCEIRA S.A. - SOCIEDADE DE CRÉDITO FINANCIAMENTO E INVESTIMENTOS', N'PAN FINAN', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/02682287.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'556', N'40333582', N'40333582000142', N'SAY SOCIEDADE CORRETORA DE CÂMBIO S.A.', N'SAY CC S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'557', N'30944783', N'30944783000122', N'PAGPRIME INSTITUICAO DE PAGAMENTO LTDA', N'PAGPRIME IP', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'558', N'46955383', N'46955383000152', N'QI DISTRIBUIDORA DE TÍTUlogos E VALORES MOBILIÁRIOS LTDA.', N'QI DTVM LTDA.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'559', N'49288113', N'49288113000123', N'KANASTRA FINANCEIRA S.A CREDITO FINANCIAMENTO E INVESTIMENTO', N'KANASTRA CFI', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'560', N'21995256', N'21995256000156', N'MAG INSTITUICAO DE PAGAMENTO LTDA', N'MAG IP LTDA.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'561', N'20757199', N'20757199000104', N'PAY4FUN INSTITUICAO DE PAGAMENTO S.A.', N'PAY4FUN IP S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'562', N'18684408', N'18684408000195', N'AZIMUT BRASIL DISTRIBUIDORA DE TÍTUlogos E VALORES MOBILIÁRIOS LTDA', N'AZIMUT BRASIL DTVM LTDA', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'563', N'40276692', N'40276692000110', N'PROTEGE CASH INSTITUIÇÃO DE PAGAMENTO S.A.', N'PROTEGE CASH', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'564', N'63019146', N'63019146000107', N'ANKOR CAPITAL - SOCIEDADE DE CRÉDITO FINANCIAMENTO E INVESTIMENTO S/A', N'ANKOR CFI S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'565', N'74014747', N'74014747000135', N'ÁRA CORRETORA DE TITUlogos E VALORES MOBILIARIOS S.A.', N'ÁRA CTVM S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/png/74014747.png')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'566', N'23114447', N'23114447000197', N'FLAGSHIP INSTITUICAO DE PAGAMENTO LTDA', N'FLAGSHIP IP LTDA', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'567', N'33040601', N'33040601000187', N'MERCANTIL FINANCEIRA S.A. - SOCIEDADE DE CRÉDITO FINANCIAMENTO E INVESTIMENTO.', N'MERCANTIL FINANCEIRA', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/33040601.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'568', N'49933388', N'49933388000172', N'BRCONDOS SOCIEDADE DE CRÉDITO DIRETO S.A.', N'BRCONDOS SCD S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'569', N'12473687', N'12473687000161', N'CONTA PRONTA INSTITUICAO DE PAGAMENTO LTDA', N'CONTA PRONTA IP', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'571', N'50489148', N'50489148000100', N'MONTE BRAVO CORRETORA DE TÍTUlogos E VALORES MOBILIÁRIOS S.A.', N'MONTE BRAVO CTVM S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'572', N'51414521', N'51414521000126', N'ALL IN CRED SOCIEDADE DE CREDITO DIRETO S.A.', N'ALL IN CRED SCD S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'573', N'18282093', N'18282093000150', N'OXY COMPANHIA HIPOTECÁRIA', N'OXY CH', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'574', N'48756121', N'48756121000194', N'A55 SOCIEDADE DE CRÉDITO DIRETO S.A.', N'A55 SCD S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'575', N'48584954', N'48584954000115', N'DGBK CREDIT S.A. - SOCIEDADE DE CRÉDITO DIRETO.', N'DGBK CREDIT S.A. - SOCIEDADE DE CRÉDITO DIRETO.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'576', N'11351086', N'11351086000113', N'MERCADO BITCOIN INSTITUICAO DE PAGAMENTO LTDA', N'MERCADO BITCOIN IP LTDA', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/11351086.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'577', N'10663610', N'10663610000129', N'DESENVOLVE SP - AGÊNCIA DE FOMENTO DO ESTADO DE SÃO PAULO S.A.', N'AF DESENVOLVE SP S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'578', N'01235921', N'01235921000104', N'COOPERATIVA DE CRÉDITO DOS SERVIDORES PÚBLICOS MUNICIPAIS DA GRANDE VITÓRIA/ES', N'SICRES', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'579', N'49555647', N'49555647000179', N'QUADRA SOCIEDADE DE CRÉDITO DIRETO S.A.', N'QUADRA SCD', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'580', N'87437687', N'87437687000105', N'COOPERATIVA CENTRAL DE CRÉDITO POUPANÇA E INVESTIMENTO DO SUL E SUDESTE - CENTRAL SICREDI SUL/SUDESTE', N'CCCPOUPINV SUL E SUDESTE - CENTRAL SUL/SUDESTE', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/87437687.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'581', N'70119680', N'70119680000142', N'COOPERATIVA CENTRAL DE CRÉDITO POUPANÇA E INVESTIMENTO DO NORDESTE - CENTRAL SICREDI NORDESTE', N'CENTRAL NORDESTE', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/70119680.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'582', N'33737818', N'33737818000140', N'COOPERATIVA CENTRAL DE CRÉDITO POUPANÇA E INVESTIMENTO DE MATO GROSSO DO SUL IÁS DISTRITO FEDERAL E TOCANTINS - CENTRAL SICREDI BRASIL CENTRAL', N'CCC POUP INV DE MS  DF E TO', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/33737818.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'583', N'33667205', N'33667205000184', N'COOPERATIVA CENTRAL DE CRÉDITO POUPANÇA E INVESTIMENTO DO CENTRO NORTE DO BRASIL - CENTRAL SICREDI CENTRO NORTE', N'CCC POUP INV DO CENTRO NORTE DO BRASIL', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/33667205.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'584', N'80230774', N'80230774000148', N'COOPERATIVA CENTRAL DE CRÉDITO POUPANÇA E INVESTIMENTO DOS ESTADOS DO PARANÁ SÃO PAULO E RIO DE JANEIRO - CENTRAL SICREDI PR/SP/RJ', N'CCC POUP E INV DOS ESTADOS DO PR SP E RJ', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/80230774.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'585', N'50946592', N'50946592000107', N'SETHI SOCIEDADE DE CRÉDITO DIRETO S.A.', N'SETHI SCD SA', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'586', N'35810871', N'35810871000155', N'Z1 INSTITUIÇÃO DE PAGAMENTO LTDA.', N'Z1 IP LTDA.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'587', N'37678915', N'37678915000160', N'FIDD DISTRIBUIDORA DE TÍTUlogos E VALORES MOBILIÁRIOS LTDA.', N'FIDD DTVM LTDA.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'588', N'20308187', N'20308187000100', N'AVANCARD PROVER INSTITUIÇÃO DE PAGAMENTO LTDA', N'AVANCARD PROVER IP LTDA', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/20308187.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'589', N'51212088', N'51212088000146', N'G5 SOCIEDADE DE CRÉDITO DIRETO S.A.', N'G5 SCD SA', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'590', N'40473435', N'40473435000178', N'REPASSES FINANCEIROS E SOLUCOES TECNOLOGICAS INSTITUICAO DE PAGAMENTO S.A.', N'REPASSES FINANCEIROS E SOLUCOES TECNOLOGICAS IP S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'591', N'02671743', N'02671743000119', N'BANVOX DISTRIBUIDORA DE TÍTUlogos E VALORES MOBILIÁRIOS LTDA - EM LIQUIDAÇÃO EXTRAJUDICIAL', N'BANVOX DTVM - EM LIQUIDAÇÃO EXTRAJUDICIAL', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'592', N'45548763', N'45548763000100', N'INSTITUIÇÃO DE PAGAMENTOS MAPS LTDA.', N'MAPS IP LTDA.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'593', N'27084098', N'27084098000169', N'TRANSFEERA INSTITUIÇÃO DE PAGAMENTO S.A', N'TRANSFEERA IP S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/27084098.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'594', N'48703388', N'48703388000113', N'ASA SOCIEDADE DE CRÉDITO FINANCIAMENTO E INVESTIMENTO S.A.', N'ASA SCFI S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/48703388.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'595', N'19468242', N'19468242000132', N'IFOOD PA INSTITUIÇÃO DE PAGAMENTO S.A.', N'IFOOD PA IP', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/19468242.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'596', N'39696395', N'39696395000144', N'CACTVS INSTITUICAO DE PAGAMENTO S.A', N'CACTVS IP S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'597', N'34747388', N'34747388000100', N'ISSUER INSTITUICAO DE PAGAMENTO LTDA.', N'ISSUER IP LTDA.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'598', N'50626276', N'50626276000158', N'KONECT SOCIEDADE DE CRÉDITO DIRETO S/A', N'KONECT SCD S/A', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'599', N'36321990', N'36321990000107', N'ARACRED S/A SOCIEDADE DE CRÉDITO FINANCIAMENTO E INVESTIMENTO', N'ARACRED S/A SCFI', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'600', N'59118133', N'59118133000100', N'Banco Luso Brasileiro S.A.', N'BCO LUSO BRASILEIRO S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'604', N'31895683', N'31895683000116', N'Banco Industrial do Brasil S.A.', N'BCO INDUSTRIAL DO BRASIL S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'610', N'78626983', N'78626983000163', N'Banco VR S.A.', N'BCO VR S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'611', N'61820817', N'61820817000109', N'Banco Paulista S.A.', N'BCO PAULISTA S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/png/61820817.png')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'612', N'31880826', N'31880826000116', N'Banco Guanabara S.A.', N'BCO GUANABARA S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/31880826.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'613', N'60850229', N'60850229000147', N'Omni Banco S.A.', N'OMNI BANCO S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/png/60850229.png')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'614', N'52440987', N'52440987000169', N'SANTS SOCIEDADE DE CRÉDITO DIRETO S.A.', N'SANTS SCD S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'615', N'37470405', N'37470405000101', N'SMART SOLUTIONS GROUP INSTITUICAO DE PAGAMENTO LTDA', N'SMART SOLUTIONS GROUP IP LTDA', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'619', N'49931906', N'49931906000119', N'TRIO INSTITUICAO DE PAGAMENTO LTDA.', N'TRIO IP LTDA.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'620', N'51342763', N'51342763000151', N'REVOLUT SOCIEDADE DE CRÉDITO DIRETO S.A.', N'REVOLUT SCD S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/51342763.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'623', N'59285411', N'59285411000113', N'Banco Pan S.A.', N'BANCO PAN', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/59285411.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'626', N'61348538', N'61348538000186', N'BANCO C6 CONSIGNADO S.A.', N'BCO C6 CONSIG', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/61348538.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'630', N'58497702', N'58497702000102', N'BANCO LETSBANK S.A. - EM LIQUIDAÇÃO EXTRAJUDICIAL', N'BANCO LETSBANK S.A. - EM LIQUIDAÇÃO EXTRAJUDICIAL', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'632', N'52586293', N'52586293000134', N'Z-ON SOCIEDADE DE CRÉDITO DIRETO S.A.', N'Z-ON SCD S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'633', N'68900810', N'68900810000138', N'Banco Rendimento S.A.', N'BCO RENDIMENTO S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/68900810.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'634', N'17351180', N'17351180000159', N'BANCO TRIANGULO S.A.', N'BCO TRIANGULO S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/17351180.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'636', N'40112555', N'40112555000140', N'GIRO - SOCIEDADE DE CRÉDITO DIRETO S/A', N'GIRO - SCD S/A', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'637', N'60889128', N'60889128000180', N'BANCO SOFISA S.A.', N'BCO SOFISA S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/60889128.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'643', N'62144175', N'62144175000120', N'Banco Pine S.A.', N'BCO PINE S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/62144175.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'644', N'54647259', N'54647259000158', N'321 SOCIEDADE DE CRÉDITO DIRETO S.A.', N'321 SCD S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'646', N'91669747', N'91669747000192', N'DM SOCIEDADE DE CRÉDITO FINANCIAMENTO E INVESTIMENTO S.A', N'DM SCFI', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'651', N'25104230', N'25104230000121', N'PAGARE INSTITUICAO DE PAGAMENTO S.A.', N'PAGARE IP S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'652', N'60872504', N'60872504000123', N'Itaú Unibanco Holding S.A.', N'ITAÚ UNIBANCO HOLDING S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'653', N'61024352', N'61024352000171', N'BANCO PLENO S.A. - EM LIQUIDAÇÃO EXTRAJUDICIAL', N'BM PLENO S.A. - EM LIQUIDAÇÃO EXTRAJUDICIAL', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'654', N'92874270', N'92874270000140', N'BANCO DIGIMAIS S.A.', N'BCO DIGIMAIS S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/92874270.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'655', N'59588111', N'59588111000103', N'Banco Votorantim S.A.', N'BCO VOTORANTIM S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/59588111.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'659', N'35210410', N'35210410000141', N'ONEKEY PAYMENTS INSTITUICAO DE PAGAMENTO SA', N'ONEKEY PAYMENTS IP S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'660', N'34471744', N'34471744000106', N'PAGME INSTITUIÇÃO DE PAGAMENTO LTDA.', N'PAGME IP LTDA', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'661', N'55428859', N'55428859000198', N'FREEX SOCIEDADE CORRETORA DE CÂMBIO S.A.', N'FREEX SCC S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'662', N'32708748', N'32708748000130', N'WE PAY OUT INSTITUICAO DE PAGAMENTO LTDA.', N'WE PAY OUT IP LTDA.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'663', N'44782130', N'44782130000107', N'ACTUAL DISTRIBUIDORA DE TÍTUlogos E VALORES MOBILIÁRIOS S.A.', N'ACTUAL DTVM S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'664', N'11414839', N'11414839000192', N'EAGLE INSTITUICAO DE PAGAMENTO LTDA.', N'EAGLE IP LTDA.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'665', N'20018183', N'20018183000180', N'STARK BANK S.A. - INSTITUICAO DE PAGAMENTO', N'STARK BANK S.A. - IP', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/png/20018183.png')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'667', N'48552108', N'48552108000113', N'LIQUIDO INSTITUICAO DE PAGAMENTO LTDA', N'LIQUIDO IP LTDA', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'668', N'48632754', N'48632754000190', N'CELCOIN SOCIEDADE DE CRÉDITO DIRETO S.A.', N'CELCOIN SCD', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/48632754.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'669', N'47133056', N'47133056000188', N'TRANSFERO INSTITUICAO DE PAGAMENTO LTDA.', N'TRANSFERO IP LTDA.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'670', N'11491029', N'11491029000130', N'BSN PAGAMENTOS INSTITUIÇÃO DE PAGAMENTO LTDA', N'BSN', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'671', N'26264220', N'26264220000116', N'ZERO INSTITUIÇÃO DE PAGAMENTO S.A.', N'ZERO IP', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'672', N'53505601', N'53505601000112', N'STONE SOCIEDADE DE CREDITO FINANCIAMENTO E INVESTIMENTO S.A.', N'STONE CFI S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/53505601.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'673', N'08482873', N'08482873000190', N'COOPERATIVA DE CRÉDITO RURAL DO AGRESTE ALAANO - COOPERAGRE', N'CCR DO AGRESTE ALAANO', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'674', N'27970567', N'27970567000147', N'HINOVA PAY INSTITUICAO DE PAGAMENTO S.A.', N'HINOVA PAY IP S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'675', N'30723871', N'30723871000102', N'CASAS BAHIA PAY INSTITUIÇÃO DE PAGAMENTO LTDA.', N'CASAS BAHIA PAY IP LTDA.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/30723871.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'676', N'35479592', N'35479592000150', N'DUFRIO FINANCEIRA CRÉDITO FINANCIAMENTO E INVESTIMENTOS S.A.', N'DUFRIO CFI S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'677', N'33630661', N'33630661000150', N'WD INSTITUIÇÃO DE PAGAMENTO LTDA.', N'WD IP LTDA.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'678', N'45716916', N'45716916000180', N'FIDEM SOCIEDADE DE CRÉDITO DIRETO S/A', N'FIDEM SCD S/A', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'679', N'36690516', N'36690516000152', N'PAY INSTITUICAO DE PAGAMENTO S.A.', N'PAY IP S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'680', N'55823094', N'55823094000190', N'DELTA GLOBAL SOCIEDADE DE CRÉDITO DIRETO S.A.', N'DELTA GLOBAL SCD S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'681', N'50871921', N'50871921000106', N'MT INSTITUICAO DE PAGAMENTO SA', N'MT IP S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'682', N'46505612', N'46505612000137', N'MONERY INSTITUICAO DE PAGAMENTO S.A.', N'MONERY IP S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'683', N'30507541', N'30507541000171', N'BRASIL CASH INSTITUICAO DE PAGAMENTO S.A', N'BRASIL CASH IP S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'684', N'56392166', N'56392166000155', N'HARMOS S.A. - SOCIEDADE DE CRÉDITO FINANCIAMENTO E INVESTIMENTO', N'HARMOS S.A. - SCFI', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'685', N'26615279', N'26615279000101', N'TYCOON TECHNOLOGY INSTITUICAO DE PAGAMENTO S.A', N'TYCOON TECHNOLOGY IIP S.A', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'686', N'12481100', N'12481100000166', N'BIZ INSTITUIÇÃO DE PAGAMENTO S.A.', N'BIZ IP LTDA.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'687', N'35340796', N'35340796000106', N'INCO SOCIEDADE DE EMPRÉSTIMO ENTRE PESSOAS S.A.', N'INCO SEP S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'688', N'43978697', N'43978697000182', N'KIKAI SOCIEDADE DE CRÉDITO DIRETO S.A.', N'KIKAI SCD S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'689', N'51118718', N'51118718000118', N'NVIO BRASIL SOCIEDADE DE CRÉDITO DIRETO S.A.', N'NVIO BRASIL SCD S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'690', N'16814330', N'16814330000150', N'BK INSTITUIÇÃO DE PAGAMENTO S.A.', N'BK IP S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'691', N'49686505', N'49686505000140', N'WASU - WALLET SUPPORT INSTITUIÇÃO DE PAGAMENTO LTDA', N'WASU IP LTDA.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'692', N'56198117', N'56198117000186', N'ZYDI SOCIEDADE DE CRÉDITO DIRETO S.A.', N'ZYDI', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'693', N'32820711', N'32820711000107', N'EFEX INSTITUIÇÃO DE PAGAMENTO S.A.', N'EFEX IP', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'694', N'54811417', N'54811417000163', N'WOOVI INSTITUICAO DE PAGAMENTO LTDA', N'WOOVI IP LTDA.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/png/54811417.png')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'695', N'35523352', N'35523352000106', N'BEES INSTITUICAO DE PAGAMENTO LTDA.', N'BEES IP LTDA.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'696', N'50032584', N'50032584000155', N'LOAN BRASIL SOCIEDADE DE CRÉDITO DIRETO S.A.', N'LOAN BRASIL SCD S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'697', N'45056494', N'45056494000164', N'JM CORRETORA DE CÂMBIO LTDA.', N'JM CORRETORA DE CÂMBIO', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'698', N'58367961', N'58367961000119', N'BIT SOCIEDADE DE CRÉDITO DIRETO S.A.', N'BIT SCD S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'699', N'59396084', N'59396084000177', N'BFC SOCIEDADE DE CRÉDITO DIRETO S.A.', N'BFC SCD S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'700', N'53822116', N'53822116000172', N'MW INSTITUICAO DE PAGAMENTO LTDA', N'MW IP LTDA.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'701', N'51118615', N'51118615000158', N'INTEGRAÇÃO DE CRÉDITO E COBRANÇA SOCIEDADE DE CRÉDITO DIRETO S.A.', N'INTEGRAÇÃO DE CRÉDITO E COBRANÇA SCD', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'703', N'10440482', N'10440482000154', N'GETNET ADQUIRÊNCIA E SERVIÇOS PARA MEIOS DE PAGAMENTO S.A. INSTITUIÇÃO DE PAGAMENTO', N'GETNET IP', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/10440482.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'704', N'44663846', N'44663846000187', N'FESTOR INSTITUIÇÃO DE PAGAMENTO LTDA.', N'FESTOR IP LTDA.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'707', N'62232889', N'62232889000190', N'Banco Daycoval S.A.', N'BCO DAYCOVAL S.A', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/62232889.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'708', N'33588252', N'33588252000132', N'BANCO INDUSCRED DE INVESTIMENTO S.A.', N'BCO INDUSCRED DE INVESTIM. S/A', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'712', N'78632767', N'78632767000120', N'OURIBANK S.A. BANCO MÚLTIPLO', N'OURIBANK S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/png/78632767.png')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'714', N'00411939', N'00411939000149', N'FINAMAX S.A. - CREDITO FINANCIAMENTO E INVESTIMENTO', N'FINAMAX S.A. CFI', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'719', N'33884941', N'33884941000194', N'BANCO MASTER MÚLTIPLO S.A. - EM LIQUIDAÇÃO EXTRAJUDICIAL', N'BANCO MASTER MÚLTIPLO - EM LIQUIDAÇÃO EXTRAJUDICIAL', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'720', N'80271455', N'80271455000180', N'BANCO RNX S.A.', N'BCO RNX S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'739', N'00558456', N'00558456000171', N'Banco Cetelem S.A.', N'BCO CETELEM S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'741', N'00517645', N'00517645000104', N'BANCO RIBEIRAO PRETO S.A.', N'BCO RIBEIRAO PRETO S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/00517645.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'743', N'00795423', N'00795423000145', N'Banco Semear S.A.', N'BANCO SEMEAR', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/00795423.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'745', N'33479023', N'33479023000180', N'Banco Citibank S.A.', N'BCO CITIBANK S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/33479023.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'746', N'30723886', N'30723886000162', N'Banco Modal S.A.', N'BCO MODAL S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'747', N'01023570', N'01023570000160', N'Banco Rabobank International Brasil S.A.', N'BCO RABOBANK INTL BRASIL S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'748', N'01181521', N'01181521000155', N'BANCO COOPERATIVO SICREDI S.A.', N'BANCO COOPERATIVO SICREDI', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/01181521.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'751', N'29030467', N'29030467000166', N'Scotiabank Brasil S.A. Banco Múltiplo', N'SCOTIABANK BRASIL', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'752', N'01522368', N'01522368000182', N'Banco BNP Paribas Brasil S.A.', N'BCO BNP PARIBAS BRASIL S A', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/01522368.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'753', N'74828799', N'74828799000145', N'Novo Banco Continental S.A. - Banco Múltiplo', N'NOVO BCO CONTINENTAL S.A. - BM', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'754', N'76543115', N'76543115000194', N'Banco Sistema S.A.', N'BANCO SISTEMA', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'755', N'62073200', N'62073200000121', N'Bank of America Merrill Lynch Banco Múltiplo S.A.', N'BOFA MERRILL LYNCH BM S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/png/62073200.png')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'756', N'02038232', N'02038232000164', N'BANCO COOPERATIVO SICOOB S.A. - BANCO SICOOB', N'BANCO SICOOB S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/02038232.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'757', N'02318507', N'02318507000113', N'BANCO KEB HANA DO BRASIL S.A.', N'BCO KEB HANA DO BRASIL S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'759', N'42963742', N'42963742000162', N'BANSUR JM SOCIEDADE DE CRÉDITO DIRETO S/A', N'BANSUR JM SCD S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'760', N'34139916', N'34139916000149', N'EMCASH SERVIÇOS FINANCEIROS SOCIEDADE DE EMPRÉSTIMO ENTRE PESSOAS S.A.', N'EMCASH SERV FINANC SEP S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'761', N'53842122', N'53842122000191', N'URBANO S.A. - SOCIEDADE DE CRÉDITO FINANCIAMENTO E INVESTIMENTO', N'URBANO S.A. SCFI', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'762', N'44064068', N'44064068000100', N'OPPENS SOCIEDADE DE EMPRESTIMO ENTRE PESSOAS S.A', N'OPPENS SEP S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'763', N'56106523', N'56106523000171', N'VUE INSTITUIÇÃO DE PAGAMENTO S.A.', N'VUE IP S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/png/56106523.png')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'764', N'04306351', N'04306351000186', N'INDEPENDÊNCIA COOPERATIVA DE CRÉDITO E INVESTIMENTO - INDEPENDÊNCIA COOPERATIVA DE CRÉDITO', N'INDEPENDÊNCIA CC', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'765', N'37753531', N'37753531000165', N'PAGSMILE INSTITUIÇÃO DE PAGAMENTO LTDA.', N'PAGSMILE IP LTDA.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'766', N'52833288', N'52833288000189', N'LB PAY INSTITUIÇÃO DE PAGAMENTO LTDA', N'LB PAY IP LTDA', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'767', N'62264924', N'62264924000152', N'QORE DISTRIBUIDORA DE TITUlogos E VALORES MOBILIÁRIOS LTDA', N'QORE', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'768', N'20443996', N'20443996000117', N'BECKER FINANCEIRA S.A. - CRÉDITO FINANCIAMENTO E INVESTIMENTO', N'BECKER FINANCEIRA SA - CFI', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'769', N'24313102', N'24313102000125', N'99PAY INSTITUICAO DE PAGAMENTO S.A.', N'99PAY IP S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/24313102.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'770', N'38320462', N'38320462000169', N'V3 INSTITUICAO DE PAGAMENTO S.A.', N'V3 IP S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'771', N'57824223', N'57824223000190', N'WX INSTITUICAO DE PAGAMENTO LTDA', N'WX IP LTDA.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'772', N'20833992', N'20833992000145', N'COOPERATIVA DE CRÉDITO MÚTUO DOS EMPREGADOS DO CENTRO UNIVERSITÁRIO NEWTON PAIVA LTDA. - CREDIPAIVA - EM LIQUIDAÇÃO EXTRAJUDICIAL', N'CC MECUNP - EM LIQUIDAÇÃO EXTRAJUDICIAL', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'773', N'53908413', N'53908413000135', N'KIWIFY INSTITUICAO DE PAGAMENTO LTDA', N'KIWIFY IP', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/53908413.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'774', N'33959738', N'33959738000130', N'MOVA SOCIEDADE DE EMPRÉSTIMO ENTRE PESSOAS S.A.', N'MOVA SEP S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'775', N'47381104', N'47381104000157', N'CONTAAZUL INSTITUICAO DE PAGAMENTO LTDA.', N'CONTAAZUL IP LTDA.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/png/47381104.png')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'778', N'58674454', N'58674454000128', N'PB SOCIEDADE DE CREDITO DIRETO S.A.', N'PB SCD', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'780', N'12102128', N'12102128000145', N'SAFETYPAY BRASIL INSTITUICAO DE PAGAMENTO LTDA', N'SAFETYPAY BRASIL IP LTDA', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'781', N'58006471', N'58006471000197', N'BASE DISTRIBUIDORA DE TÍTUlogos E VALORES MOBILIÁRIOS LTDA.', N'BASE DTVM', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'783', N'31680151', N'31680151000161', N'SWAP INSTITUIÇÃO DE PAGAMENTO S.A.', N'SWAP IP S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/31680151.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'785', N'53058329', N'53058329000170', N'LA FINTECA INSTITUICAO DE PAGAMENTO LTDA', N'LA FINTECA IP LTDA', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'786', N'52076716', N'52076716000176', N'AWX BRASIL  INSTITUICAO DE PAGAMENTO LTDA', N'AWX BRASIL IP LTDA.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'787', N'10789035', N'10789035000105', N'ATTRUS INSTITUIÇÃO DE PAGAMENTO S/A', N'ATTRUS IP S/A', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'788', N'35713491', N'35713491000100', N'PROTOTYPE INSTITUICAO DE PAGAMENTO S.A.', N'PROTOTYPE IP S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'789', N'57654096', N'57654096000129', N'APUSDIGITAL INSTITUICAO DE PAGAMENTO LTDA', N'APUSDIGITAL IP LTDA.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'790', N'54024532', N'54024532000198', N'MAX INSTITUIÇÃO DE PAGAMENTO LTDA', N'MAX IP', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'791', N'62448932', N'62448932000159', N'MULTIPLIKE FINANCEIRA S.A. SOCIEDADE DE CRÉDITO FINANCIAMENTO E INVESTIMENTO', N'MULTIPLIKE FINANCEIRA S.A. SCFI', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'792', N'44921281', N'44921281000190', N'NIXFIN SOCIEDADE DE CRÉDITO DIRETO S.A.', N'NIXFIN SCD', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'793', N'61021673', N'61021673000112', N'MAGALUPAY - SOCIEDADE DE CRÉDITO FINANCIAMENTO E INVESTIMENTO S.A.', N'MAGALUPAY SCFI S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/61021673.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'794', N'44323831', N'44323831000170', N'ATUAL SOCIEDADE CORRETORA DE CÂMBIO LTDA', N'ATUAL CC LTDA', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'795', N'52067630', N'52067630000187', N'BANCO TRATON BRASIL S.A.', N'BANCO TRATON BRASIL S.A.', NULL)

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'803', N'25021356', N'25021356000132', N'DLOCAL BRASIL INSTITUIÇÃO DE PAGAMENTO S.A.', N'DLOCAL BRASIL IP S.A.', N'https://cdn.jsdelivr.net/npm/logos-banco-br@0/logos/svg/25021356.svg')

 INSERT [dbo].[banco] ([numeroBanco], [ISPB], [cnpj], [nomeLongo], [nomeCurto], [LogoUrl]) VALUES (N'804', N'32343119', N'32343119000153', N'MÊNTORE INSTITUIÇÃO DE PAGAMENTO S.A.', N'MÊNTORE IP S.A.', NULL)


