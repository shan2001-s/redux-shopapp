import React from 'react';

import { increment,decrement } from './features/counter/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import Addtocart from './components/Addtocart';
function App() {
  //const cart = useSelector((state) => console.log(state))
  
  return (
    
    <div >
      <Navbar></Navbar>
     <Routes>
      <Route path='/' element={<Products/>}/>
      <Route path='/addtocart' element={<Addtocart/>}/>
     </Routes>
       
    </div>
  );
}

export default App;
