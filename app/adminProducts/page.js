'use client'
import Image from 'next/image'
import Link from 'next/link'
import Dropdown from '../dropdown'
import animationData from '../../public/loading.json';
import { useState, useEffect, useRef } from "react";
import axios from 'axios'
import Lottie from 'react-lottie';
import ImageSlider from './imageSlider';




export default function Page() {
    const str = sessionStorage.getItem('user');            
    const parsedObject = JSON.parse(str);
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };
    const [data, setData] = useState();

    const collection = useRef()



    useEffect(() => {
        axios
          .get("/getAllUploads")
          .then((res) => {
            const ff = res.data;
            setData(ff);
          })
          .catch((e) => {
            console.log(e.message);
          });
      }, []);

      const triggerToggle = (e)=> {
        e.preventDefault()
        if(collection.current.value == ''){
          axios
          .get("/getAllUploads")
          .then((res) => {
            const ff = res.data;
            setData(ff);
            console.log(ff);
          })
          .catch((e) => {
            console.log(e.message);
          });
        }
    
        if(collection.current == undefined){
          return console.log(collection.current)
        }
        
          axios
          .post("/getByCategory", {collection: collection.current.value})
          .then((res) => {
            const ff = res.data;
            if(ff == []){
              return
            }
            setData(ff);
          })
          .catch((e) => {
            console.log(e.message);
          });
        
      }

      const deleteProduct = (id)=> {
        console.log(id)
      }


    if( parsedObject == null){
        window.location.href = '/x2yer'
        return
    }

    if(parsedObject.user != 'Admin'){
        window.location.href = '/x2yer'
        return
    }

    if (data == undefined) {
        return (
          <main className="h-full flex flex-col justify-center align-center">
             <div className="flex flex-row justify-between">
                <div className='flex flex-row justify-between'>
                    <Link href='/products'><Dropdown/></Link>
                </div>
            </div><hr/><br/><br/>
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
            <div className="flex flex-row justify-between">
                <div className='flex flex-row justify-between'>
                    <Link href='/products'><Dropdown/></Link>
                </div>
            </div><hr/><br/><br/>
            <p className="text-center">No products are currently available</p>
        </main>;
      }
    
    
      return (
        <main className="h-full mt-24">
          <div className="md:px-12 mt-12 p-2 mb-32">
            <div className="flex flex-row justify-between">
              <div className='flex flex-row justify-between'>
                <Link href='/products'><Dropdown/></Link>
              </div><br/><hr/><br/>
              {/* <form className="mb-2">
                <input type="text" name='collection' ref={collection} className="rounded-md bg-black text-white p-2" placeholder="Search by collection"/>
                <button onClick={triggerToggle} className="mx-2"><i class="fa-solid fa-magnifying-glass"></i></button>
              </form> */}
            </div>
            <hr/><br/><br/>
            <div>
              <div className="grid md:grid-cols-4 grid-cols-2 gap-2 md:gap-5">
                {data.map((x, index) =>
                    <div className="p-1 md:p-5 rounded-md bg-black text-white" key={`${x.name}-${index}`}>
                        {/* {x.filepath.map((y) => (
                        <div>
                            <Image src={'http://localhost:5000'+y} width={400} height={400}/>
                        </div>
                      ))} */}
                      <div>
                        <ImageSlider src={x.filepath}/>
                      </div>
                      <div className="p-1">
                        <p className="text-xs font-bold text-slate-500 mb-2">
                          {x.name}
                        </p>
                        <hr />
                        <p className="text-sm mb-2 mt-2">{x.description}</p>
                        <p>
                            <i class="fa-solid fa-naira-sign"></i>
                          {Number(x.price).toFixed(2)}{" "}
                        </p>
                        <button onClick={()=> deleteProduct(x._id)} className="mt-2 bg-white text-black p-2 w-full text-xs">Delete</button>
                      </div>
                    </div>
                )}
              </div>
            </div>
          </div>
        </main>
      );
    }
    