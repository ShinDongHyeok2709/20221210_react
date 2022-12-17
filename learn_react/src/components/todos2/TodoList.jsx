import { useContext, useEffect, useState } from "react";
import { TodosOnEventContext } from "./Todos";

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

function TodoItem({ todo }) {
  const { text, id, done } = todo;
  const [onRemove, onToggle] = useContext(TodosOnEventContext);

  const handleRemove = () => {
    if (window.confirm("정말삭제하시겠습니까?")) onRemove(id);
  };

  const handleToggle = () => {
    console.log("done : ", done);
    onToggle(id);
  };

  return (
    <li
      key={id}
      onClick={handleToggle}
      style={{ textDecoration: done && "line-through" }}
    >
      {text}
      <button onClick={handleRemove}>삭제</button>
    </li>
  );
}
export default TodoList;
