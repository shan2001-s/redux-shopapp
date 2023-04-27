import React from 'react'
import { useSelector } from 'react-redux'
import Cart from './Cart'

const Addtocart = () => {
    const {cart,totalAmount}= useSelector(state=>state.cart)
  
  return (
    <div>
          <div className=' justify-center'>
        {cart?.map(item=>{
           return(
                <Cart key={item.id} {...item} />
           )
        })}
            </div>
            <div className=' mt-5'>
                <hr className=' w-1/2 mx-auto'/>
                <div className=' flex justify-between items-center w-1/2 mx-auto'>
                    <h2 className=' text-xl'>Total</h2>
                    <p>{totalAmount.toFixed(2)}</p>
                </div>
            </div>
    </div>
  )
}

export default Addtocart