import React from "react";
import { TodosContextProvider } from "./hooks/useTodosContext";
import TodoCreate from "./TodoCreate";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

export default function Todos() {
  return (
    <>
      <TodosContextProvider>
        <TodoHeader />
        <TodoCreate />
        <TodoList />
      </TodosContextProvider>
    </>
  );
}
