import React, { useContext } from "react";
import styled from "styled-components";
import { TodoProvider, useTodoState } from "../context/todos";
import TodoItem from "./TodoItem";

export default function TodoBody() {
  const todos = useTodoState();
  return (
    <BodyBlock>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </BodyBlock>
  );
}

const BodyBlock = styled.ul`
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
  border-bottom: 1px solid #eee;
`;
