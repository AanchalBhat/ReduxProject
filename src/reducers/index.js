import { combineReducers } from "react-redux";
import amountReducer from "./amountReducers";

export const reducers = combineReducers({
  amount: amountReducer,
  //list of reducers
});

