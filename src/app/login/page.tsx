"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

import { CircleUserRound, LockKeyhole } from "lucide-react";

export default function Login() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const apiEndpoint = "http://localhost:8080/api/customer/login";

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const loginData = new FormData(e.currentTarget);
        const username = loginData.get("username") as string;
        const password = loginData.get("password") as string;

        try {
            const res = await fetch(apiEndpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();
            setLoading(false);

            if (!res.ok) {
                throw new Error(data.error || "เข้าสู่ระบบไม่สำเร็จ");
            }

            Swal.fire({
                icon: "success",
                title: "เข้าสู่ระบบสำเร็จ",
                text: "ยินดีต้อนรับ!",
            }).then(() => {
                router.push("/"); // กลับไปหน้าแรกหลังจากล็อกอิน
            });

        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "เข้าสู่ระบบไม่สำเร็จ",
                text: (error as Error).message || "เกิดข้อผิดพลาดในการเข้าสู่ระบบ",
            });
            setLoading(false);
        }
    };

    return (
        <div className="hero min-h-screen w-full bg-center" style={{ backgroundImage: "url('/images/login/bg-login.png')" }}>
            <div className="w-1/3 mt-10">
                <div className="justify-center text-center">
                    <h1 className="text-6xl font-bold text-black1">บัญชีของฉัน</h1>
                    <div className="mx-auto">
                        <div className="breadcrumbs text-lg text-black1">
                            <ul className="flex justify-center">
                                <li><a href="/" className="hover:text-pink1">หน้าแรก</a></li>
                                <li>บัญชีของฉัน</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col h-auto w-1-3 bg-white1 py-5 rounded-lg mt-5">
                        <div className="mx-5">
                            <div className="block text-sm/6 text-black1 text-center">
                                <h1 className="text-4xl text-black1">เข้าสู่ระบบ</h1>
                            </div>

                            <div className="sm:mx-auto sm:w-full sm:max-w-sm sm:my-3">
                                <form className="space-y-3" onSubmit={handleLogin}>
                                    <div>
                                        <label htmlFor="username" className="block text-sm/6 font-medium text-black1 text-start">ชื่อผู้ใช้</label>
                                        <div className="mt-1 relative">
                                            <CircleUserRound size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black1" />
                                            <input
                                                id="username"
                                                name="username"
                                                type="text"
                                                required
                                                autoComplete="username"
                                                className="block w-full pl-10 rounded-md bg-white1 px-3 py-1.5 text-gray1 outline outline-1 -outline-offset-1 outline-gray1 placeholder:text-gray1 focus:outline focus:outline-2 focus:outline-gray1 sm:text-sm/6"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="password" className="block text-sm/6 font-medium text-black1 text-start">รหัสผ่าน</label>
                                        <div className="mt-1 relative">
                                            <LockKeyhole size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black1" />
                                            <input
                                                id="password"
                                                name="password"
                                                type="password"
                                                required
                                                autoComplete="current-password"
                                                className="block w-full pl-10 rounded-md bg-white1 px-3 py-1.5 text-gray1 outline outline-1 -outline-offset-1 outline-gray1 placeholder:text-gray1 focus:outline focus:outline-2 focus:outline-gray1 sm:text-sm/6"
                                            />
                                        </div>
                                    </div>

                                    <div className="items-start">
                                        <fieldset>
                                            <div className="space-y-3">
                                                <div className="flex gap-3">
                                                    <div className="flex h-6 shrink-0 items-center">
                                                        <div className="group grid size-4 grid-cols-1">
                                                            <input
                                                                id="remember"
                                                                name="remember"
                                                                type="checkbox"
                                                                className="col-start-1 row-start-1 appearance-none rounded border border-gray1 bg-white1 checked:border-pink1 checked:bg-pink1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-pink1"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="text-sm/6">
                                                        <label htmlFor="remember" className="font-medium text-black1">จดจำฉัน</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="flex w-full justify-center rounded-md bg-pink1 px-3 py-1.5 text-sm/6 font-medium text-white1 shadow-sm hover:bg-pink1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-pink1"
                                        >
                                            {loading ? "กำลังโหลด..." : "เข้าสู่ระบบ"}
                                        </button>
                                    </div>

                                </form>

                                <div className="flex items-center justify-between mt-2">
                                    <div className="text-sm">
                                        <a href="#" className="block text-sm/6 font-normal text-black1">ลืมรหัสผ่าน?</a>
                                    </div>
                                    <div className="text-sm">
                                        <a href="/signup" className="font-semibold text-pink1 hover:text-gray1">ลงทะเบียน</a>
                                    </div>
                                </div>

                                
                                <div className="flex w-full flex-col">
                                    <div className="divider" style={{ color: "#21211F" }}>หรือ</div>
                                </div>

                                <div>
                                        <button
                                            type="button"
                                            className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm/6 font-medium text-gray1 shadow-sm border border-gray1 hover:text-white1 hover:bg-gray1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gray1"
                                        >
                                            สำหรับเจ้าของร้าน
                                        </button>
                                    </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
