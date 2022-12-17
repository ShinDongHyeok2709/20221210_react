import React, { useContext } from "react";
import { DarkModeContext, SetDarkModeContext } from "./Main";

export default function Content() {
  const darkMode = useContext(DarkModeContext);
  const onChangeMode = useContext(SetDarkModeContext);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: darkMode && "black",
        color: darkMode && "white",
      }}
    >
      <p>메인 컨텐츠입니다!</p>
      <button onClick={onChangeMode}> 모드 변경</button>
    </div>
  );
}
