'use client'

import { useRef } from "react"
import axios from 'axios'
import Headder from "../headder"
import { useRouter } from 'next/navigation';
import { updateUser } from '../../redux/userslice'
import { useDispatch } from "react-redux";



export default function page() {
    const form = useRef()
    const router = useRouter()
    const dispatch = useDispatch()
    const submit = async (e) => {
        e.preventDefault()
        let Form = new FormData(form.current)
        const data = await axios.post('/adminlogin', Form)
        if(data.data.msg == 'error'){
            return alert('Invalid Credentials')
        }
        if(data.data.msg == 'success'){
            dispatch(updateUser(data.data))
            router.push('/adminProducts')

        }
    }
    return (
        <main>
            <Headder/>
            <div className="px-32 text-sm mb-44">
                <div className="flex flex-col justify-center md:mx-24 p-12 items-center">
                    <p className="font-bold text-2xl">Login</p><br></br>
                    <form action="" className='w-80 h-full' ref={form}>
                        <label className="flex flex-col mb-5">
                            <input type="text" className="border border-black rounded-full mt-2 p-2" placeholder="Username" name="username"/>
                        </label>
                        <label className="flex flex-col mb-5">
                            <input type="password" className="border rounded-full border-black mt-2 p-2" name="password" placeholder="Password"/>
                        </label>
                        <button onClick={submit} className="bg-black rounded-full text-white p-2 w-full">submit</button>
                    </form>
                </div>
            </div>
        </main>
    )
}