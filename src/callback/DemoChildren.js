import React, { memo } from "react";

function DemoChildren({ onHandleUp, count }) {
  console.log("re-render");

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={onHandleUp}>Up</button>
    </div>
  );
}

export default memo(DemoChildren);
