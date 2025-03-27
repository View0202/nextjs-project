import React, { useState, useEffect } from 'react';

import { PencilLine} from 'lucide-react';

import { PiUserCircleFill } from "react-icons/pi";

interface Customer {
    name: string;
    surname: string;
    email: string;
    phone: string;
    age: string;
}

export default function ModalProfile() {

    const [loading, setLoading] = useState(false);

    const [customer, setCustomer] = useState<Customer>({
        name: '',
        surname: '',
        email: '',
        phone: '',
        age: ''
    });

    useEffect(() => {
        setLoading(true); // เริ่มโหลดข้อมูล
        fetch("http://localhost:8080/api/customer")
          .then((response) => response.json())
          .then((data) => setCustomer(data))
          .catch((error) => console.error("Error fetching customer data:", error))
          .finally(() => setLoading(false)); // หยุดโหลดไม่ว่าผลจะเป็นอะไร
      }, []);
    

    const openModal = () => {
        const dialog = document.getElementById('modalProfile') as HTMLDialogElement;
        if (dialog) {
            dialog.showModal();
        }
    };

    return (
        <div>
            {/* เปิด modal โดยเรียกฟังก์ชัน openModal */}
            <button className="flex flex-row gap-2 px-4 py-2 items-center text-amber-400 border border-amber-400 rounded-md hover:bg-amber-400 hover:border-amber-400 hover:text-slate-50" onClick={openModal}>
            <PencilLine size={16} />
                แก้ไขข้อมูล
            </button>
            <dialog id="modalProfile" className="modal">

                <div className="modal-box bg-slate-50 space-y-2">
                    <div className="flex justify-start items-center border-b">
                        <h3 className="font-semibold text-xl text-black1">แก้ไขข้อมูลส่วนตัว</h3>
                    </div>

                    <div>
                        <label htmlFor="photo" className="block text-sm/6 font-medium text-black1 text-start">
                            รูปโปรไฟล์
                        </label>
                        <div className="flex items-center gap-x-1">
                            <PiUserCircleFill aria-hidden="true" className="size-12 text-gray-300" />
                            <button
                                type="button"
                                className="rounded-md bg-white px-2 py-1.5 text-xs font-normal text-gray1 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            >
                                เปลี่ยน
                            </button>
                        </div>
                    </div>

                    <div className='flex flex-row space-x-5'>
                        <div>
                            <label htmlFor="name" className="block text-sm/6 font-medium text-black1 text-start">
                                ชื่อ
                            </label>
                            <div className="mt-1">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    autoComplete="name"
                                    placeholder={customer.name || '-'}
                                    className="block w-full rounded-md bg-slate-50 px-3 py-1.5 text-gray1 outline outline-1 outline-offset-1 outline-gray-200 placeholder:text-gray-300 placeholder:bg-slate-50 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray1 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="surname" className="block text-sm/6 font-medium text-black1 text-start">
                                นามสกุล
                            </label>
                            <div className="mt-1">
                                <input
                                    id="surname"
                                    name="surname"
                                    type="text"
                                    required
                                    autoComplete="surname"
                                    placeholder={customer.surname || '-'}
                                    className="block w-full rounded-md bg-slate-50 px-3 py-1.5 text-gray1 outline outline-1 outline-offset-1 outline-gray-200 placeholder:text-gray-300 placeholder:bg-slate-50 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray1 sm:text-sm/6"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-black1 text-start">
                                อีเมล์
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    placeholder={customer.email || '-'}
                                    className="block w-full rounded-md bg-slate-50 px-3 py-1.5 text-gray1 outline outline-1 outline-offset-1 outline-gray-200 placeholder:text-gray-300 placeholder:bg-slate-50 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray1 sm:text-sm/6"
                                />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-row space-x-5'>
                        <div>
                            <label htmlFor="phone" className="block text-sm/6 font-medium text-black1 text-start">
                                เบอร์โทรศัพท์
                            </label>
                            <div className="mt-1">
                                <input
                                    id="phone"
                                    name="phone"
                                    type="phone"
                                    required
                                    autoComplete="phone"
                                    placeholder={customer.phone || '-'}
                                    className="block w-full rounded-md bg-slate-50 px-3 py-1.5 text-gray1 outline outline-1 outline-offset-1 outline-gray-200 placeholder:text-gray-300 placeholder:bg-slate-50 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray1 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="age" className="block text-sm/6 font-medium text-black1 text-start">
                                วัน เดือน ปีที่เกิด
                            </label>
                            <div className="mt-1">
                                <input
                                    id="age"
                                    name="age"
                                    type="age"
                                    required
                                    autoComplete={customer.age || '-'}
                                    className="block w-full rounded-md bg-slate-50 px-3 py-1.5 text-gray1 outline outline-1 outline-offset-1 outline-gray-200 placeholder:text-gray-300 placeholder:bg-slate-50 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray1 sm:text-sm/6"
                                />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-row space-x-5'>
                        <div>
                            <label htmlFor="password" className="block text-sm/6 font-medium text-black1">
                                รหัสผ่าน
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md bg-slate-50 px-3 py-1.5 text-gray1 outline outline-1 outline-offset-1 outline-gray-200 placeholder:text-gray-300 placeholder:bg-slate-50 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray1 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm/6 font-medium text-black1">
                                ยืนยันรหัสผ่าน
                            </label>
                            <div className="mt-1">
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md bg-slate-50 px-3 py-1.5 text-gray1 outline outline-1 outline-offset-1 outline-gray-200 placeholder:text-gray-300 placeholder:bg-slate-50  focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray1 sm:text-sm/6"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-end mt-6 text-right space-x-3">
                        <form method="dialog">
                            <button className="px-4 py-2 items-center text-gray1 border border-gray1 rounded-md hover:bg-gray1 hover:border-gray1 hover:text-slate-50">ปิด</button>
                        </form>

                        <form method="dialog">
                            <button
                            type="submit" 
                            disabled={loading} 
                                className="px-4 py-2 items-center text-slate-50 border bg-amber-400 border-amber-400 rounded-md hover:bg-amber-500 hover:border-amber-500 hover:text-slate-50">
                                    {loading ? "กำลังโหลด..." : "แก้ไขข้อมูล"}
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
}
