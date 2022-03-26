import { SET_PRODUCTS ,SELECTED_PRODUCTS ,REMOVE_SELECTED_PRODUCTS  } from "../constansts/action-type";
import axios from "axios";
import { type } from "@testing-library/user-event/dist/type";
 
 export const fetchProducts =   () =>{
     return async  function (dispatch,getState){
    const response = await axios.get("/products");
    dispatch({type})
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