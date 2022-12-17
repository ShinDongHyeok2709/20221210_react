import { React, useState } from "react";

function Counter() {
  /*
  상태값 : 컴포넌트가 가지는 상태값. => 상태가 변하면 렌더링이 다시 일어난다.
  useState(초기값) : [상태값, 업데이트 함수]
  => useState는 비동기적으로 동작하므로, 한 메소드내 setCount를 연달아 작성해도 값이 여러번 변경되지 않는다.
  => 함수형 업데이트 : useState의 인자로 함수를 전달하면 매개변수에 최신상태가 담긴다.
  setCount(count + opNum); console.log("test"); setCount(count + opNum); 한번만 반영됨.
  setCount((count) => count + opNum);  setCount((count) => count + opNum);하면 2번 호출됨.
  setCount((count) => count + opNum);  setCount(count + opNum);를 섞으면 한번만 반영됨.

*/
  const [count, setCount] = useState(0); //상수로 정의하였으나, 이벤트 발생시 Counter 컴포넌트가 매번 새로 호출하고, useState가 변경된 값을 반영함

  const handleCount = (opNum) => {
    if (opNum < 0 && count <= 0) {
      return;
    }
    setCount((count) => count + opNum); //상수의 count가 아닌 최신 count를 반영하여 여러번 반영 가능
    setCount((count) => count + opNum);
    setCount((count) => count + opNum);
  };

  //성능 측정용, 두번씩 호출되는 이유는 index.js의 <React.StrictMode> 태그 때문이며, 개발환경에서만 2번 호출되고, 운영환경에서는 1번만 호출됨
  console.log("렌더링");

  return (
    <div>
      <h3>{count}</h3>
      {/*
        이벤트 바인딩시 함수를 전달해야 한다. => 함수 호출전달하는 것이 아님
        => 인자가 필요할 경우 익명함수 안에서 호출하는 형태로 작성한다.
        
        이벤트에 파라미터전달시 Too may rerender 발생
        <button onClick={handleCount(1)}>+1</button>
        => 
        <button onClick={() => handleCount(1)}>+1</button>  
      */}
      <button onClick={() => handleCount(1)}>+1</button>
      <button onClick={() => handleCount(-1)}>-1</button>
    </div>
  );
}

export default Counter;
