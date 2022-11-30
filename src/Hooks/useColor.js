import React, { useEffect, useLayoutEffect, useState } from "react";

export default function useColor() {
  const [color, setColorState] = useState("");
  const getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  useEffect(() => {
    setColorState(getRandomColor());

    document.body.style.background = getRandomColor();
  }, []);

  return [color, setColorState];
}
