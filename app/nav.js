'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Nav = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [user, setUser] = useState({user:'none'})
  let parsedObject 
  
  
  useEffect(()=>{
    if (typeof window !== 'undefined') {
      const str = sessionStorage.getItem('user');            
      parsedObject = JSON.parse(str);
    }
    if(parsedObject == null){
      return setUser({user:'none'})
    }
    setUser(parsedObject)
  }, [])

  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
  };

  const close = ()=> {
    var element = document.getElementById("main");
    element.classList.add("hidden");
  }

  const open = ()=> {
    var element = document.getElementById("main");
    element.classList.remove("hidden");
  }

  return (
    <main>
        <div className='fixed z-10 h-full w-full hidden' id='main'>
            <div className='flex flex-row w-full h-full'>
                <div className='flex bg-black flex-col space-y-12 w-1/2 p-12 text-white'>
                    <div className='text-right'>
                        <i class="fa-solid fa-xmark fa-sharp text-white text-xl" onClick={close}></i> 
                    </div>
                    <Link href='/' onClick={close}><i class="fa-solid fa-house"></i> Home</Link>
                    <Link href='/products' className={user.user === 'Admin' ? 'hidden' : 'block'} onClick={close}><i class="fa-regular fa-gem"></i> All Products</Link>
                    <Link href='/adminProducts' className={user.user === 'Admin' ? 'block' : 'hidden'} onClick={close}><i class="fa-regular fa-gem"></i> All Products</Link>
                    <Link href='/userOrders' onClick={close} className={user.user === 'Admin' ? 'hidden' : 'block'}><i class="fa-solid fa-bag-shopping"></i> My Orders</Link>
                    <Link href='/adminOrders' onClick={close} className={user.user === 'Admin' ? 'block' : 'hidden'}><i class="fa-solid fa-bag-shopping"></i> Orders</Link>
                    <Link href='/newProduct' onClick={close} className={user.user === 'Admin' ? 'block' : 'hidden'}><i class="fa-solid fa-file-arrow-up"></i> New Product</Link>
                </div>
                <div id='nv' className='md:w-full w-1/2 h-full'>           
                </div>
            </div>
        </div>
        <div className='pt-2' id='menu'>
            <i class="fa-solid fa-bars text-black text-3xl" onClick={open}></i>
        </div>
    </main>
  );
};

export default Nav;
