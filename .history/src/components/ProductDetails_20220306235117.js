import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
const  ProductDetails =() => {
    const {productId} = useParams();
    console.log()
  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails