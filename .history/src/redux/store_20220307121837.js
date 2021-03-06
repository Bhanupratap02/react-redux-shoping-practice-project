  import { createStore, applyMiddleware, compose } from 'redux';
import reducers from "./reducers/combinedReducer";
import thunk  from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(reducers);
export default store; 