'use client'

import Link from "next/link"
import { useRef } from "react"


export default function page() {
    const submit = () => {
        return 0
    }
    return (
        <main className="px-32 text-sm mb-44">
            <div className="flex flex-col justify-center md:m-24 p-12 items-center">
                <p className="font-bold text-2xl">Login</p><br></br>
                <form action="" className='w-80 h-full'>
                    <label className="flex flex-col mb-5">
                        <input type="text" className="border border-black rounded-full mt-2 p-2" placeholder="Username" name="username"/>
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