import { SET_PRODUCTS ,SELECTED_PRODUCTS ,REMOVE_SELECTED_PRODUCTS, FETCH_PRODUCTS  } from "../constansts/action-type";
import axios from "axios";
import { type } from "@testing-library/user-event/dist/type";
 
 export const fetchProducts =   () =>{
     return async  function (dispatch,getState){
    const response = await fake.get("/products");
    dispatch({type:FETCH_PRODUCTS,payload:response.data});
     }
};
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