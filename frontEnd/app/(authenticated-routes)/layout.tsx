import type { Metadata } from "next";
import AppNavigation from "../components/ui/app-navigation";
import { Toaster } from "sonner";
import { Suspense } from "react";
import NextAuthSessionProvider from "../provider/sessionProvider";


export const metadata: Metadata = {
  title: "Sentinela",
  description: "Monitoramento de transações suspeitas",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <NextAuthSessionProvider>
      <Suspense fallback={null}>

        <AppNavigation>
          <Toaster richColors position="bottom-right" />
          {children}
        </AppNavigation>
      </Suspense>
    </NextAuthSessionProvider>
  )
}