const amountReducer = (initalstate = 0, action) => {
  if (action.type === "deposit") {
    return initalstate + action.payload;
  } else if (action.type === "withdraw") {
    return initalstate - action.payload;
  } else {
    return initalstate;
  }
};
export default amountReducer;
