import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useSetRecoilState } from "recoil";
import { todoState } from "../state/todo";
import {
  createTodo,
  createTodoAction,
  createTodoAction2,
  CREATE_TODO,
} from "../state/todos_redux";

export default function TodoInput() {
  //const setTodos = useSetRecoilState(todoState);

  const [input, setInput] = useState("");
  const nextID = useRef(4);

  const handleSubmit = (e) => {
    console.log(e);

    if (!input) {
      alert("할일을 등록해 주세요!");
      return;
    }

    /*
    setTodos((todos) => [
      ...todos,
      { id: nextID.current, title: input, done: false },
    ]);
    */
    /*
    dispatch({
      type: CREATE_TODO,
      id: nextID.current,
      title: input,
      done: false,
    });
    */
    //dispatch(createTodo(nextID.current, input));
    //dispatch(createTodoAction({ id: nextID.current, title: input }));
    dispatch(createTodoAction2({ id: nextID.current, title: input }));

    setInput("");
    nextID.current++;
  };

  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        name="title"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>등록</button>
    </div>
  );
}
