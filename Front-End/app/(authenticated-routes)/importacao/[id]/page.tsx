"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import { ITransacaoDetalhe } from "@/app/interfaces/ITransacaoDetalhe";
import { getArquivoDetalhes } from "@/libs/fetchsApi";  
import GridImportacao from "@/app/components/GridImportacao";


export default function ImportacaoId() {
  const [transacaoDetalhe, setTransacaoDetalhe] = useState<ITransacaoDetalhe>();
  const params = useParams<{ id: string }>();
  const { data: session, status } = useSession();
  const token = session?.user?.accessToken;

  useEffect(() => {
    const carregarDetalhes = async () => {
      if (token && params.id) {
        try {
          const response = await getArquivoDetalhes(token, params.id);
          const data = await response.json();
          setTransacaoDetalhe(data);
        } catch (error) {
          console.error("Erro ao buscar detalhes do arquivo:", error);
        }
      }
    };

    if (status === "authenticated") {
      carregarDetalhes();
    }
  }, [token, params.id, status]);

  return (
    <main className="flex flex-col gap-2 p-4">
      <h2 className="text-lg font-semibold">Detalhes da Importação</h2>

      <label>Importado em:</label>
      <input
        type="text"
        className="w-full md:w-3/12 rounded-md"
        value={transacaoDetalhe?.dataImportacao?.toString() || ""}
        disabled
      />

      <label>Importado por:</label>
      <input
        type="text"
        className="w-full md:w-3/12 rounded-md"
        value={transacaoDetalhe?.usuario || ""}
        disabled
      />

      <label>Data da transação:</label>
      <input
        type="text"
        className="w-full md:w-3/12 rounded-md"
        value={transacaoDetalhe?.dataTransacao?.toString() || ""}
        disabled
      />
      <GridImportacao data={transacaoDetalhe?.transacao || []} />
    </main>
  );
}
