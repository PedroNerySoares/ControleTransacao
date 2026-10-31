"use client";

import { PageHeader, Panel } from "@/app/components/page-header";
import { Button } from "@/app/components/ui/button";

import { brl } from "@/app/lib/mock-data";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { ArrowLeft, CalendarDays, Clock, User } from "lucide-react";
import { TransacoesTable } from "@/app/components/transacoes-table";
import { getArquivoId } from "@/app/services/api";
import { toast } from "sonner";
import { ArquivoDetalhe } from "@/app/types/arquivo";

export default function ImportacaoDetalhe() {

  const params = useParams<{ id: string }>();

 const { data: session } = useSession();
 const token = session?.user.accessToken;

  const [dadosArquivo, setDadosArquivo] = useState<ArquivoDetalhe>()
  // const imp = importacoes.find((i) => String(i.id) === params.id) ?? importacoes[0]!;
  const total = dadosArquivo?.transacao.reduce((s, t) => s + t.valorTransacao, 0);

  useEffect(() => {
    if (!token) return;

    let isMounted = true;

    getArquivoId(token, Number(params.id)).then((data: ArquivoDetalhe) => {

      if (isMounted) setDadosArquivo(data);
    }).catch((error: unknown) => {
      if (isMounted) {
        toast.error(error instanceof Error ? error.message : "Não foi possível os dados do aquivo.");
      }
    });

    return () => {
      isMounted = false;
    };
  }, [params.id, token]);
  const info = [
    { label: "Importado em", value: dadosArquivo?.dataImportacao, icon: Clock },
    { label: "Importado por", value: dadosArquivo?.usuario.usuario, icon: User },
    { label: "Data da transação", value: dadosArquivo?.dataTransacao, icon: CalendarDays },
  ];
  return (
    <>
      <Button asChild variant="ghost" size="sm" className="mb-3 -ml-2">
        <Link href="/importacao"><ArrowLeft /> Voltar</Link>
      </Button>
      <PageHeader title="Detalhes da importação" description={`${dadosArquivo?.transacao.length} transações · ${(total)} movimentados`} />

      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        {info.map((i) => (
          <div key={i.label} className="flex items-center gap-3 rounded-xl border bg-card p-4 shadow-card">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent text-accent-foreground">
              <i.icon className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground">{i.label}</p>
              <p className="truncate font-semibold">{i.value}</p>
            </div>
          </div>
        ))}
      </div>

      <Panel title="Transações">
        <TransacoesTable data={dadosArquivo?.transacao ?? []} />
      </Panel>
    </>
  )
}
