 
import { ITransacao } from "@/app/interfaces/ITransacao"
interface PropsData{
    data?:ITransacao[],
}

export default function GridTransacao({data}:PropsData){

    return(
        <table  className="table table-bordered">
                <thead>
                    <tr>
                        <td className="tg-c3ow" colSpan={3}>Origem</td>
                        <td className="tg-c3ow" colSpan={3}>Destino</td>
                        <td className="tg-dvpl" rowSpan={2}>Valor</td>
                    </tr>
                    <tr>
                        <td className="tg-0pky">Banco</td>
                        <td className="tg-0pky">Agência</td>
                        <td className="tg-0pky">Conta</td>
                        <td className="tg-0pky">Banco</td>
                        <td className="tg-0pky">Agência</td>
                        <td className="tg-0pky">Conta</td>
                    </tr>
                </thead>
                <tbody>
                    {


                        
                        data?.map((data,index)=>(
                            <tr key={index}>
                                <th>{data.bancoOrigem}</th>
                                <th>{data.agenciaOrigem}</th>
                                <th>{data.contaDestino}</th>
                                
                                <th>{data.bancoDestino}</th>
                                <th>{data.agenciaDestino}</th>
                                <th>{data.contaDestino}</th>
                                <th >{Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(data.valorTransacao)} </th>
                                

                            </tr>
                        ))

                    }
                </tbody>
            </table> 
    )
}