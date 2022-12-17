import React, { useContext } from "react";
import { DarkModeContext } from "./Main";

//property에 children을 사용하면, 호출한 컴포넌트의 하위 Tag를 가져옴
export default function Header({ children }) {
  const darkMode = useContext(DarkModeContext);

  return (
    <header
      style={{
        textAlign: "center",
        borderBottom: "1px solid",
        borderColor: darkMode ? "whtie" : "black",
        backgroundColor: darkMode ? "#000" : "#ddd",
        color: darkMode ? "#fff" : "black",
        padding: 20,
      }}
    >
      {children}
      <h1 style={{ margin: 0 }}>Hello React!</h1>
    </header>
  );
}
