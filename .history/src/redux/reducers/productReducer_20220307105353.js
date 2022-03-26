import { SET_PRODUCTS} from "../constansts/action-type";

const initialstate ={
    product:[],
   
}
 export const productReducer = (state = initialstate,{type,payload}) =>{
switch (type ) {
    case SET_PRODUCTS:
     return {
         ...state,
         product:payload
     };
    default:
        return state; 
}
 }
export const selectedProductReducer = ()
