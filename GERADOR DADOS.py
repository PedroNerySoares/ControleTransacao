#!/usr/bin/env python3
"""
Gerador de CSV e XML de transações bancárias (fictícias)

- Gera um CSV com cabeçalho fixo:
  bancoOrigem,agenciaOrigem,contaOrigem,bancoDestino,agenciaDestino,contaDestino,valorTransacao,dataHoraTransacao
- Possui 5 bancos, 5 agências e 5 contas predefinidas (você pode alterar as listas abaixo).
- Ao executar, pergunta:
    * datas de início e fim no formato DD/MM/YYYY
    * quantas linhas deseja em cada arquivo diário
    * quantas dessas linhas devem ser suspeitas em cada arquivo
- Gera um arquivo CSV para cada data do período informado.
- Também permite gerar os mesmos dados em XML.
- Linhas suspeitas têm valor superior a 10000; as demais têm valor igual ou inferior.
- Gera linhas aleatórias respeitando os bancos/agências/contas.
- Delimitador: vírgula ","
- Salva em SAVE_PATH (defina o caminho da pasta/arquivo antes de executar se desejar um local específico).

OBS: altere a variável SAVE_PATH abaixo para a pasta/arquivo que você quer usar.
"""

import csv
import random
from datetime import datetime, time, timedelta
from decimal import Decimal
import os
import sys
import xml.etree.ElementTree as ET

# --- CONFIGURAÇÕES (edite este caminho para salvar em pasta específica) ---
# Ex: SAVE_PATH = "/caminho/para/pasta/minhas_transacoes.csv"
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
SAVE_PATH = os.path.join(
    SCRIPT_DIR,
    f"transacoes_{datetime.now().strftime('%Y%m%d_%H%M%S')}.csv"
)

# --- CONFIGURAÇÕES DO BANCO SQL Server (preencha antes de importar) ---
DB_DRIVER = os.getenv("DB_DRIVER", "ODBC Driver 18 for SQL Server")
DB_SERVER = os.getenv("DB_SERVER", "192.168.0.135,1433")
DB_NAME = os.getenv("DB_NAME", "MeuBanco")
DB_USER = os.getenv("DB_USER", "sa")
DB_PASSWORD = os.getenv("DB_PASSWORD", "Dev@2026")
DB_ENCRYPT = os.getenv("DB_ENCRYPT", "yes")
DB_TRUST_SERVER_CERTIFICATE = os.getenv("DB_TRUST_SERVER_CERTIFICATE", "yes")

# --- Listas com 5 opções cada ---
BANKS = [
    "BANCO DO BRASIL",
    "BANCO SANTANDER",
    "BANCO BRADESCO",
    "BANCO ITAU",
    "CAIXA ECONOMICA FEDERAL"
]

AGENCIES = ["001", "002", "003", "004", "005"]

ACCOUNTS = ["00001-1", "00002-1", "00003-1", "00004-1", "00005-1"]

HEADER = [
    "bancoOrigem",
    "agenciaOrigem",
    "contaOrigem",
    "bancoDestino",
    "agenciaDestino",
    "contaDestino",
    "valorTransacao",
    "dataHoraTransacao"
]

def parse_date_ddmmyyyy(date_str):
    try:
        return datetime.strptime(date_str, "%d/%m/%Y").date()
    except ValueError:
        return None

def random_time_iso_for_date(date_obj):
    # Gera uma hora aleatória entre 00:00:00 e 23:59:59 e retorna no formato ISO: YYYY-MM-DDTHH:MM:SS
    hour = random.randint(0, 23)
    minute = random.randint(0, 59)
    second = random.randint(0, 59)
    dt = datetime.combine(date_obj, time(hour, minute, second))
    return dt.strftime("%Y-%m-%dT%H:%M:%S")

def random_valor_transacao(suspeita):
    # Mantém a variação entre valores inteiros e valores com casas decimais.
    if random.random() < 0.2:
        if suspeita:
            return str(random.randint(10001, 200000))
        return str(random.randint(1, 10000))
    if suspeita:
        return f"{random.uniform(10000.01, 200000):.2f}"
    return f"{random.uniform(1, 10000):.2f}"

def gerar_linha(date_obj, suspeita):
    banco_origem = random.choice(BANKS)
    agencia_origem = random.choice(AGENCIES)
    conta_origem = random.choice(ACCOUNTS)

    # destino pode ser igual ou diferente (escolhido aleatoriamente)
    banco_destino = random.choice(BANKS)
    agencia_destino = random.choice(AGENCIES)
    conta_destino = random.choice(ACCOUNTS)

    # evitar, com baixa probabilidade, origem == destino exato
    if banco_destino == banco_origem and agencia_destino == agencia_origem and conta_destino == conta_origem:
        if random.random() < 0.7:
            # força alteração do destino
            banco_destino = random.choice([b for b in BANKS if b != banco_origem]) or banco_destino

    valor = random_valor_transacao(suspeita)
    data_hora = random_time_iso_for_date(date_obj)

    return [
        banco_origem,
        agencia_origem,
        conta_origem,
        banco_destino,
        agencia_destino,
        conta_destino,
        valor,
        data_hora
    ]

def gerar_dias(data_inicio, data_fim):
    data_atual = data_inicio
    while data_atual <= data_fim:
        yield data_atual
        data_atual += timedelta(days=1)

def escrever_xml(file_path, rows):
    root = ET.Element("transacoes")
    for row in rows:
        transacao = ET.SubElement(root, "transacao")
        origem = ET.SubElement(transacao, "origem")
        ET.SubElement(origem, "banco").text = row[0]
        ET.SubElement(origem, "agencia").text = row[1]
        ET.SubElement(origem, "conta").text = row[2]

        destino = ET.SubElement(transacao, "destino")
        ET.SubElement(destino, "banco").text = row[3]
        ET.SubElement(destino, "agencia").text = row[4]
        ET.SubElement(destino, "conta").text = row[5]

        ET.SubElement(transacao, "valorTransacao").text = f"{Decimal(row[6]):.2f}"
        ET.SubElement(transacao, "dataHoraTransacao").text = row[7]

    tree = ET.ElementTree(root)
    ET.indent(tree, space="    ")
    tree.write(file_path, encoding="UTF-8", xml_declaration=True)

def ler_transacoes_arquivo(file_path):
    if os.path.splitext(file_path)[1].lower() == ".xml":
        root = ET.parse(file_path).getroot()
        if root.tag != "transacoes":
            raise ValueError(f"Formato XML inválido: {file_path}")

        rows = []
        for transacao in root.findall("transacao"):
            origem = transacao.find("origem")
            destino = transacao.find("destino")
            if origem is None or destino is None:
                raise ValueError(f"Transação sem origem ou destino: {file_path}")

            elements = [
                origem.find("banco"),
                origem.find("agencia"),
                origem.find("conta"),
                destino.find("banco"),
                destino.find("agencia"),
                destino.find("conta"),
                transacao.find("valorTransacao"),
                transacao.find("dataHoraTransacao")
            ]
            if any(element is None or element.text is None for element in elements):
                raise ValueError(f"Transação com campo obrigatório ausente: {file_path}")
            rows.append([element.text for element in elements])
        return rows

    with open(file_path, mode="r", newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        return [
            [row[field] for field in HEADER]
            for row in reader
        ]

def importar_arquivos_no_banco(file_paths, user_id):
    if DB_USER == "SEU_USUARIO" or DB_PASSWORD == "SUA_SENHA":
        raise ValueError(
            "Configure DB_USER e DB_PASSWORD no início do script ou nas variáveis "
            "de ambiente antes de importar."
        )

    try:
        import pyodbc
    except ImportError as e:
        raise RuntimeError(
            "O pacote pyodbc não está instalado. Instale-o com 'py -m pip install pyodbc' "
            "e instale o Microsoft ODBC Driver for SQL Server."
        ) from e

    connection_string = (
        f"DRIVER={{{DB_DRIVER}}};"
        f"SERVER={DB_SERVER};"
        f"DATABASE={DB_NAME};"
        f"UID={DB_USER};"
        f"PWD={DB_PASSWORD};"
        f"Encrypt={DB_ENCRYPT};"
        f"TrustServerCertificate={DB_TRUST_SERVER_CERTIFICATE};"
    )

    connection = pyodbc.connect(connection_string)
    try:
        cursor = connection.cursor()
        imported_count = 0
        for file_path in file_paths:
            rows = ler_transacoes_arquivo(file_path)
            if not rows:
                raise ValueError(f"O arquivo não contém transações: {file_path}")

            transaction_date = datetime.strptime(
                rows[0][7], "%Y-%m-%dT%H:%M:%S"
            ).date()
            cursor.execute(
                """
                INSERT INTO arquivo (nmarq, nrtamarq, id_usuario, dttrans, dtimp)
                OUTPUT INSERTED.idarq
                VALUES (?, ?, ?, ?, ?)
                """,
                os.path.basename(file_path),
                os.path.getsize(file_path),
                user_id,
                transaction_date,
                datetime.now()
            )
            file_id = cursor.fetchone()[0]

            cursor.executemany(
                """
                INSERT INTO transacao (
                    bancoOrigem, agenciaOrigem, ContaOrigem,
                    bancoDestino, agenciaDestino, ContaDestino,
                    valorTransacao, dataHoraTransacao, arquivo_idarq
                )
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
                """,
                [
                    (
                        row[0],
                        row[1],
                        row[2],
                        row[3],
                        row[4],
                        row[5],
                        Decimal(row[6]),
                        datetime.strptime(
                            row[7], "%Y-%m-%dT%H:%M:%S"
                        ).date(),
                        file_id
                    )
                    for row in rows
                ]
            )
            imported_count += len(rows)

        connection.commit()
        print(
            f"Importação concluída: {len(file_paths)} arquivo(s) e "
            f"{imported_count} transação(ões)."
        )
    except Exception:
        connection.rollback()
        raise
    finally:
        connection.close()

def main():
    print("=== Gerador de CSV/XML de transações bancárias (fictícias) ===")
    while True:
        format_input = input(
            "Formato de saída (1 = CSV, 2 = XML; Enter mantém CSV): "
        ).strip().lower()
        if format_input in ("", "1", "csv"):
            output_format = "csv"
            break
        if format_input in ("2", "xml"):
            output_format = "xml"
            break
        print("Formato inválido. Escolha CSV ou XML.")

    # pede o período no formato DD/MM/YYYY
    while True:
        start_input = input("Informe a data de início (DD/MM/YYYY): ").strip()
        start_date = parse_date_ddmmyyyy(start_input)
        if start_date:
            break
        print("Data de início inválida. Use o formato DD/MM/YYYY. Exemplo: 01/01/2022")

    while True:
        end_input = input("Informe a data de fim (DD/MM/YYYY): ").strip()
        end_date = parse_date_ddmmyyyy(end_input)
        if end_date and end_date >= start_date:
            break
        print("Data de fim inválida ou anterior à data de início.")

    while True:
        qtd_input = input(
            "Quantas linhas deseja em cada arquivo diário? Informe um número inteiro >= 1: "
        ).strip()
        try:
            transaction_count = int(qtd_input)
            if transaction_count >= 1:
                break
            print("Informe um número >= 1.")
        except ValueError:
            print("Valor inválido. Informe um número inteiro.")

    while True:
        suspicious_input = input(
            "Quantas linhas suspeitas deseja em cada arquivo diário? "
            f"Informe um número inteiro entre 0 e {transaction_count}: "
        ).strip()
        try:
            suspicious_count = int(suspicious_input)
            if 0 <= suspicious_count <= transaction_count:
                break
            print(
                f"Informe um número entre 0 e {transaction_count}; "
                "a quantidade suspeita não pode superar o total de linhas."
            )
        except ValueError:
            print("Valor inválido. Informe um número inteiro.")

    save_dir = os.path.dirname(SAVE_PATH) or "."
    if save_dir and not os.path.exists(save_dir):
        try:
            os.makedirs(save_dir, exist_ok=True)
        except Exception as e:
            print(f"Erro ao criar diretório {save_dir}: {e}")
            sys.exit(1)

    save_name = os.path.splitext(os.path.basename(SAVE_PATH))[0]
    save_extension = f".{output_format}"
    generated_files = []
    for transaction_date in gerar_dias(start_date, end_date):
        daily_path = os.path.join(
            save_dir,
            f"{save_name}_{transaction_date.strftime('%Y%m%d')}{save_extension}"
        )
        try:
            suspicious_rows = [True] * suspicious_count
            normal_rows = [False] * (transaction_count - suspicious_count)
            row_types = suspicious_rows + normal_rows
            random.shuffle(row_types)
            rows = [
                gerar_linha(transaction_date, is_suspicious)
                for is_suspicious in row_types
            ]
            if output_format == "xml":
                escrever_xml(daily_path, rows)
            else:
                with open(daily_path, mode="w", newline="", encoding="utf-8") as f:
                    writer = csv.writer(
                        f, delimiter=",", quotechar='"', quoting=csv.QUOTE_MINIMAL
                    )
                    writer.writerow(HEADER)
                    writer.writerows(rows)
            print(
                f"Arquivo salvo em: {os.path.abspath(daily_path)} "
                f"(transações: {transaction_count})"
            )
            generated_files.append(daily_path)
        except Exception as e:
            print(f"Erro ao salvar arquivo {daily_path}: {e}")
            sys.exit(1)

    while True:
        import_answer = input(
            "Deseja incluir os arquivos gerados diretamente no banco de dados? (S/N): "
        ).strip().lower()
        if import_answer in ("s", "sim"):
            while True:
                user_id_input = input(
                    "Informe o ID de um usuário existente no banco de dados: "
                ).strip()
                try:
                    user_id = int(user_id_input)
                    if user_id > 0:
                        break
                    print("Informe um ID de usuário maior que zero.")
                except ValueError:
                    print("ID inválido. Informe um número inteiro.")
            try:
                importar_arquivos_no_banco(generated_files, user_id)
            except Exception as e:
                print(f"Erro ao importar os arquivos para o banco de dados: {e}")
                sys.exit(1)
            break
        if import_answer in ("n", "não", "nao"):
            print(
                f"Arquivos mantidos apenas em {output_format.upper()}; "
                "nenhuma importação foi feita."
            )
            break
        print("Resposta inválida. Informe S para sim ou N para não.")

if __name__ == "__main__":
    main()
