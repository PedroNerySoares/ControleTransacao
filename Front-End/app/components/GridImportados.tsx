import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';

import { deleteArquivo, getArquivo } from '@/libs/fetchsApi';
import { IArquivos } from '../interfaces/IArquivos';

import Table from './Table/Table';
import TableCell from './Table/TableCell';
import TableHead from './Table/TableHead';
import TableHeader from './Table/TableHeader';
import ModalStandart from './Modal';

export default function GridImportados() {
  const [arquivos, setArquivos] = useState<IArquivos[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalAberto, setModalAberto] = useState(false);
  const [arquivoSelecionado, setArquivoSelecionado] = useState<string | undefined>();

  const { data: session } = useSession();

  async function fetchArquivos() {

    const token = session?.user.accessToken;
    const dataArquivo = await getArquivo(token);
    setArquivos(dataArquivo || []);

  }

  useEffect(() => {
    if (session) {
      fetchArquivos();
    }
  }, [session]);

  async function handleDelete() {
    if (!arquivoSelecionado) return;

    const toastId = toast.loading("Excluindo arquivo...");
    const token = session?.user.accessToken;
    const response = await deleteArquivo(token, arquivoSelecionado);

    if (response.ok) {
      toast.update(toastId, {
        render: "Arquivo excluído com sucesso!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
      fetchArquivos();
    } else {
      toast.update(toastId, {
        render: "Algo inesperado aconteceu!",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }

    setModalAberto(false);
  }


  return (
    <Table className="text-left rtl:text-right">
      <TableHead>
        <tr>
          <TableHeader scope="col" className="px-6 py-3">Data de Importação</TableHeader>
          <TableHeader scope="col" className="px-6 py-3 hidden md:table-cell">Data de Transação</TableHeader>
          <TableHeader scope="col" className="px-6 py-3">Ação</TableHeader>
        </tr>
      </TableHead>
      <tbody>
        {arquivos.map((arquivo, index) => (
          <tr key={index} className="odd:bg-white even:bg-gray-50 border-b dark:border-gray-700">
            <TableCell className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {arquivo.dataImportacao.toString()}
            </TableCell>
            <TableCell className="px-6 py-4 hidden md:table-cell">
              {arquivo.dataTransacao.toString()}
            </TableCell>
            <TableCell className="text-left">
              <a
                href={`/importacao/${arquivo.id}`}
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline p-2"
              >
                Detalhar
              </a>
              <button
                onClick={() => {
                  setArquivoSelecionado(arquivo.id);
                  setModalAberto(true);
                }}
                className="font-medium text-red-600 dark:text-red-500 hover:underline p-2"
              >
                Deletar
              </button>
            </TableCell>
          </tr>
        ))}
      </tbody>

      <ModalStandart isOpen={modalAberto}>
        <h2 className="text-lg font-semibold mb-4">Deseja realmente excluir o arquivo?</h2>
        <div className="flex justify-end gap-2">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium px-4 py-2 rounded"
            onClick={() => setModalAberto(false)}
          >
            Cancelar
          </button>
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded"
            onClick={handleDelete}
          >
            Confirmar exclusão
          </button>
        </div>
      </ModalStandart>
    </Table>
  );
}
