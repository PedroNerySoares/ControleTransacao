import { Table } from "react-bootstrap";
import { IContasSuspeitas } from "../../Interfaces/IContasSuspeita";


interface PropsData{
    data?:IContasSuspeitas[],
}

export default function GridContaAgencia({data}:PropsData) {
    return (
        <Table>
            <thead>
                <tr>
                    <td  className="tg-0pky">Banco</td>
                    <td  className="tg-0pky">Agência</td>
                    <td  className="tg-0pky">Conta</td>
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
                            <th>{data.conta}</th>
                            <th >{Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(data.valor)} </th>
                            <th>{data.operacao}</th>
                                
                        </tr>
                   ))
                }
            </tbody>
        </Table>
    )
}