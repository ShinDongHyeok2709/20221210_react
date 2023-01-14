import React, { useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoState } from "../state/todo";

export default function TodoInput() {
  const setTodos = useSetRecoilState(todoState);
  const initialState = {
    id: null,
    title: "",
    done: false,
  };

  const [input, setInput] = useState(initialState);
  const nextID = useRef(4);

  const handleSubmit = (e) => {
    console.log(e);
    /*
    if (input.title) {
      alert("할일을 등록해 주세요!");
      return;
    }
    */
    setTodos((todos) => [
      ...todos,
      { id: nextID.current, title: input, done: false },
    ]);
    setInput(initialState);
    nextID.current++;
  };

  return (
    <div>
      <input
        type="text"
        name="title"
        value={input.title}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>등록</button>
    </div>
  );
}
