import React, { useContext } from "react";
import styled from "styled-components";
import { useTodoDispatch } from "../../context/todos";

export function TodoItem({ todo }) {
  const { id, text, done } = todo;
  const dispatch = useTodoDispatch();
  const handleToggle = () => {
    dispatch({ type: "TOGGLE_TODO", id: id });
  };
  return (
    <li>
      <ListSpan done={done} onClick={handleToggle}>
        {text}
      </ListSpan>
      <RemoveButton onClick={() => dispatch({ type: "REMOVE_TODO", id: id })}>
        삭제
      </RemoveButton>
      {/* 
      <span
        onClick={handleToggle}
        style={{ textDecoration: done && "line-through" }}
      >
        {text}
      </span>
      <button onClick={() => dispatch({ type: "REMOVE_TODO", id: id })}>
        삭제
      </button>
      */}
    </li>
  );
}

const RemoveButton = styled.button`
  background-color: blue;
  color: #fff;
  //border: 1px;
`;

const ListSpan = styled.span`
  text-decoration: ${({ done }) => done && "line-through"};
`;
