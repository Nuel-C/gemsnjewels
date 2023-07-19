import { useState } from 'react'
import ImageSlider from '../imageSlider';



export const ProductComponent = ({data, deleteProduct})=> {
    const [x, setX] = useState(data)
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
                </p>
                <button onClick={()=> deleteProduct(x._id)} className="mt-2 bg-white text-black p-2 w-full text-xs">Delete</button>
            </div>
        </div>
    )
}

export default ProductComponent