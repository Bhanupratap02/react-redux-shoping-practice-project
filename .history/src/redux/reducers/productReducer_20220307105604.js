import { SELECTED_PRODUCTS, SET_PRODUCTS} from "../constansts/action-type";

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
export const selectedProductReducer = (state = {} , {type,payload}) =>{
    switch (type) {
        case SELECTED_PRODUCTS:
            return{
                ...state,
                ...payload
            }
    
        default:
        return
    }

}
