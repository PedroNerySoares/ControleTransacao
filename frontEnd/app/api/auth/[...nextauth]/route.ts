import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const nextAuthOptions: NextAuthOptions = {
  secret: "http://localhost:3000",
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const res = await fetch('http://localhost:8080/login', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            usuario: credentials?.email,
            senha: credentials?.password
          })
        });

        const user = await res.json();

        if (res.ok && user?.token) {
          return {
            id: user.id || null, // Se não vier id no backend, coloque null ou gere um ID
            name: user.nome,
            email: user.email,
            token: user.token
          };
        }

        return null;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.token;
        token.id = user.id ?? null;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
   
      session.user = {
        ...session.user,
        id: token.id,
        name: token.name,
        email: token.email,
        accessToken: token.accessToken
      };
      return session;
    }
  }
};

const handler = NextAuth(nextAuthOptions);
export { handler as GET, handler as POST, nextAuthOptions };
