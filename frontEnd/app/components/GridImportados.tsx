
import { IArquivos } from '../interfaces/IArquivos';
import Table from './table/table';
import TableCell from './table/tableCell';
import TableHead from './table/tableHead';
import TableHeader from './table/TableHeader';


interface propsArquivo {
  data: IArquivos[]
}
export default function GridImportados(props: propsArquivo) {

  return (

    <Table className="text-left rtl:text-right">
      <TableHead >
        <tr>
          <TableHeader scope="col" className="px-6 py-3">
            Data de Importação
          </TableHeader>
          <TableHeader scope="col" className="px-6 py-3 hidden md:table-cell">
            Data de Transação
          </TableHeader>
          <TableHeader scope="col" className="px-6 py-3">
            Ação
          </TableHeader>
        </tr>
      </TableHead>

      <tbody>

        {props.data.map((arquivo, index) => (
          <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <TableCell scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {arquivo.dataImportacao.toString()}
            </TableCell>
            <TableCell className="px-6 py-4 hidden md:table-cell">
              {arquivo.dataTransacao.toString()}
            </TableCell>
            <TableCell  >
              <a href={`/importacao/${arquivo.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                Detalhar
              </a>
            </TableCell>
          </tr>
        ))}
      </tbody>

    </Table>
  )

}