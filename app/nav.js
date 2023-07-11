'use client'

import React, { useState } from 'react';
import Link from 'next/link';

const Nav = () => {
  const [selectedOption, setSelectedOption] = useState('');

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
                    <Link href='/' onClick={close}>Home</Link>
                    <Link href='/products' onClick={close}>All Products</Link>
                    <Link href='/' onClick={close}>My Orders</Link>
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
