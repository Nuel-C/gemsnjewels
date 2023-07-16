import { useState } from 'react'
import ImageSlider from '../imageSlider';



export const ProductComponent = ({data})=> {
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

    return (
        <div className="p-1 md:p-5 rounded-md bg-black text-white">
            <div>
                <ImageSlider src={x.filepath}/>
            </div>
            <div className="p-1">
                <p className="text-xs font-bold text-slate-500 mb-2">
                    {x.name}
                </p>
                <hr />
                <textarea style={{overFlow:'hidden', resize:'none'}} rows={2} className="w-full text-sm mb-2 mt-2 bg-black text-white" value={x.description} readOnly></textarea>
                <p>
                    <i class="fa-solid fa-naira-sign"></i>
                    {Number(x.price).toFixed(2)}{" "}
                </p>
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