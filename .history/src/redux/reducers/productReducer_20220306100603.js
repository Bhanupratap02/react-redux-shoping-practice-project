import { ActionTypes } from "../constansts/action-type";

const initialstate ={
    product:[
        {
            id:1,
            title:"sachin",
            category:"programer"
        }
    ],
   
}
 export const productReducer = (state,{type,payload}) =>{
switch (type ) {
    case ActionTypes.SET_PRODUCTS:
     return state;
    default:
        return state;
}
 }

