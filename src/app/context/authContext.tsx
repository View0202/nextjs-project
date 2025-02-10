"use client";

import React, { createContext, useState, ReactNode, useContext, useEffect } from "react";
import { useSession, signOut } from "next-auth/react"; //ใช้งาน next-auth
import { useRouter } from "next/navigation";

interface AuthContextProps {
    isLoggedIn: boolean;
    login: (token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
    isLoggedIn: false,
    login: () => {},
    logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const { data: session } = useSession(); //ดึงข้อมูล session
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (session?.user) {
            setIsLoggedIn(true);
            localStorage.setItem("authToken", "session_active"); //เก็บค่า session
        } else {
            setIsLoggedIn(false);
            localStorage.removeItem("authToken"); //ลบค่าเมื่อออกจากระบบ
        }
    }, [session]); //ตรวจจับการเปลี่ยนแปลงของ session

    const login = (token: string) => {
        localStorage.setItem("authToken", token);
        setIsLoggedIn(true);
    };

    const logout = async () => {
        await signOut({ redirect: false }); //ไม่ให้ next-auth redirect เอง
        setIsLoggedIn(false);
        localStorage.removeItem("authToken");
        router.push("/"); //Redirect ไปหน้า Home
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
