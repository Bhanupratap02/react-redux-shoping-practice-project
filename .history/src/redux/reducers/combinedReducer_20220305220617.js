import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
 export const Reducers =combineReducers({
    allproducts:productReducer,
})


 

