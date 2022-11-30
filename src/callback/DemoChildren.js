import React, { memo } from "react";

function DemoChildren({ onHandleUp }) {
  console.log("re-render");

  return (
    <div>
      <button onClick={onHandleUp}>Up</button>
    </div>
  );
}

export default memo(DemoChildren);
