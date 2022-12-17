import { useState } from "react";

export default function useInputs2(initialState) {
  const [value, setValue] = useState(initialState);
  const onChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const reset = () => {
    setValue(initialState);
  };

  return [value, onChange, reset];
}
