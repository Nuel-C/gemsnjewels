import { useState } from 'react'
import ImageSlider from './imageSlider';
import axios from 'axios';



export const ProductComponent = ({data})=> {
    let parsedObject 
    if (typeof window !== 'undefined') {
        const str = sessionStorage.getItem('user');            
        parsedObject = JSON.parse(str);
    }
    const [x, setX] = useState(data)
    const [number, setNumber] = useState(0)
    const increase = ()=> {
        setNumber(number+1)
    }
    const decrease = ()=> {
        if(number == 0){
            return 0
        }
        setNumber(number-1)
    }
    const addProduct = async (id)=> {
        if(number == 0)return
        const res = await axios.post('/addToCart', {
            userId: parsedObject._id,
            productId:id,
            price:x.price,
            description:x.description,
            name:x.name,
            category:x.category,
            number: number,
            images: x.filepath
        })
        if(res.data.success == true){
            alert('Added '+x.name+' X '+number+' to cart')
            window.location.href = '/products'
            setNumber(0)
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
        <div className="p-2 md:p-5 rounded-md bg-gray-200 text-gray-700">
            <div>
                <ImageSlider src={x.filepath}/>
            </div>
            <div className="p-1">
                <p className="text-xs font-bold text-slate-500 mb-2">
                    {x.name}
                </p>
                <hr className='border-black'/>
                <textarea style={{overFlow:'hidden', resize:'none'}} rows={2} className="w-full text-sm mb-2 mt-2 bg-gray-200 text-gray-700" value={x.description} readOnly></textarea>
                <p className='font-bold'>
                    {formatter.format(x.price)}
                </p><br/>
                <div className='flex flex-row justify-between'>
                    <button onClick={decrease}>-</button>
                    {number}
                    <button onClick={increase}>+</button>
                </div>
                <button onClick={()=> addProduct(x._id)} className="mt-2 bg-white text-black p-2 w-full text-xs">Add</button>
            </div>
        </div>
    )
}

export default ProductComponent