import React, { useState } from 'react';
import Image from 'next/image';
import Swal from 'sweetalert2';

import { ImagePlus, CircleCheck } from 'lucide-react';

export default function ModalUpload() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [modalUploadOpen, setModalUploadOpen] = useState(false);
    const [modalSuccessOpen, setModalSuccessOpen] = useState(false);

    const openModal = () => {
        setModalUploadOpen(true);
    };

    const closeModal = () => {
        setModalUploadOpen(false);
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;
        if (file) {
            setSelectedFile(file);

            // อ่านไฟล์และแสดงตัวอย่าง
            const reader = new FileReader();
            reader.onload = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const openSuccess = () => {
        // ตรวจสอบว่ามีไฟล์ก่อนปิด modalUpload
        if (!selectedFile) {
            Swal.fire({
                title: "กรุณาอัปโหลดไฟล์ก่อนบันทึก",
                text: "",
                icon: "warning"
              });
            return;
        }

        // หากมีไฟล์ ให้ปิด modalUpload และเปิด modalSuccess
        setModalUploadOpen(false);
        setModalSuccessOpen(true);

        //console.log("Uploading file:", selectedFile);
    };

    const closeSuccess = () => {
        //setModalOpen(true);
        setModalSuccessOpen(false);

    };

    return (
        <div>
            {/* เปิด modal โดยเรียกฟังก์ชัน openModal */}
            <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-pink1 px-3 py-1.5 text-sm/6 font-semibold text-slate-50 shadow-sm hover:bg-pink-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink1"
                onClick={openModal}
            >
                ยืนยันหลักฐานการโอน
            </button>

            {/* Modal อัพโหลดหลักฐาน */}
            {modalUploadOpen && (
                <dialog id="modalUpload" className="modal" open>
                    <div className="modal-box bg-slate-50">
                        <div className="flex justify-between items-center border-b">
                            <h3 className="font-semibold text-lg text-black1">อัพโหลดหลักฐาน</h3>
                            <button
                                className="btn btn-sm btn-square btn-ghost text-black1"
                                onClick={closeModal}
                            >
                                ✕
                            </button>
                        </div>

                        <div className="space-y-3">
                            <div className="col-span-full">
                                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                    <div className="flex flex-col items-center justify-center h-full">
                                        {preview ? (
                                            <Image
                                                src={preview}
                                                alt="Uploaded preview"
                                                className="h-40 w-auto rounded-md"
                                                width={160}
                                                height={160}
                                            />
                                        ) : (
                                            <ImagePlus aria-hidden="true" className="mx-auto size-12 text-gray-300" />
                                        )}
                                        <div className="mt-4 flex text-sm/6 text-gray1">
                                            <label
                                                htmlFor="file-upload"
                                                className="relative cursor-pointer rounded-md bg-slate-50 font-semibold text-blue1  hover:text-blue-600"
                                            >
                                                <span>อัพโหลดรูปภาพ</span>
                                                <input
                                                    id="file-upload"
                                                    name="file-upload"
                                                    type="file"
                                                    accept="image/png, image/jpeg, image/gif"
                                                    className="sr-only"
                                                    onChange={handleFileChange}
                                                />
                                            </label>
                                            <p className="pl-1">หรือลากแล้ววาง</p>
                                        </div>
                                        <p className="text-xs/5 text-gray1">รองรับไฟล์ PNG, JPG, GIF ขนาดสูงสุด 10MB</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 text-right flex space-x-3 justify-end items-center">
                                <button
                                    type='button'
                                    className="btn btn-outline btn-base-content px-4 text-sm"
                                    onClick={closeModal}
                                >
                                    ปิด
                                </button>
                                <button
                                    type='button'
                                    className="btn px-4 text-sm text-slate-50 bg-green1 border-green1 hover:bg-green-600 hover:text-white hover:border-green-600"
                                    onClick={openSuccess}
                                >
                                    บันทึกหลักฐาน
                                </button>
                            </div>
                        </div>
                    </div>
                </dialog>
            )}

            {/* Modal Success */}
            {modalSuccessOpen && (
                <dialog id="confirmUpload" className="modal" open>
                    <div className="modal-box bg-slate-50">
                        <form method="dialog">
                            <div className="flex justify-between items-center border-b">
                                <div className="flex justify-between items-center space-x-2 text-green1">
                                    <h2 className="text-lg font-medium text-green1">การจองคิวสำเร็จ</h2>
                                </div>
                            </div>

                            <div className="mt-2 space-y-1 text-center">
                                <div className="flex justify-center">
                                    <CircleCheck size={36} color='#13C648' />
                                </div>
                                <p className="text-black1 text-base">บริการ: ทรีตเมนต์มาร์คด้วยมือ + เครื่อง</p>
                                <p className="text-gray1 text-sm">คุณ: วิว</p>
                                <p className="text-gray1 text-sm">วันที่: 02 ธันวาคม 2567</p>
                                <p className="text-gray1 text-sm">เวลา: 11.00 - 12.30 น.</p>
                            </div>

                            <div className="text-center mt-2 border-t border-gray-200 pt-2">
                                <button
                                    className="px-3 items-center text-pink1 hover:text-gray1 rounded"
                                    onClick={closeSuccess}
                                >
                                    ปิด
                                </button>
                            </div>
                        </form>
                    </div>
                </dialog>
            )}
        </div>
    );
}
