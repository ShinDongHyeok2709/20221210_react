import React, { useRef, useState } from "react";
import { useTodoDispatch } from "../../context/todos";
import useInputs2 from "../../hooks/useInputs2";

export default function TodoCreate() {
  const nextID = useRef(4);
  const dispatch = useTodoDispatch();

  const onCreate = () => {
    dispatch({ type: "CREATE_TODO", text: inputs.text, id: nextID.current });
    nextID.current++;
    reset();
  };

  const [inputs, onChange, reset] = useInputs2({
    text: "",
  });

  //form 테그에 작성하면 enter키를 눌러도 등록이 됨
  return (
    <form
      onSubmit={(e) => {
        //form 테그의 onSubmit 새로고침 방지
        e.preventDefault();
        onCreate();
      }}
    >
      <input type="text" name="text" value={inputs.text} onChange={onChange} />
      <button>등록</button>
    </form>
  );
}
