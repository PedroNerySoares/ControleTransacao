import { ITransacao } from "./transacao";
import { UsuarioImportacao } from "./usuario";

export type Importacao = {
  id: number;
  dataImportacao: string;
  dataTransacao: string;
  usuario: UsuarioImportacao;
};
export interface ArquivoDetalhe extends Importacao {
  transacao: ITransacao[];

}

export type MesAno = {
  mesAno: string;
  anoMes: string;
};