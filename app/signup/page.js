'use client'
import { useRef } from "react";
import axios from 'axios'
import Headder from "../headder"
import { useRouter } from 'next/navigation';
import { useDispatch } from "react-redux";
import { updateUser } from "@/redux/userslice";




export default function Page() {
  const form = useRef()
  const router = useRouter()
  const dispatch = useDispatch()
  const submit = async (e) => {
    e.preventDefault()
    let Form = new FormData(form.current)
    if(Form.get('password') != Form.get('confirm')) return alert("passwords do not match")    
    //const returnData = await axios.post('/signup', Form)
    const returnData = await axios({
      method: "post",
      url: "/register",
      data: Form,
    })
    if(returnData.data.msg == true) {
      dispatch(updateUser(returnData.data))
      router.push('/products')
    }
    if(returnData.data.msg == false) alert('An error occured')
    if(typeof returnData.data.msg == 'string') alert(returnData.data.msg)
  }

  return (
    <main>
      <Headder/>
      <div className="h-full flex flex-col justify-center items-center p-12 mb-24">
          <h1 className="mb-7 text-2xl font-bold">Sign Up</h1>
          <form className="flex flex-col space-y-2 text-md md:w-1/3 w-full" ref={form}>
              <label>
                  <input required type="email" placeholder="Email" className="rounded-full w-full border border-black p-2" name="email"/>
              </label>
              <label>
                  <input required type="number" placeholder="Phone Number" className="rounded-full w-full border border-black p-2" name="phone"/>
              </label>
              <label>
                  <input required type="password" placeholder="Password" className="rounded-full w-full border border-black p-2" name="password"/>
              </label>
              <label>
                  <input required type="password" placeholder="Confirm Password" className="rounded-full w-full border border-black p-2" name="confirm"/>
              </label>
              <button onClick={submit} className="rounded-full w-full p-2 bg-black text-white text-sm"><i className="fa-solid fa-right-to-bracket"></i> Submit</button>
          </form>
      </div>
    </main>
  )
}
