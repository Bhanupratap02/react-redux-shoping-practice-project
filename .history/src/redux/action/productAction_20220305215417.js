import { ActionTypes } from "../constansts/action-type";
 import React from 'react'
 
export const setProducts = (products) =>{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:products,

    }
}
export const selectedProducts = (products) =>{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:products,

    }
}