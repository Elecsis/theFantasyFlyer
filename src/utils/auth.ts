import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "./db";
import { userAgent } from "next/server";



export const authOptions = {
    session: {
      strategy: 'jwt'
    },
    adapter: PrismaAdapter(prisma) as any,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            },
          }),
          EmailProvider({
            server: {
              host: process.env.EMAIL_SERVER_HOST,
              port: process.env.EMAIL_SERVER_PORT,
              auth: {
                user: process.env.EMAIL_SERVER_USER,
                pass: process.env.EMAIL_SERVER_PASSWORD
              }
            },
            from: process.env.EMAIL_FROM
          })  
    ],
    callbacks: {
      async signIn({ user, account, profile, email, credentials }) {
        return user.id
      },
      async redirect({  baseUrl }) {
        return baseUrl
      },
      async session({ session }) {
        return session
      },
      async jwt({ token,  }) {
        return token
      }
  }
  

   
} satisfies NextAuthOptions

