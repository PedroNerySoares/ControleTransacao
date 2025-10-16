#!/usr/bin/env python3
"""
Gerador de CSV de transações bancárias (fictícias)

- Gera um CSV com cabeçalho fixo:
  bancoOrigem,agenciaOrigem,contaOrigem,bancoDestino,agenciaDestino,contaDestino,valorTransacao,dataHoraTransacao
- Possui 5 bancos, 5 agências e 5 contas predefinidas (você pode alterar as listas abaixo).
- Ao executar, pergunta:
    * data no formato DD/MM/YYYY (a mesma data será usada em dataHoraTransacao)
    * quantas linhas deseja gerar (inclui a linha de cabeçalho; se informar 1, apenas o cabeçalho será criado)
- Gera linhas aleatórias respeitando os bancos/agências/contas.
- Delimitador: vírgula ","
- Salva em SAVE_PATH (defina o caminho da pasta/arquivo antes de executar se desejar um local específico).

OBS: altere a variável SAVE_PATH abaixo para a pasta/arquivo que você quer usar.
"""

import csv
import random
from datetime import datetime, time, timedelta
import os
import sys

# --- CONFIGURAÇÕES (edite este caminho para salvar em pasta específica) ---
# Ex: SAVE_PATH = "/caminho/para/pasta/minhas_transacoes.csv"
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
SAVE_PATH = os.path.join(
    SCRIPT_DIR,
    f"transacoes_{datetime.now().strftime('%Y%m%d_%H%M%S')}.csv"
)
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

def random_valor_transacao():
    # gera valores com diferentes magnitudes e 2 casas decimais
    # 80% valores entre 1 e 5000, 15% entre 5000 e 50000, 5% entre 50000 e 200000
    r = random.random()
    if r < 0.80:
        v = random.uniform(1, 5000)
    elif r < 0.95:
        v = random.uniform(5000, 50000)
    else:
        v = random.uniform(50000, 200000)
    # por vezes gerar valores inteiros (sem casas decimais) para variar
    if random.random() < 0.2:
        return str(int(round(v)))
    return f"{v:.2f}"

def gerar_linha(date_obj):
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

    valor = random_valor_transacao()
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

def main():
    print("=== Gerador de CSV de transações bancárias (fictícias) ===")
    # pede a data no formato DD/MM/YYYY
    while True:
        date_input = input("Informe a data (DD/MM/YYYY): ").strip()
        date_obj = parse_date_ddmmyyyy(date_input)
        if date_obj:
            break
        print("Data inválida. Use o formato DD/MM/YYYY. Exemplos: 01/01/2022")

    # pede quantas linhas (inclui o cabeçalho)
    while True:
        qtd_input = input("Quantas linhas deseja gerar (inclui cabeçalho)? Informe um número inteiro >= 1: ").strip()
        try:
            total_lines = int(qtd_input)
            if total_lines >= 1:
                break
            print("Informe um número >= 1.")
        except ValueError:
            print("Valor inválido. Informe um número inteiro.")

    data_rows = max(0, total_lines - 1)  # subtrai o cabeçalho

    # garante que a pasta exista
    save_dir = os.path.dirname(SAVE_PATH) or "."
    if save_dir and not os.path.exists(save_dir):
        try:
            os.makedirs(save_dir, exist_ok=True)
        except Exception as e:
            print(f"Erro ao criar diretório {save_dir}: {e}")
            sys.exit(1)

    # escreve o CSV com delimitador ','
    try:
        with open(SAVE_PATH, mode="w", newline="", encoding="utf-8") as f:
            writer = csv.writer(f, delimiter=",", quotechar='"', quoting=csv.QUOTE_MINIMAL)
            writer.writerow(HEADER)
            for _ in range(data_rows):
                writer.writerow(gerar_linha(date_obj))
        print(f"Arquivo salvo em: {os.path.abspath(SAVE_PATH)} (linhas totais: {total_lines})")
    except Exception as e:
        print(f"Erro ao salvar arquivo: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
