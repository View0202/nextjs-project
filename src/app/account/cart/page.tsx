"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logout from '@/app/components/logout';
import Table from './components/table';

import { IdCard, ScanFace, Heart, ShoppingBag, History } from 'lucide-react';

interface Customer {
    name: string;
    surname: string;
}

export default function cart() {

    const pageUrl = '/';
    const accountURL = '/account';
    const estimateURL = '/account/estimate';
    const favoritesURL = '/account/favorites';
    const cartURL = '/account/cart';
    const historyURL = '/account/history';

    const [customer, setCustomer] = useState<Customer | null>(null);

    useEffect(() => {
        fetch("http://localhost:8080/api/customer")
            .then((res) => res.json())
            .then((data) => setCustomer(data))
            .catch((err) => console.error("Error fetching customer data:", err));
    }, []);

    return (
        <>
            <div className="relative w-full h-[50vh] hero bg-center">
                {/* ภาพพื้นหลัง */}
                <Image
                    src="/images/profile/bg-profile.png"
                    alt="พื้นหลังโปรไฟล์"
                    layout="fill"
                    className="object-cover"
                />

                {/* เนื้อหาที่แสดงบนภาพพื้นหลัง */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    {/* หัวข้อ */}
                    <h1 className="text-6xl font-bold text-black1">ตะกร้าของฉัน</h1>

                    {/* Breadcrumbs */}
                    <div className="mx-auto">
                        <div className="breadcrumbs text-lg text-black1">
                            <ul className="flex justify-center">
                                <li><a href={pageUrl} className="hover:text-pink1">หน้าแรก</a></li>
                                <li><a href={accountURL} className="hover:text-pink1">บัญชีของฉัน</a></li>
                                <li>ตะกร้าของฉัน</li>
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

                            <Link href={estimateURL} className="text-black1 text-sm flex items-center">
                                <ScanFace className="w-8 h-8 block max-[1030px]:block lg:hidden" />
                                <span className="hidden lg:block max-[1030px]:hidden">ประเมินใบหน้า</span>
                            </Link>

                            <Link href={favoritesURL} className="text-black1 text-sm flex items-center">
                                <Heart className="w-8 h-8 block max-[1030px]:block lg:hidden" />
                                <span className="hidden lg:block max-[1030px]:hidden">รายการโปรด</span>
                            </Link>

                            <Link href={cartURL} className="text-pink1 text-sm flex items-center">
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
                        <h3 className="text-lg/7 font-medium text-gray1">ตะกร้าของฉัน</h3>
                    </div>
                    <div className='bg-slate-50 mt-3 rounded-lg p-5 '>
                        <div className='bg-[#FFFFFF] rounded-lg border shadow-lg'>
                            <Table />
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}
