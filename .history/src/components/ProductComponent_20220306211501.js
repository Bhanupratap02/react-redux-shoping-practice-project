import React from 'react'
import { useSelector } from 'react-redux'
const  ProductComponent =() => {
     const products = useSelector((state) => state);
  return (
    <div className='four column wide'> 
    <div className='ui'>

    </div>
     </div>
  )
}

export default ProductComponent