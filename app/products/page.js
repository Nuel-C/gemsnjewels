'use client'
import Dropdown from '../dropdown'
import animationData from '../../public/loading.json';
import { useState, useEffect, useRef } from "react";
import axios from 'axios'
import Lottie from 'react-lottie';
import ProductComponent from './product';
import Headder from '../headder';
import { redirect, useRouter } from 'next/navigation';
import { useSelector } from 'react-redux'





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
    const [category, setCategory] = useState('All');
    const collection = useRef()
    const [user, setUser] = useState(useSelector((state) => state.user))
    const router = useRouter()





    useEffect(() => {
      axios
      .get("/getRegularUploads")
      .then((res) => {
        const ff = res.data;
        if (ff == undefined || ff === 0) return
        if(category == 'All'){
          setData(undefined)
          setTimeout(()=>{
            setData(ff)
          }, 2000)
        }else{
          const x = ff.filter((x)=>{
            return x.category == category
          })
          console.log(x)
          setData(undefined)
          setTimeout(()=>{
            setData(x)
          }, 2000)
        }
      })
      .catch((e) => {
        console.log(e.message);
      });
    }, [category]);

    const triggerToggle = (e)=> {
      e.preventDefault()
      if(collection.current.value == ''){
        axios
        .get("/getRegularUploads")
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
  
      if(collection.current == undefined){
        return console.log(collection.current)
      }
      
      axios
      .post("/search", {search: collection.current.value})
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

    const addProduct = async (id, number, price, description, name, category, filepath)=> {
      try {
          if(number == 0) return
          if(user.user == 'none') return router.push('/login')
          const res = await axios.post('/addToCart', {
              userId: user._id,
              productId:id,
              price:price,
              description:description,
              name:name,
              category:category,
              number: number,
              images: filepath
          })
          if(res.data.success == true){
              alert('Added '+name+' X '+number+' to cart')
              axios
              .get("/getRegularUploads")
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
          if(res.data.success == false){
              alert('An error occured')
          }
      } catch (error) {
          router.push('/login')
      }
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
          <div className="w-full h-full md:px-12 p-2 mb-32">
              <div className='flex flex-row justify-around align-right items-right w-full'>
                <form className="flex flex-row justify-between w-full bg-gray-200 h-12 text-gray-700 rounded-md mr-2">
                  <input type="text" name='collection' ref={collection} className="rounded-md bg-gray-200 text-gray-700 p-2 w-full" placeholder="Search product name"/>
                  <button onClick={triggerToggle} className="mx-5"><i class="fa-solid fa-magnifying-glass"></i></button>
                </form>
                <Dropdown setCategory={setCategory} value={category} className='w-1/4'/>
              </div><br/><hr/><br/>
            </div>
            <p className="text-center mt-44">No product matches that description</p>
        </main>;
      }
    
    
      return (
        <main className="h-full">
          <Headder/>
          <div className="md:px-12 mt-12 p-2 mb-32">
            <div className="w-full">
              <div className='flex flex-row justify-around align-right items-right w-full'>
                <form className="flex flex-row justify-between w-full bg-gray-200 h-12 text-gray-700 rounded-md mr-2">
                  <input type="text" name='collection' ref={collection} className="rounded-md bg-gray-200 text-gray-700 p-2 w-full" placeholder="Search product name"/>
                  <button onClick={triggerToggle} className="mx-5"><i class="fa-solid fa-magnifying-glass"></i></button>
                </form>
                <Dropdown setCategory={setCategory} value={category} className='w-1/4'/>
              </div><br/><hr/><br/>
            </div>
            <div>
              <div className="grid md:grid-cols-4 grid-cols-2 gap-2 md:gap-5">
                {data.map((x, index) =>
                    <ProductComponent data={x} key={index} addProduct={addProduct}/>
                )}
              </div>
            </div>
          </div>
        </main>
      );
    }
    