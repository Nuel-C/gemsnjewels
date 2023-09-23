import { useState } from 'react'
import ImageSlider from './imageSlider';




export const CartItem = ({data, deleteCartItem})=> {
    const [x, setX] = useState(data)
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'NGN'
    });

    return (
        <div className="p-2 md:p-5 rounded-md bg-gray-200 text-gray-700 flex flex-row justify-between space-x-5 md:w-1/3">
            <div className='w-1/2'>
                <div className="p-1">
                    <p className="text-xs font-bold text-slate-500 mb-2">
                        {x.name}
                    </p>
                    <hr />
                    <p className="text-xs font-bold text-slate-500 mb-2">
                        Product Description
                    </p>
                    <textarea style={{overFlow:'hidden', resize:'none'}} rows={2} className="w-full text-sm mb-2 mt-2 bg-gray-200 text-gray-700 border-2 border-slate-300 p-2 rounded-md" value={x.description} readOnly></textarea>
                    {
                        x.spec ? 
                        <>
                        <p className="text-xs font-bold text-slate-500 mb-2">Client Description</p>
                        <textarea style={{overFlow:'hidden', resize:'none'}} rows={2} className="w-full h-16 text-sm mb-2 mt-2 bg-gray-200 text-gray-700 border-2 border-slate-300 p-2 rounded-md" value={x.spec}></textarea>
                        </>
                        : null
                    }
                    <p>
                        {formatter.format(x.price)}
                    </p>
                    <div className='flex flex-row justify-between'>
                        X {x.number}
                    </div>
                </div>
            </div>
            <div className='w-1/2'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='w-24 h-24'>
                        <ImageSlider src={x.images} />
                    </div>
                    <button onClick={()=> deleteCartItem(x._id)} className="mt-2 bg-white text-black p-2 w-24 text-xs">Delete Item</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem