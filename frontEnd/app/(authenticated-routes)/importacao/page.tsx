"use client";

import { useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
// import Papa from "papaparse";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import GridImportados from "@/app/components/GridImportados";
// import { getArquivo } from "@/libs/fetchsApi";
// import { IArquivos } from "@/app/interfaces/IArquivos";
// import { ITransacao } from "@/app/interfaces/ITransacao";
import { PageHeader, Panel } from "@/app/components/page-header";
import { Button } from "@/app/components/ui/button";
import { importacoes } from "@/app/lib/mock-data";
import Link from "next/link";
import { ChevronRight, FileSpreadsheet, UploadCloud } from "lucide-react";
import { getArquivo, postArquivo } from "@/app/services/api";
import { Importacao } from "@/app/types/arquivo";
import { toast } from "sonner";

export default function Importacoes() {
  const [file, setFile] = useState<File | null>(null);
  const ref = useRef<HTMLInputElement>(null);
  const { data: session } = useSession();
  const token = session?.user.accessToken;

  const [arquivos, setArquivos] = useState<Importacao[]>([])
  useEffect(() => {
    if (!token) return;

    let isMounted = true;

    getArquivo(token).then((data: Importacao) => {
      if (!Array.isArray(data)) {
        throw new Error("A resposta da lista de usuários é inválida.");
      }
      if (isMounted) setArquivos(data);
    }).catch((error: unknown) => {
      if (isMounted) {
        toast.error(error instanceof Error ? error.message : "Não foi possível carregar os últimos arquivos.");
      }
    });

    return () => {
      isMounted = false;
    };
  }, [token]);

  async function handleImportacao() {
    if (!token || !file) return;

    try {
      const mensagem = await postArquivo(token, file);

      toast.success(mensagem);

      // Atualiza a lista de arquivos após importar
      const data: Importacao[] = await getArquivo(token);

      if (!Array.isArray(data)) {
        throw new Error("A resposta da lista de arquivos é inválida.");
      }

      setArquivos(data);
      setFile(null)

    } catch (error: unknown) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Não foi possível importar os arquivos."
      );
    }
  }
  return (
    <>
      <PageHeader title="Importações" description="Envie um arquivo CSV ou XML de transações para análise." />

      <Panel>
        <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:p-5">
          <button
            type="button"
            onClick={() => ref.current?.click()}
            className="flex min-w-0 flex-1 items-center gap-4 rounded-lg border-2 border-dashed border-input p-4 text-left transition-colors hover:border-primary hover:bg-accent/50"
          >
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent text-accent-foreground">
              {file ? <FileSpreadsheet className="h-5 w-5" /> : <UploadCloud className="h-5 w-5" />}
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">{file ? file.name : "Clique para escolher um arquivo"}</p>
              <p className="text-xs text-muted-foreground">{file ? `${(file.size / 1024).toFixed(1)} KB` : "Formato CSV ou XML"}</p>
            </div>
          </button>
          <input ref={ref} type="file" accept=".csv,.xml" className="hidden" onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
          <Button
            disabled={!file}
            className="sm:h-11 sm:px-6"
            onClick={() => { handleImportacao() }}
          >
            Importar
          </Button>
        </div>
      </Panel>

      <div className="mt-6">
        <Panel title="Importações realizadas">
          <ul className="max-h-[32rem] divide-y overflow-y-auto overscroll-contain md:hidden">
            {importacoes.map((i) => (
              <li key={i.id}>
                <Link href={`/importacao/${i.id}`} className="flex items-center justify-between gap-3 p-4 hover:bg-muted">
                  <div className="min-w-0">
                    <p className="text-sm font-medium">{i.importadoEm}</p>
                    <p className="text-xs text-muted-foreground">Transação: {i.dataTransacao}</p>
                  </div>
                  <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden max-h-[32rem] overflow-auto overscroll-contain md:block">
            <table className="w-full text-sm">
              <thead className="sticky top-0 z-10 bg-muted text-xs uppercase text-muted-foreground">
                <tr>
                  <th className="px-5 py-3 text-left font-semibold">Data de importação</th>
                  <th className="px-5 py-3 text-left font-semibold">Data da transação</th>
                  <th className="px-5 py-3 text-left font-semibold">Importado por</th>
                  <th className="px-5 py-3 text-right font-semibold">Ação</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {arquivos.map((i) => (
                  <tr key={i.id} className="hover:bg-muted/60">
                    <td className="px-5 py-3 font-medium tabular-nums">{i.dataImportacao}</td>
                    <td className="px-5 py-3 tabular-nums">{i.dataTransacao}</td>
                    <td className="px-5 py-3 text-muted-foreground">{i.usuario.usuario}</td>
                    <td className="px-5 py-3 text-right">
                      <Button asChild variant="ghost" size="sm">
                        <Link href={`/importacao/${i.id}`}>Detalhar <ChevronRight /></Link>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
      </div>
    </>
  );
}
