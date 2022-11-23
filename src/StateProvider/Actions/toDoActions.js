/*
Action Creator
*/
export const addToDo = (todo) => {
  return {
    type: "todos/add",
    payload: todo,
  };
};

export const deleteToDo = (id) => {
  return {
    type: "todos/delete",
    payload: id,
  };
};
