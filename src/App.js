import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "./actioncreators";
import { bindActionCreators } from "redux";

function App() {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.amount);
  //const action = bindActionCreators(actionCreators,dispatch)
  const { withdraw, deposit } = bindActionCreators(actionCreators, dispatch);

  return (
    <div className="App">
      <button onClick={() => withdraw(1000)}>withdraw</button>
      {/* <button onClick={() => dispatch(actionCreators.withdraw(1000))}>withdraw</button> */}

      <button onClick={() => deposit(1000)}>deposit</button>
      <h2>My balance: - {balance}</h2>
    </div>
  );
}

export default App;
