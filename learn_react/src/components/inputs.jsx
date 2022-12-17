import React, { useReducer } from "react";

const initialState = {
  inputs: { email: "", name: "" },
  counter: 0,
};
/*
리듀서 함수 : 액션의 값에 따라 상태를 관리하는 함수
*/

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        inputs: { ...state.inputs, [action.name]: action.value },
      };
    case "INCREASE_COUNTRER":
      return { ...state, counter: state.counter + 1 };
    default:
      return state;
  }
}
export default function Inputs() {
  /*
  useReducer(리듀서 함수) : [상태값, 디스패치 함수] 반환.
  디스패치 함수 : 액션을 발생시키는 함수
  */
  const [state, dispatch] = useReducer(reducer, initialState);
  const { inputs, counter } = state;
  const { name, email } = inputs;

  console.log(state);
  const handleInputs = (e) => {
    const { name, value } = e.target;

    dispatch({ type: "CHANGE_INPUT", name, value });
  };

  const handleCounter = () => {
    dispatch({ type: "INCREASE_COUNTRER" });
  };

  return (
    <div>
      <p>
        입력값 : {name} ({email})
      </p>
      이름 : <input name="name" type="text" onChange={handleInputs} />
      <br />
      이메일 : <input name="email" type="text" onChange={handleInputs} />
      <div>
        <p>{counter}</p>
        <button onClick={handleCounter}>+1</button>
        <button onClick={() => dispatch({ type: "INCREASE_COUNTRER" })}>
          (+1)
        </button>
      </div>
    </div>
  );
}
