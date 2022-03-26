import { createStore } from "redux";
import { reducers } from "./reducers/combinedReducer";

const store = createStore(reducers,{}, const store = createStore(
   reducer, /* preloadedState, */
+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );
    );
export default store;