import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const {quantity} = useSelector(state=> state.cart);
  console.log(quantity);
  return (
    <div className=' flex justify-around p-2 shadow-md items-center'>
   <Link to={'/'}>
        <div>MMSIT</div>
        </Link>
        <Link to={'/addtocart'}>
        <button className=' bg-lime-600 p-2 rounded-md text-white'>{quantity}</button>
        </Link>
      
    </div>
  )
}

export default Navbar