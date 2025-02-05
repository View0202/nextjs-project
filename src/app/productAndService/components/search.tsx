"use client";

import React from 'react';

interface searchProps {
    setSearchText: React.Dispatch<React.SetStateAction<string>>,
    searchText : string
}

export default function Sreach({setSearchText, searchText} : searchProps) {
    return (
        <div className='w-full h-auto mt-5'>
            <div className='bg-slate-50 flex justify-center items-center h-full py-4 px-10 md:px-10 border rounded-md bg-fixed drop-shadow-md'>
                <input
                    id="search"
                    name="search"
                    type="text"
                    required
                    placeholder="ค้นหาสินค้าและบริการ"
                    value={searchText}
                    onChange={(event) => { setSearchText(event.target.value); }}
                    className="min-w-0 flex-auto rounded-md bg-slate-50 px-3.5 py-2 text-base text-gray1 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray1 sm:text-sm/6"
                />
            </div>
        </div>
    );
}
