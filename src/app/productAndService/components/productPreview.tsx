import Link from 'next/link';
import React, { useState } from 'react';
import Star from '@/app/components/star';
import { useRouter } from "next/navigation";
import { useHeart } from "../../context/heartContext";
import { Heart } from 'lucide-react';
import { useSession, signIn } from "next-auth/react"; // นับว่ามีการใช้ react router ด้วย


interface ProductPreviewProps {
    ID: number;
    name: string;
    type: string
    category: string
    price: number
    image: string
    subtitle: string
}

// const ProductPreview: React.FC<ProductPreviewProps> = () => {
export default function ProductPreview({ ID, name, price, image, subtitle }: ProductPreviewProps) {
    const router = useRouter();
    const { data: session } = useSession();
    const { addToHeart } = useHeart();

    const [isClicked, setIsClicked] = useState(false);

    const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault(); // ป้องกันการเปลี่ยนหน้า
        addToHeart(); // เรียกใช้ฟังก์ชันเพิ่มจำนวนออเดอร์
        if (!isClicked) {
            setIsClicked(true);
        }
    };


    const handleBook = (ID: number) => {
        if (!session) {
            // ถ้ายังไม่ได้ล็อกอิน ให้ไปที่หน้า login ของ NextAuth
            signIn();
        } else {
            router.push(`/booking/${ID}`); // ล็อกอินแล้วให้ไปหน้าจอง
        }
    };

    return (
        <>
            <dialog id={`productPreview${ID}`} className="modal">
                <div key={ID}
                    className="modal-box w-11/12 max-w-2xl bg-slate-50 text-black1 text-start no-scrollbar">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                        <img
                            alt={image}
                            src={image}
                            className="aspect-[2/3] w-full rounded-lg bg-gray-100 object-cover sm:col-span-4 lg:col-span-5"
                        />
                        <div className="sm:col-span-8 lg:col-span-7">
                            <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{name}</h2>

                            <p className='mt-2 text-gray1 truncate'>
                                {subtitle}
                            </p>
                            <section aria-labelledby="information-heading" className="mt-2">

                                <p className="text-2xl text-gray-900">{price} ฿</p>

                                {/* Reviews */}
                                <div className="mt-6">
                                    <div className="text-sm font-medium text-gray-900">ความคิดเห็น</div>
                                    <div className="flex items-center mt-2">
                                        <div className="flex items-center">
                                            <Star />
                                        </div>
                                        <p className="sr-only">out of 5 stars</p>
                                        <a href="#" className="ml-3 text-sm font-medium text-blue1 hover:text-indigo-600">
                                            10 ความคิดเห็น
                                        </a>
                                    </div>
                                </div>
                            </section>

                            <section aria-labelledby="options-heading" className="mt-10">
                                <h3 id="options-heading" className="sr-only">
                                    Product options
                                </h3>

                                <form>
                                    <div className='flex justify-between gap-3'>
                                        <button
                                            type="submit"
                                            onClick={() => handleBook(ID)}
                                            className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-pink1 px-5 py-2 text-base font-medium text-white hover:bg-pink-600"
                                        >
                                            จองคิว
                                        </button>

                                        <Link
                                            href="/account/cart"
                                            className={`mt-6 flex w-fit items-center justify-center rounded-md border-2 px-5 py-2 text-base font-medium transition-all
                                                ${isClicked
                                                    ? "border-gray-400 bg-gray-300 text-gray-600 cursor-not-allowed" // สีเมื่อกดแล้ว
                                                    : "border-blue1 bg-slate-50 text-blue1 hover:text-slate-50 hover:bg-blue-400 hover:border-blue-500"
                                                }`}
                                            onClick={handleNavigate}
                                            aria-disabled={isClicked} // ป้องกันการกดซ้ำสำหรับผู้ใช้ที่ใช้ screen reader
                                        >
                                            <Heart />
                                        </Link>
                                    </div>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>

                <form method="dialog" className="modal-backdrop space-y-3">
                    <button type="submit">Close</button>
                </form>
            </dialog>
        </>
    );
}
