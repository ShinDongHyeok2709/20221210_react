import React, { Component, useState, useEffect } from "react";
import Hello from "./components/Hello.jsx";
import "./App.css"; //webback을 통해 javascript가 아닌 파일도 import 가능
import { v4 } from "uuid";
import Counter from "./components/Counter";
//import TodoInput from "./components/TodoInput";
//import TodoInput from "./components/TodoInput2";
import Todo from "./components/Todo";

import { computeHeadingLevel } from "@testing-library/react";
function App() {
  {
    /*
  return (
    <div>
      <h1>Hello React</h1>
    </div>
  );

  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hello React2")
  );

  JSX
    1. 무조건 하나의 태그로 감싸서 반환해야 한다. => 프래그먼트를 이용하면 하나로 묶을 수 있다.
    2. 닫는 태그를 생략할 때는 셀프 클로징 태그를 사용해야 한다.
    3. JSX 안에 자바스크립트 값을 포함시킬 때는 {} 안에 작성한다.
    4. 스타일 속성은 객체 형태({})로 전달한다. => 여러단어인 속성은 카멜 케이스를 사용한다.
    5. class는 className 속성으로 할당한다.
    6. 컴포넌트는 무조건 대괄호로 시작한다.
    % package.json 파일이 존재하는 위치에서 vs를 시작해야 한다.
    파일명은 소문자로 시작해도 되나, 컴포넌트명(function App)은 대문자로 만드시 시작해야 한다.
     => 소문자로 시작시 React가 순수 html 태그로 인식함

      */
  }
  const name = "seok";
  const style = { color: "red", backgroundColor: "black" };

  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleCount = () => {
    setCount(count + 1);
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    //랜더링이 일어날때 마다 실행되느 코드
    console.log("count : ", count);
  }, [count]);

  useEffect(() => {
    //count가 변할때만 실행
    console.log("input : ", input);
  }, [input]);

  return (
    <>
      {/* 
      <Hello active />
      <Hello text="Seok" active={true} color="red"></Hello>
      <Hello text="React" active={false}></Hello>

      // 조건부 렌더링 
      {true && <Hello />}

      <input></input>
      <p style={style} className="content">
        안녕하세요 {name}
      </p>
      <p> {v4()}</p>
      <Counter />
      <TodoInput />

           
    */}
      {/*
      <div>
        <h2>{count}</h2>
        <button onClick={handleCount}>+1</button>
        <div>
          <input type="text" value={input} onChange={handleInput}></input>
          <p>{input}</p>
        </div>
        <button onClick={() => setToggle(!toggle)}>
          Toggle Hello Component
        </button>
        {toggle && <Hello />}
        <hr />
      </div>


      */}
      <Todo />
    </>
  );
}

export default App;
