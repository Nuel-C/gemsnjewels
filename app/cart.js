import Link from "next/link"

export const Cart = ({num}) => {
  return (
    <div className="relative w-8">
        <Link href='/cart'>
            <i class="fa-solid fa-cart-shopping text-black w-7 h-7 mt-2"></i>
            <button className="rounded-full bg-blue-600 text-white w-4 h-4 text-center absolute top-0 right-0 z-10 font-bold" style={{fontSize:'0.6em'}}>{num}</button>
        </Link>
    </div>
  )
}

export default Cart
