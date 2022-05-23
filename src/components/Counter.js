import { useRef, useState } from "react";
import classes from "./Counter.module.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const intervalRef = useRef(null)

  const plus = () => {
    intervalRef.current = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);
  };
  console.log(intervalRef.current);
  const minus = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div className={classes.container}>
      <button onClick={plus}>+</button>
      <h1>{counter}</h1>
      <button onClick={minus}>-</button>
    </div>
  );
};

export default Counter;
