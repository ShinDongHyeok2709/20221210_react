// 컴포넌트 만들기
// 함수 이름은 파스칼 케이스로 작성해야 한다.(첫글자가 대문자)
/*
1.
function Hello(props) {
  console.log(props);
  return <h1>Hello {props.text}</h1>;
}

2.
function Hello(props) {
  const { text, active } = props;
  console.log(props);
  return <h1>Hello {text}</h1>;
}

3. 비구조 할당
function Hello({ text, active }) {
  return <h1 style={{ color: active && "green" }}>Hello {text}</h1>;
}


*/

import { useEffect, useState } from "react";

function Hello({ text, active, color }) {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    console.log("Hello 컴포넌트 랜더링");
  });

  useEffect(() => {
    //화면에 처음 나타날 때 한번만 실행된다. => setTimeout, setInterval, 서버에 데이터 받아오기, 라이브러리 연동
    console.log("Hello 컴포넌트 마운트 됨");
    const timer = setInterval(() => {
      console.log("1초 경과");
    }, 1000);

    return () => {
      /*
      화면에서 사라질 때(언마운트) 실행된다. => 클린업 함수, clearTimeout, clearInterval, 인스턴스 삭제
      언마운트는 return에 함수로 작성함.
      */
      console.log("언마운트 됨");
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <h1 style={{ color: active && color }}>
        Hello {text} {active && "!"}
      </h1>
      <input type="text" value={input} onChange={handleInput}></input>
    </>
  );
}

Hello.defaultProps = {
  text: "Javascript",
  color: "blue",
};
export default Hello;
