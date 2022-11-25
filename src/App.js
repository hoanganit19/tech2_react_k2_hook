import React from "react";
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

function App() {
  return (
    // <StateProvider>
    //   <Home />
    // </StateProvider>
    <>
      <Todos />
    </>
  );
}

export default App;
