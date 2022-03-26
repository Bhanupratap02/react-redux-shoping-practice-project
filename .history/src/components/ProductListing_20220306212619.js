import React from 'react'
import { useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';
import axios from 'axios';
 export  const  ProductListing = () => {
 const products = useSelector((state) => state);
 console.log(products);
 const fetchProduct = async () =>{
     const res = await axios.get('https://fakestoreapi.com/products/categories')
     
 }
  return (
      <>
    <div className='ui grid container'>
        <ProductComponent/>
    </div>
    </>
  )
}
