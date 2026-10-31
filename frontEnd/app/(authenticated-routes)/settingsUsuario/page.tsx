"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Avatar } from "@/app/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";

import { PageHeader, Panel } from "@/app/components/page-header";
import type { UsuarioDetails } from "@/app/types/usuario";
import { getMe } from "@/app/services/api";

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`space-y-2 ${className}`}>
      <Label>{label}</Label>
      {children}
    </div>
  );
}

export default function SettingsUsuario() {
  // Dados originais exibidos no perfil
  const [me, setMe] = useState<UsuarioDetails | null>(null);

  // Dados que estão sendo editados no formulário
  const [meUpdate, setMeUpdate] = useState<UsuarioDetails | null>(null);

  const [loading, setLoading] = useState(true);

  const { data: session } = useSession();
  const token = session?.user.accessToken;

  useEffect(() => {
    if (!token) return;
    const accessToken = token;

    async function carregarUsuario() {
      try {
        const response = await getMe(accessToken);
        const data: UsuarioDetails = response;

        setMe(data);
        setMeUpdate(data);
      } catch (error) {
        console.error("Erro ao carregar usuário:", error);
        toast.error(error instanceof Error ? error.message : "Erro ao carregar os dados do perfil.");
      } finally {
        setLoading(false);
      }
    }

    carregarUsuario();
  }, [token]);

  function atualizarCampo<K extends keyof UsuarioDetails>(
    campo: K,
    valor: UsuarioDetails[K]
  ) {
    setMeUpdate((usuarioAtual) =>
      usuarioAtual
        ? {
          ...usuarioAtual,
          [campo]: valor,
        }
        : usuarioAtual
    );
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!meUpdate) return;

    // Simulação de salvamento na interface.
    // Substitua pela chamada de atualização da API quando implementá-la.
    setMe({ ...meUpdate });

    toast.success("Perfil atualizado");
  }

  return (
    <>
      <PageHeader
        title="Meu perfil"
        description="Mantenha seus dados atualizados."
      />

      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        {/* Cartão do perfil: mostra os dados originais */}
        <Panel>
          <div className="flex flex-col items-center p-6 text-center">
            <Avatar
              className="h-32 w-32"
              src="https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9e/Foto_oficial_de_Luiz_In%C3%A1cio_Lula_da_Silva_%28ombros%29_denoise.jpg/500px-Foto_oficial_de_Luiz_In%C3%A1cio_Lula_da_Silva_%28ombros%29_denoise.jpg?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=thumbnail"
              alt="Foto de perfil"
              fallback={
                <span className="bg-primary text-xs text-primary-foreground">
                  PS
                </span>
              }
            />

            <h2 className="mt-4 text-lg font-semibold">
              {me
                ? `${me.primeiroNome ?? ""} ${me.ultimoNome ?? ""}`.trim()
                : "Carregando..."}
            </h2>

            <p className="text-sm text-muted-foreground">
              {me?.email ?? ""}
            </p>

            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mt-4"
            >
              Alterar foto
            </Button>
          </div>
        </Panel>

        {/* Formulário: utiliza exclusivamente meUpdate */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <Panel title="Dados pessoais">
            <div className="grid gap-4 p-4 sm:grid-cols-2 sm:p-5">
              <Field label="Primeiro nome">
                <Input
                  placeholder="Pedro"
                  value={meUpdate?.primeiroNome ?? ""}
                  onChange={(e) =>
                    atualizarCampo("primeiroNome", e.target.value)
                  }
                  disabled={loading}
                />
              </Field>

              <Field label="Último nome">
                <Input
                  placeholder="Soares"
                  value={meUpdate?.ultimoNome ?? ""}
                  onChange={(e) =>
                    atualizarCampo("ultimoNome", e.target.value)
                  }
                  disabled={loading}
                />
              </Field>

              <Field label="Email">
                <Input
                  type="email"
                  placeholder="pedrohnery@gmail.com"
                  value={meUpdate?.email ?? ""}
                  onChange={(e) =>
                    atualizarCampo("email", e.target.value)
                  }
                  disabled={loading}
                />
              </Field>

              <Field label="Sexo">
                <Select
                  value={meUpdate?.sexo ?? ""}
                  onValueChange={(value) =>
                    atualizarCampo(
                      "sexo",
                      value as UsuarioDetails["sexo"]
                    )
                  }
                  disabled={loading}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione o sexo" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="M">Masculino</SelectItem>
                    <SelectItem value="F">Feminino</SelectItem>
                    <SelectItem value="O">
                      Prefiro não informar
                    </SelectItem>
                  </SelectContent>
                </Select>
              </Field>

              <Field label="Data de nascimento">
                <Input
                  type="date"
                  value={meUpdate?.dataNascimento?.slice(0, 10) ?? ""}
                  onChange={(e) =>
                    atualizarCampo(
                      "dataNascimento",
                      (e.target.value || null) as UsuarioDetails["dataNascimento"]
                    )
                  }
                  disabled={loading}
                />
              </Field>

              <Field label="CPF">
                <Input
                  value={meUpdate?.cpf ?? ""}
                  onChange={(e) =>
                    atualizarCampo("cpf", e.target.value)
                  }
                  disabled={loading}
                />
              </Field>
            </div>
          </Panel>

          <Panel title="Endereço">
            <div className="grid gap-4 p-4 sm:grid-cols-6 sm:p-5">
              <Field label="CEP" className="sm:col-span-2">
                <Input
                  value={meUpdate?.cep ?? ""}
                  onChange={(e) =>
                    atualizarCampo("cep", e.target.value)
                  }
                  disabled={loading}
                />
              </Field>

              <Field label="Rua" className="sm:col-span-4">
                <Input
                  value={meUpdate?.rua ?? ""}
                  readOnly
                  className="bg-muted"
                />
              </Field>

              <Field label="Número" className="sm:col-span-2">
                <Input
                  value={meUpdate?.numero ?? ""}
                  onChange={(e) =>
                    atualizarCampo("numero", e.target.value)
                  }
                  disabled={loading}
                />
              </Field>

              <Field label="Complemento" className="sm:col-span-4">
                <Input
                  value={meUpdate?.complemento ?? ""}
                  onChange={(e) =>
                    atualizarCampo("complemento", e.target.value)
                  }
                  disabled={loading}
                />
              </Field>

              <Field label="Bairro" className="sm:col-span-2">
                <Input
                  value={meUpdate?.bairro ?? ""}
                  readOnly
                  className="bg-muted"
                />
              </Field>

              <Field label="Município" className="sm:col-span-3">
                <Input
                  value={meUpdate?.municipio ?? ""}
                  readOnly
                  className="bg-muted"
                />
              </Field>

              <Field label="Estado" className="sm:col-span-1">
                <Input
                  value={meUpdate?.estado ?? ""}
                  readOnly
                  className="bg-muted"
                />
              </Field>
            </div>
          </Panel>

          <div className="flex justify-end">
            <Button
              type="submit"
              className="w-full sm:w-auto sm:px-8"
              disabled={loading || !meUpdate}
            >
              Salvar alterações
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}