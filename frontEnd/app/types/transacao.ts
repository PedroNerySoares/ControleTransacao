export interface ITransacao {

    bancoOrigem: string
    agenciaOrigem: string
    contaOrigem: string

    bancoDestino: string
    agenciaDestino: string
    contaDestino: string

    valorTransacao: number
    dataHoraTransacao: string


}
export interface IMovimentacao {
    banco: string
    agencia: string
    conta: string
    valor: number
    operacao: string
}

export interface IDashboard {
    "mesAno": string
    "totalTransacionado": number
    "totalSuspeito": number
}

export interface dashboard2 {
    "bancoSuspeitos": teste[],
    "quantidadeTransacaoSuspeita": number,
    "quantidadeImportacao": number
    "totalValorSuspeito": number

}
export interface teste {
    "nomeBanco": string
    "valorSuspeito": number
}

export const testandoType: dashboard2 =
{
    bancoSuspeito: [
        { nomeBanco: "BANCO SANTANDER	", valorSuspeito: 628699.40 },
        { nomeBanco: "BANCO DO BRASIL	", valorSuspeito: 325760.89 },
        { nomeBanco: "BANCO BRADESCO	", valorSuspeito: 241259.23 },
        { nomeBanco: "CAIXA ECONOMICA FEDERAL", valorSuspeito: 145280.04 },


    ],
    quantidadetransacaoSuspeita: 4,
    quantidadeImportacao: 11,
    totalValorSuspeito: 1340999.56
}
