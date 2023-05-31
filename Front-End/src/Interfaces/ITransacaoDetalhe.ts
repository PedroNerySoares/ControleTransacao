import { ITransacao } from "./ITransacao";

export interface ITransacaoDetalhe {

    usuario: string
    dataImportacao: Date,
    dataTransacao: Date,
    transacao: ITransacao[];

}
