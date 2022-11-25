import React, { useContext } from "react";
import { StateContext } from "../StateProvider/StateProvider";
import {
  deleteToDo,
  markCompleted,
} from "../StateProvider/Actions/toDoActions";
import clsx from "clsx";

export default function TodoShow() {
  const { state, dispatch } = useContext(StateContext);

  const { todos } = state;

  const getIndex = (id) => {
    return todos.findIndex((todo) => todo.id == id);
  };

  const handleDeleteToDo = (id) => {
    if (window.confirm("Bạn có chắc chắn")) {
      const index = getIndex(id);
      dispatch(deleteToDo(index));
    }
  };

  const handleCompleted = (id) => {
    const index = getIndex(id);

    const todoCompleted = {
      index: index,
      status: todos[index].isCompleted ? false : true,
    };

    dispatch(markCompleted(todoCompleted));
  };

  return (
    <div className="todos-list">
      {todos.length > 0 &&
        todos.map(({ id, name, isCompleted }) => {
          return (
            <div className="todo-item mb-3" key={id}>
              <input
                type={"checkbox"}
                className="me-2"
                onChange={() => {
                  handleCompleted(id);
                }}
              />
              <span className={clsx("me-2", isCompleted && "completed")}>
                {name}
              </span>
              <span>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleDeleteToDo(id);
                  }}
                >
                  Xóa
                </a>
              </span>
            </div>
          );
        })}
    </div>
  );
}
