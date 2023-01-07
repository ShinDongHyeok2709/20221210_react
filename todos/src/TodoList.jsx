import React from "react";
import useTodosContext from "./hooks/useTodosContext";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [todos] = useTodosContext();
  return (
    <>
      <hr />
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
}
