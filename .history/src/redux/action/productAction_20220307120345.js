import { SET_PRODUCTS ,SELECTED_PRODUCTS ,REMOVE_SELECTED_PRODUCTS  } from "../constansts/action-type";
import axios from "axios";
 
 export const fetchProducts = () =>{
    const response = await axios.get("/products");
    return{
        type:SET_PRODUCTS,
        payload:res
    }
}
export const setProducts = (products) =>{
    return{
        type:SET_PRODUCTS,
        payload:products,

    }
}
export const selectedProducts = (product) =>{
    return{
        type:SELECTED_PRODUCTS ,
        payload:product,

    }
}
export const removeselectedProducts = (product) =>{
    return{
        type:REMOVE_SELECTED_PRODUCTS,

    };
};