import React from "react";

export default function Content({ darkMode }) {
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
      메인 컨텐츠입니다!
    </div>
  );
}
