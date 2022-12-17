import {
  createContext,
  useCallback,
  useReducer,
  useRef,
  useState,
} from "react";
import { TodoProvider } from "../../context/todos";
import Main from "../MainPage/Main";
import TodoList from "./TodoList";
import TodoCreate from "./TotoCreate";
import styled from "styled-components";

//상태관리
export default function Todos() {
  return (
    <>
      <TodoProvider>
        <div>
          <Title>할일 목록</Title>
          <TodoCreate />
          <TodoList />
        </div>
      </TodoProvider>
    </>
  );
}

const Title = styled.h1`
  color: blue;
`;
