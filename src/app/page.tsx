"use client";

import React, { useState, useEffect } from "react";
//import Image from "next/image";
import Link from "next/link";
import Map from "./components/map";
import './swiper.css';
import Star from "./components/star";
import { fetchServices, ServiceItem } from "@/services/productService";
import ProductCard from "./productAndService/components/productCard";

import styled from 'styled-components';
import { Package, MessagesSquare, HandCoins, Phone } from 'lucide-react';
import { PiMapPinAreaFill } from "react-icons/pi";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from "swiper/modules";


const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #EC407A;
`;

const employees = [
    {
        id: 1,
        name: 'แมว',
        imageSrc: '/images/Employee.png',
        imageAlt: 'ทรีตเมนต์, ทำเล็บ',
    },
    {
        id: 2,
        name: 'ชาย',
        imageSrc: '/images/Employee.png',
        imageAlt: 'สักคิ้ว, ทำเล็บ'
    },
    {
        id: 3,
        name: 'หญิง',
        imageSrc: '/images/Employee.png',
        imageAlt: 'สักคิ้ว, ทรีตเมนต์'
    },
];

const dataResult = [
    {
        id: 1,
        title: 'ใบหน้ากระฉับมีสัดส่วน',
        image: "/images/product/All.png",
        date: '16 ธ.ค 2567',
        datetime: '2024-12-16',
        category: 'ทรีตเมนต์',
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 2,
        title: 'ขาวใส',
        image: "/images/product/shampoo.png",
        date: '16 ธ.ค 2567',
        datetime: '2024-12-16',
        category: 'สักคิ้ว',
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 3,
        title: 'ผิวสวย',
        image: "/images/product/shampoo.png",
        date: '16 ธ.ค 2567',
        datetime: '2024-12-16',
        category: 'ทรีตเมนต์',
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 4,
        title: 'ผิวสวย',
        image: "/images/product/shampoo.png",
        date: '16 ธ.ค 2567',
        datetime: '2024-12-16',
        category: 'ทำเล็บ',
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 5,
        title: 'ผิวสวย',
        image: "/images/product/shampoo.png",
        date: '16 ธ.ค 2567',
        datetime: '2024-12-16',
        category: 'สักคิ้ว',
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },

];

export default function Home() {
    const [services, setServices] = useState<ServiceItem[]>([]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchServices();
                // สมมติได้ข้อมูลกลับมาเป็นอาเรย์ของ ServiceItem
                setServices(data);
            } catch (error) {
                //console.error("Error fetching services:", error);
            }
        };
        loadData();
    }, []);

    const [filterCate, setFilterCate] = useState<string>("");

    return (
        <>
            {/* โฆษณา */}
            <div className="hero min-h-screen bg-center" id="home" style={{ backgroundImage: "url('/images/bg-homepage.png')" }}>
                <div className="ml-auto mr-10 w-1/3">
                    <div className="text-right">
                        <p className="md:mb-6 md:text-xl text-black1 sm:mb-2">
                            ยกกระชับผิวหน้า
                        </p>
                        <h1 className="md:text-6xl font-bold text-black1 ">
                            บำรุงผิวพรรณและความสวยงาม
                        </h1>
                        <p
                            className="md:mt-6 text-black1 sm:mt-2"
                            style={{
                                display: "-webkit-box",
                                WebkitBoxOrient: "vertical",
                                WebkitLineClamp: 2,
                                overflow: "hidden",
                            }}
                        >
                            ส่วนผสมจากธรรมชาติจากพืชเพื่อช่วยให้ลูกค้ามีผิวเปล่งปลั่งและมีสุขภาพดี
                        </p>
                    </div>
                </div>
            </div>

            {/* เกี่ยวกับเรา */}
            <div className="mx-10 mt-10" id="about">
                <div className="flex flex-row items-center justify-center space-x-0 px-20 drop-shadow-md">
                    <div className="w-1/2 h-[400px] flex-row bg-center rounded-l-lg">
                        <div className="h-[400px] flex-row bg-center rounded-l-lg" style={{ backgroundImage: "url('/images/About.png')" }}>

                        </div>
                    </div>
                    <div className="w-1/2 h-[400px] flex bg-slate-50 bg-center items-center justify-center rounded-r-lg">
                        <div className="w-1/2 text-center">
                            <p className="text-base text-black1">
                                เกี่ยวกับเรา
                            </p>
                            <h1 className="text-2xl font-bold text-black1 my-5">
                                ร้านค้าของเรา
                            </h1>
                            <p
                                className="text-base text-start text-black1"
                                style={{
                                    display: "-webkit-box",
                                    WebkitBoxOrient: "vertical",
                                    WebkitLineClamp: 8,
                                    overflow: "hidden",
                                }}
                            >
                                เรามุ่งมั่นที่จะใช้เฉพาะส่วนผสมที่ดีที่สุดในผลิตภัณฑ์ของเราโดยเน้นที่สูตรที่เป็นธรรมชาติและปราศจาก
                                การทดลองกับสัตว์ทีมผู้เชี่ยวชาญของเราทำงาน
                                อย่างไม่รู้จักเหน็ดเหนื่อยเพื่อพัฒนาผลิตภัณฑ์นวัตกรรมที่ให้ผลลัพธ์ที่แท้จริงตั้งแต่ผลิตภัณฑ์ดูแลผิวขั้นพื้นฐานไปจนถึงเครื่องสำอางสีสันสดใส
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* สินค้าและบริการ */}
            <div className="mx-10" id="productAndService">
                <div className="w-full my-10">
                    <div className="ml-auto mr-auto w-fit">
                        <div className="flex flex-col items-center space-y-2">
                            <a className="text-black1 text-sm">ผลิตภัณฑ์ชั้นนำ</a>
                            <a className="text-black1 text-2xl font-bold">สินค้าและบริการ</a>
                        </div>
                    </div>

                    <div className="mx-20 bg-slate-50 my-3 rounded-md shadow-lg">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            pagination={{ clickable: true, el: ".custom-pagination" }}
                            spaceBetween={30}
                            slidesPerView={4}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            speed={1000}
                            loop={true}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                640: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                                1280: { slidesPerView: 4 },
                            }}
                            className=""
                        >
                            {services.map((item, index) => (
                                <SwiperSlide className="my-4 flex justify-center" key={index}>
                                    <ProductCard
                                        key={item.service_id || index + 1}
                                        id={item.service_id || index + 1}
                                        name={item.service_name || "-"}
                                        type={item.service_type_name || "-"}
                                        category={item.service_type_name || "-"} //เวลาใข้งานจริงให้แก้เป็น item.service_type_name
                                        subtitle={item.service_detail || "-"}
                                        price={item.service_price || index}
                                        image={`/images/product/${item.service_image}`}
                                        filter={filterCate}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className="flex justify-center pb-4">
                            <Link href="/productAndService">
                                <button className="flex-none rounded-md bg-pink1 px-3.5 py-2.5 text-sm font-base text-slate-50 shadow-sm hover:bg-pink-600 focus-pink1">
                                    ดูสินค้าและบริการทั้งหมด
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

            {/* การขาย */}
            <div className="mx-10" id="sale">
                <div className="w-full my-10 px-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div className="text-center flex flex-col gap-y-5">
                            <CenteredDiv>
                                <Package size={40} />
                            </CenteredDiv>
                            <h1 className="text-2xl font-bold text-black1">
                                จัดส่งฟรี
                            </h1>
                            <p
                                className="text-sm text-black1"
                                style={{
                                    display: "-webkit-box",
                                    WebkitBoxOrient: "vertical",
                                    WebkitLineClamp: 2,
                                    overflow: "hidden",
                                }}
                            >
                                การจัดส่งฟรีสำหรับทุกคำสั่งซื้อ โดยไม่ต้องมีการสั่งซื้อขั้นต่ำ
                            </p>
                        </div>

                        <div className="text-center flex flex-col gap-y-5">
                            <CenteredDiv>
                                <MessagesSquare size={40} />
                            </CenteredDiv>
                            <h1 className="text-2xl font-bold text-black1">
                                สนับสนุน
                            </h1>
                            <p
                                className="text-sm text-black1"
                                style={{
                                    display: "-webkit-box",
                                    WebkitBoxOrient: "vertical",
                                    WebkitLineClamp: 2,
                                    overflow: "hidden",
                                }}
                            >
                                ให้ความช่วยเหลือตลอด 24 ชั่วโมงทุกวันเพื่อตอบคำถามหรือข้อกังวลต่างๆ
                            </p>
                        </div>

                        <div className="text-center flex flex-col gap-y-5">
                            <CenteredDiv>
                                <HandCoins size={40} />
                            </CenteredDiv>
                            <h1 className="text-2xl font-bold text-black1">
                                คืนเงิน
                            </h1>
                            <p
                                className="text-sm text-black1"
                                style={{
                                    display: "-webkit-box",
                                    WebkitBoxOrient: "vertical",
                                    WebkitLineClamp: 2,
                                    overflow: "hidden",
                                }}
                            >
                                ประกันคืนเงิน 100% เพื่อความพึงพอใจของคุณ
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* โปรโมท */}
            <div className="flex flex-row items-center justify-center space-x-0" id="promote">
                <div className="w-1/2 h-[400px] flex-row bg-center" style={{ backgroundImage: "url('/images/Promote1.png')" }}>
                    <div className="flex pl-20 my-40">
                        <div className="text-left">
                            <p className="mb-4 text-sm text-black1">
                                สุดยอด
                            </p>
                            <h1 className="text-2xl font-bold text-black1">
                                ผลิตภัณฑ์ดูแลผิว
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 h-[400px] flex-row bg-white1 bg-center" style={{ backgroundImage: "url('/images/Promote2.png')" }}>
                    <div className="flex pl-20 my-40">
                        <div className="text-left">
                            <p className="mb-4 text-sm text-black1">
                                ผลิตภัณฑ์ชั้นนำ
                            </p>
                            <h1 className="text-2xl font-bold text-black1">
                                การแต่งหน้า
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* พนักงานของเรา */}
            <div className="flex flex-row items-center justify-center space-x-0 m-10" id="employee">
                <div className="container">
                    <div className="flex flex-col items-center space-y-2">
                        <a className="text-black1 text-sm">ดูแลลูกค้า</a>
                        <a className="text-black1 text-2xl font-bold">พนักงานของเรา</a>
                    </div>
                    <div>
                        <div className="mx-20 bg-slate-50 my-3 rounded-md shadow-lg">
                            <div className="mx-auto max-w-xl px-5 py-10 sm:px-6 lg:max-w-7xl lg:px-10 flex justify-center items-center">
                                <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-20">
                                    {employees.map((employee) => (
                                        <div className="bg-[#FFFFFF] p-5 rounded-lg drop-shadow-md">
                                            <a key={employee.id} className="group">
                                                <img
                                                    alt={employee.imageAlt}
                                                    src={employee.imageSrc}
                                                    className="aspect-square w-60 rounded-lg bg-gray1-200 object-cover"
                                                />
                                                <h3 className="mt-4 text-lg text-black1">{employee.name}</h3>
                                                <p className="mt-1 text-sm font-medium text-gray1">{employee.imageAlt}</p>
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* โปรโมชั่น */}
            <div className="flex flex-row items-center justify-center space-x-0 mt-10" id="promotion">
                <div className="w-full">
                    <div className="w-full flex flex-col items-center">
                        <div className=" w-40 flex flex-col text-center space-y-2">
                            <a className="text-black1 text-sm">ประจำร้าน</a>
                            <a className="text-black1 text-2xl font-bold">โปรโมชั่น</a>
                        </div>
                    </div>

                    <div className="bg-slate-50 h-80 mt-3">
                        <Swiper
                            pagination={true}
                            navigation={true} // เปิดใช้งาน navigation
                            modules={[Navigation, Pagination, Autoplay]}
                            className="mySwiper"
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            speed={1000}
                            loop={true}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                640: { slidesPerView: 1 },
                                768: { slidesPerView: 1 },
                                1024: { slidesPerView: 1 },
                                1280: { slidesPerView: 1 },
                            }}
                        >
                            <SwiperSlide>
                                <div
                                    className="w-full h-80 bg-center bg-no-repeat"
                                    style={{
                                        backgroundImage: "url('/images/promotion/promotion_treatment.png')",
                                        backgroundSize: "cover",
                                    }}
                                >
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div
                                    className="w-full h-80 bg-center bg-no-repeat"
                                    style={{
                                        backgroundImage: "url('/images/promotion/promotion_tattoo.png')",
                                        backgroundSize: "cover",
                                    }}
                                >
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div
                                    className="w-full h-80 bg-center bg-no-repeat"
                                    style={{
                                        backgroundImage: "url('/images/promotion/promotion_nail.png')",
                                        backgroundSize: "cover",
                                    }}
                                >
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                </div>
            </div>

            {/* ความคิดเห็น */}
            <div className="m-10" id="review">
                <div className="flex flex-row items-center justify-center space-x-0 px-20 mt-10 drop-shadow-md">
                    <div className="w-1/2 h-[400px] flex flex-col bg-slate-50 bg-center items-center justify-center rounded-l-lg">
                        <div className="w-1/2 text-center space-y-2 mt-3">
                            <p className="text-base text-black1">
                                ความคิดเห็น
                            </p>
                            <h1 className="text-2xl font-bold text-black1">
                                ลูกค้าของเรา
                            </h1>
                        </div>

                        <Swiper
                            pagination={true}
                            modules={[Pagination, Autoplay]}
                            className="mySwiper"
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            speed={1000}
                            loop={true}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                640: { slidesPerView: 1 },
                                768: { slidesPerView: 1 },
                                1024: { slidesPerView: 1 },
                                1280: { slidesPerView: 1 },
                            }}
                        >
                            {dataResult.map((item, index) => (
                                <SwiperSlide className="flex justify-start pt-20" key={index}>
                                    <div className="bg-[#FFFFFF] p-4 w-60 lg:w-3/5 md:w-72 drop-shadow-md border border-gray1-300 rounded-lg mx-auto">
                                        <article className="flex max-w-xl flex-col items-start justify-between gap-1">
                                            <div className="group relative w-full">
                                                <h3 className="text-xl font-semibold text-black1 justify-items-start">
                                                    <a className="block text-black1">{item.title}</a>
                                                </h3>

                                            </div>

                                            <Star />

                                            <div className="flex space-x-2 items-center">
                                                <div className="h-10 w-10 bg-gray-300 rounded-full">
                                                    <img
                                                        alt=""
                                                        src={item.author.imageUrl}
                                                        className="size-10 rounded-full bg-gray1"
                                                    />
                                                </div>
                                                <div className="flex flex-col">
                                                    <p className="font-semibold text-black1 text-start">
                                                        <a>
                                                            <span className="absolute inset-0" />
                                                            {item.author.name}
                                                        </a>
                                                    </p>
                                                    <div className="flex items-center gap-x-4 text-xs">
                                                        <time dateTime={item.datetime} className="text-gray1">
                                                            {item.date}
                                                        </time>
                                                        <a className="relative z-10 rounded-full bg-gray1-50 px-3 py-1 font-medium text-gray1 hover:bg-gray-100">
                                                            {item.category}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>



                                        </article>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    </div>
                    <div className="w-1/2 h-[400px] flex-row bg-center">
                        <div className="h-[400px] flex-row bg-center rounded-r-lg" style={{ backgroundImage: "url('/images/About.png')" }}>

                        </div>
                    </div>
                </div>
            </div>

            {/* ติดต่อเรา */}
            <div className="m-10" id="contact-us">
                <div className="flex flex-row items-center justify-center space-x-0">
                    <div className="container">
                        <div className="flex flex-col items-center space-y-2">
                            <a className="text-black1 text-sm">บริการ</a>
                            <a className="text-black1 text-2xl font-bold">ติดต่อเรา</a>
                        </div>

                        <div className='mt-3'>
                            <div className="grid sm:grid-cols-1 md:flex md:items-center md:justify-start gap-10 mx-20">
                                <div className="text-start inline-block flex-col gap-1 bg-slate-50 rounded-md p-3 shadow-md">
                                    <h1 className="flex flex-row gap-2 text-xl font-bold text-black1 items-center">
                                        <Phone size={20} fill='#21211F' />
                                        เบอร์โทรศัพท์
                                    </h1>
                                    <p className="text-base text-start text-gray1">
                                        090-3166790
                                    </p>
                                </div>

                                <div className="text-start inline-block flex-col gap-1 bg-slate-50 rounded-md p-3 shadow-md">
                                    <h1 className="flex flex-row gap-2 text-xl font-bold text-black1 items-center">
                                        <PiMapPinAreaFill size={24} />
                                        ที่อยู่
                                    </h1>
                                    <p className="text-base text-start text-gray1">
                                        199 2 ตำบล บ้านโฮ่ง อำเภอ บ้านโฮ่ง ลำพูน 51130
                                    </p>
                                </div>
                            </div>

                            <Map />

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
