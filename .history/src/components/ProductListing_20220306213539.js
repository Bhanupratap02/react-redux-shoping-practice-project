import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';
import axios from 'axios';
 export  const  ProductListing = () => {
 const products = useSelector((state) => state);
 con
 const fetchProduct = async () =>{
     const res = await axios.get('https://fakestoreapi.com/products')
     .catch(err => console.log(err));
     console.log(res.data);
 }
 useEffect(() =>{
     fetchProduct();
 },[]);
  return (
      <>
    <div className='ui grid container'>
        <ProductComponent/>
    </div>
    </>
  )
}
