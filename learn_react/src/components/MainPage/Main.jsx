import React, { useState, createContext } from "react";
import Header from "./Header";
import Content from "./Content";
import { useTodoState } from "../../context/todos";

/*
컴포넌트 밖에서 컨텍스트 생성 => export로 값을 사용하는 컴포넌트에서 useContext의 인자로 전달되어야 한다.
=>createContext에 인자로 전달한 값은 기본값은 Provider로 감싸지 않은 컴포넌트에서 사용할 때 반환되는 값.
*/
export const DarkModeContext = createContext(null);

export const SetDarkModeContext = createContext(null);

export default function Main() {
  const [darkMode, setDarkMode] = useState(true);
  const onChangeMode = () => {
    setDarkMode(!darkMode);
  };

  //<DarkModeContext.Provider value={darkMode}> value에 배열, 객체도 가능
  return (
    <DarkModeContext.Provider value={darkMode}>
      <SetDarkModeContext.Provider value={onChangeMode}>
        <div
          style={{ display: "flex", flexDirection: "column", height: "100vh" }}
        >
          <Header>
            <h1>aaa</h1>
            <p>bbb</p>
          </Header>

          <Content />
        </div>
      </SetDarkModeContext.Provider>
    </DarkModeContext.Provider>
  );
}
