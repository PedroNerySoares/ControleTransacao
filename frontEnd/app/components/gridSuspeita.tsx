
 
import { IMovimentacao } from "../interfaces/Imovimentacao";
import Table from "./table/table";
import TableHead from "./table/tableHead";
import TableHeader from "./table/TableHeader";
import TableCell from "./table/tableCell";
import TableRow from "./table/tableRow";


interface PropsData {
  data?: IMovimentacao[],
}

export default function GridSuspeita({ data }: PropsData) {
  return (
    <>
      <div className="overflow-x-auto">
        <Table>
          <TableHead >
            <tr>
              <TableHeader>Banco</TableHeader>
              <TableHeader>Agência</TableHeader>
              <TableHeader>Valor Movimentado</TableHeader>
              <TableHeader>Tipo movimentação</TableHeader>
            </tr>
          </TableHead>
          <tbody>
            {data?.map((mov, index) => (
              <TableRow index={index}   >
                <TableCell className="px-4 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                  {mov.banco}
                </TableCell>
                <TableCell >{mov.agencia}</TableCell>
                <TableCell >{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(mov.valor)} </TableCell>
                <TableCell >{mov.operacao}</TableCell>

              </TableRow>
            ))}
          </tbody>
        </Table>



      </div >

    </>
  )
}