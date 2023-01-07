import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "CREATE_TODO":
      return [...state, { id: action.id, title: action.title, done: false }];
    case "TOGGLE_TODO":
      return state.map((item) =>
        item.id === action.id ? { ...item, done: !item.done } : item
      );
    case "REMOVE_TODO":
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
}
export default function useTodosReducer(initialState) {
  const [todos, dispatch] = useReducer(reducer, initialState);
  return [todos, dispatch];
}
