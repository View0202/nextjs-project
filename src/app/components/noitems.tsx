import React from 'react'

import { FaInbox } from "react-icons/fa";

export default function noitems() {
    return (
        <>
            <div className='p-10'>
                <div className="text-center">
                    <div className="flex justify-center items-center mx-auto">
                        <FaInbox size={48} color="pink1" />
                    </div>
                    <h1 className="mt-4 text-balance text-xl font-medium tracking-tight text-black1 sm:text-2xl">
                        ไม่มีรายการ
                    </h1>
                </div>
            </div>
        </>
    )
}
