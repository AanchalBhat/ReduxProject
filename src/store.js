import reducers from "./reducers";
import {createStore} from 'redux';
import thunk from "redux-thunk";

const store = createStore(reducers,{},applyMiddleware(thunk))

export default store;