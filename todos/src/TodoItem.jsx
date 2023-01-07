import React from "react";
import styled from "styled-components";
import useTodosContext from "./hooks/useTodosContext";

export default function TodoItem({ todo }) {
  const [todos, dispatch] = useTodosContext();
  const handleToggle = () => {
    dispatch({ type: "TOGGLE_TODO", id: todo.id });
  };

  const handleRemove = () => {
    let state = window.confirm("할일을 삭제하시겠습니까?");
    if (state) {
      dispatch({ type: "REMOVE_TODO", id: todo.id });
    }
  };

  return (
    <li>
      <span
        onClick={handleToggle}
        style={{ textDecoration: todo.done && "line-through" }}
      >
        <input
          type="checkbox"
          name="done"
          readOnly
          disabled
          checked={todo.done}
        />
        &nbsp;{todo.title}
      </span>
      &nbsp; <ButtonRemove onClick={handleRemove}>삭제</ButtonRemove>
    </li>
  );
}

const ButtonRemove = styled.button`
  background-color: darkblue;
  color: #fff;
  border: 1px solid gray;
  border-radius: 5px;
`;
