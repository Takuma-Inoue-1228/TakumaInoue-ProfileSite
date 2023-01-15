import { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(0);
  const [alert, setAlert] = useState(false);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setAlert(true);
    }
  };

  return { count, alert, increment, decrement };
};
