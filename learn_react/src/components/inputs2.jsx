import React, { useReducer } from "react";
import { useInputs } from "../hooks/useInputs";

const initialState = {
  email: "",
  name: "",
  title: "",
};
/*
리듀서 함수 : 액션의 값에 따라 상태를 관리하는 함수
*/

export default function Inputs() {
  /*
  useReducer(리듀서 함수) : [상태값, 디스패치 함수] 반환.
  디스패치 함수 : 액션을 발생시키는 함수
  */
  const [state, dispatch] = useInputs(initialState);
  const { name, email, title } = state;

  console.log(state);
  const handleInputs = (e) => {
    const { name, value } = e.target;

    dispatch({ type: "CHANGE_INPUT", name, value });
  };

  return (
    <div>
      <p>
        입력값 : {name} ({email}) {title}
      </p>
      이름 : <input name="name" type="text" onChange={handleInputs} />
      <br />
      이메일 : <input name="email" type="text" onChange={handleInputs} />
      <br />
      Title : <input name="title" type="text" onChange={handleInputs} />
    </div>
  );
}
