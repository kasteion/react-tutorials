import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store/index";

function App() {
  const counter = useSelector((store) => store.counter.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment());
  };

  const decrement = () => {
    dispatch(actions.decrement());
  };

  const incrementTen = () => {
    dispatch(actions.incrementBy(10));
  };

  return (
    <div>
      <h1>Counter App</h1>
      <p>{counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={incrementTen}>Increment by 10</button>
    </div>
  );
}

export default App;
