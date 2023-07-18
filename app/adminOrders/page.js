'use client'
import animationData from '../../public/loading.json';
import { useState, useEffect, useRef } from "react";
import axios from 'axios'
import Lottie from 'react-lottie';
import OrderItem from './orderItem';




export default function Page() {
    let parsedObject 
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      const [data, setData] = useState();
      const id = useRef()
      
    useEffect(() => {
      const str = sessionStorage.getItem('user');            
      parsedObject = JSON.parse(str);
      axios
      .get("/getAllOrders")
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

    const triggerToggle = (e)=> {
      e.preventDefault()
      if(id.current.value == ''){
        axios
        .get("/getAllOrders")
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
      }
  
      if(id.current == undefined){
        return console.log(id.current)
      }
      
      axios
      .post("/searchOrderId", {id: id.current.value})
      .then((res) => {
        const ff = res.data;
        if(ff == []){
          return
        }
        setData(undefined)
          setTimeout(()=>{
            setData(ff)
          }, 2000)
      })
      .catch((e) => {
        console.log(e.message);
      });
      
    }

  

    if (data == undefined) {
        return (
          <main className="h-full flex flex-col justify-center align-center">
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
        return <main className="h-full md:px-12 p-2 mb-32">
            <p className="text-center mt-44">No orders currently</p>
        </main>;
      }
    
    
      return (
        <main className="h-full">
          <div className="md:px-12 mt-12 p-2 mb-32">
            <div>
              {/* <div className="grid md:grid-cols-4 grid-cols-2 gap-2 md:gap-5"> */}
              <div className="flex flex-col justify-center items-center space-y-5">
                <form className="flex flex-row justify-between md:w-1/3 w-96 bg-gray-200 h-12 text-gray-700 rounded-md mr-2">
                  <input type="text" name='id' ref={id} className="rounded-md bg-gray-200 text-gray-700 p-2 w-full" placeholder="Search Order Id"/>
                  <button onClick={triggerToggle} className="mx-5"><i class="fa-solid fa-magnifying-glass"></i></button>
                </form>
                {data.map((x, index) =>
                    <OrderItem data={x} key={index}/>
                )}
              </div>
            </div>
          </div>
        </main>
      );
    }
    