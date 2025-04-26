"use client";
import GridImportacao from "@/app/components/gridImportacao";
import { ITransacaoDetalhe } from "@/app/interfaces/ITransacaoDetalhe";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ImportacaoId() {
  const [transacaoDetalhe, setTransacaoDetalhe] = useState<ITransacaoDetalhe>();
  const params = useParams<{ id: string }>();
  const { data: session } = useSession();
  const token = session?.user?.accessToken;

  async function fetchData() {
    const response = await fetch(`http://192.168.0.135:8080/arquivo/${params.id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Erro na requisição");
    }

    const data = await response.json();
    setTransacaoDetalhe(data);
  }

  useEffect(() => {
    if (token) fetchData();
  }, [token]);

  return (
    <main className="flex flex-col gap-2 p-4">
      <h2 className="text-lg font-semibold">Detalhes da Importação</h2>

      <label>Importado em:</label>
      <input
        type="text"
        className="w-full md:w-3/12 rounded-md"
        value={transacaoDetalhe?.dataImportacao.toString() || ""}
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
        value={transacaoDetalhe?.dataTransacao.toString() || ""}
        disabled
      />
      <GridImportacao data={transacaoDetalhe?.transacao||[]}/>
    </main>
  );
}
