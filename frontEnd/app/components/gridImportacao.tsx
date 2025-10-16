
import { ITransacao } from "../interfaces/ITransacao"
import Table from "./table/table"
import TableCell from "./table/tableCell"
import TableHead from "./table/tableHead"
import TableHeader from "./table/TableHeader"
import TableRow from "./table/tableRow"

interface propsArquivo {
  data: ITransacao[]
}
export default function GridImportacao({ data }: propsArquivo) {


  return (
    <>
      <Table  className="hidden">
        <TableHead> 
          <tr>
            <TableHeader colSpan={3}>Origem</TableHeader>
            <TableHeader colSpan={3}>Destino</TableHeader>
            <TableHeader colSpan={1} rowSpan={2}>Valor</TableHeader>
          </tr>
          <tr>
            <TableHeader> Banco </TableHeader>
            <TableHeader> Agência </TableHeader>
            <TableHeader> Conta </TableHeader>
            <TableHeader> Banco </TableHeader>
            <TableHeader> Agência </TableHeader>
            <TableHeader> Conta </TableHeader>
          </tr>
     
        </TableHead>
        <tbody>
          {data.map((data, index) => (
             <TableRow index={index}   >
              <TableCell className="border">{data.bancoOrigem}</TableCell>
              <TableCell className="border">{data.agenciaOrigem}</TableCell>
              <TableCell className="border">{data.contaOrigem}</TableCell>
              <TableCell className="border">{data.bancoDestino}</TableCell>
              <TableCell className="border">{data.agenciaDestino}</TableCell>
              <TableCell className="border">{data.contaDestino}</TableCell>
              <TableCell colSpan={6} className="border px-2 py-2 text-right text-green-700 font-bold">
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(data.valorTransacao)}
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table >
      {/* CARDS PARA MOBILE */}
      < div className="flex flex-col gap-4 mt-4 md:hidden" >
        {
          data.map((data, index) => (
            <div key={index} className="p-4 border rounded-lg shadow bg-gray-100">
              <p className="font-semibold">Transação {index + 1}</p>
              <div className="mt-2">
                <p className="font-medium">Origem:</p>
                <p>Banco: {data.bancoOrigem}</p>
                <p>Agência: {data.agenciaOrigem}</p>
                <p>Conta: {data.contaOrigem}</p>
              </div>
              <div className="mt-2">
                <p className="font-medium">Destino:</p>
                <p>Banco: {data.bancoDestino}</p>
                <p>Agência: {data.agenciaDestino}</p>
                <p>Conta: {data.contaDestino}</p>
              </div>
              <div className="mt-2 font-bold text-green-700">
                Valor:{" "}
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(data.valorTransacao)}
              </div>
            </div>
          ))
        }
      </div >
    </>

  )

}