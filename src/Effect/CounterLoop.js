import React, { useState, useEffect, useLayoutEffect } from "react";

export default function CounterLoop() {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    if (count === 5) {
      setCount(1);
    }
    console.log(count);
  }, [count]);

  console.log("re-render");

  const handleIncrement = () => {
    setCount(count + 1);
    // if (count === 5) {
    //   setCount(1);
    // }
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button type="button" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}
