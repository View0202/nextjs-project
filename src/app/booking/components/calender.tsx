
import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import thLocale from '@fullcalendar/core/locales/th';
import './styles.css';

interface EventData {
    id: string;
    title: string;
    start: string;
    end?: string;
}

const FullCalendarComponent: React.FC = () => {

    const [events, setEvents] = useState<EventData[]>([]);

    // useEffect(() => {
    //     fetch("/api/fetch_events.php") // ดึงข้อมูลจาก API
    //         .then((response) => response.json())
    //         .then((data) => setEvents(data))
    //         .catch((error) => console.error("Error fetching events:", error));
    // }, []);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');

    // เปิด Modal และกำหนดวันที่ที่คลิก
    const openModal = (arg: any) => {
        setSelectedDate(arg.dateStr); // บันทึกวันที่ที่คลิก
        setIsModalOpen(true);
    };

    // ปิด Modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div id='calender' className='bg-white p-5 rounded-md'>
                <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    locale={thLocale}
                    events={[
                        {
                            title: 'ตัวอย่างอีเวนต์',
                            start: new Date().toISOString().split('T')[0],
                        },
                        {
                            title: 'ตัวอย่างอีเวนต์',
                            start: new Date().toISOString().split('T')[0],
                        },
                    ]}
                    dateClick={openModal} // เปิด modal เมื่อคลิกวันที่
                //events={events} // โหลดข้อมูลจาก state
                />


                {/* Modal */}
                {isModalOpen && (
                    <dialog className="modal" open>
                        <div className="modal-box bg-slate-50 border">
                            <h3 className="font-bold text-lg text-black1">วันที่ {selectedDate}</h3>
                            <p className="py-4 text-black1">คุณต้องการเพิ่มกิจกรรมในวันนี้หรือไม่?</p>
                            <div className="flex justify-end">
                                <button className="px-2 py-1 text-black1 rounded-md border" onClick={closeModal}>
                                    ปิด
                                </button>
                            </div>

                        </div>
                    </dialog>
                )}
            </div>
        </>
    );
};

export default FullCalendarComponent;
