'use client';

import { useEffect, useState, useCallback } from "react";
import { useSession } from "next-auth/react";

import GridImportacao from "@/app/components/gridImportacao";
import GridSuspeita from "@/app/components/gridSuspeita";

import { IMovimentacao } from "@/app/interfaces/Imovimentacao";
import { ITransacao } from "@/app/interfaces/ITransacao";

import {
  getDatasTransacao,
  getTransacaoAgenciaSuspeita,
  getTransacaoContaSuspeita,
  getTransacaoSuspeita,
} from "@/libs/fetchsApi";

const formatCompetencia = (yyyymm: string): string => {
  const ano = yyyymm.slice(0, 4);
  const mes = yyyymm.slice(4, 6);
  const nomesMeses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  return `${nomesMeses[parseInt(mes) - 1]}/${ano}`;
};

export default function Suspeita() {
  const [transacoesSuspeitas, setTransacoesSuspeitas] = useState<ITransacao[]>([]);
  const [contasSuspeitas, setContasSuspeitas] = useState<IMovimentacao[]>([]);
  const [agenciasSuspeitas, setAgenciasSuspeitas] = useState<IMovimentacao[]>([]);

  const [competencia, setCompetencia] = useState<string>("");
  const [competenciasDisponiveis, setCompetenciasDisponiveis] = useState<string[]>([]);

  const { data: session, status } = useSession();

  useEffect(() => {
    const carregarDatas = async () => {
      if (status !== 'authenticated') return;
      const datas = await getDatasTransacao(session?.user?.accessToken);
      setCompetenciasDisponiveis(datas || []);
    };

    carregarDatas();
  }, [status, session]);

  const fetchSuspeitas = useCallback(async () => {
    if (!session?.user?.accessToken || !competencia) return;

    try {
      const [
        transacaoSuspeita,
        contaSuspeita,
        agenciaSuspeita
      ] = await Promise.all([
        getTransacaoSuspeita(session.user.accessToken, competencia),
        getTransacaoContaSuspeita(session.user.accessToken, competencia),
        getTransacaoAgenciaSuspeita(session.user.accessToken, competencia)
      ]);

      setTransacoesSuspeitas(transacaoSuspeita || []);
      setContasSuspeitas(contaSuspeita || []);
      setAgenciasSuspeitas(agenciaSuspeita || []);
    } catch (error) {
      console.error("Erro ao buscar dados suspeitos:", error);
    }
  }, [session, competencia]);

  return (
    <main className="p-4">
      {/* Seletor de Competência */}
      <div className="flex flex-col sm:flex-row sm:items-start mb-6 gap-4">
        <select
          value={competencia}
          onChange={(e) => setCompetencia(e.target.value)}
          className="border border-gray-300 rounded-md p-2"
        >
          <option value="">Selecione uma competência</option>
          {competenciasDisponiveis.map((comp) => (
            <option key={comp} value={comp}>
              {formatCompetencia(comp)}
            </option>
          ))}
        </select>

        <button
          onClick={fetchSuspeitas}
          disabled={!competencia}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Buscar
        </button>
      </div>

      {/* Grid Transações Suspeitas */}
      {
        transacoesSuspeitas.length > 0 ?
          <section className="mb-8">
            <h1 className="text-xl font-bold mb-2">Transações Suspeitas</h1>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <GridImportacao data={transacoesSuspeitas} />
            </div>
          </section>
          : null
      }
      {/* Grid Contas Suspeitas */}
      {
        contasSuspeitas.length > 0 ?
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-2">Contas Suspeitas</h2>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <GridSuspeita data={contasSuspeitas} />
            </div>
          </section>
          : null
      }
      {/* Grid Agências Suspeitas */}
      {
        agenciasSuspeitas.length > 0 ?

          <section>
            <h2 className="text-xl font-bold mb-2">Agências Suspeitas</h2>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <GridSuspeita data={agenciasSuspeitas} />
            </div>
          </section>
          : null
      }
    </main>
  );
}
