import React from 'react'

export default function employee() {

    const pageUrl = '/';

    return (
        <>
            <div className="hero h-96 bg-white1 bg-center" style={{ backgroundImage: "url('/images/employee/bg-employee.png')" }}>
                <div className="flex items-center justify-center">
                    <div className="text-center items-center">
                        <h1 className="text-6xl font-bold text-black1">พนักงานคลินิค</h1>
                        <div className="mx-auto">
                            <div className="breadcrumbs text-lg text-black1">
                                <ul className="flex justify-center">
                                    <li><a href={pageUrl} className="hover:text-pink1">หน้าแรก</a></li>
                                    <li>พนักงานคลินิค</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='m-10'>
                <div className="flex flex-row items-center justify-center space-x-0 px-20">
                    <div className="w-1/2 h-[400px] flex-row bg-white1 bg-center">
                        <div className="h-[400px] flex-row bg-white1 bg-center" style={{ backgroundImage: "url('/images/About.png')" }}>

                        </div>
                    </div>
                    <div className="w-1/2 h-[400px] flex-row bg-[#FFFFFF] bg-center">
                        <div className="flex items-center justify-center my-14">
                            <div className="text-center w-80 flex flex-col gap-y-5">
                                <p className="text-base text-black1 ">
                                    เกี่ยวกับเรา
                                </p>
                                <h1 className="text-2xl	 font-bold text-black1">
                                แมว
                                </h1>
                                <p className="text-base text-start text-black1">
                                มีประสบการณ์การทำงานเป็นแพทย์ความงาม 10 ปี ดูแลเคสปรับรูปหน้าหลากหลายรูปแบบเป็นเบื้องหลังการออกแบบคอร์สอบรมแพทย์ภายในองค์กรให้กับคลินิกหลายแห่ง
                                    ทั่วประเทศ
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex flex-row items-center justify-center space-x-0 px-20 my-10">
                    <div className="w-1/2 h-[400px] flex-row bg-[#FFFFFF] bg-center">
                        <div className="flex items-center justify-center my-14">
                            <div className="text-center w-80 flex flex-col gap-y-5">
                                <p className="text-base text-black1 ">
                                    พนักงาน
                                </p>
                                <h1 className="text-2xl	 font-bold text-black1">
                                    ชาย
                                </h1>
                                <p className="text-base text-start text-black1">
                                    มีประสบการณ์การทำงานเป็นแพทย์ความงาม 10 ปี ดูแลเคสปรับรูปหน้าหลากหลายรูปแบบเป็นเบื้องหลังการออกแบบคอร์สอบรมแพทย์ภายในองค์กรให้กับคลินิกหลายแห่ง
                                    ทั่วประเทศ
                                </p>
                                <p className="text-sm text-black1 ">
                                    095-6789805
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 h-[400px] flex-row bg-white1 bg-center">
                        <div className="h-[400px] flex-row bg-white1 bg-center" style={{ backgroundImage: "url('/images/About.png')" }}>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row items-center justify-center space-x-0 px-20">
                    <div className="w-1/2 h-[400px] flex-row bg-white1 bg-center">
                        <div className="h-[400px] flex-row bg-white1 bg-center" style={{ backgroundImage: "url('/images/About.png')" }}>

                        </div>
                    </div>
                    <div className="w-1/2 h-[400px] flex-row bg-[#FFFFFF] bg-center">
                        <div className="flex items-center justify-center my-14">
                            <div className="text-center w-80 flex flex-col gap-y-5">
                                <p className="text-base text-black1 ">
                                    เกี่ยวกับเรา
                                </p>
                                <h1 className="text-2xl	 font-bold text-black1">
                                    หญิง                                </h1>
                                <p className="text-base text-start text-black1">
                                    เรามุ่งมั่นที่จะใช้เฉพาะส่วนผสมที่ดีที่สุดในผลิตภัณฑ์ของเราโดยเน้นที่สูตรที่เป็นธรรมชาติและปราศจาก
                                    การทดลองกับสัตว์ทีมผู้เชี่ยวชาญของเราทำงาน
                                    อย่างไม่รู้จักเหน็ดเหนื่อยเพื่อพัฒนาผลิตภัณฑ์นวัตกรรมที่ให้ผลลัพธ์ที่แท้จริงตั้งแต่ผลิตภัณฑ์ดูแลผิวขั้นพื้นฐานไปจนถึงเครื่องสำอางสีสันสดใส
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
