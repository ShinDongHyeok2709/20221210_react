import React, { Component, useState, useEffect, useRef, useMemo } from "react";
//import TodoInput from "./TodoInput2";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function countUndoneToto(todos) {
  console.log("할일 세는 중");
  return todos.filter((todo) => !todo.done).length;
}

function Todo() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Todo 리스트 만들기", date: "2022/12/11", done: true },
  ]);

  const nextID = useRef(2);

  /*
        useMemo : 특정값이 변할 대에만 연산을 하고, 나머지 경우는 기존값을 재사용한다.
      */
  //const undoneTotoCount = countUndoneToto(todos);
  const undoneTotoCount = useMemo(() => countUndoneToto(todos), [todos]);

  console.log(undoneTotoCount);

  //console.log(inputs);

  const handleSubmit = (inputs) => {
    setTodos(todos.concat({ ...inputs, id: nextID.current, done: false }));

    nextID.current++;
  };

  const handleRemove = (text, index, id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleToggle = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTodos);
  };

  return (
    <>
      <TodoInput handleSubmit={handleSubmit} />
      <TodoList
        todos={todos}
        handleToggle={handleToggle}
        handleRemove={handleRemove}
      />
    </>
  );
}

export default Todo;
