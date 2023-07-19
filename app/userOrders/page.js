'use client'
import animationData from '../../public/loading.json';
import { useState, useEffect } from "react";
import axios from 'axios'
import Lottie from 'react-lottie';
import OrderItem from './orderItem';
import { useSelector } from 'react-redux'
import Headder from '../headder';
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
      const [user, setUser] = useState(useSelector((state) => state.user))

      
    useEffect(() => {
      axios
      .post("/getUserOrders", {
        userId:user._id,
      })
      .then((res) => {
        const ff = res.data;
        setData(undefined)
        setTimeout(()=>{
          setData(ff)
        }, 2000)
      })
      .catch((e) => {
        console.log(e.message);
      });
    }, []);

    
    if (user.user != 'User') {
      return redirect('/login')
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
        return <main className="h-full">
          <Headder/>
          <div className='md:px-12 p-2 mb-32'>
            <p className="text-center mt-44">No orders currently</p>
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
                    <OrderItem data={x} key={index}/>
                )}
              </div>
            </div>
          </div>
        </main>
      );
    }
    