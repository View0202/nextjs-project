import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login",
  },
});

export const config = {
  matcher: ["/booking/:path*"], // ป้องกันการเข้าถึงหน้า booking ถ้ายังไม่ล็อกอิน
};
