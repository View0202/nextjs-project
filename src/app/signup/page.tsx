"use client";

import React, { useState } from 'react';

import { UsersRound, CircleUserRound, Mail, Phone, Cake, KeyRound, LockKeyhole } from 'lucide-react';

export default function NewAccount() {

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        phone: '',
        date: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('รหัสผ่านและยืนยันรหัสผ่านไม่ตรงกัน');
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/api/customer/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    firstname: formData.firstname,
                    lastname: formData.lastname,
                    username: formData.username,
                    email: formData.email,
                    phone: formData.phone,
                    date_of_birth: formData.date,
                    password: formData.password
                })
            });

            const result = await response.json();
            if (response.ok) {
                alert('สมัครสมาชิกสำเร็จ!');
                window.location.href = '/login';
            } else {
                alert(result.message || 'เกิดข้อผิดพลาด');
            }
        } catch (error) {
            alert('ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้');
        }
    };

    return (
        <div className="hero min-h-screen bg-white1 bg-center" style={{ backgroundImage: "url('/images/login/bg-login.png')" }}>
            <div className="w-1/3 mt-20 mb-5">
                <h1 className="text-6xl font-bold text-black1 text-center">ลงทะเบียน</h1>
                <div className='flex flex-col h-auto w-1-3 bg-white1 py-5 rounded-lg mt-5'>
                    <form onSubmit={handleSubmit} className="mx-5 space-y-3">
                        {[
                            { id: 'firstname', label: 'ชื่อ', icon: UsersRound },
                            { id: 'lastname', label: 'นามสกุล', icon: UsersRound },
                            { id: 'username', label: 'ชื่อผู้ใช้', icon: CircleUserRound },
                            { id: 'email', label: 'อีเมล์', icon: Mail },
                            { id: 'phone', label: 'เบอร์โทรศัพท์', icon: Phone },
                            { id: 'date', label: 'วัน เดือน ปีที่เกิด', icon: Cake, type: 'date' },
                            { id: 'password', label: 'รหัสผ่าน', icon: KeyRound, type: 'password' },
                            { id: 'confirmPassword', label: 'ยืนยันรหัสผ่าน', icon: LockKeyhole, type: 'password' }
                        ].map(({ id, label, icon: Icon, type = 'text' }) => (
                            <div key={id}>
                                <label htmlFor={id} className="block text-sm font-medium text-black1">{label}</label>
                                <div className="relative mt-1">
                                    <Icon size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black1" />
                                    <input
                                        id={id}
                                        name={id}
                                        type={type}
                                        required
                                        autoComplete={id}
                                        value={formData[id as keyof typeof formData]}
                                        onChange={handleChange}
                                        className="block w-full pl-10 rounded-md bg-white1 px-3 py-1.5 text-gray1 outline outline-1 outline-gray1 placeholder-gray1 focus:outline-gray1 sm:text-sm"
                                    />
                                </div>
                            </div>
                        ))}
                        <div className="flex items-center justify-between mt-3 gap-3">
                            <a href="/login" className="w-full text-center bg-white1 text-gray1 px-2 py-1 rounded-md border-gray1 border-2 hover:bg-gray1 hover:text-white">
                                ยกเลิก
                            </a>
                            <button type="submit" className="w-full text-center bg-white1 text-pink1 px-2 py-1 rounded-md border-pink1 border-2 hover:bg-pink1 hover:text-white">
                                ลงทะเบียน
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
