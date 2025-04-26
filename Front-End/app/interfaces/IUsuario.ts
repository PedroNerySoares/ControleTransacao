import { Authority  } from "./IAuthority";
import { ITransacao } from "./ITransacao";

export interface IUsuario {

    id:String,
    usuario: string
    email: String, 
    authorities: Authority[];
    // dataTransacao: Date,
    // transacao: ITransacao[];

}
