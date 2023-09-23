import { useState, useRef } from 'react'
import ImageSlider from '../imageSlider';




export const ProductComponent = ({data, addProduct})=> {
    const [x, setX] = useState(data)
    const spec = useRef()
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
                <p className="text-xs font-bold text-slate-500 mb-2">
                    {formatter.format(x.price)}
                </p>
                <hr className='border-black'/>
                <textarea style={{overFlow:'hidden', resize:'none'}} rows={2} className="w-full text-sm mb-2 mt-2 bg-gray-200 text-gray-700" value={x.description} readOnly></textarea>
                <textarea style={{overFlow:'hidden', resize:'none'}} rows={2} className="w-full h-16 text-sm mb-2 mt-2 bg-gray-200 text-gray-700 border-2 border-slate-300 p-2 rounded-md" placeholder='write a description' ref={spec}></textarea>
                <div className='flex flex-row justify-between'>
                    <button onClick={decrease}>-</button>
                    {number}
                    <button onClick={increase}>+</button>
                </div>
                <button onClick={()=> {setNumber(0);addProduct(x._id, number, x.price, x.description, x.name, x.category, x.filepath, spec.current.value)}} className="mt-2 bg-white text-black p-2 w-full text-xs">Add</button>
            </div>
        </div>
    )
}

export default ProductComponent