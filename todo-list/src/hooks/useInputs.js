import { useState } from "react";

export function useInputs(initialState) {
  const [inputs, setInputs] = useState(initialState);

  const onChanage = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const reset = () => {
    setInputs(initialState);
  };

  return [inputs, onChanage, reset];
}
