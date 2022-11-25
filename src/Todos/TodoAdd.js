import React, { useContext, useState } from "react";
import { StateContext } from "../StateProvider/StateProvider";
import { v4 as uniqueId } from "uuid";
import { addToDo } from "../StateProvider/Actions/toDoActions";

export default function TodoAdd() {
  const { state, dispatch } = useContext(StateContext);

  const [doName, setDoName] = useState("");

  const handleChangeValue = (e) => {
    setDoName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (doName.trim() !== "") {
      const todo = {
        id: uniqueId(),
        name: doName,
        isCompleted: false,
      };

      // console.log(addToDo(todo));

      dispatch(addToDo(todo));

      setDoName("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type={"text"}
            className="form-control"
            placeholder="Tên..."
            onChange={handleChangeValue}
            value={doName}
          />
          <button type="submit" className="btn btn-primary">
            Thêm
          </button>
        </div>
      </form>
    </div>
  );
}
