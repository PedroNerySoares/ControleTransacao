
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entrar — Sentinela",
  description:
    "Acesse o painel de monitoramento de transações suspeitas.",
  openGraph: {
    title: "Entrar — Sentinela",
    description:
      "Acesse o painel de monitoramento de transações suspeitas.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
