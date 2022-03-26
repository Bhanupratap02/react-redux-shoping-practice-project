import React from 'react'
import { useSelector } from 'react-redux'
const  ProductComponent =() => {
     const products = useSelector((state) => state.allproducts.product);
     const renderList = products.map((product) =>{
         const {id,title,price , category,image} = product;
          <div className='four column wide'> 
    <div className='ui link cards'>
   <div className='card'>
    <div className='image'></div>
   <div className='content'>  
   <div className='header'> </div>
   </div>
   </div>
    </div>
     </div>
     })

  return (
   
  )
}

export default ProductComponent