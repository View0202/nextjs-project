"use client"; // ต้องเพิ่มคำสั่งนี้เพื่อให้เป็น Client Component

import React, { createContext, useState, ReactNode, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";

interface AuthContextProps {
    isLoggedIn: boolean;
    setIsLoggedIn: (loggedIn: boolean) => void;
    login: (token: string) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // ตรวจสอบ token จาก LocalStorage
        const token = localStorage.getItem("authToken");
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const login = (token: string) => {
        localStorage.setItem("authToken", token);
        setIsLoggedIn(true);
        router.push("/"); // Redirect ไปหน้าแรกหลังล็อกอิน
    };

    const logout = () => {
        localStorage.removeItem("authToken");
        setIsLoggedIn(false);
        router.push("/login"); // Redirect ไปหน้าล็อกอิน
    };
    

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
};
