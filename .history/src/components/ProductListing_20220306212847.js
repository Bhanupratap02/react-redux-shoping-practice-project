import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';
import axios from 'axios';
 export  const  ProductListing = () => {
 const products = useSelector((state) => state);
 const fetchProduct = async () =>{
     const res = await axios.get('https://fakestoreapi.com/products/categories')
     .catch(err => console.log(err));
     console.log(res);
 }
 useEffect(() =>{
     
 })
  return (
      <>
    <div className='ui grid container'>
        <ProductComponent/>
    </div>
    </>
  )
}
