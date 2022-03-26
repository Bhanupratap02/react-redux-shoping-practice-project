import React from 'react'
import { useSelector } from 'react-redux'

const  ProductListing = () => {
 const products = useSelector((state) => state);
 console.log(products)
  return (
    <div></div>
  )
}

export default ProductListing