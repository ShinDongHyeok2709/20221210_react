import React, { createContext, useContext, useReducer } from "react";

const initialState = [
  { id: 1, text: "Todo 리스트 스타일링하기", done: true },
  { id: 2, text: "Todo 리스트 기능 구현하기", done: false },
  { id: 3, text: "Todo 리스트 에니메이션 만들기", done: true },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE_TODO":
      return [...state, { id: action.id, text: action.text, done: false }];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
}

export const TodoStateContext = createContext(null);
export const TodoDispatchContext = createContext(null);

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) throw Error("TodoProvider 없음!");
  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if (!context) throw Error("TodoProvider 없음!");
  return context;
}
