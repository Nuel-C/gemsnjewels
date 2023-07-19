import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Pacifico } from "@next/font/google"
import Link from 'next/link'
import Cart from './cart'
import axios from 'axios'
import Nav from './nav'
import Image from 'next/image'



export const pacifico = Pacifico({
    subsets: ['cyrillic'],
    weight: '400'
})


export default function Headder(){
    const [user, setUser] = useState(useSelector((state) => state.user))
    const [cartItems, setCartItems] = useState(0)


    useEffect(()=>{
        document.title = 'Gems n Jewels'
        axios
        .post("/getUserCartItems", {userId: user._id})
        .then((res) => {
          const ff = res.data;
          if(ff == []){
            return
          }
          if(res.data.success == false){
            return
          }
          setCartItems(ff.length)
        })
        .catch((e) => {
          console.log(e.message);
        });
      })

    return (
        <div>
            <div className='flex flex-row justify-between md:px-20 w-full bg-gray-200 p-2 text-black'>
                <div className='flex flex-row justify-between'>
                    <i className="fa-sharp fa-regular fa-gem pt-1"></i>
                    <h1 className={pacifico.className}>Welcome To Gems N Jewels</h1>
                    <i className="fa-sharp fa-regular fa-gem pt-1"></i>  
                </div>
                <div className={user.user == 'none'?'text-sm font-bold':'hidden'}><Link href='/login'>Login</Link> / <Link href='/signup'>Signup</Link></div>
                <div className={user.user == 'none' || user.user == 'Admin' ? 'hidden': 'block'}><Cart num={cartItems}/></div>
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
        </div>
    )
}
