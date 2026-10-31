'use client';

import { AlertTriangle, ArrowUpRight, FileUp, Landmark, Search, Wallet } from "lucide-react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/app/components/ui/chart";
import { PageHeader, Panel } from "@/app/components/page-header";
import { Badge } from "@/app/components/ui/badge";
import { agenciasSuspeitas, brl, importacoes, transacoesSuspeitas, volumeMensal } from "@/app/lib/mock-data";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { getArquivo, getDashboard, getDashboard2 } from "@/app/services/api";
import { toast } from "sonner";
import { Importacao, MesAno } from "@/app/types/arquivo";
import { dashboard2, IDashboard, testandoType } from "@/app/types/transacao";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { Button } from "@/app/components/ui/button";


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
  const totalSuspeito = transacoesSuspeitas.reduce((s, t) => s + t.valor, 0);
  const [dashboard2, setDashboard2] = useState<dashboard2>()

 
  useEffect(() => {
    if (!token) return;
    const accessToken = token;

    let isMounted = true;

    async function carregarDados() {
      const resultados = await Promise.allSettled([
        getArquivo(accessToken),
        getDashboard(accessToken),
        getDashboard2(accessToken),
      ]);

      if (!isMounted) return;

      // Últimos arquivos
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

    }

    carregarDados();

    return () => {
      isMounted = false;
    };
  }, [token]);

  const kpis = [
    { label: "Importações", value: String(dashboard2?.quantidadeImportacao), hint: "+3 esta semana", icon: FileUp },
    { label: "Transações suspeitas", value: String(dashboard2?.quantidadeTransacaoSuspeita  ), hint: "Outubro/2025", icon: AlertTriangle },
    { label: "Valor suspeito", value: brl(dashboard2?.totalValorSuspeito ?? 0), hint: "no mês", icon: Wallet },
    { label: "Agências em alerta", value: String(agenciasSuspeitas.length), hint: "4 bancos", icon: Landmark },
  ];

  return (
    <>
      <PageHeader title="Dashboard" description="Resumo das movimentações e alertas recentes." />
      {/* <div className="flex w-full mb-2 sm:w-auto">
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

      </div> */}
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
            {[...transacoesSuspeitas].sort((a, b) => b.valor - a.valor).slice(0, 5).map((t, idx) => (
              <li key={idx} className="flex items-center justify-between gap-3 px-4 py-3 sm:px-5">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{t.bancoOrigem} → {t.bancoDestino}</p>
                  <p className="text-xs text-muted-foreground">Ag. {t.agenciaOrigem} · Conta {t.contaOrigem}</p>
                </div>
                <Badge variant="destructive" className="shrink-0">{brl(t.valor)}</Badge>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </>
  );
}
