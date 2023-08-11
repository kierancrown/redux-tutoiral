import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/slices/counterSlice";
import Button from "./Button";

const Counter = (props) => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col p-5 gap-8">
      <span className="text-center">Count: {count}</span>

      <div className="flex flex-row gap-5 justify-center">
        <Button text="Increment" onClick={() => dispatch(increment())} />
        <Button text="Decrement" onClick={() => dispatch(decrement())} />
      </div>
    </div>
  );
};

export default Counter;
