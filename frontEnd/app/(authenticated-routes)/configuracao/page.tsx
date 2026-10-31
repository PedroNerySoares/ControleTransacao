"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

import { PageHeader, Panel } from "@/app/components/page-header";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import {
  atualizarConfiguracoes,
  getConfiguracoes,
  type ConfiguracoesDTO,
} from "@/app/services/api";
const moedaBRL = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const criterios = [
  {
    id: "transacoes",
    titulo: "Transações suspeitas",
    descricao: "Transações acima deste valor serão consideradas suspeitas.",
  },
  {
    id: "agencias",
    titulo: "Agências suspeitas",
    descricao:
      "Movimentações acima deste valor em uma agência serão consideradas suspeitas.",
  },
  {
    id: "contas",
    titulo: "Contas suspeitas",
    descricao:
      "Movimentações acima deste valor em uma conta serão consideradas suspeitas.",
  },
] as const;

type CriteriosValues = Record<(typeof criterios)[number]["id"], string>;

const valoresIniciais: CriteriosValues = {
  transacoes: "",
  agencias: "",
  contas: "",
};

function formatarMoeda(valor: string) {
  const digitos = valor.replace(/\D/g, "").slice(0, 15);
  if (!digitos) return "";

  return moedaBRL.format(Number(digitos) / 100);
}

export default function Configuracao() {
  const [valores, setValores] = useState<CriteriosValues>(valoresIniciais);
  const [salvando, setSalvando] = useState(false);
  const [tokenCarregado, setTokenCarregado] = useState<string | null>(null);
  const [tokenComErro, setTokenComErro] = useState<string | null>(null);
  const { data: session, status } = useSession();
  const token = session?.user.accessToken;
  const carregando =
    status === "loading" ||
    (!!token && token !== tokenCarregado && token !== tokenComErro);
  const configuracaoCarregada = !!token && tokenCarregado === token;

  useEffect(() => {
    if (status === "loading" || !token) return;

    const accessToken = token;
    let ativo = true;

    async function carregarConfiguracoes() {
      try {
        const configuracoes = await getConfiguracoes(accessToken);
        if (!ativo) return;

        setValores({
          transacoes: formatarMoeda(
            String(Math.round(configuracoes.valorTransacaoSuspeito * 100))
          ),
          agencias: formatarMoeda(
            String(Math.round(configuracoes.valorAgenciaSuspeito * 100))
          ),
          contas: formatarMoeda(
            String(Math.round(configuracoes.valorContaSuspeito * 100))
          ),
        });
        setTokenCarregado(accessToken);
      } catch (error) {
        if (!ativo) return;

        console.error("Não foi possível carregar as configurações:", error);
        toast.error(
          error instanceof Error
            ? error.message
            : "Não foi possível carregar as configurações."
        );
        setTokenComErro(accessToken);
      }
    }

    carregarConfiguracoes();

    return () => {
      ativo = false;
    };
  }, [status, token]);

  function atualizarValor(id: keyof CriteriosValues, valor: string) {
    setValores((atuais) => ({ ...atuais, [id]: formatarMoeda(valor) }));
  }

  async function salvar(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!configuracaoCarregada) {
      toast.error("Carregue as configurações antes de salvá-las.");
      return;
    }

    const paraNumero = (valor: string) =>
      Number(valor.replace(/\D/g, "")) / 100;
    const configuracoes: ConfiguracoesDTO = {
      valorTransacaoSuspeito: paraNumero(valores.transacoes),
      valorAgenciaSuspeito: paraNumero(valores.agencias),
      valorContaSuspeito: paraNumero(valores.contas),
    };

    if (
      Object.values(configuracoes).some(
        (valor) => !Number.isFinite(valor) || valor < 0.01
      )
    ) {
      toast.error("Informe valores iguais ou superiores a R$ 0,01.");
      return;
    }

    setSalvando(true);
    try {
      await atualizarConfiguracoes(token, configuracoes);
      toast.success("Configurações atualizadas.");
    } catch (error) {
      console.error("Não foi possível atualizar as configurações:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Não foi possível atualizar as configurações."
      );
    } finally {
      setSalvando(false);
    }
  }

  return (
    <>
      <PageHeader
        title="Configurações"
        description="Defina os valores para identificar movimentações suspeitas."
      />

      <Panel title="Critérios de suspeita">
        <form onSubmit={salvar}>
          <div className="grid gap-6 p-4 sm:grid-cols-2 sm:p-5">
            {criterios.map((criterio) => (
              <div className="space-y-2" key={criterio.id}>
                <Label htmlFor={criterio.id}>{criterio.titulo}</Label>
                <p
                  className="min-h-10 text-sm text-muted-foreground"
                  id={`${criterio.id}-descricao`}
                >
                  {criterio.descricao}
                </p>
                <Input
                  aria-describedby={`${criterio.id}-descricao`}
                  autoComplete="off"
                  id={criterio.id}
                  inputMode="numeric"
                  disabled={carregando || !configuracaoCarregada || salvando}
                  onChange={(event) =>
                    atualizarValor(criterio.id, event.target.value)
                  }
                  required
                  placeholder="R$ 0,00"
                  type="text"
                  value={valores[criterio.id]}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-end border-t p-4 sm:px-5">
            <Button
              disabled={carregando || !configuracaoCarregada || salvando}
              type="submit"
            >
              {salvando ? "Salvando..." : "Salvar"}
            </Button>
          </div>
        </form>
      </Panel>
    </>
  );
}
