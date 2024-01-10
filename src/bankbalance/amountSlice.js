import { createSlice } from "@reduxjs/toolkit";
let initialState = {
  amount: 0,
};

export const amountSlice = createSlice({
  name: "amount",
  initialState,
  reducers: {
    deposit: (state, action) => {
      //   state.amount = state.amount + action.payload;
      state.amount += action.payload;
    },
    withdraw: (state, action) => {
      state.amount -= action.payload;
    },
  },
});

export const { withdraw, deposit } = amountSlice.actions;
export default amountSlice.reducer;
