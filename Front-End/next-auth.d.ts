import NextAuth, { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      name: string
      email: string
      image: string
      role: string
      accessToken: string
    } & DefaultSession["user"]
  }

  interface User {
    id: string
    name: string
    email: string
    image: string
    role: string
    token: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    name: string
    email: string
    picture: string
    role: string
    accessToken: string
  }
}
