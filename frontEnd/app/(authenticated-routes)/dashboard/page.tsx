'use client';

import { AlertTriangle, ArrowUpRight, ChevronDown, FileUp, Filter, Landmark, RotateCcw, Search, Wallet } from "lucide-react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/app/components/ui/chart";
import { PageHeader, Panel } from "@/app/components/page-header";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { agenciasSuspeitas, brl, transacoesSuspeitas } from "@/app/lib/mock-data";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { getArquivo, getBancosParaAdministracao, getDashboard, getDashboard2, getTop5Transacao } from "@/app/services/api";
import { toast } from "sonner";
import { Importacao } from "@/app/types/arquivo";
import { dashboard2, IDashboard, ITransacao } from "@/app/types/transacao";
import { Input } from "@/app/components/ui/input";

import { Field } from "@/app/components/ui/field";
import { BancoDTO } from "@/app/types/banco";


const config = {
  total: { label: "Movimentado", color: "var(--chart-1)" },
  suspeito: { label: "Suspeito", color: "var(--chart-3)" },
  valor: { label: "Valor", color: "var(--chart-2)" },


} satisfies ChartConfig;

export default function Dashboard() {

  const { data: session } = useSession();
  const token = session?.user.accessToken;

  const [ultimosArquivos, setUltimosArquivos] = useState<Importacao[]>([])
  const [dashboard, setDashboard] = useState<IDashboard[]>([]);
  const [dashboard2, setDashboard2] = useState<dashboard2>()
  const [top5Transacao, setTop5Transacao] = useState<ITransacao[]>([])
  const [bancos, setBancos] = useState<BancoDTO[]>([])
  const [dataInicio, setDataInicio] = useState<string>()
  const [dataFim, setDataFim] = useState<string>()

  useEffect(() => {
    if (!token) return;
    const accessToken = token;

    let isMounted = true;

    async function carregarDados() {
      const resultados = await Promise.allSettled([
        getArquivo(accessToken),
        getDashboard(accessToken),
        getDashboard2(accessToken),
        getTop5Transacao(accessToken),
        getBancosParaAdministracao(accessToken, { somenteAtivos: true })
      ]);

      if (!isMounted) return;
      const arquivos = resultados[0];
      if (arquivos.status === "fulfilled") {
        if (Array.isArray(arquivos.value)) {
          setUltimosArquivos(arquivos.value);
        } else {
          toast.error("A resposta da lista de arquivos é inválida.");
        }
      } else {
        toast.error("Não foi possível carregar os últimos arquivos.");
      }

      const dashboardResult = resultados[1];
      if (dashboardResult.status === "fulfilled") {
        setDashboard(dashboardResult.value.slice(-6));
      } else {
        toast.error("Não foi possível carregar os dados do dashboard.");
      }

      const dashboardDetailsResult = resultados[2];
      if (dashboardDetailsResult.status === "fulfilled") {
        setDashboard2(dashboardDetailsResult.value);
      } else {
        toast.error("Não foi possível carregar os indicadores do dashboard.");
      }
      const top5TransacaoResult = resultados[3];
      if (top5TransacaoResult.status === "fulfilled") {
        setTop5Transacao(top5TransacaoResult.value);
      } else {
        toast.error("Não foi possível carregar os indicadores do dashboard.");
      }
      const bancosAtivos = resultados[4];
      if (bancosAtivos.status === "fulfilled") {
        setBancos(bancosAtivos.value);
      } else {
        toast.error("Não foi possível carregar os bancos.");
      }

    }

    carregarDados();

    return () => {
      isMounted = false;
    };
  }, [token]);

  const kpis = [
    { label: "Importações", value: String(dashboard2?.quantidadeImportacao), hint: "+3 esta semana", icon: FileUp },
    { label: "Transações suspeitas", value: String(dashboard2?.quantidadeTransacaoSuspeita), hint: "Outubro/2025", icon: AlertTriangle },
    { label: "Valor suspeito", value: brl(dashboard2?.totalValorSuspeito ?? 0), hint: "no mês", icon: Wallet },
    { label: "Agências em alerta", value: String(agenciasSuspeitas.length), hint: "4 bancos", icon: Landmark },
  ];

  return (
    <>
      <PageHeader title="Dashboard" description="Resumo das movimentações e alertas recentes." />
      <Panel>
        <details className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 [&::-webkit-details-marker]:hidden sm:px-5">
            <span className="flex items-center gap-2 text-base font-semibold">
              <Filter className="h-4 w-4" aria-hidden="true" />
              Filtros
            </span>
            <ChevronDown
              className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <form
            className="grid gap-4 border-t p-4 sm:grid-cols-3 sm:px-5"
            onSubmit={(event) => event.preventDefault()}
          >
            <Field label="Data início">
              <Input type="date" onChange={(e) => setDataInicio(e.target.value)} />
            </Field>
            <Field label="Data fim">
              <Input type="date" onChange={(e) => setDataFim(e.target.value)} />
            </Field>
            <Field label="Banco">
              <select
                defaultValue=""
                className="flex h-9 w-full rounded-md border border-input bg-card px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                <option value="">Todos os bancos</option>
                {bancos.map((banco) => (
                  <option key={banco.ISPB} value={banco.ISPB}>
                    {banco.nomeCurto.trim()}
                  </option>
                ))}
              </select>
            </Field>
            <div className="flex flex-wrap justify-end gap-2 sm:col-span-3">
              <Button type="reset" variant="outline">
                <RotateCcw aria-hidden="true" onClick={() => { setDataInicio(""), setDataFim("") }} />
                Limpar filtros
              </Button>
              <Button type="submit" onClick={() => { console.log(dataInicio + '--->' + dataFim) }}>
                <Search aria-hidden="true" />
                Buscar
              </Button>
            </div>
          </form>
        </details>
      </Panel>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map((k) => (
          <div key={k.label} className="rounded-xl border bg-card p-5 shadow-card">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{k.label}</span>
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-accent text-accent-foreground">
                <k.icon className="h-4 w-4" />
              </div>
            </div>
            <p className="mt-3 truncate font-display text-2xl font-semibold">{k.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{k.hint}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Panel title="Volume movimentado x suspeito">
            <div className="p-4">
              <ChartContainer config={config} className="h-64 w-full">
                <AreaChart data={dashboard}>
                  <CartesianGrid vertical={false} />
                  <XAxis dataKey="mesAno" tickLine={false} axisLine={false} />
                  <YAxis tickLine={false} axisLine={false} width={48} tickFormatter={(v) => `${v / 1000}k`} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area dataKey="totalTransacionado" type="monotone" stroke="var(--color-total)" fill="var(--color-total)" fillOpacity={0.15} />
                  <Area dataKey="totalSuspeito" type="monotone" stroke="var(--color-suspeito)" fill="var(--color-suspeito)" fillOpacity={0.2} />
                </AreaChart>
              </ChartContainer>
            </div>
          </Panel>
        </div>
        <Panel title="Suspeitas por banco de origem">
          <div className="p-4">
            <ChartContainer config={config} className="h-64 w-full">
              <BarChart data={dashboard2?.bancoSuspeitos} layout="vertical" margin={{ left: 8 }}>
                <XAxis type="number" hide />
                <YAxis type="category" dataKey="nomeBanco" tickLine={false} axisLine={false} width={80} fontSize={11} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="valorSuspeito" fill="var(--color-valor)" radius={6} />
              </BarChart>
            </ChartContainer>
          </div>
        </Panel>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Panel title="Últimas importações" actions={<Link href="/importacao" className="text-sm font-medium text-primary">Ver todas</Link>}>
          <ul className="divide-y">

            {ultimosArquivos.slice(-5).reverse().map((i) => (
              <li key={i.id}>
                <Link href={`/importacao/${i.id}`} className="flex items-center justify-between gap-3 px-4 py-3 hover:bg-muted sm:px-5">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">{i.dataImportacao}</p>
                    <p className="text-xs text-muted-foreground">Transações de {i.dataTransacao} · {i.usuario.usuario}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground" />
                </Link>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel title="Maiores transações suspeitas" actions={<Link href="/suspeita" className="text-sm font-medium text-primary">Analisar</Link>}>
          <ul className="divide-y">
            {top5Transacao.map((t, i) => (
              <li key={i} className="flex items-center justify-between gap-3 px-4 py-3 sm:px-5">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{t.bancoOrigem} → {t.bancoDestino}</p>
                  <p className="text-xs text-muted-foreground">Ag. {t.agenciaOrigem} · Conta {t.contaOrigem}</p>
                </div>
                <Badge variant="destructive" className="shrink-0">{brl(t.valorTransacao)}</Badge>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </>
  );
}
