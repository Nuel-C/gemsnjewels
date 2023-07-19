import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer(){
    const [user, setUser] = useState(useSelector((state) => state.user))
    return (
        <div>
            <div className='mt-96'>
                <footer className='bg-gray-200 relative p-8 md:px-20'>
                    <div className='flex md:flex-row flex-col justufy-around lg:items-center items-start justify-between md:space-x-16'>
                    <div className='flex flex-col justufy-between items-start text-black mb-10 relative lg:left-0 md:left-10'>
                        <p className='font-bold mb-3'>Location</p>
                        <p className='mb-3'>Isale Eko Avenue, Dolphin Estate, Ikoyi, Lagos, <br /> Nigeria</p>
                        <p>© 2022 Hernalytics</p>
                    </div>
                    <div className='flex flex-col justufy-between items-start text-black mb-10'>
                        <p className='font-bold mb-3'>Quick Links</p>
                        <Link href='/' className='mb-3'>| Home</Link>
                        <Link href='/products' className='mb-3'>| All Products</Link>
                        <Link className={user.user == 'Admin' || user.user == 'User' ? 'hidden': 'block mb-3'} href='/login'>| Login</Link>
                        <Link className={user.user == 'Admin' || user.user == 'User' ? 'hidden': 'block mb-3'} href='/signup'>| Signup</Link>
                    </div>
                    <div className='flex flex-col justufy-between items-start text-black mb-10'>
                        <p className='font-bold mb-3'>Let's chat!</p>
                        <p className='mb-3'>hernalytics@gmail.com</p>
                        <p className='mb-3'>+234 801 234 5678</p>
                        <div className='flex flex-row justufy-between items-center space-x-5'>
                            <Image
                                src="/watsapp.jpg"
                                width={10}
                                height={10}
                                alt="Picture of the author"
                                className="w-8 h-8 rounded-full"
                            />
                            <Image
                                src="/instagram.jpg"
                                width={10}
                                height={10}
                                alt="Picture of the author"
                                className="w-8 h-8 rounded-full"
                            />
                        </div>
                    </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}
