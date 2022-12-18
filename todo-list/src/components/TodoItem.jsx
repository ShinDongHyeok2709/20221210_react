import React, { useState } from "react";
import styled, { css } from "styled-components";
import { AiOutlineCheck } from "react-icons/ai";
import { useTodoDispatch } from "../context/todos";
import { BsFillTrashFill } from "react-icons/bs";

export default function TodoItem({ todo }) {
  const dispatch = useTodoDispatch();
  const [disappear, setDisappear] = useState(false);

  const handleRemove = () => {
    setDisappear(true);
    setTimeout(() => {
      dispatch({ type: "REMOVE_TODO", id: todo.id });
    }, 400);
  };
  return (
    <ItemBlock disappear={disappear}>
      <CheckCircle
        onClick={() => dispatch({ type: "TOGGLE_TODO", id: todo.id })}
        done={todo.done}
      >
        {<AiOutlineCheck />}
      </CheckCircle>
      <p>&nbsp; {todo.text}</p>
      <TrashIcon onClick={handleRemove} />
    </ItemBlock>
  );
}

const ItemBlock = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 10px;
  border-bottom: 1px solid #eee;
  font-size: 0.9rem;
  p {
    flex: 1;
  }

  transition: transform 0.4s;
  ${({ disappear }) =>
    disappear &&
    css`
      transform: translate(100%);
    `}
`;
const TrashIcon = styled(BsFillTrashFill)`
  cursor: pointer;
  &:hover {
    color: red;
  }
`;

const CheckCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 50%;

  ${({ done }) =>
    done &&
    css`
      background-color: gray;
    `}
`;
