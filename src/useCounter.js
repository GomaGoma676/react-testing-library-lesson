import { useState } from "react";

export const useCounter = (initialCount) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((count) => count + 1);
  };
  const decrement = () => {
    setCount((count) => count - 1);
  };
  const double = () => {
    setCount((count) => count * 2);
  };
  const triple = () => {
    setCount((count) => count * 3);
  };
  const reset = () => {
    setCount(0);
  };
  return { count, increment, decrement, double, triple, reset };
};
