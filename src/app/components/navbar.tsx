"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useAuth } from "../context/authContext";
import Link from "next/link";
import { ScanFace, Heart, ShoppingBag, LogIn, CircleUserRound, AlignRight } from "lucide-react";
import { useHeart } from "../context/heartContext";
import { useSession } from "next-auth/react"; //ใช้ session เพื่อตรวจสอบสถานะ
import { Link as ScrollLink } from "react-scroll";


export default function Navbar() {

    const [isScrolled, setIsScrolled] = useState(false);
    const { heartCount, resetHeartCount } = useHeart();
    const { logout } = useAuth();
    const { data: session } = useSession(); //ดึง session

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 0);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div id="navbar"
            className={`navbar w-screen px-10 h-10 fixed top-0 left-0 z-50 transition-colors duration-700 ${isScrolled ? "bg-gradient-to-b from-[#FFC2D1] to-[#FFE5EC]" : "bg-gradient-[#FFE5EC]"
                }`}
        >
            <div className="navbar-start">
                <Image src="/images/Logo.png" alt="Logo" width={240} height={48} />
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
                    <ul id="menu" className="menu bg-slate-50 text-[#21211F] min-h-full w-80">
                        <div className="flex justify-center items-center mx-10">
                            <Image src="/images/Logo.png" alt="Logo" width={240} height={48} />
                        </div>

                        <li><Link href="/">หน้าแรก</Link></li>

                        <li>
                            <ScrollLink to="about" smooth={true} duration={500} offset={-150}>
                                เกี่ยวกับเรา
                            </ScrollLink>
                        </li>

                        <li>
                            <ScrollLink to="employee" smooth={true} duration={500}>
                                พนักงานคลินิค
                            </ScrollLink>
                        </li>

                        <li><Link href="/productAndService">สินค้าและบริการ</Link></li>
                        <li><Link href="/promotion">โปรโมชั่น</Link></li>
                        <li><Link href="/result">ผลลัพธ์ลูกค้า</Link></li>

                        <li className="border-b-2">
                            <ScrollLink to="contact-us" smooth={true} duration={500}>ติดต่อเรา</ScrollLink>
                        </li>

                        <li><Link href="/account/estimate">ประเมินใบหน้า</Link></li>
                        <li><Link href="/account/favorites">รายการโปรด</Link></li>
                        <li><Link href="/account/cart">ตะกร้าของฉัน</Link></li>

                        {/* เปลี่ยนจาก เข้าสู่ระบบ -> ออกจากระบบ */}
                        {session?.user ? (
                            <li><Link href="/">ออกจากระบบ</Link></li>
                        ) : (
                            <li><Link href="/login">เข้าสู่ระบบ</Link></li>
                        )}

                    </ul>
                </div>
            </div>

            <div id="navbar-end"
                className="navbar-end hidden lg:flex gap-5">
                {session?.user ? (
                    <>
                        {/* ScanFace */}
                        <Link href="/account/estimate" className="text-black1 hover:text-pink1">
                            <ScanFace strokeWidth={2.5} />
                        </Link>

                        {/* Favorites */}
                        <Link href="/account/favorites" onClick={resetHeartCount} className="relative text-black1 hover:text-pink1">
                            <Heart strokeWidth={2.5} className="w-6 h-6" />
                            {heartCount > 0 && (
                                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                    {heartCount}
                                </span>
                            )}
                        </Link>

                        {/* Shopping Cart */}
                        <Link href="/account/cart" className="text-black1 hover:text-pink1">
                            <ShoppingBag strokeWidth={2.5} />
                        </Link>

                        {/* User Dropdown */}
                        <div className="relative">
                            <button onClick={toggleDropdown} className="text-black1 hover:text-pink1 flex items-center">
                                <CircleUserRound strokeWidth={2.5} />
                            </button>

                            {isOpen && (
                                <ul id="dropdown-user" className="absolute right-0 mt-1 w-52 bg-white border rounded-lg shadow-lg z-50">
                                    <li className="px-4 py-2 text-start hover:bg-gray-100 text-black1 cursor-pointer rounded-lg">
                                        <a href="/account">บัญชีของฉัน</a>
                                    </li>
                                    <li className="px-4 py-2 text-start hover:bg-red-100 text-red-600 cursor-pointer rounded-lg" onClick={logout}>
                                        ออกจากระบบ
                                    </li>
                                </ul>
                            )}
                        </div>
                    </>
                ) : (
                    // Show only Login button if no session
                    <Link href="/login" className="text-black1 hover:text-pink1">
                        <LogIn strokeWidth={2.5} />
                    </Link>
                )}
            </div>


        </div>
    );
}

//แยกฟังก์ชัน Link ที่ scroll ไปยัง section
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
