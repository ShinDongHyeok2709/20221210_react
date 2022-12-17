import React, { useState } from "react";
import Header from "./Header";
import Content from "./Content";

export default function Main() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header darkMode={darkMode} />
      <Content darkMode={darkMode} />
    </div>
  );
}
