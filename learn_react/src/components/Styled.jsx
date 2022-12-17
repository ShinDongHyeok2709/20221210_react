import React, { useState } from "react";
import styled, { css, createGlobalStyle, keyframes } from "styled-components";

const GlobalStyle = createGlobalStyle`*{
    margin : 0;
    padding: 0;
    box-sizing: border-box;
}`;

export default function Styled() {
  const [input, setInput] = useState("");
  const [color, setColor] = useState("black");
  return (
    <>
      <Block>
        <GlobalStyle />
        <Title active={false} color={color}>
          Hello Styled components
        </Title>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <BlueButton onClick={() => setColor(input)}>컬러 변경</BlueButton>
      </Block>
      <Title>적용되나?</Title>
    </>
  );
}
const slideUp = keyframes`
    to {
        transform: translateY(-20px);
    }
`;

const Title = styled.h3`
  font-size: 1.6rem;
  color: ${({ color }) => color};
  ${({ active }) =>
    active &&
    css`
      //여러 속성을 덮어 씌울 대 사용, 순서 중요
      color: red;
      background-color: yellow;
      border: 3px solid red;
    `}//background-color: ${({ active }) => active && "tomato"};
`;

const Block = styled.div`
  input {
    border: none;
  }
  ${Title} {
    //Block안의 타이틀에만 반영
    border: 3px solid black;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  outline: none;
  color: #fff;
  background-color: red;
  border-radius: 5px;
`;

//기존 스타일에 덮어쓰기
const BlueButton = styled(Button)`
  padding: 20px 30px;
  background-color: blue;
  animation: ${slideUp} 0.4s 3;
  @media screen and (max-width: 900px) {
    padding: 5px 10px;
  }
`;
