import Counter from "./components/Counter";
import { useSelector, useDispatch } from "react-redux";
import Button from "./components/Button";
import { reset } from "./redux/slices/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <span>App: {count}</span>

      <Button
        text="Reset Counter"
        onClick={() => {
          dispatch(reset());
        }}
      />

      <Counter />
    </div>
  );
}

export default App;
