import React, { useEffect } from "react";
import Content from "./Context/Content";
import DemoContext from "./Context/DemoContext";
import Home from "./Pages/Home";
import Player from "./Player/Player";
import Counter from "./Reducer/Counter";
//import ToDo from "./Effect/ToDo/ToDo";
import RefDemo from "./Refs/RefDemo";
//import Counter from "./State/Counter";
import Login from "./State/Login";
import StateProvider from "./StateProvider/StateProvider";
import Todos from "./Todos/Todos";
import DemoForm from "./Hook18/DemoForm/DemoForm";
import Products from "./memo/Products";
import DemoCallback from "./callback/DemoCallback";
import CounterLoop from "./Effect/CounterLoop";
import Video from "./Refs/Video/Video";
import Search from "./Debounce/Search";
import Customers from "./Hook18/Customers";
import useColor from "./Hooks/useColor";

function App() {
  const [color, setColor] = useColor();

  const handleColor = () => {
    setColor("#000");
  };

  useEffect(() => {
    document.body.style.background = color;
  }, [color]);

  return (
    // <StateProvider>
    //   <Home />
    // </StateProvider>
    <>
      <Customers />
      <button onClick={handleColor}>Change</button>
    </>
  );
}

export default App;
