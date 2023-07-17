'use client'
import Image from 'next/image'
import Link from 'next/link'
import animationData from '../public/loading.json';
import { useState, useEffect, useRef } from "react";
import axios from 'axios'
import Lottie from 'react-lottie';
import ProductComponent from './product';



export default function Home() {

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
            if(ff.length > 8){
                var x=[]
                for(var i = 0; i < ff.length; i++){
                    x.push[ff[i]]
                }
                return setData(x)
            }
            setData(ff);
          })
          .catch((e) => {
            console.log(e.message);
          });
      }, []);

      
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
        return <main className="h-full md:px-12 p-2 mb-32 mt-32">
            <p className="text-center">No products are currently available</p>
        </main>;
    }

    

  return (
    <main className="h-full mt-5">
      <div className="flex md:flex-row flex-col-reverse justify-around md:px-12 p-2">
        <div className="w-full" id="first_image">
            <Image
                src="/jewelry4.jpeg"
                width={600}
                height={600}
                alt="Picture of the author"
                className="w-full h-full"
            />
            <div id="first_image_div" className="flex flex-col justify-center space-y-5 items-center text-center">
                <h1 className="font-bold md:text-6xl text-3xl text-white">Finest Jewelry Collection</h1>
                <button className="text-white"><Link href='/products'>Explore Collection</Link> <i class="fa-solid fa-down-long"></i></button>
            </div>
        </div>
        <div className="flex flex-col justify-between p-2 pt-0 md:pb-0 space-y-2">
            <div className="w-full h-full" id="first_image">
                <Image
                    src="/jewelry.jpg"
                    className="w-full h-full"
                    width={400}
                    height={400}
                    alt="Picture of the author"
                />
                <div id="first_image_div" className="flex flex-col justify-center space-y-5 items-center text-center">
                    <h1 className="font-bold text-3xl text-white">Finest Jewelry Collection</h1>
                </div>
            </div>
            <div className="w-full h-full" id="first_image">
                <Image
                    src="/jewelry3.jpg"
                    className="w-full h-full"
                    width={400}
                    height={400}
                    alt="Picture of the author"
                />
                <div id="first_image_div" className="flex flex-col justify-center space-y-5 items-center text-center">
                    <h1 className="font-bold text-3xl text-white">Finest Jewelry Collection</h1>
                </div>
            </div>
        </div>
      </div>

      <div className="md:px-12 mt-12 p-2 mb-32">
        <div className='flex flex-row justify-between'>
          <h1 className="text-l">TRENDING ITEMS</h1>
          <Link href='/products'>All Products <i class="fa-solid fa-arrow-right fa-bounce"></i></Link>
        </div><br/><hr/><br/>
        <br/><br/>
        <div>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-2 md:gap-5">
            {data.map((x, index) => 
                <ProductComponent data={x} key={index}/>
                )
            }
            </div>
        </div>
      </div>


        <div id="bgig">
            <div id="bgig2" className="w-full h-full flex flex-col-reverse md:flex-row md:space-x-5 p-12">
                    <div className="md:p-12 p-5">
                        <h1 className="font-bold text-3xl mb-5">FINEST JEWELRY</h1>
                        <p className="mb-5">
                            We work with expert jewelers who use high quality and enduring materials. From precious metals, set with genuine gemstones and ethically sourced gold, silver, and diamonds.
                        </p>
                        <Link href='/products'><button className="bg-gray-950 p-3 text-white">Shop Now</button></Link>
                    </div>
                    <Image
                        src='/jewelry4.jpeg'
                        width={500}
                        height={500}
                        className="md:w-1/2 w-full h-full"
                    />
            </div>
        </div>
    </main>
  )
}
