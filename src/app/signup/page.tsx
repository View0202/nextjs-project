import React from 'react';

import { UsersRound, CircleUserRound, Mail, Phone, Cake, KeyRound, LockKeyhole } from 'lucide-react';

export default function newAccount() {

    const pageUrl = '/';
    const loginUrl = '/login';

    return (
        <>
            <div className="hero min-h-screen bg-white1 bg-center" style={{ backgroundImage: "url('/images/login/bg-login.png')" }}>
                <div className="w-1/3 mt-20 mb-5">
                    <div className='justify-center text-center'>
                        <h1 className="text-6xl font-bold text-black1">
                            ลงทะเบียน
                        </h1>
                        <div className="mx-auto">
                            <div className="breadcrumbs text-lg text-black1">
                                <ul className="flex justify-center">
                                    <li><a href={pageUrl} className="hover:text-pink1">หน้าแรก</a></li>
                                    <li><a href={loginUrl} className="hover:text-pink1">บัญชีของฉัน</a></li>
                                    <li>ลงทะเบียน</li>
                                </ul>
                            </div>
                        </div>
                        <div className='flex flex-col h-auto w-1-3 bg-white1 py-5 rounded-lg mt-5'>
                            <div className='mx-5'>
                                <div className="sm:mx-auto sm:w-full sm:max-w-sm sm:my-3">
                                    <form action="#" method="POST" className="space-y-3">
                                        <div>
                                            <label htmlFor="name" className="block text-sm/6 font-medium text-black1 text-start">
                                                ชื่อ
                                            </label>
                                            <div className="mt-1">
                                                <div className="relative">
                                                    <UsersRound size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black1" />
                                                    <input
                                                        id="name"
                                                        name="name"
                                                        type="name"
                                                        required
                                                        autoComplete="name"
                                                        className="block w-full pl-10 rounded-md bg-white1 px-3 py-1.5 text-gray1 outline outline-1 -outline-offset-1 outline-gray1 placeholder:text-gray1 placeholder:bg-white1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray1 sm:text-sm/6"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="lname" className="block text-sm/6 font-medium text-black1 text-start">
                                                นามสกุล
                                            </label>
                                            <div className="mt-1">
                                                <div className="relative">
                                                    <UsersRound size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black1" />
                                                    <input
                                                        id="lname"
                                                        name="lname"
                                                        type="lname"
                                                        required
                                                        autoComplete="lname"
                                                        className="block w-full pl-10 rounded-md bg-white1 px-3 py-1.5 text-gray1 outline outline-1 -outline-offset-1 outline-gray1 placeholder:text-gray1 placeholder:bg-white1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray1 sm:text-sm/6"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="username" className="block text-sm/6 font-medium text-black1 text-start">
                                                ชื่อผู้ใช้
                                            </label>
                                            <div className="mt-1">
                                                <div className="relative">
                                                    <CircleUserRound size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black1" />
                                                    <input
                                                        id="username"
                                                        name="username"
                                                        type="username"
                                                        required
                                                        autoComplete="username"
                                                        className="block w-full pl-10 rounded-md bg-white1 px-3 py-1.5 text-gray1 outline outline-1 -outline-offset-1 outline-gray1 placeholder:text-gray1 placeholder:bg-white1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray1 sm:text-sm/6"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm/6 font-medium text-black1 text-start">
                                                อีเมล์
                                            </label>
                                            <div className="mt-1">
                                                <div className="relative">
                                                    <Mail size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black1" />
                                                    <input
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        required
                                                        autoComplete="email"
                                                        className="block w-full pl-10 rounded-md bg-white1 px-3 py-1.5 text-gray1 outline outline-1 -outline-offset-1 outline-gray1 placeholder:text-gray1 placeholder:bg-white1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray1 sm:text-sm/6"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="block text-sm/6 font-medium text-black1 text-start">
                                                เบอร์โทรศัพท์
                                            </label>
                                            <div className="mt-1">
                                                <div className="relative">
                                                    <Phone size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black1" />
                                                    <input
                                                        id="phone"
                                                        name="phone"
                                                        type="phone"
                                                        required
                                                        autoComplete="phone"
                                                        className="block w-full pl-10 rounded-md bg-white1 px-3 py-1.5 text-gray1 outline outline-1 -outline-offset-1 outline-gray1 placeholder:text-gray1 placeholder:bg-white1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray1 sm:text-sm/6"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="date" className="block text-sm/6 font-medium text-black1 text-start">
                                                วัน เดือน ปีที่เกิด
                                            </label>
                                            <div className="mt-1">
                                                <div className="relative">
                                                    <Cake size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black1" />
                                                    <input
                                                        id="date"
                                                        name="date"
                                                        type="date"
                                                        required
                                                        autoComplete="date"
                                                        className="block w-full pl-10 rounded-md bg-white1 px-3 py-1.5 text-gray1 outline outline-1 -outline-offset-1 outline-gray1 placeholder:text-gray1 placeholder:bg-white1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray1 sm:text-sm/6"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="password" className="block text-sm/6 font-medium text-black1 text-start">
                                                รหัสผ่าน
                                            </label>
                                            <div className="mt-1">
                                                <div className="relative">
                                                    <KeyRound size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black1 " />
                                                    <input
                                                        id="password"
                                                        name="password"
                                                        type="password"
                                                        required
                                                        autoComplete="current-password"
                                                        className="block w-full pl-10 rounded-md bg-white1 px-3 py-1.5 text-gray1 outline outline-1 -outline-offset-1 outline-gray1 placeholder:text-gray1 placeholder:bg-white1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray1 sm:text-sm/6"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="password" className="block text-sm/6 font-medium text-black1 text-start">
                                                ยืนยันรหัสผ่าน
                                            </label>
                                            <div className="mt-1">
                                                <div className="relative">
                                                    <LockKeyhole size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black1 " />
                                                    <input
                                                        id="password"
                                                        name="password"
                                                        type="password"
                                                        required
                                                        autoComplete="current-password"
                                                        className="block w-full pl-10 rounded-md bg-white1 px-3 py-1.5 text-gray1 outline outline-1 -outline-offset-1 outline-gray1 placeholder:text-gray1 placeholder:bg-white1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray1 sm:text-sm/6"
                                                    />
                                                </div>
                                            </div>
                                        </div>


                                    </form>

                                    <div className='mx-10'>
                                        <div className="flex items-center justify-between mt-3">
                                            <a href="/login" className="flex w-24 justify-center bg-white1 text-gray1 px-2 py-1 rounded-md shadow transition outline-1 border-gray1 border-2 hover:bg-gray1 hover:text-white hover:border-gray1">
                                                ยกเลิก
                                            </a>
                                            <button type="submit" className="flex w-24 justify-center bg-white1 text-pink1 px-2 py-1 rounded-md shadow transition outline-1 border-pink1 border-2 hover:bg-pink1 hover:text-white hover:border-pink1">
                                                ลงทะเบียน
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
