// lib/authOptions.ts
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
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
            id: user.id,
            name: user.nome,
            email: user.email,
            image: "http://192.168.0.12:8080/upload/messi2.jpg",
            role: user.role,
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
        token.picture = user.image;
        token.role = user.role;
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
        image: token.picture,
        role: token.role,
        accessToken: token.accessToken
      };
      return session;
    }
  }
};
