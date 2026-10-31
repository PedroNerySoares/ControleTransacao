import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      accessToken?: string;
      role?: string;
      photoPerfil?: string;
    } & DefaultSession["user"];
  }

  interface User {
    accessToken?: string;
    role?: string;
    photoPerfil?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    accessToken?: string;
    role?: string;
    photoPerfil?: string;
  }
}
