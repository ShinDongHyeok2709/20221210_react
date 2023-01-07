import { useState } from "react";

export const useInput = (state) => {
  const [inputs, setInputs] = useState(state);

  const handelInputs = (e) => {
    const { value, name } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const reset = () => {
    setInputs(state);
  };
  return [inputs, handelInputs, reset, setInputs];
};
