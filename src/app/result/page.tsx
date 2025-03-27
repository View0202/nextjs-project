"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Menu } from '@headlessui/react';
import Noitems from '../components/noitems';

import { ChevronDown, Star } from 'lucide-react';

const result = () => {
    const pageUrl = '/';

    const [selectedMenu, setSelectedMenu] = useState<string>(''); // เริ่มต้นด้วยค่าว่างเพื่อแสดงข้อมูลทั้งหมด
    const [filtered, setFiltered] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState(1);

    const dataResult = [
        {
            id: 1,
            title: 'ใบหน้ากระฉับมีสัดส่วน',
            image: "/images/product/All.png",
            date: '16 ธ.ค 2567',
            datetime: '2024-12-16',
            category: 'ทรีตเมนต์',
            author: {
                name: 'Michael Foster',
                role: 'Co-Founder / CTO',
                imageUrl:
                    'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        },
        {
            id: 2,
            title: 'ขาวใส',
            image: "/images/product/shampoo.png",
            date: '16 ธ.ค 2567',
            datetime: '2024-12-16',
            category: 'สักคิ้ว',
            author: {
                name: 'Michael Foster',
                role: 'Co-Founder / CTO',
                imageUrl:
                    'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        },
        {
            id: 3,
            title: 'ผิวสวย',
            image: "/images/product/shampoo.png",
            width: 200,
            height: 200,
            date: '16 ธ.ค 2567',
            datetime: '2024-12-16',
            category: 'ทรีตเมนต์',
            author: {
                name: 'Michael Foster',
                role: 'Co-Founder / CTO',
                imageUrl:
                    'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        },
        {
            id: 4,
            title: 'เล็บแข็งแรง',
            image: "/images/product/Nail.png",
            date: '16 ธ.ค 2567',
            datetime: '2024-12-16',
            category: 'ทำเล็บ',
            author: {
                name: 'Michael Foster',
                role: 'Co-Founder / CTO',
                imageUrl:
                    'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        },
        {
            id: 5,
            title: 'ผิวสวย',
            image: "/images/product/shampoo.png",
            date: '16 ธ.ค 2567',
            datetime: '2024-12-16',
            category: 'สักคิ้ว',
            author: {
                name: 'Michael Foster',
                role: 'Co-Founder / CTO',
                imageUrl:
                    'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        },

    ];

    const menuItems = [
        { value: '', label: 'ทั้งหมด' },
        { value: 'ทรีตเมนต์', label: 'ทรีตเมนต์' },
        { value: 'สักคิ้ว', label: 'สักคิ้ว' },
        { value: 'ทำเล็บ', label: 'ทำเล็บ' },
    ];

    // ฟังก์ชันสำหรับจัดการการคลิกเมนู
    const handleMenuClick = (menuItem: string) => {
        setSelectedMenu(menuItem); // อัปเดตข้อความเมื่อคลิก
    };

    useEffect(() => {
        // กรองข้อมูลเมื่อ selectedMenu เปลี่ยน
        if (selectedMenu === '') {
            setFiltered(dataResult); // ถ้าไม่มีการเลือกเมนู กำหนดข้อมูลทั้งหมด
        } else {
            const filteredData = dataResult.filter((item) => item.category === selectedMenu);
            setFiltered(filteredData); // กรองข้อมูลตาม category ที่เลือก
        }
    }, [selectedMenu]); // useEffect จะทำงานทุกครั้งที่ selectedMenu เปลี่ยน

    const pageSize = 12; // จำนวนข้อมูลต่อหน้า

    // คำนวณข้อมูลสำหรับเพจปัจจุบัน
    const startIndex = (currentPage - 1) * pageSize;
    const currentItems = dataResult.slice(startIndex, startIndex + pageSize);

    // คำนวณจำนวนเพจทั้งหมด
    const totalPages = Math.ceil(dataResult.length / pageSize);


    return (

        <>
            <div className="hero h-96 bg-white1 bg-center" style={{ backgroundImage: "url('/images/result/bg-result.png')" }}>
                <div className="flex items-center justify-center">
                    <div className="text-center items-center">
                        <h1 className="text-6xl font-bold text-black1">ผลลัพธ์ลูกค้า</h1>
                        <div className="mx-auto">
                            <div className="breadcrumbs text-lg text-black1">
                                <ul className="flex justify-center">
                                    <li><a href={pageUrl} className="hover:text-pink1">หน้าแรก</a></li>
                                    <li>ผลลัพธ์ลูกค้า</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="m-10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className='w-full mt-3 bg-slate-50 rounded-lg drop-shadow-md p-5'>
                        <div className="flex justify-end items-center">
                            <Menu as="div" className="relative inline-block text-left">
                                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-black1 shadow-sm ring-1 ring-inset ring-gray-400 hover:bg-gray-50">
                                    {selectedMenu === '' ? 'ทั้งหมด' : selectedMenu} {/* แสดง 'ทั้งหมด' ถ้าไม่มีการเลือกเมนู */}
                                    <ChevronDown aria-hidden="true" className="-mr-1 size-4 text-gray-400" />
                                </Menu.Button>

                                {/* ตรวจสอบว่ามีข้อมูลในเมนูหรือไม่ */}
                                {menuItems.length > 0 ? (
                                    <Menu.Items
                                        transition
                                        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                    >
                                        <div className="py-1">
                                            {menuItems.map((menu) => (
                                                <Menu.Item key={menu.value}>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            onClick={() => handleMenuClick(menu.value)}
                                                            className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-black1' : 'text-gray-700'}`}
                                                        >
                                                            {menu.label}
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            ))}
                                        </div>
                                    </Menu.Items>
                                ) : (
                                    <Noitems />
                                )}
                            </Menu>

                        </div>

                        <div className='rounded-lg'>
                            {filtered.length === 0 ? (
                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-3 my-5">
                                    {Array(6)
                                        .fill(null)
                                        .map((_, index) => (
                                            <div
                                                key={index}
                                                className="animate-pulse bg-white p-4 w-60 lg:w-72 md:w-72 drop-shadow-md rounded-lg mx-auto"
                                            >
                                                <div className="h-40 bg-gray-300 rounded-md mt-3"></div>
                                                <div className="h-4 bg-gray-300 rounded-md mt-3 w-3/4"></div>
                                                <div className="h-4 bg-gray-300 rounded-md mt-2 w-1/2"></div>
                                                <div className="flex space-x-2 mt-3">
                                                    <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
                                                    <div className="flex flex-col space-y-2">
                                                        <div className="h-4 bg-gray-300 rounded-md w-40"></div>
                                                        <div className="h-4 bg-gray-300 rounded-md w-20"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            ) : (
                                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-10 gap-y-5 pt-3 sm:my-1 sm:p-5 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                                    {currentItems.map((item) => (
                                        <div
                                            key={item.id}
                                            className="bg-[#FFFFFF] p-4 w-60 lg:w-72 md:w-72 drop-shadow-md rounded-lg mx-auto"
                                        >
                                            <article className="flex max-w-xl flex-col items-start justify-between">
                                                <div className="group relative w-full">
                                                    <Image
                                                        src={item.image}
                                                        alt="models"
                                                        width={200}
                                                        height={200}
                                                        priority={true}
                                                        style={{
                                                            objectFit: "cover",
                                                            objectPosition: "top center",
                                                            height: "200px",
                                                            width: "100%",
                                                        }}
                                                        className="rounded-md mx-auto"
                                                    />
                                                    <h3 className="text-xl font-semibold text-black1 mt-2">
                                                        <a className="block text-black1" style={{
                                                            display: "-webkit-box",
                                                            WebkitBoxOrient: "vertical",
                                                            WebkitLineClamp: 2,
                                                            overflow: "hidden",
                                                        }}>
                                                            {item.title}
                                                        </a>
                                                    </h3>
                                                </div>
                                                <div className="flex flex-row mt-2 text-pink1">
                                                    <Star size={16} />
                                                    <Star size={16} />
                                                    <Star size={16} />
                                                    <Star size={16} />
                                                    <Star size={16} />
                                                </div>
                                                <div className="relative mt-2 flex items-center gap-x-4">
                                                    <Image
                                                        alt={item.author.name}
                                                        src={item.author.imageUrl}
                                                        className="size-10 rounded-full bg-gray1"
                                                        width={40}
                                                        height={40}
                                                    />
                                                    <div className="text-sm/6">
                                                        <p className="font-semibold text-black1">
                                                            <a>
                                                                <span className="absolute inset-0" />
                                                                {item.author.name}
                                                            </a>
                                                        </p>
                                                        <div className="flex items-center gap-x-2 text-xs">
                                                            <time dateTime={item.datetime} className="text-gray1">
                                                                {item.date}
                                                            </time>
                                                            <a className="relative z-10 rounded-full bg-gray1-50 px-2 py-1 font-medium text-gray1 hover:bg-gray-100">
                                                                {item.category}
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* ปุ่มเปลี่ยนหน้า */}
                            <div className="flex justify-center">
                                <button
                                    className={`px-4 py-2 mx-1 border text-blue1 rounded-md ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
                                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                    disabled={currentPage === 1}
                                >
                                    ก่อนหน้า
                                </button>
                                {Array.from({ length: totalPages }, (_, i) => (
                                    <button
                                        key={i}
                                        className={`px-4 py-2 mx-1 border text-blue1 rounded-md ${currentPage === i + 1 ? "bg-gray-300" : "hover:bg-gray-200"}`}
                                        onClick={() => setCurrentPage(i + 1)}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                                <button
                                    className={`px-4 py-2 mx-1 border text-blue1 rounded-md ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
                                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                    disabled={currentPage === totalPages}
                                >
                                    ถัดไป
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default result;