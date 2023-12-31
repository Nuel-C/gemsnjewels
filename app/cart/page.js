'use client'
import animationData from '../../public/loading.json';
import { useState, useEffect, useRef } from "react";
import axios from 'axios'
import Lottie from 'react-lottie';
import CartItem from './cartItem';
import Headder from '../headder';
import { useSelector } from 'react-redux'
import { redirect } from 'next/navigation';




export default function Page() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      const [data, setData] = useState();
      const [total, setTotal] = useState(0)
      const address = useRef()
      const [user, setUser] = useState(useSelector((state) => state.user))
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'NGN'
      });
      
    useEffect(() => {
      axios
      .post("/getUserCartItems", {
        userId:user._id,
      })
      .then((res) => {
        const ff = res.data;
        setData(undefined)
        setTimeout(()=>{
          setData(ff)
          let y = 0
          ff.map((x)=>{
            y = y + (Number(x.price) * Number(x.number))
          })
          setTotal(y)
        }, 2000)
      })
      .catch((e) => {
        console.log(e.message);
      });
    }, []);
    


    function makePayment() {
      if(address.current.value == '')return alert('empty delivery address')
      FlutterwaveCheckout({
        public_key: process.env.NEXT_PUBLIC_TEST_API_KEY ,
        tx_ref: Date.now(),
        amount: total,
        currency: "NGN",
        payment_options: "card, mobilemoneyghana, ussd",
        callback: function(response){
          axios
          .post("/createOrder", {
            userId:user._id,
            items: [...data],
            total: total,
            email: user.email,
            address: address.current.value,
            phone:user.phone
          })
          .then((res) => {
            if(res.data.success == true){
              alert('Order created successfully')
              setData([])
          }
          if(res.data.success == false){
              alert('An error occured')
          }
          })
          .catch((e) => {
            console.log(e.message);
          }); 
        },
        meta: {
          consumer_id: 23,
          consumer_mac: "92a3-912ba-1192a",
        },
        customer: {
          email: user.email,
          phone_number: user.phone,
        },
        customizations: {
          title: "Gems and Jewels",
          description: "Payment for cart cruise",
          logo: "/z_logo.jpeg",
        },
      });
    }


  const deleteCartItem = async (id)=> {
    const res = await axios.post('/deleteCartItem', {
        productId:id,
    })
    if(res.data.success == true){
        alert('Deleted from cart')
        axios
      .post("/getUserCartItems", {
        userId:user._id,
      })
      .then((res) => {
        const ff = res.data;
        setData(undefined)
        setTimeout(()=>{
          setData(ff)
          let y = 0
          ff.map((x)=>{
            y = y + (Number(x.price) * Number(x.number))
          })
          setTotal(y)
        }, 2000)
      })
      .catch((e) => {
        console.log(e.message);
      });
    }
    if(res.data.success == false){
        alert('An error occured')
    }
  }

  if( user.user == 'none' || user.user == 'Admin'){
      redirect('/login')
      return
  }

  

    if (data == undefined) {
        return (
          <main className="h-full flex flex-col justify-center align-center">
            <Headder/>
            <Lottie 
              options={defaultOptions}
              height={500}
              width={400}
              className='w-full h-full'
            />
          </main>
        );
      }
    
      if (data.length === 0) {
        return <main>
          <Headder/>
          <div className="h-full md:px-12 p-2 mb-32">
            <p className="text-center mt-44">No item in cart</p>
          </div>
        </main>;
      }
    
    
      return (
        <main className="h-full">
          <Headder/>
          <div className="md:px-12 mt-12 p-2 mb-32">
            <div>
              {/* <div className="grid md:grid-cols-4 grid-cols-2 gap-2 md:gap-5"> */}
              <div className="flex flex-col justify-center items-center space-y-5">
                {data.map((x, index) =>
                    <CartItem data={x} key={index} deleteCartItem={deleteCartItem}/>
                )}
                <textarea required ref={address} style={{overFlow:'hidden', resize:'none'}} rows={2} className='bg-gray-200 text-gray-700 p-2 rounded-md md:w-1/3 w-72' placeholder='Delivery address(include state)'></textarea>
                <button onClick={makePayment} className='bg-gray-200 text-gray-700 p-2 rounded-md md:w-1/3 w-72'>Checkout: {formatter.format(total)}</button>
              </div>
            </div>
          </div>
        </main>
      );
    }
    