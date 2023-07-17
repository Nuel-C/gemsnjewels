import { useState } from 'react'
import ImageSlider from './imageSlider';
import axios from 'axios';



export const CartItem = ({data})=> {
    const [x, setX] = useState(data)


    const deleteCartItem = async (id)=> {
        const res = await axios.post('/deleteCartItem', {
            productId:id,
        })
        if(res.data.success == true){
            alert('Deleted '+x.name+' X '+x.number+' from cart')
            window.location.href = '/cart'
        }
        if(res.data.success == false){
            alert('An error occured')
        }

    }
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
                    <textarea style={{overFlow:'hidden', resize:'none'}} rows={2} className="w-full text-sm mb-2 mt-2 bg-gray-200 text-gray-700" value={x.description} readOnly></textarea>
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