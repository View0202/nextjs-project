"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import styled from 'styled-components';
import { FaRegStar } from "react-icons/fa";
import { PiPackage } from "react-icons/pi";
import { PiChats } from "react-icons/pi";
import { PiCurrencyBtc } from "react-icons/pi";
import { PiEnvelopeSimple } from "react-icons/pi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const data = [
    { title: "แป้งพัฟ", subtitle: "เนื้อแป้งแน่น ไม่ร่วงเป็นฝุ่นผง", description: "Description 1", image: "/images/product/Bestproduct.png" },
    { title: "แป้งพัฟ", subtitle: "เนื้อแป้งแน่น ไม่ร่วงเป็นฝุ่นผง", description: "Description 2", image: "/images/product/Bestproduct.png" },
    { title: "แป้งพัฟ", subtitle: "เนื้อแป้งแน่น ไม่ร่วงเป็นฝุ่นผง", description: "Description 3", image: "/images/product/Bestproduct.png" },
    { title: "แป้งพัฟ", subtitle: "เนื้อแป้งแน่น ไม่ร่วงเป็นฝุ่นผง", description: "Description 4", image: "/images/product/Bestproduct.png" },
    { title: "ครีม", subtitle: "ที่สุดแห่งการฟื้นบำรุงทุกปัญหา", description: "Description 5", image: "/images/product/Product.png" },
    { title: "ครีม", subtitle: "ที่สุดแห่งการฟื้นบำรุงทุกปัญหา", description: "Description 6", image: "/images/product/Product.png" },
    { title: "ครีม", subtitle: "ที่สุดแห่งการฟื้นบำรุงทุกปัญหา", description: "Description 7", image: "/images/product/Product.png" },
    { title: "ครีม", subtitle: "ที่สุดแห่งการฟื้นบำรุงทุกปัญหา", description: "Description 8", image: "/images/product/Product.png" },
    { title: "ทรีตเมนต์หน้า", subtitle: "ใบหน้าดูกระจ่างใสขึ้น เสริมให้ผิวแข็งแรง", description: "Description 9", image: "/images/product/Treatment.png" },
    { title: "ทรีตเมนต์หน้า", subtitle: "ใบหน้าดูกระจ่างใสขึ้น เสริมให้ผิวแข็งแรง", description: "Description 10", image: "/images/product/Treatment.png" },
    { title: "ทรีตเมนต์หน้า", subtitle: "ใบหน้าดูกระจ่างใสขึ้น เสริมให้ผิวแข็งแรง", description: "Description 11", image: "/images/product/Treatment.png" },
    { title: "ทรีตเมนต์หน้า", subtitle: "ใบหน้าดูกระจ่างใสขึ้น เสริมให้ผิวแข็งแรง", description: "Description 12", image: "/images/product/Treatment.png" },
    { title: "สักคิ้ว", subtitle: "การสักคิ้ว 3 มิติหรือสักคิ้ว 6 มิติ3", description: "Description 13", image: "/images/product/Tattoo.png" },
    { title: "สักคิ้ว", subtitle: "การสักคิ้ว 3 มิติหรือสักคิ้ว 6 มิติ4", description: "Description 14", image: "/images/product/Tattoo.png" },
    { title: "สักคิ้ว", subtitle: "การสักคิ้ว 3 มิติหรือสักคิ้ว 6 มิติ5", description: "Description 15", image: "/images/product/Tattoo.png" },
    { title: "สักคิ้ว", subtitle: "การสักคิ้ว 3 มิติหรือสักคิ้ว 6 มิติ", description: "Description 16", image: "/images/product/Tattoo.png" },
    { title: "ทำเล็บ", subtitle: "ฝีมือช่างขั้นเทพ ราคาถูก", description: "Description 17", image: "/images/product/Nail.png" },
    { title: "ทำเล็บ", subtitle: "ฝีมือช่างขั้นเทพ ราคาถูก", description: "Description 18", image: "/images/product/Nail.png" },
    { title: "ทำเล็บ", subtitle: "ฝีมือช่างขั้นเทพ ราคาถูก", description: "Description 19", image: "/images/product/Nail.png" },
    { title: "ทำเล็บ", subtitle: "ฝีมือช่างขั้นเทพ ราคาถูก", description: "Description 20", image: "/images/product/Nail.png" },
];

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
]

export default function Home() {
    return (
        <>
            {/* โฆษณา */}
            <div className="hero min-h-screen bg-white1 bg-center" style={{ backgroundImage: "url('/images/bg-homepage.png')" }}>
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

            {/* สินค้าและบริการ */}
            <div className="mx-10">
                <div className="w-full bg-white1 my-10">
                    <div className="ml-auto mr-auto w-fit">
                        <div className="flex flex-col items-center space-y-2">
                            <a className="text-black1 text-sm">ผลิตภัณฑ์ชั้นนำ</a>
                            <a className="text-black1 text-2xl font-bold">สินค้าและบริการ</a>
                        </div>
                    </div>

                    <div className="flex space-x-4 items-center justify-center my-3">
                        <a href="#" className="px-3 py-2 text-sm font-medium text-black1 hover:text-gray1 hover:border-b-1 hover:border-gray1 focus:text-pink1 focus:border-b-2 focus:border-pink1" aria-current="page">ยอมนิยม</a>
                        <a href="#" className="px-3 py-2 text-sm font-medium text-black1 hover:text-gray1 hover:border-b-1 hover:border-gray1 focus:text-pink1 focus:border-b-2 focus:border-pink1">สินค้า</a>
                        <a href="#" className="px-3 py-2 text-sm font-medium text-black1 hover:text-gray1 hover:border-b-1 hover:border-gray1 focus:text-pink1 focus:border-b-2 focus:border-pink1">ทรีตเมนต์</a>
                        <a href="#" className="px-3 py-2 text-sm font-medium text-black1 hover:text-gray1 hover:border-b-1 hover:border-gray1 focus:text-pink1 focus:border-b-2 focus:border-pink1">สักคิ้ว</a>
                        <a href="#" className="px-3 py-2 text-sm font-medium text-black1 hover:text-gray1 hover:border-b-1 hover:border-gray1 focus:text-pink1 focus:border-b-2 focus:border-pink1">ทำเล็บ</a>
                    </div>

                    <div className="px-20">
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
                            {data.map((item, index) => (
                                <SwiperSlide className="my-4 flex justify-center" key={index}>
                                    <div className="bg-[#ffffff] p-4 w-48 lg:w-72 md:w-72 drop-shadow-md border border-gray1-300 rounded-lg mx-auto">
                                        <div className="w-full space-y-2">
                                            <h1 className="text-black1 text-2xl text-center font-bold">{item.title}</h1>

                                            <div className="mx-auto w-44 h-44 rounded-md overflow-hidden bg-gray1 mb-4">

                                                <Image
                                                    src={item.image}
                                                    alt="models"
                                                    width={200}
                                                    height={200}
                                                    priority={true}
                                                    style={{ objectFit: 'cover', objectPosition: 'top center' }}
                                                    className="rounded-md "
                                                />
                                            </div>

                                            <p className="text-gray1 text-center truncate ">{item.subtitle}</p>
                                            <div className="text-black1 text-justify overflow-hidden text-ellipsis mt-2" style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 3 }}>
                                                {item.description}
                                            </div>
                                            <div className="text-center mt-4 border-t border-gray1-300 pt-4">
                                                <button className="px-3 items-center text-pink1 hover:text-gray1 rounded">จองคิว</button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className="flex justify-center py-2">
                        <Link href="/productAndService">
                            <button className="flex-none rounded-md bg-pink1 px-3.5 py-2.5 text-sm font-semibold text-slate-50 shadow-sm hover:bg-pink-600 focus-pink1">
                                ดูทั้งหมด
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* โปรโมท */}
            <div className="flex flex-row items-center justify-center space-x-0">
                <div className="w-1/2 h-[400px] flex-row bg-white1 bg-center" style={{ backgroundImage: "url('/images/Promote1.png')" }}>
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

            {/* การขาย */}
            <div className="mx-10">
                <div className="w-full my-10 px-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div className="text-center flex flex-col gap-y-5">
                            <CenteredDiv>
                                <PiPackage size={48} />
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
                                <PiChats size={48} />
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
                                <PiCurrencyBtc size={48} />
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

            {/* เกี่ยวกับเรา */}
            <div className="mx-10">
                <div className="flex flex-row items-center justify-center space-x-0 px-20">
                    <div className="w-1/2 h-[400px] flex-row bg-white1 bg-center">
                        <div className="h-[400px] flex-row bg-white1 bg-center rounded-l-lg" style={{ backgroundImage: "url('/images/About.png')" }}>

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

            {/* ความคิดเห็น */}
            <div className="m-10">
                <div className="flex flex-row items-center justify-center space-x-0 px-20 mt-10">
                    <div className="w-1/2 h-[400px] flex bg-slate-50 bg-center items-center justify-center rounded-l-lg">
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
                    <div className="w-1/2 h-[400px] flex-row bg-white1 bg-center">
                        <div className="h-[400px] flex-row bg-white1 bg-center rounded-r-lg" style={{ backgroundImage: "url('/images/About.png')" }}>

                        </div>
                    </div>
                </div>
            </div>

            {/* พนักงานของเรา */}
            <div className="flex flex-row items-center justify-center space-x-0 px-10">
                <div className="container bg-white1 my-10 ">
                    <div className="flex flex-col items-center space-y-2">
                        <a className="text-black1 text-sm">ดูแลลูกค้า</a>
                        <a className="text-black1 text-2xl font-bold">พนักงานของเรา</a>
                    </div>
                    <div className="pt-10">
                        <div className="mx-auto max-w-xl px-5 py-10 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-10 flex justify-center items-center">
                            <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-20">
                                {employees.map((employee) => (
                                    <div className="bg-[#FFFFFF] p-5 rounded-lg">
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

            {/* โปรโมชั่น */}
            <div className="flex flex-row items-center justify-center space-x-0">
                <div className="w-full bg-white1">
                    <div className="w-full flex flex-col items-center">
                        <div className=" w-40 flex flex-col text-center space-y-2">
                            <a className="text-black1 text-sm">ประจำร้าน</a>
                            <a className="text-black1 text-2xl font-bold">โปรโมชั่น</a>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-10">
                            <div className="flex flex-row items-center justify-center space-x-0 mt-10 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                                <div className="w-full h-80 bg-center" style={{ backgroundImage: "url('/images/product/All.png')" }}>
                                    <div className="text-start w-fit mt-5 ml-5">
                                        <p className="text-base text-black1">
                                            ทั้งหมด
                                        </p>
                                    </div>
                                </div>

                                <div className="w-full h-80 bg-white1 bg-center" style={{ backgroundImage: "url('/images/product/Treat.png')" }}>
                                    <div className="text-start w-fit mt-5 ml-5">
                                        <p className="text-base text-black1">
                                            ทรีตเมนต์
                                        </p>
                                    </div>
                                </div>

                                <div className="w-full h-80 bg-white1 bg-center" style={{ backgroundImage: "url('/images/product/Tattoo1.png')" }}>
                                    <div className="text-start w-fit mt-5 ml-5">
                                        <p className="text-base text-black1">
                                            สักคิ้ว
                                        </p>
                                    </div>
                                </div>

                                <div className="w-full h-80 bg-white1 bg-center" style={{ backgroundImage: "url('/images/product/Nail1.png')" }}>
                                    <div className="text-start w-fit mt-5 ml-5">
                                        <p className="text-base text-black1">
                                            ทำเล็บ
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* สมัครสมาชิก */}
            <div className="m-10">
                <div className="relative isolate overflow-hidden bg-white1 py-16 sm:py-5 lg:py-10">
                    <div
                        className="absolute inset-0 -z-10 bg-cover bg-center"
                        style={{ backgroundImage: "url('/images/Sub.png')" }}
                    ></div>
                    <div className="mx-auto max-w-6xl px-20 lg:px-10 py-3">
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2">
                            <div className="max-w-xl lg:max-w-lg">
                                <div className="items-center space-x-2 inline-flex">
                                    <CenteredDiv>
                                        <PiEnvelopeSimple size={48} color="pink" />
                                    </CenteredDiv>

                                    <h2 className="text-2xl font-semibold tracking-tight text-black1">
                                        สมัครสมาชิก
                                    </h2>
                                </div>

                                <p className="mt-2 text-sm text-gray1">
                                    รับข่าวสารข้อเสนอและส่วนลดล่าสุด
                                </p>
                                <div className="mt-1 flex max-w-md gap-x-4">
                                    <label htmlFor="email-address" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="อีเมล์ของคุณ"
                                        autoComplete="email"
                                        className="min-w-0 flex-auto rounded-md bg-white1/5 px-3.5 py-2 text-base text-black1 outline outline-1 -outline-offset-1 outline-gray1/10 placeholder:text-gray1-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink1 sm:text-sm/6"
                                    />
                                    <button
                                        type="submit"
                                        className="flex-none rounded-md bg-pink1 px-3.5 py-2.5 text-sm font-semibold text-white1 shadow-sm hover:bg-gray1 focus-pink1"
                                    >
                                        สมัครสมาชิก
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
