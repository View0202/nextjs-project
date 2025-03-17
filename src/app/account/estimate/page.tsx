"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from "next/link";
import Logout from '@/app/components/logout';

import { Images, IdCard, ScanFace, Heart, ShoppingBag, History } from 'lucide-react';

interface Customer {
    name: string;
    surname: string;
}

export default function coupon() {

    const [customer, setCustomer] = useState<Customer | null>(null);

    const pageUrl = '/';
    const accountURL = '/account';
    const estimateURL = '/account/estimate';
    const favoritesURL = '/account/favorites';
    const cartURL = '/account/cart';
    const historyURL = '/account/history';

    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePreview(e.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async () => {
        try {
            // สร้าง FormData และเพิ่มข้อมูล
            const formData = new FormData();
            const fileInput = document.querySelector('#fileInput') as HTMLInputElement; // Input สำหรับไฟล์
            const file = fileInput?.files?.[0]; // ดึงไฟล์จาก input
            const text = document.querySelector('#textInput') as HTMLInputElement; // Input สำหรับข้อความ

            if (file) formData.append('image', file); // เพิ่มรูปภาพใน FormData
            if (text?.value) formData.append('description', text.value); // เพิ่มข้อความใน FormData

            // Fetch ไปยัง API
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData, // ใช้ FormData เป็น body
            });

            if (!response.ok) throw new Error('ส่งข้อมูลไม่สำเร็จ');

            const result = await response.json();
            //console.log('✅ บันทึกสำเร็จ', result);
        } catch (error) {
            //console.error('❌ เกิดข้อผิดพลาด', error);
        }
    };

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
                />

                {/* เนื้อหาที่แสดงบนภาพพื้นหลัง */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    {/* หัวข้อ */}
                    <h1 className="text-6xl font-bold text-black1">ประเมินใบหน้า</h1>

                    {/* Breadcrumbs */}
                    <div className="mx-auto">
                        <div className="breadcrumbs text-lg text-black1">
                            <ul className="flex justify-center">
                                <li><a href={pageUrl} className="hover:text-pink1">หน้าแรก</a></li>
                                <li><a href={accountURL} className="hover:text-pink1">บัญชีของฉัน</a></li>
                                <li>ประเมินใบหน้า</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-row'>
                <div className="container w-20 sm:w-20 lg:w-1/4 xl:w-1/4 mb-5 bg-[#FFFFFF] rounded-md shadow-md">
                    <div className='m-5'>
                        <div className="flex min-w-0 gap-x-2 items-center">
                            <div className='flex flex-row items-center m-2 gap-3'>
                                <img
                                    alt=""
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    className="inline-block size-10 rounded-full ring-1 ring-white1"
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

                            <Link href={estimateURL} className="text-pink1 text-sm flex items-center">
                                <ScanFace className="w-8 h-8 block max-[1030px]:block lg:hidden" />
                                <span className="hidden lg:block max-[1030px]:hidden">ประเมินใบหน้า</span>
                            </Link>

                            <Link href={favoritesURL} className="text-black1 text-sm flex items-center">
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
                        <h3 className="text-lg/7 font-medium text-gray1">ประเมินใบหน้า</h3>
                    </div>
                    <div className='bg-slate-50 mt-3 rounded-lg p-5'>
                        <div className='bg-[#FFFFFF] rounded-lg border shadow-lg'>
                            <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2">
                                <div className="col-span-full md:col-span-1">
                                    <div className="m-10 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                        {imagePreview ? (
                                            <div className="flex justify-center items-center h-80">
                                                <div className="text-center">
                                                    <img
                                                        src={imagePreview}
                                                        alt="อัปโหลดใบหน้าของคุณ"
                                                        className="mx-auto rounded-lg size-80 object-cover"
                                                    />
                                                    <button
                                                        onClick={() => setImagePreview(null)}
                                                        className="mt-5 px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
                                                    >
                                                        ลบรูปภาพ
                                                    </button>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="flex justify-center items-center h-80">
                                                <div className="text-center">
                                                    <Images
                                                        aria-hidden="true"
                                                        className="mx-auto size-40 text-gray-300"
                                                    />
                                                    <div className="mt-4 flex text-sm/6 text-gray-600 justify-center">
                                                        <label
                                                            htmlFor="fileInput"
                                                            className="relative cursor-pointer rounded-md bg-white font-semibold text-pink1 hover:text-pink-400"
                                                        >
                                                            <span>อัพโหลดใบหน้าของคุณ</span>
                                                            <input
                                                                id="fileInput"
                                                                name="file-upload"
                                                                type="file"
                                                                className="sr-only"
                                                                onChange={handleFileUpload}
                                                            />
                                                        </label>
                                                        <p className="pl-1">หรือลากและวาง</p>
                                                    </div>
                                                    <p className="text-xs/5 text-gray-600">
                                                        รองรับไฟล์ PNG, JPG, GIF ขนาดไม่เกิน 10MB
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>


                                <div className="flex items-center">
                                    <div className="col-span-full md:col-span-1 m-10 w-full max-w-lg">
                                        <label htmlFor="textInput" className="block text-base/6 font-medium text-gray-900">
                                            รายละเอียดใบหน้าของคุณ
                                        </label>
                                        <div className="mt-2">
                                            <textarea
                                                id="textInput"
                                                name="textInput"
                                                rows={5}
                                                className="block w-full rounded-md bg-white border border-gray1 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray1 placeholder:text-gray1 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                placeholder="เพิ่มคำอธิบาย"
                                            />
                                        </div>

                                        <p className="mt-1 text-xs/6 text-gray-600">อธิบายจุดที่อยากแก้ไขบนใบหน้าของคุณ</p>

                                        <div className="mt-5 flex justify-around">
                                            <button
                                                className="px-4 py-2 text-white bg-red1 rounded-md hover:bg-red-600"
                                            >
                                                ยกเลิก
                                            </button>
                                            <button
                                                className="px-4 py-2 text-white bg-green1 rounded-md hover:bg-green-600"
                                                onClick={handleSubmit} // 🟢 เรียกใช้ฟังก์ชันเมื่อกดปุ่ม
                                            >
                                                ส่งข้อมูล
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}