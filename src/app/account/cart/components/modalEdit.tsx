import { Loader } from 'lucide-react';
import React, { useState, useEffect } from 'react';

interface modalEditProps {
    id: number
    title: string
    price: number
    name: string
    phone: string
    date: string
    emp: string
    time: string
}

export default function ModalEdit({ id, title, price, name, phone, date, emp }: modalEditProps) {
    const [selectedEmployee, setSelectedEmployee] = useState<string | null>(null);
    const [availableTimes, setAvailableTimes] = useState<string[]>([]);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    const [isLoading, setIsLoading] = useState(false);

    const handleEmployeeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const employee = event.target.value;
        setSelectedEmployee(employee);
    };

    useEffect(() => {
        if (selectedEmployee === "ช่างแมว") {
            fetchAvailableTimes("ช่างแมว");
        } else if (selectedEmployee === "ช่างชาย") {
            fetchAvailableTimes("ช่างชาย");
        } else if (selectedEmployee === "ช่างหญิง") {
            fetchAvailableTimes("ช่างหญิง");
        } else {
            // ถ้าไม่มีพนักงานที่เลือก ให้ล้างเวลา
            setAvailableTimes([]);
        }
    }, [selectedEmployee]);

    const fetchAvailableTimes = async (employee: "ช่างแมว" | "ช่างชาย" | "ช่างหญิง") => {
        const times = {
            "ช่างแมว": ["11:00", "13:00", "15:00", "17:00"],
            "ช่างชาย": ["10:00", "12:00", "14:00", "16:00"],
            "ช่างหญิง": ["09:00", "11:00", "13:00", "15:00"],
        };

        // เข้าถึงเวลาตามชื่อพนักงาน
        setAvailableTimes(times[employee] || []);
    };

    const TimeFilter = (time: string) => {
        setSelectedTime(selectedTime === time ? null : time);
    };

    const handleEditBooking = async () => {
        setIsLoading(true); // แสดง Loader เมื่อเริ่มการดำเนินการ
    
        try {
            // สมมติว่ามีการเรียก API หรือดำเนินการบางอย่าง
            const response = await fetch('/api/editBooking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: id, // ส่งข้อมูลที่เกี่ยวข้อง เช่น id ของการจอง
                    // ข้อมูลอื่นๆ ที่คุณต้องการส่งไป
                }),
            });
    
            // ตรวจสอบการตอบกลับจาก API
            if (!response.ok) {
                throw new Error('ไม่สามารถแก้ไขการจองได้');
            }
    
            //const data = await response.json(); // รับข้อมูลจาก API
    
            setIsLoading(false); // ซ่อน Loader
    
            // ปิด modal หลังจากการดำเนินการเสร็จสิ้น
            const modal = document.getElementById(`edit${id}`);
            if (modal) {
                modal.style.display = 'none'; // ปิด modal
            }
    
            alert('แก้ไขการจองคิวเสร็จสิ้น');
        } catch (error) {
            setIsLoading(false); // ซ่อน Loader ในกรณีที่มีข้อผิดพลาด
            //console.error(error);
            alert('เกิดข้อผิดพลาดในการแก้ไขการจอง');
        }
    };

    return (
        <div>
            <dialog id={`edit${id}`} className="modal" key={id}>
                <div className="modal-box bg-slate-50 space-y-2">
                    <div className="flex justify-start items-center border-b">
                        <h3 className="font-semibold text-xl text-black1">แก้ไขข้อมูลการจองคิว</h3>
                    </div>

                    <div>
                        <label htmlFor="service" className="block text-sm/6 font-medium text-black1 text-start">
                            บริการ
                        </label>
                        <div className="flex flex-row space-x-3">
                            <button
                                disabled
                                className="py-2 px-3 text-gray1 font-medium border border-gray-200 rounded-md cursor-not-allowed"
                            >
                                {title}
                            </button>
                        </div>
                    </div>

                    <div className='flex flex-row space-x-5'>
                        <div className='flex flex-col w-1/2'>
                            <label htmlFor="price" className="block text-sm/6 font-medium text-black1 text-start">
                                ราคา (บาท)
                            </label>
                            <div className="mt-1">
                                <p className="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-gray1 text-start font-medium sm:text-sm/6 cursor-not-allowed">
                                    {price}
                                </p>
                            </div>
                        </div>

                        <div className='flex flex-col w-1/2'>
                            <label htmlFor="depositPrice" className="block text-sm/6 font-medium text-black1 text-start">
                                ราคาค่ามัดจำการจองคิว 10%
                            </label>
                            <div className="mt-1">
                                <p className="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-gray1 text-start font-medium sm:text-sm/6 cursor-not-allowed">
                                    {(price * 0.1).toFixed(0)}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-row space-x-5'>
                        <div className='flex flex-col w-1/2'>
                            <label htmlFor="name" className="block text-sm/6 font-medium text-black1 text-start">
                                ชื่อลูกค้า
                            </label>
                            <div className="mt-1">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    autoComplete="name"
                                    placeholder={name}
                                    className="block w-full rounded-md bg-slate-50 px-3 py-1.5 text-gray1 font-medium outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-gray1 placeholder:bg-slate-50 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div className='flex flex-col w-1/2'>
                            <label htmlFor="phone" className="block text-sm/6 font-medium text-black1 text-start">
                                เบอร์โทรศัพท์
                            </label>
                            <div className="mt-1">
                                <input
                                    id="phone"
                                    name="phone"
                                    type="number"
                                    required
                                    autoComplete="phone"
                                    placeholder={phone}
                                    className="block w-full rounded-md bg-slate-50 px-3 py-1.5 text-gray1 font-medium outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-gray1 placeholder:bg-slate-50 sm:text-sm/6"
                                />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-row space-x-5'>
                        <div className='flex flex-col w-1/2'>
                            <label htmlFor="date" className="block text-sm/6 font-medium text-black1 text-start">
                                วันที่การจอง
                            </label>
                            <div>
                                <input
                                    id="date"
                                    name="date"
                                    type="date"
                                    required
                                    autoComplete="off"
                                    placeholder={date}
                                    className="block w-full rounded-md bg-slate-50 px-3 py-1.5 text-gray1 font-medium outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-gray1 placeholder:bg-slate-50 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div className='flex flex-col w-1/2'>
                            <label htmlFor="employee" className="block text-sm/6 font-medium text-black1 text-start">
                                พนักงาน
                            </label>
                            <div>
                                <select className="select-none w-full bg-slate-50 border-2 bg-border-gray1 rounded-md px-3 py-1.5 text-gray1 font-normal outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-gray1 placeholder:bg-slate-50 sm:text-sm/6" onChange={handleEmployeeChange}>
                                    <option disabled selected>{emp}</option>
                                    <option value="ช่างแมว">ช่างแมว</option>
                                    <option value="ช่างชาย">ช่างชาย</option>
                                    <option value="ช่างหญิง">ช่างหญิง</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <label htmlFor="times" className="block text-sm/6 font-medium text-black1 text-start">
                        เวลาที่สามารถจองได้
                    </label>
                    {availableTimes.length > 0 && (
                        <div className="mt-4">
                            <div className="flex flex-wrap space-x-2">
                                {availableTimes.map((time, index) => (
                                    <button
                                        type='button'
                                        key={index}
                                        className={`py-1 px-3 text-sm font-medium ${selectedTime === time
                                            ? 'text-slate-50 border-blue1 border rounded-md px-3 py-1 dark:text-slate-50 dark:border-blue1 dark:bg-blue1'
                                            : ' hover:text-gray1 text-gray-800 border rounded-md px-3 py-1'
                                            }
                                                ${time === "13:00" ? "cursor-not-allowed bg-gray-200 text-gray1" : ""}
                                                `}
                                        onClick={() => TimeFilter(time)}
                                        disabled={time === "13:00"}
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="flex flex-row justify-end mt-6 text-right space-x-3">
                        <form method="dialog">
                            <button className="py-2 px-4 text-base text-gray1 font-medium border border-gray-200 bg-slate-50 rounded-md hover:bg-gray-200 hover:text-gray1 hover:border-gray-200">ปิด</button>

                            </form>
                            <button
                                className="py-2 px-4 text-base text-slate-50 font-medium bg-amber-400 border-amber-400 rounded-md hover:bg-amber-500 hover:text-slate-50 hover:border-amber-500"
                                disabled={isLoading} // ปิดการใช้งานปุ่มเมื่อกำลังโหลด
                                onClick={handleEditBooking}
                            >
                                {isLoading ? (
                                    <Loader size={16} className="animate-spin" /> // แสดง Loader
                                ) : (
                                    'แก้ไขการจองคิว' // ข้อความปกติ
                                )}
                            </button>
                    </div>
                </div>



                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
}
