import React, { useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { useTodoDispatch, useTodoState } from "../context/todos";
import { useInputs } from "../hooks/useInputs";

export default function TodoCreate() {
  //const todos = useTodoState();
  const dispatch = useTodoDispatch();
  const [inputs, onChanage, reset] = useInputs({ text: "" });
  const [edit, setEdit] = useState(false);

  //const inputRef = useRef();
  const nextID = useRef(4);

  const handleSubmit = () => {
    if (!edit) {
      setEdit(true);
      return;
    }

    if (!inputs.text) {
      alert("할일을 입력해 주세요!");
      //inputRef.current.focus();
      return;
    }

    dispatch({
      type: "CREATE_TODO",
      id: nextID.current,
      text: inputs.text,
    });
    //setTodos([...todos, { id: nextID.current, text: input, done: false }]);
    nextID.current++;
    reset();
    setEdit(false);
  };

  return (
    <CreateBlock>
      <InputBox edit={edit}>
        <input
          type="text"
          name="text"
          value={inputs.text}
          onChange={onChanage}
          //ref={inputRef}
        />
      </InputBox>
      <BtnSubmit
        onClick={handleSubmit}
        active={inputs.text.length > 0}
        edit={edit}
      >
        {edit ? "등록" : "추가"}
      </BtnSubmit>
    </CreateBlock>
  );
}

const CreateBlock = styled.div`
  padding: 20px 10px;
`;

const InputBox = styled.div`
  border: 1px solid #eee;
  border-width: 0;
  max-height: 0;

  overflow: hidden;

  ${({ edit }) =>
    edit &&
    css`
      padding: 0 5px;
      max-height: 40px;
      border-width: 1px;
      transition: max-height 0.5s;
    `}
  input {
    width: 100%;
    padding: 5px 0;
    border: 1px solid #ddd;
    outline: none;

    transform-origin: bottom;
    transform: scaleY(${({ edit }) => (edit ? 1 : 0)});
    transition: 0.25s;
  }
`;

const BtnSubmit = styled.button`
  width: 100%;
  padding: 5px 0;
  margin-top: 5px;
  border: none;
  outline: none;
  background-color: #bbb;
  color: #fff;

  ${({ edit, theme }) =>
    !edit &&
    css`
      background-color: ${theme.colors.main};

      &:hover {
        background-color: ${theme.colors.hover};
      }

      &:active {
        background-color: ${theme.colors.active};
      }
    `}

  ${({ active, theme }) =>
    active &&
    css`
      background-color: ${theme.colors.main};
      cursor: pointer;
    `}
`;
