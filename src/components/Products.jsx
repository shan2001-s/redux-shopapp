import React, { useEffect, useState } from 'react'
import Product from './Product';

const Products = () => {

    const [products, setProducts] = useState([]);

    const fetchData =async()=>{
        const api = await fetch('https://fakestoreapi.com/products')
        const data= await api.json();
       setProducts(data)
    }
    useEffect(() => {
     fetchData();
    }, [])

    
    
  return (
    <div className=' flex flex-wrap gap-10 mt-20 justify-center'>
    {
        products.map(product=>{
            return(
                <Product key={product.id} {...product}/>
            )}
            )
    }
      
    </div>
  )
}

export default Products