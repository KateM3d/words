import { useState } from "react";

export default function useCounter(array) {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
    if (count + 2 > array.length) {
      return setCount(0);
    }
  }
  function decrement() {
    let newCount = count - 1;
    if (newCount < 0) {
      newCount = array.length - 1;
    }
    setCount(newCount);
  }
  return { count, increment, decrement };
}
