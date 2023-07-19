'use client'

import { useRouter } from "next/router"
import { useRef } from "react"
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { updateUser } from '../../redux/userslice'
import Headder from "../headder"


export default function page() {
    const router = useRouter()
    const form = useRef()
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const submit = async (e) => {
        e.preventDefault()
        try {
            let Form = new FormData(form.current)
            const data = await axios.post('/userlogin', Form)
            if(data.data.msg == 'error'){
                return alert('Invalid Credentials')
            }
            if(data.data.msg == 'success'){
                dispatch(updateUser(data.data))
                router.push('/')
            }
        } catch (error) {
            return alert('Invalid Credentials')
        }
    }
    return (
        <main className="">
            <Headder/>
            <div className="flex flex-col justify-center md:xm-24 p-12 items-center px-32 text-sm mb-44">
                <p className="font-bold text-2xl">Login</p><br></br>
                <form action="" className='w-80 h-full' ref={form}>
                    <label className="flex flex-col mb-5">
                        <input type="text" className="border border-black rounded-full mt-2 p-2" placeholder="Email" name="email"/>
                    </label>
                    <label className="flex flex-col mb-5">
                        <input type="password" className="border rounded-full border-black mt-2 p-2" name="password" placeholder="Password"/>
                    </label>
                    <button onClick={submit} className="bg-black rounded-full text-white p-2 w-full">submit</button>
                </form>
            </div>
        </main>
    )
}