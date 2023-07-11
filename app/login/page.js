'use client'

import { useRef } from "react";
import { useRouter } from 'next/navigation'
import axios from 'axios'





export default function Page() {

    const router = useRouter()


  const form = useRef()

  const submit = async (e) => {
    e.preventDefault()
    let Form = new FormData(form.current)
    
    const returnData = await axios.post("https://dappartgallery.com/signup", Form )
    router.push('/')
  }

  return (
    <main className="h-full flex flex-col justify-center items-center p-12 mt-24 mb-24">
          <h1 className="mb-7 text-3xl font-bold">Login</h1>
          <form className="flex flex-col space-y-2 text-md md:w-1/3 w-full" ref={form}>
              <label>
                  <input required type="email" placeholder="Email" className="w-full bg-black rounded-md text-white p-2" name="email"/>
              </label>
              <label>
                  <input required type="password" placeholder="Password" className="w-full bg-black rounded-md text-white p-2" name="password"/>
              </label>
              <button onClick={submit} className="w-full p-2 bg-black text-white text-sm rounded-md"><i className="fa-solid fa-right-to-bracket"></i> Submit</button>
          </form>
    </main>
  )
}
