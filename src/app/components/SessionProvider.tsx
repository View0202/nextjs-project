"use client"; // ✅ ทำให้เป็น Client Component

import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "../context/authContext"; // ✅ นำเข้า AuthProvider

export default function AuthWrapper({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            <AuthProvider>{children}</AuthProvider> {/* ✅ ครอบด้วย AuthProvider */}
        </SessionProvider>
    );
}
