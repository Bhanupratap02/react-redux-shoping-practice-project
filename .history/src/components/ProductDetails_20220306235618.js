import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { useDispatch } from 'react-redux';
const  ProductDetails =() => {
    const {productId} = useParams();
    const dispatch = useDispatch();
    const fetchProductDetails = async () =>{
        const res = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .catch(err => console.log(err));
        dispatch(selectedProducts())
    }
  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails