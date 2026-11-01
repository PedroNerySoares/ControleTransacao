import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

type BackendUser = {
  id?: string | number;
  nome?: string;
  name?: string;
  email?: string;
  token: string;
  role?: string;
  photoPerfil?: string;
};

function isBackendUser(value: unknown): value is BackendUser {
  return (
    typeof value === "object" &&
    value !== null &&
    "token" in value &&
    typeof value.token === "string" &&
    (!("id" in value) ||
      typeof value.id === "string" ||
      typeof value.id === "number") &&
    (!("nome" in value) || typeof value.nome === "string") &&
    (!("name" in value) || typeof value.name === "string") &&
    (!("email" in value) || typeof value.email === "string") &&
    (!("role" in value) || typeof value.role === "string") &&
    (!("photoPerfil" in value) || typeof value.photoPerfil === "string")
  );
}

const nextAuthOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Email e senha",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Senha", type: "password" },
      },
      async authorize(credentials) {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/, "");
        if (!apiUrl) {
          throw new Error("A variável NEXT_PUBLIC_API_URL não está configurada.");
        }

        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const response = await fetch(`${apiUrl}/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            usuario: credentials.email,
            senha: credentials.password,
          }),
          cache: "no-store",
        });

        if (!response.ok) {
          return null;
        }

        const body: unknown = await response.json();
        if (!isBackendUser(body) || !body.token.trim()) {
          return null;
        }

        const email =
          typeof body.email === "string" && body.email.trim()
            ? body.email
            : credentials.email;

        return {
          id: String(body.id ?? email),
          name: body.nome ?? body.name ?? email,
          email,
          accessToken: body.token,
          role: body.role,
          photoPerfil: body.photoPerfil,
          image: body.photoPerfil,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.role = user.role;
        token.photoPerfil = user.photoPerfil;
        token.picture = user.photoPerfil ?? user.image;
      }

      if (
        trigger === "update" &&
        typeof session?.photoPerfil === "string"
      ) {
        token.photoPerfil = session.photoPerfil;
        token.picture = session.photoPerfil;
      }

      return token;
    },
    async session({ session, token }) {
      session.user = {
        ...session.user,
        id: token.id ?? session.user.email ?? "",
        name: token.name,
        email: token.email,
        accessToken: token.accessToken,
        role: token.role,
        photoPerfil: token.photoPerfil,
        image: token.picture,
      };
      return session;
    },
  },
};

const handler = NextAuth(nextAuthOptions);
export { handler as GET, handler as POST };
