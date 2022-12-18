import React from "react";
import styled, { css } from "styled-components";
import { useTodoState } from "../context/todos";

export default function TodoHeader() {
  const date = new Date();
  const dateStr = date.toLocaleDateString("ko-KR", { dateStyle: "full" });

  const todos = useTodoState();
  const doneCount = todos.filter((todo) => todo.done).length;
  const doneCountRate =
    todos.length === 0 ? 0 : (doneCount / todos.length) * 100;
  return (
    <Header>
      <p>{dateStr}</p>
      <span>
        완료 : {doneCount}/{todos.length}
      </span>
      <StatusBar percentage={doneCountRate}>
        <span>{Math.round(doneCountRate)}%</span>
      </StatusBar>
    </Header>
  );
}

const Header = styled.div`
  padding: 20px 10px;
  border-bottom: 1px solid #eee;
  p {
    font-weight: bold;
    font-size: 1.2rem;
  }
  span {
    font-size: 0.8rem;
  }
`;

const StatusBar = styled.div`
  height: 10px;
  margin-top: 5px;
  background-color: #ddd;
  text-align: center;
  line-height: 10px;
  position: relative;
  font-size: 0.7rem;

  span {
    position: relative;
    z-index: 100;
    color: #fff;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }
  &::before {
    content: "";
    display: block;
    transform-origin: left;
    //width: ${({ percentage }) => percentage}%; 성능상 tranform 사용 권고
    ${({ percentage }) => css`
      transform: scaleX(${percentage}%);
    `}

    height: 100%;
    background-color: red;
    transition: 0.25s;
  }
`;
