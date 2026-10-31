
"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Search } from "lucide-react";

import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { PageHeader, Panel } from "@/app/components/page-header";
import { TransacoesTable } from "@/app/components/transacoes-table";

import {
  agenciasSuspeitas,
  brl,
  contasSuspeitas,
  transacoesSuspeitas,
  type ContaSuspeita,
} from "@/app/lib/mock-data";

import { getAnoMes, getTransacaoAgenciaSuspeita, getTransacaoContaSuspeita, getTransacaoSuspeita } from "@/app/services/api";
import { toast } from "sonner";
import { IMovimentacao, ITransacao } from "@/app/types/transacao";
import { MesAno } from "@/app/types/arquivo";

export default function Suspeitas() {
  const [comp, setComp] = useState("");
  const [busca, setBusca] = useState("");
  const [competencias, setCompetencias] = useState<MesAno[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [transacoesSuspeitas, setTransacoesSuspeitas] = useState<ITransacao[]>([]);
  const [contasSuspeitas, setContasSuspeitas] = useState<IMovimentacao[]>([]);
  const [agenciasSuspeitas, setAgenciasSuspeitas] = useState<IMovimentacao[]>([]);

  const { data: session } = useSession();
  const token = session?.user.accessToken;


  useEffect(() => {
    if (!token) return;

    let isMounted = true;

    getAnoMes(token)
      .then((data: MesAno[]) => {
        if (isMounted) {
          setCompetencias(data);
        }
      })
      .catch((error: unknown) => {
        if (isMounted) {
          toast.error(
            error instanceof Error
              ? error.message
              : "Não foi possível carregar as competências."
          );
        }
      })
      .finally(() => {
        if (isMounted) {
          setCarregando(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [token]);

  async function fetchInfos() {
    if (!token) return;

    try {
      const data = await getTransacaoSuspeita(token, comp);
      setTransacoesSuspeitas(data);
      setBusca(comp);
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Não foi possível carregar as transações suspeitas.",
      );
    }
  }
  function buscar() {
    // setBusca(comp);
  }

  return (
    <>
      <PageHeader
        title="Suspeitas"
        description={
          busca
            ? `Resultados para ${busca}`
            : "Escolha uma competência para analisar."
        }
        actions={
          <div className="flex w-full gap-2 sm:w-auto">
            <Select
              value={comp}
              onValueChange={setComp}
              disabled={carregando || competencias.length === 0}
            >
              <SelectTrigger className="w-full bg-card sm:w-56">
                <SelectValue
                  placeholder={
                    carregando
                      ? "Carregando competências..."
                      : "Selecione a competência"
                  }
                />
              </SelectTrigger>

              <SelectContent>
                {competencias.map((c) => (
                  <SelectItem key={c.mesAno} value={c.anoMes}>
                    {c.mesAno}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button disabled={!comp} onClick={fetchInfos}>
              <Search />
              Buscar
            </Button>
          </div>
        }
      />



      <div className="space-y-6">
        <Panel title="Transações suspeitas">
          <TransacoesTable
            data={busca ? transacoesSuspeitas : []}
            destaque="destructive"
          />
        </Panel>

        <div className="grid gap-6 lg:grid-cols-2">
          <Panel title="Contas suspeitas">
            <MovTable data={busca ? contasSuspeitas : []} conta />
          </Panel>

          <Panel title="Agências suspeitas">
            <MovTable data={busca ? agenciasSuspeitas : []} />
          </Panel>
        </div>
      </div>
    </>
  );
}

function MovTable({
  data,
  conta,
}: {
  data: ContaSuspeita[];
  conta?: boolean;
}) {
  if (!data.length) {
    return (
      <p className="p-8 text-center text-sm text-muted-foreground">
        Nenhum resultado ainda.
      </p>
    );
  }

  return (
    <ul className="divide-y">
      {data.map((d, i) => (
        <li
          key={i}
          className="flex items-center justify-between gap-3 px-4 py-3 sm:px-5"
        >
          <div className="min-w-0">
            <p className="truncate text-sm font-medium">{d.banco}</p>
            <p className="text-xs text-muted-foreground">
              Agência {d.agencia}
              {conta && d.conta ? ` · Conta ${d.conta}` : ""}
            </p>
          </div>

          <div className="shrink-0 text-right">
            <p className="text-sm font-semibold tabular-nums">
              {brl(d.valor)}
            </p>
            <Badge
              variant={d.tipo === "Entrada" ? "default" : "secondary"}
              className="mt-1"
            >
              {d.tipo}
            </Badge>
          </div>
        </li>
      ))}
    </ul>
  );
}
