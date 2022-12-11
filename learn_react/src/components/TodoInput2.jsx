import { React, useState, useRef, useMemo, useCallback } from "react";

function countUndoneToto(todos) {
  console.log("할일 세는 중");
  return todos.filter((todo) => !todo.done).length;
}

function TodoInput2({ handleSubmit }) {
  const [inputs, setInputs] = useState({
    text: "",
    date: "",
  });

  const handleInput = useCallback(
    (e) => {
      //console.log("입력된 태그의 Name : " + e.target.name, e.target.value);
      const { name, value } = e.target;
      setInputs({ ...inputs, [name]: value });
    },
    [inputs]
  );

  return (
    <div>
      <input
        type="text"
        name="text"
        value={inputs.text}
        onChange={handleInput}
      />
      <input
        type="date"
        name="date"
        value={inputs.date}
        onChange={handleInput}
      />
      {/*
        객체를 return에 출력시 에러가 발생하므로 객체의 속성으로 출력해야 함
      */}
      <p>
        {inputs.text} {inputs.date}
      </p>

      <button
        onClick={() => {
          handleSubmit(inputs);
          setInputs({ text: "", date: "" });
        }}
      >
        등록
      </button>
    </div>
  );
}
export default TodoInput2;
