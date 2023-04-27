import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../features/counter/cartSlice'

const Cart = ({title,id,image,description,price}) => {
    const dispatch =useDispatch()
  return (
    <div className=' flex justify-between w-1/2 mx-auto mt-10'>
        <div className=' flex gap-5 items-center'>
            <img className=' h-[100px]' src={image}/>
            <div>
            <p>{title.substring(0,25)}...</p>
            <p>${price}</p>
            <button className=' cursor-pointe text-red-600' onClick={()=>dispatch(removeFromCart({title,id,image,description,price}))}>remove</button>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <p className=' cursor-pointer text-2xl'>+</p>
            <p>0</p>
            <p className=' cursor-pointer text-2xl'>-</p>
       </div>
    </div>
  )
}

export default Cart