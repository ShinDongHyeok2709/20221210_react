import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { todoState } from "../state/todo";

export default function TodoItem({ todo }) {
  const setTodos = useSetRecoilState(todoState);

  const handleDelete = (e) => {
    e.stopPropagation();

    setTodos((todos) => todos.filter((item) => item.id !== todo.id));
  };

  const handleToggle = () => {
    setTodos((todos) =>
      todos.map((item) =>
        item.id === todo.id ? { ...item, done: !item.done } : item
      )
    );
  };

  return (
    <li style={{ textDecoration: todo.done && "line-through" }}>
      {todo.title}
      <button onClick={handleDelete}>삭제</button>
    </li>
  );
}
