import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { fetchProducts, setProducts } from '../redux/action/productAction';
 export  const  ProductListing = () => {
 const products = useSelector((state) => state);
 const dispatch = useDispatch();
 useEffect(() =>{
    dispatch(fetchProducts());
 },[]); 
 console.log("products:",products);
  return (
      <>
    <div className='ui grid '>
        <ProductComponent/>
    </div>
    </>
  )
}
