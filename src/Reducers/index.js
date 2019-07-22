const initState = {
  todos: [],
  status: false
};

const reducer = (state = initState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "POST_TODO":
      return {
        ...state,
        todos: [...state.todos, payload]
      };
    case "POST_DONE":
      //Giving updated value
      let updated = state.todos[payload];
      updated.status = !updated.status;
      return {
        ...state,
        todos: [
          //using slide between medium
          ...state.todos.slice(0, payload),
          updated,
          ...state.todos.slice(payload + 1, state.todos.length)
        ]
      };
    default:
      return state;
  }
};

export default reducer;
