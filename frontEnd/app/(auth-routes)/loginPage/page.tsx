
"use client";

import { useRouter } from "next/navigation";
import { Radar, ShieldCheck } from "lucide-react";
import { type FormEvent, useState } from "react";
import { signIn } from "next-auth/react";

import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";

export default function LoginPage() {
  const router = useRouter();
  const [mensagemErro, setMensagemErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMensagemErro("");

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    if (typeof email !== "string" || typeof password !== "string") {
      setMensagemErro("Informe seu email e sua senha.");
      return;
    }

    setCarregando(true);
    try {
      const response = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/importacao",
        redirect: false,
      });

      if (!response?.ok || response.error) {
        setMensagemErro("Email ou senha inválidos. Confira seus dados e tente novamente.");
        return;
      }

      router.replace(response.url ?? "/importacao");
      router.refresh();
    } catch {
      setMensagemErro("Não foi possível conectar ao serviço de autenticação. Tente novamente.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Painel lateral */}
      <aside className="relative hidden overflow-hidden bg-brand-gradient p-12 text-primary-foreground lg:flex lg:flex-col lg:justify-between">
        <div className="flex items-center gap-2">
          <Radar className="h-6 w-6" />
          <span className="font-display text-xl font-semibold">
            Sentinela
          </span>
        </div>

        <div className="max-w-md">
          <h2 className="text-4xl font-semibold leading-tight">
            Detecte movimentações suspeitas antes que virem problema.
          </h2>

          <p className="mt-4 opacity-80">
            Importe transações, acompanhe contas e agências de risco
            e mantenha sua equipe alinhada.
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm opacity-80">
          <ShieldCheck className="h-4 w-4" />
          <span>Dados protegidos de ponta a ponta</span>
        </div>

        {/* Elementos decorativos */}
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full border border-primary-foreground/20" />

        <div className="pointer-events-none absolute -bottom-8 -right-8 h-64 w-64 rounded-full border border-primary-foreground/20" />
      </aside>

      {/* Formulário de login */}
      <main className="flex min-h-screen items-center justify-center p-6 lg:min-h-0">
        <div className="w-full max-w-sm">
          {/* Logo visível em telas menores */}
          <div className="mb-8 flex items-center gap-2 lg:hidden">
            <Radar className="h-6 w-6 text-primary" />

            <span className="font-display text-xl font-semibold">
              Sentinela
            </span>
          </div>

          <h1 className="text-3xl font-semibold">
            Bem-vindo de volta
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Entre com seu email e senha para continuar.
          </p>

          <form
            className="mt-8 space-y-5"
            onSubmit={handleSubmit}
          >
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>

              <Input
                id="email"
                name="email"
                type="email"
                placeholder="seu@email.com"
                className="h-11"
                autoComplete="email"
                required
              />
            </div>

            {/* Senha */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="senha">Senha</Label>

                <a
                  href="/recuperar-senha"
                  className="text-xs font-medium text-primary hover:underline"
                >
                  Esqueci minha senha
                </a>
              </div>

              <Input
                id="senha"
                name="password"
                type="password"
                placeholder="Digite sua senha"
                className="h-11"
                autoComplete="current-password"
                required
              />
            </div>

            {/* Botão */}
            <Button type="submit" className="h-11 w-full" disabled={carregando}>
              {carregando ? "Entrando..." : "Entrar"}
            </Button>
          </form>

          {mensagemErro && (
            <p className="mt-4 text-sm text-destructive" role="alert">
              {mensagemErro}
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
