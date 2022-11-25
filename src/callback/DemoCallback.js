import React, { useCallback, useState } from "react";
import DemoChildren from "./DemoChildren";

export default function DemoCallback() {
  const [count, setCount] = useState(0);
  console.log("render-parent");
  const handleUp = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  console.log(handleUp);

  return (
    <>
      <h1>Count: {count}</h1>
      <DemoChildren count={count} onHandleUp={handleUp} />
    </>
  );
}
