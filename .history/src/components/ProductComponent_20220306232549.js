import React from 'react'
import { useSelector } from 'react-redux'
const  ProductComponent =() => {
     const products = useSelector((state) => state.allproducts.product);
     const renderList = products.map((product) =>{
         const {id,title,price , category,image} = product;
          <div className='four column wide' key={id}> 
    <div className='ui link cards'>
   <div className='card'>
    <div className='image'>
     <img src={image} alt={}/>
    </div>
   <div className='content'>  
   <div className='header'>{title} </div>
   <div className='meta price'>$ {price}</div>
   <div className='meta'>{category}</div>
   </div>
   </div>
    </div>
     </div>
     });

//   return (
   
//   )
}

export default ProductComponent