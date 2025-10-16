"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Papa from "papaparse";
import { useSession } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import GridImportados from "@/app/components/GridImportados";
import { getArquivo } from "@/libs/fetchsApi";
import { IArquivos } from "@/app/interfaces/IArquivos";
import { ITransacao } from "@/app/interfaces/ITransacao";

export default function Importacao() {
  const [arquivoSelecionado, setArquivoSelecionado] = useState<File | null>(null);
  const [importadoComSucesso, setImportadoComSucesso] = useState(false);
  const [arquivosImportados, setArquivosImportados] = useState<IArquivos[]>([]);

  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated" && session?.user?.accessToken) {
      carregarArquivos();
    }
  }, [status, session]);

  const carregarArquivos = async () => {
    const token = session?.user.accessToken;
    const dados = await getArquivo(token);
    setArquivosImportados(dados);
  };

  const handleArquivoSelecionado = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setArquivoSelecionado(file);
    }
  };

  const handleImportar = async () => {
    if (!arquivoSelecionado) return;

    const { name, type, size } = arquivoSelecionado;

    const isCSV = type === "text/csv" || name.endsWith(".csv");
    const isXML = type === "text/xml" || name.endsWith(".xml");

    let dadosImportados: ITransacao[] = [];

    const toastId = toast.loading("Importando arquivo...");

    const enviarDados = async () => {
      try {
        const response = await fetch("http://192.168.0.135:8080/arquivo", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.user?.accessToken}`,
          },
          body: JSON.stringify({
            nomeArquivo: name,
            tamanhoArquivo: size,
            listaTransacao: dadosImportados,
          }),
        });

        if (response.ok) {
          setImportadoComSucesso(true);
          await carregarArquivos();
          toast.update(toastId, {
            render: "Arquivo importado com sucesso!",
            type: "success",
            isLoading: false,
            autoClose: 3000,
          });
        } else {
          throw new Error("Erro ao importar o arquivo.");
        }
      } catch (error) {
        toast.update(toastId, {
          render: "Erro ao importar o arquivo.",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      }
    };

    if (isCSV) {
      Papa.parse(arquivoSelecionado, {
        header: true,
        delimiter: ",",
        skipEmptyLines: true,
        complete: async (results) => {
          dadosImportados = results.data as ITransacao[];
          await enviarDados();
        },
      });
    } else if (isXML) {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const xmlText = event.target?.result as string;
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "application/xml");
        const transacoes = xmlDoc.getElementsByTagName("transacao");

        dadosImportados = Array.from(transacoes).map((node) => {
          const getNodeText = (parent: Element, tag: string) =>
            parent.getElementsByTagName(tag)[0]?.textContent || "";

          const origem = node.getElementsByTagName("origem")[0];
          const destino = node.getElementsByTagName("destino")[0];

          return {
            bancoOrigem: getNodeText(origem, "banco"),
            agenciaOrigem: getNodeText(origem, "agencia"),
            contaOrigem: getNodeText(origem, "conta"),
            bancoDestino: getNodeText(destino, "banco"),
            agenciaDestino: getNodeText(destino, "agencia"),
            contaDestino: getNodeText(destino, "conta"),
            valorTransacao: parseFloat(getNodeText(node, "valor")),
            dataHoraTransacao: getNodeText(node, "data"),
          };
        });

        await enviarDados();
      };
      reader.readAsText(arquivoSelecionado);
    } else {
      toast.update(toastId, {
        render: "Tipo de arquivo não suportado. Use .csv ou .xml",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

  return (
    <main className="p-4">
      <input
        type="file"
        accept=".csv,.xml"
        onChange={handleArquivoSelecionado}
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
      />

      <button
        onClick={handleImportar}
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mt-3"
      >
        Importar
      </button>

      <h1 className="text-lg font-semibold mt-6 mb-2">Importações realizadas</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <GridImportados data={arquivosImportados} />
      </div>

      <ToastContainer position="top-right" />
    </main>
  );
}
