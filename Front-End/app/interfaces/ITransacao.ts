export interface ITransacao{

    bancoOrigem:string
    agenciaOrigem:string
    contaOrigem:string

    bancoDestino:string
    agenciaDestino:string
    contaDestino:string
    
    valorTransacao:number
    dataHoraTransacao:string


}