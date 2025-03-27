'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, ChevronRight, Facebook } from 'lucide-react';

const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const target = document.getElementById(sectionId);
    if (target) {
        target.scrollIntoView({
            behavior: "smooth",
            block: "center", // เซ็นเตอร์ตำแหน่งของ element ที่จะไป
        });
    }
};

export default function Footer() {
    return (
        <footer className="footer w-full bg-[#FFFFFF] text-black1 h-auto px-10 py-3 border-t border-gray1">
            <div className="w-full flex items-center justify-between">
                <aside className="w-full flex justify-items-center sm:justify-center md:justify-center xl:justify-start">
                    <Image src="/images/Logo.png" alt="Logo" width={240} height={48} />
                </aside>
                <div className="items-center gap-20 hidden lg:flex">
                    <nav>
                        <div className="flex flex-col gap-2">
                            <div className="items-center space-x-2 inline-flex w-max">
                                <ChevronRight size={16} />
                                <Link
                                    href="#home"
                                    className="link link-hover text-black1 hover:text-gray1 focus:text-pink1"
                                    onClick={(e) => scrollToSection(e, "home")}
                                >
                                    หน้าแรก
                                </Link>
                            </div>

                            <div className="items-center space-x-2 inline-flex w-max">
                                <ChevronRight size={16} />
                                <Link
                                    href="#about"
                                    className="link link-hover text-black1 hover:text-gray1 focus:text-pink1"
                                    onClick={(e) => scrollToSection(e, "about")}
                                >
                                    เกี่ยวกับเรา
                                </Link>
                            </div>
                        </div>
                    </nav>

                    <nav>
                        <div className="flex flex-col gap-2">
                            <div className="items-center space-x-2 inline-flex w-max">
                                <ChevronRight size={16} />
                                <Link
                                    href="#employee"
                                    className="link link-hover text-black1 hover:text-gray1 focus:text-pink1"
                                    onClick={(e) => scrollToSection(e, "employee")}
                                >
                                    พนักงานคลินิค
                                </Link>
                            </div>

                            <div className="items-center space-x-2 inline-flex w-max">
                                <ChevronRight size={16} />
                                <Link href="/productAndService" className="link link-hover text-black1 hover:text-gray1 focus:text-pink1">สินค้าและบริการ</Link>
                            </div>
                        </div>
                    </nav>

                    <nav>
                        <div className="flex flex-col gap-2">
                            <div className="items-center space-x-2 inline-flex w-max">
                                <ChevronRight size={16} />
                                <Link href="/promotion" className="link link-hover text-black1 hover:text-gray1 focus:text-pink1">โปรโมชั่น</Link>
                            </div>

                            <div className="items-center space-x-2 inline-flex w-max">
                                <ChevronRight size={16} />
                                <Link href="/result" className="link link-hover text-black1 hover:text-gray1 focus:text-pink1">ผลลัพธ์ลูกค้า</Link>
                            </div>
                        </div>
                    </nav>

                    <nav>
                        <div className="flex flex-col gap-2">
                            <div className="items-center space-x-2 inline-flex w-max">
                                <Facebook size={16} fill='#21211F' />
                                <a className="text-black1">View Rungpairin</a>
                            </div>

                            <div className="items-center gap-2 inline-flex w-max">
                                <Phone size={16} fill='#21211F' />
                                <a className="text-black1">090-316-6790</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
