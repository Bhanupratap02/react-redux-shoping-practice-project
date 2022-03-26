import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { useDispatch, useSelector } from 'react-redux';
import { selectedProducts } from '../redux/action/productAction';
const  ProductDetails =() => {
  const product = useSelector(state => state.product);
  const 
    const {productId} = useParams();
    const dispatch = useDispatch();
    const fetchProductDetails = async () =>{
        const res = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .catch(err => console.log(err));
        dispatch(selectedProducts(res.data));
    }
  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails