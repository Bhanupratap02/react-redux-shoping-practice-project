import React from 'react'
import { useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';

 export  const  ProductListing = () => {
 const products = useSelector((state) => state);
 console.log(products);

  return (
      <>
    <div className='ui flex container'>
        <ProductComponent/>
    </div>
    </>
  )
}
