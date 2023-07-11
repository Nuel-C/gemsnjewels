'use client'
import Image from 'next/image'
import Link from 'next/link'
import Dropdown from '../dropdown'


export default function Page() {
  return (
    <main className="h-full">
        <div className="md:px-12 mt-12 p-2 mb-32">
        <div className='flex flex-row justify-between'>
          <Link href='/products'><Dropdown/></Link>
        </div><br/><hr/><br/>
        <div>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-2 md:gap-5">
                <div className="p-1 md:p-5 rounded-md bg-black text-white">
                    <div className="p-1">
                        <Image
                            src='/jewelry.jpg'
                            width={400}
                            height={400}
                            className="h-44 rounded"
                        />
                        <p className="text-xs font-bold text-slate-500 mb-2">persian solace</p><hr/>
                        <p className="text-sm mb-2 mt-2">Persian abstract</p>
                        <p><i class="fa-solid fa-naira-sign"></i>9,000.00</p>
                        <button onClick={()=> addToCart('9')} className='mt-2 bg-white text-black p-2 w-full text-xs'>Add</button>
                    </div>
                </div>
                <div className="p-1 md:p-5 rounded-md bg-black text-white">
                    <div className="p-1">
                        <Image
                            src='/jewelry.jpg'
                            width={400}
                            height={400}
                            className="h-44 rounded"
                        />
                        <p className="text-xs font-bold text-slate-500 mb-2">Persian solace</p><hr/>
                        <p className="text-sm mb-2 mt-2">Persian abstract</p>
                        <p><i class="fa-solid fa-naira-sign"></i>9,000.00</p>
                        <button onClick={()=> addToCart('9')} className='mt-2 bg-white text-black p-2 w-full text-xs'>Add</button>
                    </div>
                </div>
                <div className="p-1 md:p-5 rounded-md bg-black text-white">
                    <div className="p-1">
                        <Image
                            src='/jewelry.jpg'
                            width={400}
                            height={400}
                            className="h-44 rounded"
                        />
                        <p className="text-xs font-bold text-slate-500 mb-2">persian solace</p><hr/>
                        <p className="text-sm mb-2 mt-2">Persian abstract</p>
                        <p><i class="fa-solid fa-naira-sign"></i>9,000.00</p>
                        <button onClick={()=> addToCart('9')} className='mt-2 bg-white text-black p-2 w-full text-xs'>Add</button>
                    </div>
                </div>
                <div className="p-1 md:p-5 rounded-md bg-black text-white">
                    <div className="p-1">
                        <Image
                            src='/jewelry.jpg'
                            width={400}
                            height={400}
                            className="h-44 rounded"
                        />
                        <p className="text-xs font-bold text-slate-500 mb-2">persian solace</p><hr/>
                        <p className="text-sm mb-2 mt-2">Persian abstract</p>
                        <p><i class="fa-solid fa-naira-sign"></i>9,000.00</p>
                        <button onClick={()=> addToCart('9')} className='mt-2 bg-white text-black p-2 w-full text-xs'>Add</button>
                    </div>
                </div>
                <div className="p-1 md:p-5 rounded-md bg-black text-white">
                    <div className="p-1">
                        <Image
                            src='/jewelry.jpg'
                            width={400}
                            height={400}
                            className="h-44 rounded"
                        />
                        <p className="text-xs font-bold text-slate-500 mb-2">persian solace</p><hr/>
                        <p className="text-sm mb-2 mt-2">Persian abstract</p>
                        <p><i class="fa-solid fa-naira-sign"></i>9,000.00</p>
                        <button onClick={()=> addToCart('9')} className='mt-2 bg-white text-black p-2 w-full text-xs'>Add</button>
                    </div>
                </div>
                <div className="p-1 md:p-5 rounded-md bg-black text-white">
                    <div className="p-1">
                        <Image
                            src='/jewelry.jpg'
                            width={400}
                            height={400}
                            className="h-44 rounded"
                        />
                        <p className="text-xs font-bold text-slate-500 mb-2">persian solace</p><hr/>
                        <p className="text-sm mb-2 mt-2">Persian abstract</p>
                        <p><i class="fa-solid fa-naira-sign"></i>9,000.00</p>
                        <button onClick={()=> addToCart('9')} className='mt-2 bg-white text-black p-2 w-full text-xs'>Add</button>
                    </div>
                </div>
                <div className="p-1 md:p-5 rounded-md bg-black text-white">
                    <div className="p-1">
                        <Image
                            src='/jewelry.jpg'
                            width={400}
                            height={400}
                            className="h-44 rounded"
                        />
                        <p className="text-xs font-bold text-slate-500 mb-2">persian solace</p><hr/>
                        <p className="text-sm mb-2 mt-2">Persian abstract</p>
                        <p><i class="fa-solid fa-naira-sign"></i>9,000.00</p>
                        <button onClick={()=> addToCart('9')} className='mt-2 bg-white text-black p-2 w-full text-xs'>Add</button>
                    </div>
                </div>
                <div className="p-1 md:p-5 rounded-md bg-black text-white">
                    <div className="p-1">
                        <Image
                            src='/jewelry.jpg'
                            width={400}
                            height={400}
                            className="h-44 rounded"
                        />
                        <p className="text-xs font-bold text-slate-500 mb-2">persian solace</p><hr/>
                        <p className="text-sm mb-2 mt-2">Persian abstract</p>
                        <p><i class="fa-solid fa-naira-sign"></i>9,000.00</p>
                        <button onClick={()=> addToCart('9')} className='mt-2 bg-white text-black p-2 w-full text-xs'>Add</button>
                    </div>
                </div>
            </div>
        </div>      
    </div>
    </main>
  )
}
