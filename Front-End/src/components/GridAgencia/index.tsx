import { Table } from "react-bootstrap";
import { IAgenciaSuspeitas } from "../../Interfaces/IAgenciasSuspeitas";


interface PropsData{
    data?:IAgenciaSuspeitas[],
}

export default function GridAgencia({data}:PropsData) {
    return (
        <Table>
            <thead>
                <tr>
                    <td  className="tg-0pky">Banco</td>
                    <td  className="tg-0pky">Agência</td>
                    <td  className="tg-0pky">Valor Movimentado</td>
                    <td  className="tg-0pky">Tipo movimentação</td>
                </tr>
            </thead>
            <tbody>
                {
                   data?.map((data,index)=>(
                        <tr key={index}>

                            <th>{data.banco}</th>
                            <th>{data.agencia}</th>
                            <th >{Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(data.valor)} </th>
                            <th>{data.operacao}</th>
                                
                        </tr>
                   ))
                }
            </tbody>
        </Table>
    )
}