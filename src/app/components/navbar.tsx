"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useHeart } from "../context/heartContext";

import { ScanFace, Heart, ShoppingBag, LogIn, LogOut, AlignRight } from "lucide-react";

function navbar() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { heartCount, resetHeartCount } = useHeart();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // ตรวจสอบสถานะการล็อกอินเมื่อโหลดหน้าเว็บ
    useEffect(() => {
        const token = localStorage.getItem("token"); // สมมติว่าบันทึก token ไว้ใน localStorage
        setIsLoggedIn(!!token); // แปลงเป็น Boolean
    }, []);

    // ฟังก์ชันออกจากระบบ
    const handleLogout = () => {
        localStorage.removeItem("token"); // ลบ token ออกจาก localStorage
        setIsLoggedIn(false); // อัปเดต state
        window.location.href = "/login"; // รีไดเร็กไปหน้าเข้าสู่ระบบ
    };

    return (
        <div
            className={`navbar w-screen px-10 h-10 fixed top-0 left-0 z-50 transition-colors duration-700 ${isScrolled ? "bg-gradient-to-b from-neutral-50 to-[#EC407A]" : "bg-gradient-[#EC407A]"
                }`}
        >
            <div className="navbar-start">
                <img src="/images/Logo.png" alt="Logo" />
            </div>

            <div className="navbar-center hidden lg:flex text-black1">
                <ul className="menu menu-horizontal px-1 items-center gap-5">
                    <NavbarLink href="/#home" label="หน้าแรก" />
                    <NavbarLink href="/#about" label="เกี่ยวกับเรา" />
                    <NavbarLink href="/#employee" label="พนักงานคลินิค" />
                    
                    <Link href="/productAndService" className="link link-hover text-black1 hover:text-gray1 hover:decoration-gray1 focus:text-pink1 focus:underline focus:decoration-pink1">สินค้าและบริการ</Link>

                    <Link href="/promotion" className="link link-hover text-black1 hover:text-gray1 hover:decoration-gray1 focus:text-pink1 focus:underline focus:decoration-pink1">โปรโมชั่น</Link>

                    <Link href="/result" className="link link-hover text-black1 hover:text-gray1 hover:decoration-gray1 focus:text-pink1 focus:underline focus:decoration-pink1">ผลลัพธ์ลูกค้า</Link>
                    
                    <NavbarLink href="/#contact-us" label="ติดต่อเรา" />
                </ul>
            </div>

            {/* Responsive Drawer */}
            <div className="drawer drawer-end lg:hidden">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex justify-end items-center">
                    <label htmlFor="my-drawer-4" className="drawer-button">
                        <AlignRight color="#21211F" />
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-slate-50 text-[#21211F] min-h-full w-80">
                        <div className="flex justify-center items-center mx-10">
                            <img src="/images/Logo.png" alt="Logo" />
                        </div>
                        <li><Link href="/">หน้าแรก</Link></li>
                        <li><Link href="/about">เกี่ยวกับเรา</Link></li>
                        <li><Link href="/employee">พนักงานคลินิค</Link></li>
                        <li><Link href="/productAndService">สินค้าและบริการ</Link></li>
                        <li><Link href="/promotion">โปรโมชั่น</Link></li>
                        <li><Link href="/result">ผลลัพธ์ลูกค้า</Link></li>
                        <li className="border-b-2"><Link href="/contact">ติดต่อเรา</Link></li>
                        <li><Link href="/account/estimate">ประเมินใบหน้า</Link></li>
                        <li><Link href="/account/favorites">รายการโปรด</Link></li>
                        <li><Link href="/account/cart">ตะกร้าของฉัน</Link></li>
                        {/* เปลี่ยนจาก เข้าสู่ระบบ -> ออกจากระบบ */}
                        {isLoggedIn ? (
                            <li onClick={handleLogout} className="cursor-pointer hover:text-gray-400">ออกจากระบบ</li>
                        ) : (
                            <li><Link href="/login">เข้าสู่ระบบ</Link></li>
                        )}
                    </ul>
                </div>
            </div>

            <div className="navbar-end hidden lg:flex gap-5">
                <Link href="/account/estimate" className="text-black1 hover:text-pink1">
                    <ScanFace strokeWidth={2.5} />
                </Link>

                <Link href="/account/favorites" onClick={resetHeartCount} className="relative text-black1 hover:text-pink1">
                    <Heart strokeWidth={2.5} className="w-6 h-6" />
                    {heartCount > 0 && (
                        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                            {heartCount}
                        </span>
                    )}
                </Link>

                <Link href="/account/cart" className="text-black1 hover:text-pink1">
                    <ShoppingBag strokeWidth={2.5} />
                </Link>

                {/* เปลี่ยนปุ่ม เข้าสู่ระบบ เป็น ออกจากระบบ */}
                {isLoggedIn ? (
                    <button onClick={handleLogout} className="text-black1 hover:text-pink1">
                        <LogOut strokeWidth={2.5} />
                    </button>
                ) : (
                    <Link href="/login" className="text-black1 hover:text-pink1">
                        <LogIn strokeWidth={2.5} />
                    </Link>
                )}
            </div>
        </div>
    );
}

// ✅ แยกฟังก์ชัน Link ที่ scroll ไปยัง section
const NavbarLink = ({ href, label }: { href: string; label: string }) => {
    return (
        <Link
            href={href}
            className="link link-hover text-black1 hover:text-gray1 hover:decoration-gray1 focus:text-pink1 focus:underline focus:decoration-pink1"
            onClick={(e) => {
                if (window.location.pathname === "/") {
                    e.preventDefault();
                    const element = document.getElementById(href.replace("/#", ""));
                    if (element) {
                        element.scrollIntoView({ behavior: "smooth", block: "center" });
                    }
                }
            }}
        >
            {label}
        </Link>
    );
};

export default navbar;