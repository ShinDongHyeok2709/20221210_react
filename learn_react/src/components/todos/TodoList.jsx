import { useEffect, useState } from "react";

function TodoList({ todos, onRemove, onToggle }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
}

function TodoItem({ todo, onRemove, onToggle }) {
  const { text, id, done } = todo;
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
