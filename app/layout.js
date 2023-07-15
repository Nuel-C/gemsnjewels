'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { Pacifico } from "@next/font/google"
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head';
import Nav from './nav'
import React, { useState, useEffect } from 'react';






const inter = Inter({ subsets: ['latin'] })

export const pacifico = Pacifico({
  subsets: ['cyrillic'],
  weight: '400'
})

export const metadata = {
  title: 'Gems N Jewels',
  description: 'Find amazing Jewelry for yourself and loved ones',
}

export default function RootLayout({ children }) {
  const str = sessionStorage.getItem('user');            
  const parsedObject = JSON.parse(str);
  const [user, setUser] = useState({user:'none'})


  useEffect(()=>{
    if(parsedObject == null){
      return setUser({user:'none'})
    }
    setUser(parsedObject)
  }, [])
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"
        />
        <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/favicon.ico"
          type="image/<generated>"
          sizes="<generated>"
        />     
      </Head>
      <body className={inter.className}>
        <div className='flex flex-row justify-between md:px-20 w-full bg-black p-2 text-white'>
          <div className='flex flex-row justify-between'>
              <i className="fa-sharp fa-regular fa-gem pt-1"></i>
              <h1 className={pacifico.className}>Welcome To Gems N Jewels</h1>
              <i className="fa-sharp fa-regular fa-gem pt-1"></i>  
          </div>
          <div className={user.user == 'none'?'text-sm font-bold':'hidden'}><Link href='/login'>Login</Link> / <Link href='/signup'>Signup</Link></div>
          <div className={user.user == 'none' ? 'hidden': 'block'}><i class="fa-solid fa-cart-shopping text-white"></i></div>
        </div>

        <div className="flex flex-row justify-between m-2 px-5">
          <div className='md:w-1/3 w-1/5 pt-2'>
            <Nav/>
          </div>
          <div className='w-1/2 md:w-1/3 flex flex-col justify-center align-center'>
            <Image
                src="/z_logo.jpeg"
                width={100}
                height={100}
                alt="Picture of the author"
                className='lg:ml-9 w-44'
            />
          </div>
          <div className='w-1/5'></div>
        </div><hr/>

        {children}

        <div>
            <footer className='bg-black relative p-8 md:px-20'>
              <div className='flex md:flex-row flex-col justufy-around lg:items-center items-start justify-between md:space-x-16'>
                <div className='flex flex-col justufy-between items-start text-white mb-10 relative lg:left-0 md:left-10'>
                    <p className='font-bold mb-3'>Location</p>
                    <p className='mb-3'>Isale Eko Avenue, Dolphin Estate, Ikoyi, Lagos, <br /> Nigeria</p>
                    <Image
                        src="/z_logo.jpeg"
                        width={80}
                        height={80}
                        alt="Picture of the author"
                        className="mb-3"
                    />
                    <p>© 2022 Hernalytics</p>
                </div>
                <div className='flex flex-col justufy-between items-start text-white mb-10'>
                    <p className='font-bold mb-3'>Quick Links</p>
                    <Link href='/' className='mb-3'>| Home</Link>
                    <Link href='/products' className='mb-3'>| All Products</Link>
                </div>
                <div className='flex flex-col justufy-between items-start text-white mb-10'>
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
      </body>
      <Script src="https://kit.fontawesome.com/77cfc6d17b.js" crossorigin="anonymous"/>
      <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"/>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"/>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"/>
    </html>
  )
}
