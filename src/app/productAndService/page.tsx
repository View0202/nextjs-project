"use client";

import React, { useState, useEffect } from 'react';
import Noitems from "../components/noitems";
import { fetchServices, ServiceItem } from "@/services/productService";
import Sidebar from "./components/sidebar";
import Search from "./components/search";
import ProductCard from "./components/productCard";

export default function productAndService() {

    // สร้าง state สำหรับเก็บรายการบริการ (services) ที่ดึงมา
    const [services, setServices] = useState<ServiceItem[]>([]);
    // สร้าง state สำหรับเก็บรายการที่ถูกกรองเพื่อแสดงผล
    const [filteredProductAndServices, setFilteredProductAndServices] = useState<ServiceItem[]>([]);

    const [searchText, setSearchText] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12; // จำนวนข้อมูลต่อหน้า

    // เมื่อ component mount ให้ดึงข้อมูลจาก fetchServices()
    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchServices();
                // สมมติได้ข้อมูลกลับมาเป็นอาเรย์ของ ServiceItem
                setServices(data);
                setFilteredProductAndServices(data);
            } catch (error) {
                //console.error("Error fetching services:", error);
            }
        };
        loadData();
    }, []);

    // คำนวณข้อมูลสำหรับเพจปัจจุบัน (pagination)
    const startIndex = (currentPage - 1) * pageSize;
    const currentItems = filteredProductAndServices.slice(startIndex, startIndex + pageSize);
    const totalPages = Math.ceil(filteredProductAndServices.length / pageSize);

    // เมื่อ searchText เปลี่ยน ให้กรองข้อมูลจาก services
    useEffect(() => {
        // ถ้า searchText เป็น "" => แสดงทั้งหมด
        if (!searchText) {
            setFilteredProductAndServices(services);
        } else {
            // กรองจาก service.name (หรือฟิลด์อื่น ๆ ตามต้องการ)
            const filtered = services.filter((item) => item.service_name.includes(searchText));
            setFilteredProductAndServices(filtered);
        }
    }, [searchText, services]);

    const [filterCate, setFilterCate] = useState<string>("");

    const handleFilter = (category: string) => {
        setFilterCate(category);
        // กรณีอยากกรองตาม category ด้วย สามารถเขียน logic กรองต่อได้
    };

    const pageUrl = '/';

    return (
        <>
            <div className="hero h-96 bg-center"
                style={{ backgroundImage: "url('/images/product/bg-product-service.png')" }}>
                <div className="flex items-center justify-center">
                    <div className="text-center items-center">
                        <h1 className="text-6xl font-bold text-black1">สินค้าและบริการ</h1>
                        <div className="mx-auto">
                            <div className="breadcrumbs text-lg text-black1">
                                <ul className="flex justify-center">
                                    <li><a href={pageUrl} className="hover:text-pink1">หน้าแรก</a></li>
                                    <li>สินค้าและบริการ</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-row pr-10 sapce-x-10'>
                <Sidebar onFilter={handleFilter} />

                <div className='w-full ml-10'>
                    <Search searchText={searchText} setSearchText={setSearchText} />

                    <div className='bg-slate-50 my-5 border rounded-lg drop-shadow-lg'>
                        <div className='py-3'>
                            <div className='flex flex-row justify-between mx-10 items-center'>
                                <h3 className='text-gray1'>แสดงผลลัพธ์ทั้งหมด "สินค้าและบริการ"</h3>
                                <p className='text-gray1 text-xs'>
                                    {searchText
                                        ? `ค้นพบสินค้าและบริการทั้งหมด: ${currentItems.length} รายการ`
                                        : `ค้นพบสินค้าและบริการทั้งหมด: ${filterCate
                                            ? services.filter(item => item.service_type_name === filterCate).length
                                            : services.length} รายการ`}
                                </p>


                            </div>
                            <div className='mx-10 border-t border-gray1'>
                                {/* แสดงข้อมูล */}
                                {currentItems && currentItems.length > 0 ? (
                                    <div className="mx-auto grid grid-cols-1 max-w-2xl gap-x-5 gap-y-5 pt-3 sm:my-1 sm:pt-5 lg:mx-0 lg:max-w-none lg:grid-cols-4 md:grid-cols-2">
                                        {currentItems.map((item, index) => (
                                            <ProductCard
                                                key={item.service_id || index + 1}
                                                id={item.service_id || index + 1}
                                                name={item.service_name || "-"}
                                                type={item.service_type_name || "-"}
                                                category={item.service_type_name || "-"}//เวลาใข้งานจริงให้แก้เป็น item.service_type_name
                                                subtitle={item.service_detail || "-"}
                                                price={item.service_price || index}
                                                image={`/images/product/${item.service_image}`}
                                                filter={filterCate}
                                            />
                                        ))}
                                    </div>
                                ) : (
                                    <Noitems />
                                )}
                            </div>

                            {/* ปุ่มเปลี่ยนหน้า */}
                            <div className="flex justify-center mt-6">
                                <button
                                    className={`px-4 py-2 mx-1 border border-blue1 text-blue1 rounded-md ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
                                        }`}
                                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                    disabled={currentPage === 1}
                                >
                                    ก่อนหน้า
                                </button>
                                {Array.from({ length: totalPages }, (_, i) => (
                                    <button
                                        key={i}
                                        className={`px-4 py-2 mx-1 border border-blue1 text-white rounded-md ${currentPage === i + 1 ? "bg-blue1" : "hover:bg-blue-600"
                                            }`}
                                        onClick={() => setCurrentPage(i + 1)}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                                <button
                                    className={`px-4 py-2 mx-1 border border-blue1 text-blue1 rounded-md ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
                                        }`}
                                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                    disabled={currentPage === totalPages}
                                >
                                    ถัดไป
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}