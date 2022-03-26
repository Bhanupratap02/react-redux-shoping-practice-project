import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
const  ProductDetails =() => {
    const {productId} = useParams();
    const fetchProductDetails = async () =>{
        const res = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .catch
    }
  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails