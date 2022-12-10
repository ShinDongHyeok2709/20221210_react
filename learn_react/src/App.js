import React from "react";
import Hello from "./components/Hello.jsx";
import "./App.css"; //webback을 통해 javascript가 아닌 파일도 import 가능

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
      */
  }
  const name = "seok";
  const style = { color: "red", backgroundColor: "black" };
  return (
    <>
      <Hello />
      <Hello></Hello>
      <Hello></Hello>
      <input></input>
      <p style={style} className="content">
        안녕하세요 {name}
      </p>
    </>
  );
}

export default App;
