import React from "react";
import styled from "styled-components";
import { TodoProvider } from "../context/todos";
import TodoBody from "./TodoBody";
import TodoCreate from "./TodoCreate";
import TodoHeader from "./TodoHeader";

export default function Todos() {
  return (
    <TodoProvider>
      <TodosBlock>
        <TodoHeader />
        <TodoBody />
        <TodoCreate />
      </TodosBlock>
    </TodoProvider>
  );
}

const TodosBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 700px;

  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;
