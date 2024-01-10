import { configureStore } from "@reduxjs/toolkit";
import amountsliceReducer from "./bankbalance/amountSlice";

export const toolkitstore = configureStore({
  // reducers:{} //list of reducers
  reducer: amountsliceReducer,


});
