import { SET_PRODUCTS} from "../constansts/action-type";

const initialstate ={
    product:[
    ],
   
}
 export const productReducer = (state = initialstate,{type,payload}) =>{
switch (type ) {
    case SET_PRODUCTS:
     return state;
    default:
        return state; 
}
 }

