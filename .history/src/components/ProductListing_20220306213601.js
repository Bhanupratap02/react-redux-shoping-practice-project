import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';
import axios from 'axios';
 export  const  ProductListing = () => {
 const products = useSelector((state) => state);
 const dispatch = useDispatch
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
