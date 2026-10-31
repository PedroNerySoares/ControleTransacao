import { ArrowRight } from "lucide-react";
import { brl, type Transacao } from "@/app/lib/mock-data";
import { ITransacao } from "../types/transacao";

export function TransacoesTable({ data, destaque = "success" }: { data: ITransacao[]; destaque?: "success" | "destructive" }) {
  const valorCls = destaque === "success" ? "text-success" : "text-destructive";
  if (!data) return <p className="p-8 text-center text-sm text-muted-foreground">Nenhuma transação encontrada.</p>;
  return (
    <>

      <ul className="divide-y md:hidden">
        {data.map((t, i) => (
          <li key={i} className="space-y-2 p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase text-muted-foreground">Valor</span>
              <span className={`font-semibold ${valorCls}`}>{(t.valorTransacao)}</span>
            </div>
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 text-sm">
              <div className="min-w-0">
                <p className="truncate font-medium">{t.bancoOrigem}</p>
                <p className="text-xs text-muted-foreground">Ag {t.agenciaOrigem} · {t.contaOrigem}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
              <div className="min-w-0 text-right">
                <p className="truncate font-medium">{t.bancoDestino}</p>
                <p className="text-xs text-muted-foreground">Ag {t.agenciaDestino} · {t.contaDestino}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {/* Desktop: tabela */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full text-sm">
          <thead className="bg-muted text-xs uppercase text-muted-foreground">
            <tr>
              <th colSpan={3} className="border-r px-4 pt-3 pb-1 text-left font-semibold">Origem</th>
              <th colSpan={3} className="border-r px-4 pt-3 pb-1 text-left font-semibold">Destino</th>
              <th rowSpan={2} className="px-4 text-right font-semibold">Valor</th>
            </tr>
            <tr>
              <th className="px-4 pb-3 text-left font-medium">Banco</th>
              <th className="px-4 pb-3 text-left font-medium">Agência</th>
              <th className="border-r px-4 pb-3 text-left font-medium">Conta</th>
              <th className="px-4 pb-3 text-left font-medium">Banco</th>
              <th className="px-4 pb-3 text-left font-medium">Agência</th>
              <th className="border-r px-4 pb-3 text-left font-medium">Conta</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {data.map((t, i) => (
              <tr key={i} className="hover:bg-muted/60">
                <td className="px-4 py-3 font-medium">{t.bancoOrigem}</td>
                <td className="px-4 py-3 tabular-nums">{t.agenciaOrigem}</td>
                <td className="border-r px-4 py-3 tabular-nums">{t.contaOrigem}</td>
                <td className="px-4 py-3 font-medium">{t.bancoDestino}</td>
                <td className="px-4 py-3 tabular-nums">{t.agenciaDestino}</td>
                <td className="border-r px-4 py-3 tabular-nums">{t.contaDestino}</td>
                <td className={`px-4 py-3 text-right font-semibold tabular-nums ${valorCls}`}>{(t.valorTransacao)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
