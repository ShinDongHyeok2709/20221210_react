import React, { useRef, useState } from "react";

export default function useTodosInput(initialState, initID) {
  const [input, setInput] = useState(initialState);
  const nextID = useRef(initID);
  const inputRef = useRef();

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const resetInput = () => {
    setInput(initialState);
  };

  const increaseNextID = () => {
    nextID.current++;
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  return [
    input,
    resetInput,
    onChange,
    nextID.current,
    increaseNextID,
    inputRef,
    focusInput,
  ];
}
