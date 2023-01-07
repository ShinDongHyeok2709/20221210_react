import React from "react";
import useTodosContext from "./hooks/useTodosContext";

export default function TodoHeader() {
  const [todos] = useTodosContext();
  const todoCount = todos.filter((todo) => todo.done === false).length;
  let toDay = new Date();
  return (
    <>
      <h1>나의 할일 목록({toDay.toLocaleDateString()})</h1>
      <p>
        <b>할일 : </b>
        <span style={{ color: "red" }}>{todoCount}</span>
        <span>/{todos.length}개</span>
        &nbsp;(
        {Math.round((todoCount / todos.length) * 100)}%)
      </p>
    </>
  );
}
