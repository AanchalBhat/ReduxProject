import { combineReducers } from "react-redux";
import amountReducer from "./amountReducers";

const reducers = combineReducers({
  amount: amountReducer,
  //list of reducers
});

export default reducers;