import { withAuth } from "next-auth/middleware";

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default withAuth({
  pages: {
    signIn: "/login",
  },
});

export function middleware(req: NextRequest) {
  const token = req.cookies.get('authToken')?.value; // ตรวจสอบ token จาก cookies

  const protectedRoutes = ['/account/estimate', '/account/favorites', '/account/cart']; // หน้าที่ต้องล็อกอินก่อนเข้า

  if (protectedRoutes.includes(req.nextUrl.pathname) && !token) {
      return NextResponse.redirect(new URL('/login', req.url)); // ถ้าไม่มี token ให้ไปที่หน้าล็อกอิน
  }

  return NextResponse.next();
}

export const config = {
  matchers: [
    "/booking/:path*", // ป้องกันการเข้าถึงหน้า booking ถ้ายังไม่ล็อกอิน
    '/account/:path*', // ใช้ middleware กับหน้าในโฟลเดอร์ /account
  ]
};

