import NextAuth from "next-auth/next";

declare module 'next-auth'{
  interface Session{
    user:{
      token:String
      id:String,
      nome:String,
      email:String 
    }
  }
}