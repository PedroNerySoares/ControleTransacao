"use client";

import type { FormEvent, ReactNode } from "react";
import { useCallback, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import {
  KeyRound,
  MoreVertical,
  Pencil,
  Plus,
  Search,
  Trash2,
  X,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { PageHeader, Panel } from "@/app/components/page-header";
import { Avatar } from "@/app/components/ui/avatar";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { deleteUser, getUsuarios, postCreateUser, putChangePassword } from "@/app/services/api";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { Usuario } from "@/app/types/usuario";

type ActiveModal =
  | { type: "create" }
  | { type: "delete"; usuario: Usuario }
  | { type: "password"; usuario: Usuario }
  | null;

function Modal({
  title,
  description,
  children,
  onClose,
  canClose = true,
}: {
  title: string;
  description?: string;
  children: ReactNode;
  onClose: () => void;
  canClose?: boolean;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={(event) => {
        if (event.target === event.currentTarget && canClose) onClose();
      }}
    >
      <section
        aria-labelledby="usuario-modal-title"
        aria-modal="true"
        className="w-full max-w-lg rounded-xl border bg-card shadow-xl"
        role="dialog"
      >
        <header className="flex items-start justify-between gap-4 border-b px-5 py-4">
          <div>
            <h2 className="text-lg font-semibold" id="usuario-modal-title">{title}</h2>
            {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
          </div>
          <Button
            aria-label="Fechar"
            disabled={!canClose}
            onClick={onClose}
            size="icon"
            variant="ghost"
          >
            <X />
          </Button>
        </header>
        {children}
      </section>
    </div>
  );
}

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
    </div>
  );
}

export default function Usuarios() {
  const [listaUsuarios, setListaUsuarios] = useState<Usuario[]>([]);
  const [activeModal, setActiveModal] = useState<ActiveModal>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [q, setQ] = useState("");
  const [novoUsuario, setNovoUsuario] = useState("");
  const [novoEmail, setNovoEmail] = useState("");
  const [senhaAtual, setSenhaAtual] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [novaRole, setNovaRole] = useState<number>();
  const [confirmacaoSenha, setConfirmacaoSenha] = useState("");
  const { data: session } = useSession();
  const token = session?.user.accessToken;
  const refreshUsers = useCallback(async () => {
    if (!token) return;

    const data = await getUsuarios(token);

    if (!Array.isArray(data)) {
      throw new Error("A resposta da lista de usuários é inválida.");
    }
    setListaUsuarios(data);
  }, [token]);

  useEffect(() => {
    if (!token) return;

    let isMounted = true;

    getUsuarios(token).then((data: unknown) => {
      if (!Array.isArray(data)) {
        throw new Error("A resposta da lista de usuários é inválida.");
      }
      if (isMounted) setListaUsuarios(data);
    }).catch((error: unknown) => {
      if (isMounted) {
        toast.error(error instanceof Error ? error.message : "Não foi possível carregar os usuários.");
      }
    });

    return () => {
      isMounted = false;
    };
  }, [refreshUsers, token]);

  useEffect(() => {
    if (!activeModal || isSubmitting) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActiveModal(null);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModal, isSubmitting]);

  const filtrados = listaUsuarios.filter((usuario) =>
    `${usuario.usuario} ${usuario.email}`.toLowerCase().includes(q.toLowerCase()),
  );

  async function handleCreateUser(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!token) {
      toast.error("Sua sessão expirou. Entre novamente.");
      return;
    }
    if (novaRole === undefined) {
      toast.error("Selecione o perfil do usuário.");
      return;
    }

    setIsSubmitting(true);

    try {
      await postCreateUser(token, { email: novoEmail, usuario: novoUsuario, idRole: novaRole });
      setActiveModal(null);
      setNovoUsuario("");
      setNovoEmail("");
      setNovaRole(0);
      toast.success("Usuário criado com sucesso.");
      refreshUsers().catch((error: unknown) => {
        toast.error(
          error instanceof Error
            ? `Usuário criado, mas não foi possível atualizar a lista: ${error.message}`
            : "Usuário criado, mas não foi possível atualizar a lista.",
        );
      });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Não foi possível criar o usuário.");
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleDeleteUser(usuario: Usuario) {
    if (!token) {
      toast.error("Sua sessão expirou. Entre novamente.");
      return;
    }

    setIsSubmitting(true);

    try {
      await deleteUser(token, usuario.id);
      setListaUsuarios((lista) => lista.filter((item) => item.id !== usuario.id));
      setActiveModal(null);
      toast.success(`${usuario.usuario} removido.`);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Não foi possível excluir o usuário.");
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleResetPassword(event: FormEvent<HTMLFormElement>, usuario: Usuario) {
    event.preventDefault();
    if (!token) {
      toast.error("Sua sessão expirou. Entre novamente.");
      return;
    }

    if (novaSenha !== confirmacaoSenha) {
      toast.error("A confirmação da senha não confere.");
      return;
    }

    setIsSubmitting(true);
    try {
      await putChangePassword(token, usuario.id, {
        email: usuario.email,
        oldPassword: senhaAtual,
        newPassword: novaSenha,
      });
      setActiveModal(null);
      setSenhaAtual("");
      setNovaSenha("");
      setConfirmacaoSenha("");
      toast.success(`Senha de ${usuario.usuario} alterada com sucesso.`);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Não foi possível alterar a senha.");
    } finally {
      setIsSubmitting(false);
    }
  }
  const roles = [

    { id: 1, nome: "admnistrador" },
    { id: 2, nome: "usuário" }
  ]

  return (
    <>
      <PageHeader
        title="Usuários Cadastrados"
        description="Gerencie os usuários cadastrados no sistema."
        actions={
          <Button
            onClick={() => {
              setNovoUsuario("");
              setNovoEmail("");
              setActiveModal({ type: "create" });
            }}
          >
            <Plus />
            Novo usuário
          </Button>
        }
      />

      <Panel>
        <div className="border-b p-4 sm:px-5">
          <div className="relative max-w-sm">
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              className="pl-9"
              onChange={(event) => setQ(event.target.value)}
              placeholder="Buscar por nome ou email"
              value={q}
            />
          </div>
        </div>
        <ul className="max-h-[36rem] divide-y overflow-y-auto overscroll-contain">
          {filtrados.map((usuario) => (

            <li
              className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_auto] sm:px-5"
              key={usuario.id}
            >
              <div className="flex min-w-0 items-center gap-3">
                <Avatar
                  alt="Foto de perfil"
                  className="h-8 w-8"
                  src={usuario.photoPerfil}
                  fallback={
                    <span className="text-xs ">
                      {usuario.usuario.slice(0, 2).toUpperCase()}
                    </span>
                  }
                />
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{usuario.usuario}</p>
                  <p className="truncate text-xs text-muted-foreground">{usuario.email}</p>
                </div>
              </div>
              <div className="hidden sm:block"><Badge>{usuario.roles[0].nome}</Badge></div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button aria-label={`Ações de ${usuario.usuario}`} size="icon" variant="ghost">
                    <MoreVertical />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onSelect={() => {
                    setSenhaAtual("");
                    setNovaSenha("");
                    setConfirmacaoSenha("");
                    setActiveModal({ type: "password", usuario });
                  }}>
                    <KeyRound />
                    Trocar senha
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Pencil />
                    Editar
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="text-destructive focus:text-destructive"
                    onSelect={() => setActiveModal({ type: "delete", usuario })}
                  >
                    <Trash2 />
                    Excluir
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          ))}
          {filtrados.length === 0 && (
            <li className="px-5 py-8 text-center text-sm text-muted-foreground">
              Nenhum usuário encontrado.
            </li>
          )}
        </ul>
      </Panel>

      {activeModal?.type === "create" && (
        <Modal
          description="Preencha os dados para cadastrar um novo usuário."
          onClose={() => setActiveModal(null)}
          canClose={!isSubmitting}
          title="Novo usuário"
        >
          <form className="space-y-5 p-5" onSubmit={handleCreateUser}>
            <Field id="novo-usuario" label="Nome do usuário">
              <Input
                autoComplete="name"
                id="novo-usuario"
                onChange={(event) => setNovoUsuario(event.target.value)}
                required
                value={novoUsuario}
              />
            </Field>
            <Field id="novo-email" label="Email">
              <Input
                autoComplete="email"
                id="novo-email"
                onChange={(event) => setNovoEmail(event.target.value)}
                required
                type="email"
                value={novoEmail}
              />
            </Field>
            <Field id="role" label="Perfil">
              <Select
                // value={meUpdate?.sexo ?? ""}
                // onValueChange={(value) =>
                //   atualizarCampo(
                //     "sexo",
                //     value as UsuarioMe["sexo"]
                //   )
                // }
                // disabled={loading}

                autoComplete="role"
                onValueChange={(value) => setNovaRole(Number(value))}
                required
                value={novaRole?.toString()}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione o perfil" />
                </SelectTrigger>
                <SelectContent>
                  {roles.map((i) => (
                    <SelectItem id={i.id.toString()} value={i.id.toString()}>{i.nome}</SelectItem>
                  ))}

                </SelectContent>
              </Select>
            </Field>

            <div className="flex justify-end gap-2">
              <Button disabled={isSubmitting} onClick={() => setActiveModal(null)} variant="outline">
                Cancelar
              </Button>
              <Button disabled={isSubmitting} type="submit">
                {isSubmitting ? "Salvando..." : "Criar usuário"}
              </Button>
            </div>
          </form>
        </Modal>
      )}

      {activeModal?.type === "password" && (
        <Modal
          description={`Informe a senha atual e a nova senha de ${activeModal.usuario.usuario}.`}
          onClose={() => setActiveModal(null)}
          canClose={!isSubmitting}
          title="Trocar senha"
        >
          <form
            className="space-y-5 p-5"
            onSubmit={(event) => handleResetPassword(event, activeModal.usuario)}
          >
            <Field id="senha-atual" label="Senha atual">
              <Input
                autoComplete="current-password"
                id="senha-atual"
                onChange={(event) => setSenhaAtual(event.target.value)}
                required
                type="password"
                value={senhaAtual}
              />
            </Field>
            <Field id="nova-senha" label="Nova senha">
              <Input
                autoComplete="new-password"
                id="nova-senha"
                onChange={(event) => setNovaSenha(event.target.value)}
                required
                type="password"
                value={novaSenha}
              />
            </Field>
            <Field id="confirmacao-senha" label="Confirmar nova senha">
              <Input
                autoComplete="new-password"
                id="confirmacao-senha"
                onChange={(event) => setConfirmacaoSenha(event.target.value)}
                required
                type="password"
                value={confirmacaoSenha}
              />
            </Field>
            <div className="flex justify-end gap-2">
              <Button disabled={isSubmitting} onClick={() => setActiveModal(null)} variant="outline">
                Cancelar
              </Button>
              <Button disabled={isSubmitting} type="submit">
                {isSubmitting ? "Salvando..." : "Salvar senha"}
              </Button>
            </div>
          </form>
        </Modal>
      )}

      {activeModal?.type === "delete" && (
        <Modal
          description={`Tem certeza que deseja excluir ${activeModal.usuario.usuario}? Essa ação não poderá ser desfeita.`}
          onClose={() => setActiveModal(null)}
          canClose={!isSubmitting}
          title="Excluir usuário"
        >
          <div className="flex justify-end gap-2 p-5">
            <Button disabled={isSubmitting} onClick={() => setActiveModal(null)} variant="outline">
              Cancelar
            </Button>
            <Button
              disabled={isSubmitting}
              onClick={() => handleDeleteUser(activeModal.usuario)}
              variant="destructive"
            >
              {isSubmitting ? "Excluindo..." : "Excluir usuário"}
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
}
