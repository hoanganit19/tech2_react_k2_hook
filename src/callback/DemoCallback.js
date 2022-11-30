import React, { useCallback, useState } from "react";
import DemoChildren from "./DemoChildren";

export default function DemoCallback() {
  const [count, setCount] = useState(0);

  // const handleUp = useCallback(() => {
  //   setCount(count + 1);
  // }, []);

  const handleUp = useCallback(() => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
    //setCount(count + 1);
  }, []);

  return (
    <>
      <h1>Count: {count}</h1>
      <DemoChildren onHandleUp={handleUp} />
    </>
  );
}
