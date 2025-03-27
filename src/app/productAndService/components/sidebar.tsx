import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import PriceFilter from './priceFilter';

import { ChevronDown, ShoppingBasket, ShoppingBag, Filter } from 'lucide-react';

interface sidebarProps {
    onFilter: (category: string) => void
}

export default function Sidebar({ onFilter }: sidebarProps) {
    const router = useRouter();

    const [ProductDropdown, setProductDropdown] = useState(true);
    const [ServiceDropdown, setServiceDropdown] = useState(true);
    const [isOpen, setIsOpen] = useState(true); // สำหรับควบคุม sidebar

    const handleCream = () => {
        onFilter('ครีม');
    };

    const handleShampoo = () => {
        onFilter('แชมพู');
    };

    const handleTreatment = () => {
        onFilter('บริการทรีทเมนท์');
    };

    const handleTattoo = () => {
        onFilter('บริการสักคิ้ว');
    };

    const handleNail = () => {
        onFilter('บริการทำเล็บ');
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed flex items-center bottom-4 right-4 bg-pink1 text-white px-4 py-2 rounded-md shadow-md z-50 lg:hidden"
            >
                <Filter size={16} color="#ffffff" />
                <span className="ml-2">คัดกรอง</span>
            </button>

            <aside className="fixed inset-y-0 left-0 w-1/4 lg:w-1/4 h-full border no-scrollbar overflow-y-auto border-gray-200 bg-white transform transition-transform duration-300 ease-in-out z-50 md:z-20 lg:static lg:translate-x-0 -translate-x-full rounded-md drop-shadow-md">
                <div className='m-5'>
                    <div className="text-start flex flex-col mx-2">
                        <div className='flex flex-col'>

                            <div className="text-black1">
                                <button
                                    className="w-full text-left py-2"
                                    onClick={() => setProductDropdown(!ProductDropdown)}
                                >
                                    <h1 className="flex items-center gap-2" >
                                        <ShoppingBasket size={16} color="#EC407A" />
                                        <span className="font-semibold">สินค้า</span>
                                        <ChevronDown className={`ml-auto w-4 h-4 transform ${ProductDropdown ? "rotate-180" : "rotate-0"}`} />
                                    </h1>
                                </button>
                                {ProductDropdown && (
                                    <ul className="overflow-y-auto flex flex-wrap gap-4 justify-start">
                                        <button
                                            className="text-md block py-1 px-3 rounded-md border border-gray-300 font-light transition text-black1 text-start hover:bg-gray-200 hover:text-gray1 focus:text-slate-50 focus:bg-blue1"
                                            onClick={handleCream}
                                        >
                                            ครีม
                                        </button>
                                        <button className="text-md block py-1 px-3 rounded-md border border-gray-300 font-light transition text-black1 text-start hover:bg-gray-200 hover:text-gray1 focus:text-slate-50 focus:bg-blue1"
                                            onClick={handleShampoo}
                                        >
                                            แชมพู
                                        </button>
                                    </ul>
                                )}
                            </div>

                            <div className=" text-black1">
                                <button
                                    className="w-full text-left py-2 transition-all duration-300"
                                    onClick={() => setServiceDropdown(!ServiceDropdown)}
                                >
                                    <h1 className="flex items-center gap-2">
                                        <ShoppingBag size={16} color="#EC407A" />
                                        <span className="font-semibold">บริการ</span>

                                        <ChevronDown className={`ml-auto w-4 h-4 transform ${ServiceDropdown ? "rotate-180" : "rotate-0"}`} />

                                    </h1>
                                </button>
                                {ServiceDropdown && (
                                    <ul className="overflow-y-auto flex flex-wrap gap-4 justify-start">

                                        <button className="text-md block py-1 px-3 rounded-md border border-gray-300 font-light transition text-black1 text-start hover:bg-gray-200 hover:text-gray1 focus:text-slate-50 focus:bg-blue1"
                                            onClick={handleTreatment}
                                        >
                                            ทรีทเมนต์
                                        </button>
                                        <button className="text-md block py-1 px-3 rounded-md border border-gray-300 font-light transition text-black1 text-start hover:bg-gray-200 hover:text-gray1 focus:text-slate-50 focus:bg-blue1"
                                            onClick={handleTattoo}
                                        >
                                            สักคิ้ว
                                        </button>
                                        <button className="text-md block py-1 px-3 rounded-md border border-gray-300 font-light transition text-black1 text-start hover:bg-gray-200 hover:text-gray1 focus:text-slate-50 focus:bg-blue1"
                                            onClick={handleNail}
                                        >
                                            ทำเล็บ
                                        </button>

                                    </ul>
                                )}
                            </div>
                        </div>

                        {/* <div className=' items-center'>
                            <PriceFilter />
                        </div> */}

                        <div className="divider text-gray1">หรือ</div>

                        <button
                            className="text-md block py-2 px-3 rounded-md border border-gray-300 font-light transition text-black1 text-center text-sm hover:bg-pink1 hover:text-white focus:text-slate-50 focus:bg-pink1"
                            onClick={() => router.push("/booking")} // เมื่อคลิก นำทางไปหน้า /booking
                        >
                            ปฏิทินการจองคิว
                        </button>

                    </div>
                </div>
            </aside>
        </>
    );
}