"use client";

import { useEffect, useRef, useState, type ChangeEvent, type ReactNode } from "react";
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
import { getMe, putChangeDatasUser } from "@/app/services/api";
import { getInfoEndereco } from "@/app/services/external/cepApi";
import { LoaderCircle, Upload } from "lucide-react";
import { Field } from "@/app/components/ui/field";

 

export default function SettingsUsuario() {
  const [me, setMe] = useState<UsuarioDetails | null>(null);
  const [meUpdate, setMeUpdate] = useState<UsuarioDetails | null>(null);
  const [loadedToken, setLoadedToken] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [cepLoading, setCepLoading] = useState(false);
  const [photoLoading, setPhotoLoading] = useState(false);
  const photoInputRef = useRef<HTMLInputElement>(null);

  const { data: session, status, update } = useSession();
  const token = session?.user.accessToken;
  const loading = status === "loading" || (!!token && loadedToken !== token);

  useEffect(() => {
    if (status === "loading" || !token) return;
    const accessToken = token;
    let isMounted = true;

    async function carregarUsuario() {
      try {
        const response = await getMe(accessToken);
        const data: UsuarioDetails = response;

        if (isMounted) {
          setMe(data);
          setMeUpdate(data);
        }
      } catch (error) {
        if (isMounted) {
          toast.error(error instanceof Error ? error.message : "Erro ao carregar os dados do perfil.");
        }
      } finally {
        if (isMounted) setLoadedToken(accessToken);
      }
    }

    carregarUsuario();

    return () => {
      isMounted = false;
    };
  }, [status, token]);

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

  async function handleCepBlur() {
    const cep = meUpdate?.cep.replace(/\D/g, "") ?? "";
    if (cep.length !== 8 || cep === me?.cep.replace(/\D/g, "")) return;

    setCepLoading(true);
    try {
      const endereco = await getInfoEndereco(cep);
      setMeUpdate((current) =>
        current && current.cep.replace(/\D/g, "") === cep
          ? {
              ...current,
              cep: endereco.cep,
              rua: endereco.logradouro,
              complemento: endereco.complemento,
              bairro: endereco.bairro,
              municipio: endereco.localidade,
              estado: endereco.uf,
            }
          : current,
      );
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Não foi possível consultar o CEP.");
    } finally {
      setCepLoading(false);
    }
  }

  async function handlePhotoChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      toast.error("Selecione um arquivo de imagem.");
      return;
    }

    setPhotoLoading(true);
    try {
      const bitmap = await createImageBitmap(file);
      const scale = Math.min(1, 256 / Math.max(bitmap.width, bitmap.height));
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(bitmap.width * scale));
      canvas.height = Math.max(1, Math.round(bitmap.height * scale));
      const context = canvas.getContext("2d");
      if (!context) throw new Error("Não foi possível processar a imagem.");

      context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
      bitmap.close();
      const photoPerfil = canvas.toDataURL("image/jpeg", 0.75);
      await update({ photoPerfil });
      toast.success("Foto de perfil atualizada.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Não foi possível atualizar a foto.");
    } finally {
      setPhotoLoading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!meUpdate || !token) {
      toast.error("Não foi possível salvar o perfil. Entre novamente.");
      return;
    }

    setSaving(true);
    try {
      await putChangeDatasUser(token, meUpdate);
      setMe({ ...meUpdate });
      toast.success("Perfil atualizado.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Não foi possível atualizar o perfil.");
    } finally {
      setSaving(false);
    }

  }

  return (
    <>
      <PageHeader
        title="Meu perfil"
        description="Mantenha seus dados atualizados."
      />

      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        <Panel>
          <div className="flex flex-col items-center p-6 text-center">
            <Avatar
              className="h-32 w-32"
              src={session?.user.photoPerfil ?? session?.user.image ?? undefined}
              alt="Foto de perfil"
              fallback={
                <span className="bg-primary text-xs text-primary-foreground">
                  {(session?.user.name ?? session?.user.email ?? "U")
                    .split(/\s+/)
                    .filter(Boolean)
                    .slice(0, 2)
                    .map((part) => part[0])
                    .join("")
                    .toUpperCase()}
                </span>
              }
            />

            <h2 className="mt-4 text-lg font-semibold">
              {me
                ? `${me.primeiroNome ?? ""} ${me.ultimoNome ?? ""}`.trim()
                : loading ? "Carregando..." : session?.user.name ?? "Meu perfil"}
            </h2>

            <p className="text-sm text-muted-foreground">
              {me?.email ?? ""}
            </p>

            <input
              ref={photoInputRef}
              accept="image/*"
              className="hidden"
              onChange={handlePhotoChange}
              type="file"
            />
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mt-4"
              disabled={photoLoading}
              onClick={() => photoInputRef.current?.click()}
            >
              {photoLoading ? <LoaderCircle className="animate-spin" /> : <Upload />}
              {photoLoading ? "Atualizando..." : "Alterar foto"}
            </Button>
          </div>
        </Panel>

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
                  onBlur={handleCepBlur}
                  disabled={loading}
                />
                {cepLoading && (
                  <p className="flex items-center gap-2 text-xs text-muted-foreground">
                    <LoaderCircle className="size-3 animate-spin" />
                    Consultando CEP...
                  </p>
                )}
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
              disabled={loading || saving || !meUpdate}
            >
              {saving ? "Salvando..." : "Salvar alterações"}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}