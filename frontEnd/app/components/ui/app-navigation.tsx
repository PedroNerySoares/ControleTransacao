"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Menu,
  PanelLeftClose,
  PanelLeftOpen,
  Radar,
  Settings,
  ShieldAlert,
  SquareArrowRightExit,
  Upload,
  UserCircle,
  Users,
  X,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { ReactNode } from "react";
import { useSession } from "next-auth/react";
import { Avatar } from "@/app/components/ui/avatar";
import ButtonAside from "@/app/components/ui/buttonAside";
import { TooltipProvider } from "@/app/components/ui/tooltip";

const items = [
  { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { title: "Importações", href: "/importacao", icon: Upload },
  { title: "Suspeitas", href: "/suspeita", icon: ShieldAlert },
  { title: "Usuários", href: "/usuarios", icon: Users },
  { title: "Meu perfil", href: "/settingsUsuario", icon: UserCircle },
] as const;

export default function AppNavigation({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const userName = session?.user.name ?? session?.user.email ?? "Usuário";
  const userInitials = userName
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  const activeItem = items.find(
    (item) => pathname === item.href || pathname.startsWith(`${item.href}/`),
  );
  const pageTitle = pathname.startsWith("/importacao/")
    ? "Detalhes da importação"
    : activeItem?.title ?? "Sentinela";

  return (
    <TooltipProvider delayDuration={0}>
      <div className="flex min-h-screen bg-background text-foreground">
        {mobileOpen && (
          <button
            type="button"
            aria-label="Fechar menu"
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-20 bg-black/50 md:hidden"
          />
        )}

        <aside
          aria-label="Navegação principal"
          className={[
            "min-h-screen shrink-0 flex-col bg-sidebar text-sidebar-foreground transition-[width] duration-200",
            mobileOpen
              ? "fixed inset-y-0 left-0 z-30 flex w-64"
              : "hidden md:flex",
            collapsed ? "md:w-20" : "md:w-64",
          ].join(" ")}
        >
          <div
            className={[
              "relative flex h-[72px] items-center border-b border-sidebar-border",
              collapsed && !mobileOpen
                ? "justify-start px-3 pr-10"
                : "justify-between gap-2 px-5",
            ].join(" ")}
          >
            <Link
              href="/dashboard"
              aria-label="Sentinela - Dashboard"
              className="flex min-w-0 items-center gap-2"
              onClick={() => setMobileOpen(false)}
            >
              <Radar className="h-5 w-5 shrink-0" />
              {(!collapsed || mobileOpen) && (
                <span className="truncate text-xl font-bold">Sentinela</span>
              )}
            </Link>
            <button
              type="button"
              aria-label={collapsed ? "Expandir menu" : "Recolher menu"}
              aria-expanded={!collapsed}
              onClick={() => setCollapsed((value) => !value)}
              className={[
                "hidden rounded-md p-2 text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground md:inline-flex",
                collapsed ? "absolute right-1" : "",
              ].join(" ")}
            >
              {collapsed ? (
                <PanelLeftOpen className="size-4" />
              ) : (
                <PanelLeftClose className="size-4" />
              )}
            </button>
            <button
              type="button"
              aria-label="Fechar menu"
              onClick={() => setMobileOpen(false)}
              className="rounded-md p-2 text-sidebar-foreground hover:bg-sidebar-accent md:hidden"
            >
              <X className="size-4" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-2 p-3">
            {items.map((item) => (
              <ButtonAside
                key={item.title}
                title={item.title}
                icon={item.icon}
                href={item.href}
                active={activeItem?.href === item.href}
                collapsed={collapsed && !mobileOpen}
                onNavigate={() => setMobileOpen(false)}
              />
            ))}

            <div className="mt-auto">
              <ButtonAside
                href="/configuracao"
                title="Configurações"
                icon={Settings}
                collapsed={collapsed && !mobileOpen}
                onNavigate={() => setMobileOpen(false)}
              />
              <ButtonAside
                href="/"
                title="Sair"
                icon={SquareArrowRightExit}
                collapsed={collapsed && !mobileOpen}
                onNavigate={() => setMobileOpen(false)}
              />
            </div>
          </nav>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-10 flex h-14 min-w-0 items-center gap-3 border-b bg-card/80 px-4 backdrop-blur sm:px-6">
            <button
              type="button"
              aria-label="Abrir menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
              className="rounded-md p-2 hover:bg-muted md:hidden"
            >
              <Menu className="size-5" />
            </button>
            <span className="min-w-0 truncate text-sm font-medium text-muted-foreground">
              {pageTitle}
            </span>
            <Link
              href="/settingsUsuario"
              aria-label="Abrir meu perfil"
              className="ml-auto flex shrink-0 items-center gap-2"
            >
              <span className="hidden text-sm font-medium sm:inline">{userName}</span>
              <Avatar
                className="h-8 w-8"
                src={session?.user.photoPerfil ?? session?.user.image ?? undefined}
                alt={`Foto de perfil de ${userName}`}
                fallback={
                  <span className="bg-primary text-xs text-primary-foreground">{userInitials}</span>
                }
              />
            </Link>
          </header>
          <main className="flex-1 bg-background p-3">{children}</main>
        </div>
      </div>
    </TooltipProvider>
  );
}
