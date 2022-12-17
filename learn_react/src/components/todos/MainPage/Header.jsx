import React from "react";

export default function Header({ darkMode }) {
  return (
    <header
      style={{
        textAlign: "center",
        borderBottom: "1px solid black",
        backgroundColor: darkMode ? "#000" : "#ddd",
        color: darkMode ? "#fff" : "black",
        padding: 20,
      }}
    >
      <h1 style={{ margin: 0 }}>Hello React!</h1>
    </header>
  );
}
