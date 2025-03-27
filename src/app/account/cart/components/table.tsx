import React from "react";
import Image from 'next/image';
import ModalDetail from "./modalDetail";
import ModalEdit from "./modalEdit";
import ModalDelete from "./modalDelete";
import { useRouter } from "next/navigation";
import { dataBook } from "./dataBook.js";
import Noitems from "@/app/components/noitems";
import './styles.css';

import { Loader, PencilLine, Trash2 } from 'lucide-react';
import { Autoplay } from "swiper/modules";

const TableComponent = () => {
    const router = useRouter();

    const navigateToPayment = () => {
        router.push("/payment");
    };

    return dataBook.length > 0 ? (
        <div className="overflow-x-auto mx-5 py-2">
            <table className="table w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="text-gray1 text-sm opacity-50 bg-gray-200 border-b-2 border-gray-300">
                        <th className="py-2 px-4 text-left">บริการ</th>
                        <th className="py-2 px-4 text-left">ราคา</th>
                        <th className="py-2 px-4 text-left">สถานะ</th>
                        <th className="py-2 px-4 text-left">จัดการ</th>
                        <th className="py-2 px-4"></th>
                    </tr>
                </thead>

                <tbody>
                    {dataBook.map((book, index) => (
                        <tr
                            key={book.id || index + 1}
                            className="hover:bg-gray-50 border-b border-gray-200"
                        >
                            <td className="py-3 px-4">
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-16 w-16">
                                            <Image
                                                src={book.image}
                                                alt={book.title}
                                                layout="fill"
                                                width={64}
                                                height={64}
                                            />
                                        </div>
                                    </div>
                                    <div className="text-black1">
                                        <div className="text-base font-bold">{book.title}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="py-3 px-4 text-gray1 text-sm">{book.price} บาท</td>
                            <td className="py-3 px-4 text-gray1 text-sm">
                                <div className="flex flex-row gap-2 items-center text-amber-400">
                                    <Loader size={20} />
                                    รออนุมัติ
                                </div>
                            </td>
                            <td className="py-3 px-4 text-gray1 text-sm">
                                <div className="flex flex-row gap-10">
                                    <button
                                        className="text-sm text-pink1 hover:text-blue1 transition-colors duration-200"
                                        onClick={navigateToPayment}
                                    >
                                        ชำระเงิน
                                    </button>
                                    <button
                                        className="text-sm text-gray1 hover:text-blue1 transition-colors duration-200"
                                        onClick={() => {
                                            const modal = document.getElementById(
                                                `book${book.id}`
                                            ) as HTMLDialogElement;
                                            if (modal) modal.showModal();
                                        }}
                                    >
                                        รายละเอียด
                                    </button>
                                </div>
                                <ModalDetail
                                    id={book.id || index + 1}
                                    title={book.title || "-"}
                                    price={book.price || index}
                                    name={book.name || "-"}
                                    phone={book.phone || "-"}
                                    date={book.date || "-"}
                                    emp={book.emp || "-"}
                                    time={book.time || "-"}
                                />
                            </td>
                            <th className="py-3 px-4 text-gray1 text-sm">
                                <div className="flex flex-row justify-between">
                                    <PencilLine
                                        size={20}
                                        className="hover:text-amber-400 transition-colors duration-200"
                                        onClick={() => {
                                            const modal = document.getElementById(
                                                `edit${book.id}`
                                            ) as HTMLDialogElement;
                                            if (modal) modal.showModal();
                                        }}

                                    />

                                    <Trash2
                                        size={20}
                                        className="hover:text-[#FF2D47] transition-colors duration-200"
                                        onClick={() => {
                                            const modal = document.getElementById(
                                                `delete${book.id}`
                                            ) as HTMLDialogElement;
                                            if (modal) modal.showModal();
                                        }}
                                    />

                                </div>
                                <ModalEdit
                                    id={book.id || index + 1}
                                    title={book.title || "-"}
                                    price={book.price || index}
                                    name={book.name || "-"}
                                    phone={book.phone || "-"}
                                    date={book.date || "-"}
                                    emp={book.emp || "-"}
                                    time={book.time || "-"}
                                />
                                <ModalDelete
                                    id={book.id || index + 1}
                                />
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    ) : (
        <Noitems />
    );
};

export default TableComponent;
