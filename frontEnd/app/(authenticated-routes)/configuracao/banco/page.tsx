"use client";

import { useEffect, useMemo, useState } from "react";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { Landmark, Search } from "lucide-react";

import { PageHeader, Panel } from "@/app/components/page-header";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { SearchableSelect } from "@/app/components/ui/searchable-select";
import {
  atualizarStatusBanco,
  getBancosParaAdministracao,
  type BancoDTO,
} from "@/app/services/api";
import { Avatar } from "@/app/components/ui/avatar";

const filtrosStatus = [
  { value: "todos", label: "Todos os status" },
  { value: "ativos", label: "Ativos" },
  { value: "inativos", label: "Inativos" },
];

function normalizarBusca(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase();
}

function chaveBanco(banco: BancoDTO) {
  return `${banco.numeroBanco}-${banco.ISPB}-${banco.cnpj}`;
}

export default function BancosPage() {
  const { data: session, status: statusSessao } = useSession();
  const token = session?.user.accessToken;
  const [bancos, setBancos] = useState<BancoDTO[]>([]);
  const [busca, setBusca] = useState("");
  const [filtroStatus, setFiltroStatus] = useState("todos");
  const [erroCarregamento, setErroCarregamento] = useState<{
    token: string;
    mensagem: string;
  } | null>(null);
  const [atualizando, setAtualizando] = useState<string | null>(null);

  const erro = !token
    ? statusSessao === "loading"
      ? null
      : "Sua sessão expirou. Entre novamente para consultar os bancos."
    : erroCarregamento?.token === token
      ? erroCarregamento.mensagem
      : null;

  useEffect(() => {
    if (statusSessao === "loading" || !token) return;

    let ativo = true;
    const accessToken = token;

    getBancosParaAdministracao(accessToken)
      .then((resultado) => {
        if (!Array.isArray(resultado)) {
          throw new Error("A resposta da lista de bancos é inválida.");
        }
        if (ativo) {
          setBancos(resultado);

          setErroCarregamento(null);
        }
      })
      .catch((error: unknown) => {
        if (!ativo) return;
        const mensagem =
          error instanceof Error
            ? error.message
            : "Não foi possível carregar os bancos.";
        console.error("Não foi possível carregar os bancos:", error);
        toast.error(mensagem);
      })

    return () => {
      ativo = false;
    };
  }, [statusSessao, token]);

  const bancosFiltrados = useMemo(() => {
    const termo = normalizarBusca(busca.trim());
    return bancos
      .filter((banco) => {
        if (filtroStatus === "ativos" && !banco.status) return false;
        if (filtroStatus === "inativos" && banco.status) return false;
        if (!termo) return true;

        return normalizarBusca(
          [
            banco.numeroBanco,
            banco.ISPB,
            banco.cnpj,
            banco.nomeLongo,
            banco.nomeCurto,
          ].join(" "),
        ).includes(termo);
      })
      .sort((a, b) => a.nomeLongo.localeCompare(b.nomeLongo, "pt-BR"));
  }, [bancos, busca, filtroStatus]);

  async function alterarStatus(banco: BancoDTO) {
    if (!token) {
      toast.error("Sua sessão expirou. Entre novamente.");
      return;
    }

    const chave = chaveBanco(banco);
    const novoStatus = !banco.status;
    setAtualizando(chave);
    try {
      const atualizado = await atualizarStatusBanco(token, banco, novoStatus);
      setBancos((atuais) =>
        atuais.map((item) =>
          chaveBanco(item) === chave ? atualizado : item,
        ),
      );
      toast.success(
        `${banco.nomeCurto || banco.nomeLongo} ${novoStatus ? "ativado" : "desativado"
        }.`,
      );
    } catch (error) {
      console.error("Não foi possível atualizar o status do banco:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Não foi possível atualizar o status do banco.",
      );
    } finally {
      setAtualizando(null);
    }
  }

  const totalAtivos = bancos.filter((banco) => banco.status).length;

  return (
    <>
      <PageHeader
        title="Bancos"
        description="Pesquise os bancos e controle quais ficam disponíveis."
      />

      <Panel
        title="Instituições financeiras"
        actions={

          <span className="text-sm text-muted-foreground">
            {totalAtivos} de {bancos.length} ativos
          </span>

        }
      >
        <div className="grid gap-4 border-b p-4 sm:grid-cols-[minmax(0,1fr)_13rem] sm:items-end sm:px-5">
          <div className="space-y-2">
            <Label htmlFor="busca-bancos">Buscar banco</Label>
            <div className="relative">
              <Search
                aria-hidden="true"
                className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              />
              <Input
                className="bg-card pl-9"
                id="busca-bancos"
                onChange={(event) => setBusca(event.target.value)}
                placeholder="Nome, código, ISPB ou CNPJ"
                type="search"
                value={busca}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="filtro-status-bancos">Status</Label>
            <SearchableSelect
              id="filtro-status-bancos"
              onValueChange={setFiltroStatus}
              options={filtrosStatus}
              placeholder="Filtrar por status"
              searchPlaceholder="Pesquisar status..."
              value={filtroStatus}
            />
          </div>
        </div>

        {
          bancosFiltrados.length === 0 ? (
            <p className="p-8 text-center text-sm text-muted-foreground">
              Nenhum banco encontrado.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] text-left text-sm">
                <thead className="bg-muted/50 text-xs uppercase text-muted-foreground">
                  <tr>
                    <th className="px-5 py-3 font-medium">Banco</th>
                    <th className="px-5 py-3 font-medium">Código</th>
                    <th className="px-5 py-3 font-medium">ISPB</th>
                    <th className="px-5 py-3 font-medium">CNPJ</th>
                    <th className="px-5 py-3 text-right font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {bancosFiltrados.map((banco) => {
                    const chave = chaveBanco(banco);
                    const atualizandoBanco = atualizando === chave;
                    return (
                      <tr className="transition-colors hover:bg-muted/30" key={chave}>
                        <td className="px-5 py-4">
                          <div className="flex min-w-0 items-center gap-3">
                            {
                              <Avatar
                                className="h-16 w-16"
                                src={banco.LogoUrl ?? banco.LogoUrl ?? undefined}
                                alt="Foto de perfil"
                                fallback={
                                  <span className="bg-primary text-xs text-primary-foreground">
                                    {(banco.nomeLongo ?? banco.nomeLongo ?? "U")
                                      .split(/\s+/)
                                      .filter(Boolean)
                                      .slice(0, 2)
                                      .map((part) => part[0])
                                      .join("")
                                      .toUpperCase()}
                                  </span>
                                }
                              />

                            }
                            <span className="min-w-0">
                              <span className="block truncate font-medium">
                                {banco.nomeLongo}
                              </span>
                              <span className="block truncate text-xs text-muted-foreground">
                                {banco.nomeCurto}
                              </span>
                            </span>
                          </div>
                        </td>
                        <td className="px-5 py-4 font-mono">{banco.numeroBanco}</td>
                        <td className="px-5 py-4 font-mono">{banco.ISPB}</td>
                        <td className="px-5 py-4 font-mono">{banco.cnpj}</td>
                        <td className="px-5 py-4">
                          <div className="flex items-center justify-end gap-3">
                            <span className="w-14 text-right text-xs text-muted-foreground">
                              {atualizandoBanco
                                ? "Salvando..."
                                : banco.status
                                  ? "Ativo"
                                  : "Inativo"}
                            </span>
                            <button
                              aria-checked={banco.status}
                              aria-label={`${banco.status ? "Desativar" : "Ativar"} ${banco.nomeLongo}`}
                              className={[
                                "relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
                                banco.status ? "bg-primary" : "bg-input",
                              ].join(" ")}
                              disabled={atualizandoBanco}
                              onClick={() => void alterarStatus(banco)}
                              role="switch"
                              type="button"
                            >
                              <span
                                className={[
                                  "inline-block size-4 rounded-full bg-white shadow transition-transform",
                                  banco.status ? "translate-x-6" : "translate-x-1",
                                ].join(" ")}
                              />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <p className="border-t px-5 py-3 text-xs text-muted-foreground">
                Exibindo {bancosFiltrados.length} de {bancos.length} bancos.
              </p>
            </div>
          )}
      </Panel>
    </>
  );
}
