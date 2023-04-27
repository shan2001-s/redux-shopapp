import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../features/counter/cartSlice'

const Product = ({title,id,image,price,description}) => {
  const dispatch = useDispatch()
  return (
    <div className=' shadow-md p-3 justify-center items-center w-52'> 

      
        <div className=' flex  justify-center '>
            <img className=' w-20 h-20 object-cover   ' src={image}   />
           
        </div>
  
      
           <div>
           <p>{title.substring(0,18)}...</p>
           <p>${price}</p>
           <div className=' flex justify-around mt-3 items-center'>
           <button className=' btn bg-amber-600 text-white rounded-md p-3 ' onClick={()=>dispatch(addToCart({title,price,image,id,description}))}>Add to Cart</button>
           <button className=' btn bg-blue-600 text-white rounded-md p-3'>Detail</button>
           </div>
           
           </div>
        </div>

        
  )
}

export default Product