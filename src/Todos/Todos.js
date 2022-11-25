import React from "react";
import StateProvider from "../StateProvider/StateProvider";
import TodoAdd from "./TodoAdd";
import TodoShow from "./TodoShow";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Todos.scss";

export default function Todos() {
  return (
    <StateProvider>
      <div className="container">
        <TodoShow />
        <TodoAdd />
      </div>
    </StateProvider>
  );
}
