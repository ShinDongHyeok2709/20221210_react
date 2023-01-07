import React, { createContext, useContext } from "react";
import useTodosReducer from "./useTodosReducer";

const TodosContext = createContext(null);

export function TodosContextProvider({ children }) {
  const initialState = [
    { id: 1, title: "React 예습", done: true },
    { id: 2, title: "React 강습", done: false },
    { id: 3, title: "React 복습", done: false },
  ];

  const [todos, dispatch] = useTodosReducer(initialState);
  return (
    <>
      <TodosContext.Provider value={[todos, dispatch]}>
        {children}
      </TodosContext.Provider>
    </>
  );
}

export default function useTodosContext() {
  const context = useContext(TodosContext);
  if (!context) throw Error("No Context");
  return context;
}
