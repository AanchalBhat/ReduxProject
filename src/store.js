import reducers from "./reducers";
import {createStore} from 'redux';
import thunk from "redux-thunk";

export const store = createStore(reducers,{},applyMiddleware(thunk))

