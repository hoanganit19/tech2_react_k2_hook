export const rootReducer = (state, action) => {
  switch (action.type) {
    case "todos/add":
      return { ...state, todos: state.todos.concat(action.payload) };

    case "todos/delete":
      const dataDelete = [...state.todos];
      dataDelete.splice(action.payload, 1);
      return {
        ...state,
        todos: dataDelete,
      };

    case "todos/completed":
      const dataCompleted = [...state.todos];
      dataCompleted[action.payload.index].isCompleted = action.payload.status;

      return {
        ...state,
        todos: dataCompleted,
      };

    default:
      return state;
  }
};
