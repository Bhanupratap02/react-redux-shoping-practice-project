import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
const  ProductDetails =() => {
    const {productId} = useParams();
    const fetchProductDetails
  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails