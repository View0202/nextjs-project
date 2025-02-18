import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          throw new Error("กรุณากรอกชื่อผู้ใช้และรหัสผ่าน");
        }

        const user = await prisma.users.findUnique({
          where: { username: credentials.username },
        });

        if (!user) {
          //console.log(user);
          throw new Error("ไม่พบผู้ใช้");
        }

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );
        //console.log("🛠 รหัสผ่านที่ป้อน:", credentials.password);
        //console.log("🛠 รหัสผ่านที่เก็บในฐานข้อมูล:", user.password);
        //console.log("🛠 bcrypt.compare() Result:", isValid);

        if (!isValid) {
          throw new Error("รหัสผ่านไม่ถูกต้อง");
        }

        return {
          id: user.u_id.toString(),
          name: `${user.firstname} ${user.lastname}`,
          email: user.username,
          image: user.image,
          role: user.status,
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, token }: { session: any; token: any }) {
      if (session?.user) {
        session.user.role = token.role;
      }
      return session;
    },
    async jwt({ token, user }: { token: any; user?: any }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt" as const,
  },
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
