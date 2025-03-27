"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from "next/link";
import Noitems from '@/app/components/noitems';
import Logout from '@/app/components/logout';
import Swal from "sweetalert2";

import { IdCard, ScanFace, Heart, ShoppingBag, History } from 'lucide-react';

interface FavoriteProps {
    id: number
    name: string
    price: number
    image: string
}

interface Customer {
    name: string;
    surname: string;
}

const Favorite: React.FC<FavoriteProps> = ({ id, name, price, image }: FavoriteProps) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [customer, setCustomer] = useState<Customer | null>(null);

    const pageUrl = '/';
    const accountURL = '/account';
    const estimateURL = '/account/estimate';
    const favoritesURL = '/account/favorites';
    const cartURL = '/account/cart';
    const historyURL = '/account/history';

    const items = [
        { id: 9, type: "ทรีตเมนต์", category: "ทรีตเมนต์", name: "ทรีตเมนต์หน้า", subtitle: "ใบหน้าดูกระจ่างใสขึ้น เสริมให้ผิวแข็งแรง", price: 350, image: "/images/product/Treatment.png" },
        { id: 10, type: "ทรีตเมนต์", category: "ทรีตเมนต์", name: "ทรีตเมนต์หน้า", subtitle: "ใบหน้าดูกระจ่างใสขึ้น เสริมให้ผิวแข็งแรง", price: 350, image: "/images/product/Treatment.png" },
        { id: 13, type: "สักคิ้ว", category: "สักคิ้ว", name: "สักคิ้ว", subtitle: "การสักคิ้ว 3 มิติหรือสักคิ้ว 6 มิติ3", price: 150, image: "/images/product/Tattoo.png" },
        { id: 17, type: "ทำเล็บ", category: "ทำเล็บ", name: "ทำเล็บ", subtitle: "ฝีมือช่างขั้นเทพ ราคาถูก", price: 199, image: "/images/product/Nail.png" }

    ];

    const handleDelete = (id: number) => {
        Swal.fire({
            title: "ลบรายการโปรดหรือไม่?",
            text: "",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "ลบรายการ",
            cancelButtonText: "ยกเลิก",
        }).then((result) => {
            if (result.isConfirmed) {
                deleteData(id);
            }
        });
    };

    const deleteData = async (id: number) => {
        try {
            const response = await fetch(`/api/delete/${id}`, { method: "DELETE" });
            if (response.ok) {
                Swal.fire("ลบสำเร็จ!", "ข้อมูลของคุณถูกลบแล้ว.", "success");
                // เพิ่มโค้ดเพื่ออัปเดตข้อมูลในตาราง
            } else {
                Swal.fire("เกิดข้อผิดพลาด!", "ไม่สามารถลบข้อมูลได้.", "error");
            }
        } catch (error) {
            Swal.fire("เกิดข้อผิดพลาด!", "ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์.", "error");
        }
    };

    const pageSize = 12; // จำนวนข้อมูลต่อหน้า

    // คำนวณข้อมูลสำหรับเพจปัจจุบัน
    const startIndex = (currentPage - 1) * pageSize;
    const currentItems = items.slice(startIndex, startIndex + pageSize);

    // คำนวณจำนวนเพจทั้งหมด
    const totalPages = Math.ceil(items.length / pageSize);

    useEffect(() => {
        fetch("http://localhost:8080/api/customer")
            .then((res) => res.json())
            .then((data) => setCustomer(data))
            .catch((err) => console.error("Error fetching customer data:", err));
    }, []);

    return (
        <>
            <div className="relative w-full h-[50vh] hero bg-white1 bg-center">
                {/* ภาพพื้นหลัง */}
                <Image
                    src="/images/profile/bg-profile.png"
                    alt="bg-profile"
                    layout="fill"
                    objectFit="cover"
                    // width={1920}
                    // height={1080}
                />

                {/* เนื้อหาที่แสดงบนภาพพื้นหลัง */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    {/* หัวข้อ */}
                    <h1 className="text-6xl font-bold text-black1">รายการโปรด</h1>

                    {/* Breadcrumbs */}
                    <div className="mx-auto">
                        <div className="breadcrumbs text-lg text-black1">
                            <ul className="flex justify-center">
                                <li><a href={pageUrl} className="hover:text-pink1">หน้าแรก</a></li>
                                <li><a href={accountURL} className="hover:text-pink1">บัญชีของฉัน</a></li>
                                <li>รายการโปรด</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-row '>
                <div className="container w-20 sm:w-20 lg:w-1/4 xl:w-1/4 mb-5 bg-[#FFFFFF] rounded-md shadow-md">
                    <div className='m-5'>
                        <div className="flex min-w-0 gap-x-2 items-center">
                            <div className='flex flex-row items-center m-2 gap-3'>
                                <Image
                                    alt=""
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    className="inline-block size-10 rounded-full ring-1 ring-white1"
                                    width={40}
                                    height={40}
                                />
                                <div className="flex-auto">
                                    <p className="text-base font-semibold text-black1 hidden lg:block max-[1030px]:hidden">
                                        {customer ? `${customer.name} ${customer.surname}` : '-'}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="text-start flex flex-col px-2 gap-5 lg:gap-3">
                            <Link href={accountURL} className="text-black1 text-sm border-b border-gray1 pb-3 flex items-center">
                                <IdCard className="w-8 h-8 block max-[1030px] lg:hidden stroke-1.75" />
                                <span className="hidden lg:block max-[1030px]:hidden">บัญชีของฉัน</span>
                            </Link>

                            <Link href={estimateURL} className="text-black1 text-sm flex items-center">
                                <ScanFace className="w-8 h-8 block max-[1030px]:block lg:hidden" />
                                <span className="hidden lg:block max-[1030px]:hidden">ประเมินใบหน้า</span>
                            </Link>

                            <Link href={favoritesURL} className="text-pink1 text-sm flex items-center">
                                <Heart className="w-8 h-8 block max-[1030px]:block lg:hidden" />
                                <span className="hidden lg:block max-[1030px]:hidden">รายการโปรด</span>
                            </Link>

                            <Link href={cartURL} className="text-black1 text-sm flex items-center">
                                <ShoppingBag className="w-8 h-8 block max-[1030px]:block lg:hidden" />
                                <span className="hidden lg:block max-[1030px]:hidden">ตะกร้าของฉัน</span>
                            </Link>
                            <Link href={historyURL} className="text-black1 text-sm border-b border-gray1 pb-3 flex items-center">
                                <History className="w-8 h-8 block max-[1030px]:block lg:hidden" />
                                <span className="hidden lg:block max-[1030px]:hidden">ประวัติของจอง</span>
                            </Link>

                            <Logout />
                        </div>
                    </div>
                </div>

                <div className='w-full my-5 mx-10'>
                    <div className="px-4 sm:px-0">
                        <h3 className="text-lg/7 font-medium text-gray1">รายการโปรด</h3>
                    </div>


                    <div className='bg-slate-50 mt-3 rounded-lg'>
                        {currentItems.length === 0 ? (
                            <Noitems />
                        ) : (
                            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-10 gap-y-5 pt-3 sm:my-1 sm:p-5 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                                {currentItems.map((item, id) => (
                                    <div className="bg-[#FFFFFF] p-4 w-60 lg:w-60 md:w-60 drop-shadow-md rounded-lg mx-auto" key={id}>
                                        <div className="w-full space-y-2">

                                            <div className="mx-auto w-44 h-44 rounded-md overflow-hidden mb-4">
                                                <Image
                                                    src={image}  // ระบุเส้นทางให้ถูกต้องโดยใช้ / 
                                                    alt="Default Image"
                                                    width={200}
                                                    height={200}
                                                    priority={true}
                                                    style={{ objectFit: "cover", objectPosition: "top center" }}
                                                    className="rounded-md mx-auto"
                                                />
                                            </div>

                                            <h1 className="text-black1 text-2xl text-start font-bold truncate">{name}</h1>

                                            <div
                                                className="text-gray1 text-base text-justify overflow-hidden text-ellipsis mt-2"
                                                style={{ display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 3 }}
                                            >
                                                {price} ฿
                                            </div>

                                            <div
                                                className="cursor-pointer text-red-500 hover:text-red-700 text-center"
                                                onClick={() => handleDelete(id)}
                                            >
                                                ลบรายการ
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}


                        {/* ปุ่มเปลี่ยนหน้า */}
                        <div className="flex justify-center py-3">
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
            </div >
        </>
    );
};

export default Favorite;
