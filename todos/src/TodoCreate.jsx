import React, { useCallback } from "react";
import useTodosContext from "./hooks/useTodosContext";
import useTodosInput from "./hooks/useTodosInput";

export default function TodoCreate() {
  const [todos, dispatch] = useTodosContext();
  const initialState = { title: "" };
  const [
    input,
    resetInput,
    handleChange,
    nextID,
    increaseNextID,
    inputRef,
    focusInput,
  ] = useTodosInput(initialState, 4);

  /*
  const handleCreate = () => {
    if (!input.title) {
      alert("Todo를 입력하여 주시기 바랍니다!");
      focusInput();
      return;
    }
    dispatch({ type: "CREATE_TODO", id: nextID, title: input.title });
    increaseNextID();
    resetInput();
  };
  */

  const handleCreate = useCallback(() => {
    if (!input.title) {
      alert("Todo를 입력하여 주시기 바랍니다!");
      focusInput();
      return;
    }
    dispatch({ type: "CREATE_TODO", id: nextID, title: input.title });
    increaseNextID();
    resetInput();
  }, [input]);

  return (
    <>
      <hr />
      <p>
        <b>Todo :</b>
        &nbsp;
        <input
          type="text"
          name="title"
          value={input.title}
          onChange={handleChange}
          ref={inputRef}
        />
        &nbsp; <button onClick={handleCreate}>등록</button>
      </p>
    </>
  );
}
