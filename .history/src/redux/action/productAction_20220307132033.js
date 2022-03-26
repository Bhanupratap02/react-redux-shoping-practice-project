import { SET_PRODUCTS ,SELECTED_PRODUCTS ,REMOVE_SELECTED_PRODUCTS, FETCH_PRODUCTS  } from "../constansts/action-type";
import fakeStoreApi from "../../apis/fakeStoreApi";
 
 export const fetchProducts =   () =>
     async (dispatch) =>{
    const response = await fakeStoreApi.get("/products");
    dispatch({type:FETCH_PRODUCTS,payload:response.data});
     };
    export const fetchProduct =   (id) =>
      async (dispatch) =>{
    const response = await fakeStoreApi.get(`/products/${id}`);
    dispatch({type:SE,payload:response.data});
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