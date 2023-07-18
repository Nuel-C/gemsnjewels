import { useState, useEffect } from 'react'
import ImageSlider from './imageSlider';



export const OrderItem = ({data})=> {
    const [x, setX] = useState(data)
    const [image, setImage] = useState(()=>{
        let images = []
        data.items.map((x)=>{
            x.images.map((y)=>{
                images.push(y)
            })
        })
        return images
    })

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'NGN'
    });
    const copy = async (id) => {
        try {
        await navigator.clipboard.writeText(id);
        alert('Id copied to clipboard');
        } catch (err) {
        console.error('Failed to copy: ', err);
        }
    }
    

    return (
        <div className="p-2 md:p-5 rounded-md bg-gray-200 text-gray-700 flex flex-row justify-between space-x-5 md:w-1/3">
            <div className='w-1/2'>
                <div className="p-1">
                    <p className="text-xs font-bold text-slate-500 mb-2" id='myText'>
                        Id: {x._id}<button onClick={()=> copy(x._id)}><i class="fa-solid fa-copy"></i></button>
                    </p>
                    <hr />
                    <p>
                        {formatter.format(x.total)}
                    </p>
                    <p className="text-xs text-slate-500 mb-2">
                        {x.date}
                    </p>
                    <textarea style={{overFlow:'hidden', resize:'none'}} rows={2} className="w-full text-sm mb-2 mt-2 bg-gray-200 text-gray-700" value={x.deliveryAddress} readOnly></textarea>
                    <div>
                        {
                            x.items.map((r)=>(
                                <div>
                                    <p className='text-xs'>{r.name} X {r.number}</p><hr className='border-black'/>
                                </div>
                            ))
                        }
                    </div><br/>
                    <p className={x.delivered ? 'text-xs font-bold mb-2 text-green-600 hidden' : 'text-xs font-bold mb-2 text-red-700'}>
                        Not Delivered
                    </p>
                    <p className={x.delivered ? 'text-xs font-bold mb-2 text-green-600' : 'text-xs hidden font-bold mb-2 text-red-700'}>
                        Delivered
                    </p>
                </div>
            </div>
            <div className='w-1/2'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='w-24 h-24 mt-5'>
                        <ImageSlider src={image} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderItem