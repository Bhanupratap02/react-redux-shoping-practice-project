import { SET_PRODUCTS} from "../constansts/action-type";

const initialstate ={
    product:[
        {
            id:1,
            title:"sachin",
            category:"programer"
        }
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

