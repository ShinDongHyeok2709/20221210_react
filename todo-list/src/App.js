import { darken, lighten } from "polished";
import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Todos from "./components/Todos";

//ThemeProvider는 글로벌 속성으로 하위 페이지에서 변수로 접근하여 사용 할수 있음
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default function App() {
  return (
    <ThemeProvider
      theme={{
        colors: {
          main: "#2596be",
          disabled: "#ddd",
          hover: lighten(0.05, "#2596be"),
          active: darken(0.05, "#ddd"),
        },
      }}
    >
      <Block>
        <GlobalStyle />
        <Todos />
      </Block>
    </ThemeProvider>
  );
}

const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background-color: #f2f2f2;
`;
