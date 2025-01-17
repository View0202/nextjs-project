import React from "react";
import ModalDetail from "./modalDetail";
import { useRouter } from "next/navigation";
import { dataHistory } from "./dataHistory.js";
import Swal from "sweetalert2";
import Noitems from "@/app/components/noitems";

import { CircleCheck, Trash2 } from 'lucide-react';
import ModalDelete from "./modalDelete";

const TableComponent = () => {
    const router = useRouter();

    const navigateToPayment = () => {
        router.push("/payment");
    };

    const handleDelete = (id: number) => {
        Swal.fire({
            title: "ลบการจองคิวหรือไม่?",
            text: "",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "ลบการจองคิว",
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

    return dataHistory.length > 0 ? (
        <div className="overflow-x-auto mx-5 py-2">
            <table className="table w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="text-gray1 text-sm opacity-50 bg-gray-100 border-b-2 border-gray-300">
                        <th className="py-2 px-4 text-left">บริการ</th>
                        <th className="py-2 px-4 text-left">ราคา</th>
                        <th className="py-2 px-4 text-left">สถานะ</th>
                        <th className="py-2 px-4"></th>
                    </tr>
                </thead>

                <tbody>
                    {dataHistory.map((history, index) => (
                        <tr
                            key={history.id || index + 1}
                            className="hover:bg-gray-50 border-b border-gray-200"
                        >
                            <td className="py-3 px-4">
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-16 w-16">
                                            <img src={history.image} alt={history.title} />
                                        </div>
                                    </div>
                                    <div className="text-black1">
                                        <div className="text-base font-bold">{history.title}</div>
                                        <ModalDetail
                                            id={history.id || index + 1}
                                            title={history.title || "-"}
                                            price={history.price || index}
                                            name={history.name || "-"}
                                            phone={history.phone || "-"}
                                            date={history.date || "-"}
                                            emp={history.emp || "-"}
                                            time={history.time || "-"}
                                        />
                                        <button
                                            className="text-gray1 text-xs border-b-2"
                                            onClick={() => {
                                                const modal = document.getElementById(
                                                    `book${history.id}`
                                                ) as HTMLDialogElement;
                                                if (modal) modal.showModal();
                                            }}
                                        >
                                            รายละเอียด
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td className="py-3 px-4 text-gray1 text-sm">{history.price} บาท</td>
                            <td className="py-3 px-4 text-gray1 text-sm ">
                                <div className="flex flex-row gap-2 items-center text-green1">
                                    <CircleCheck size={16} />
                                    อนุมัติ
                                </div>
                            </td>
                            <th className="py-3 px-4">
                            <Trash2
                                        size={20}
                                        className="text-[#7A7772] hover:text-[#FF2D47] transition-colors duration-200"
                                        onClick={() => {
                                            const modal = document.getElementById(
                                                `delete${history.id}`
                                            ) as HTMLDialogElement;
                                            if (modal) modal.showModal();
                                        }}
                                    />
                                    <ModalDelete
                                        id={history.id || index + 1}
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
