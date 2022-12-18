import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
export default function Slider() {
  const [idx, setIdx] = useState(0);
  //const next = useRef(1);
  const handleIdx = (value) => {
    if (idx + value < 0) {
      setIdx(2);
      return;
    }
    if (idx + value > 2) {
      setIdx(0);
      return;
    }
    setIdx(idx + value);
  };

  return (
    <Container>
      <Wrapper idx={idx}>
        <Item bgColor="tomato">1</Item>
        <Item bgColor="blue">2</Item>
        <Item bgColor="green">3</Item>
      </Wrapper>
      <BtnList>
        <BtnSlide onClick={() => handleIdx(-1)}>
          <FaAngleLeft />
        </BtnSlide>
        <BtnSlide onClick={() => handleIdx(1)}>
          <FaAngleRight />
        </BtnSlide>
      </BtnList>
    </Container>
  );
}

const Container = styled.div`
  border: 3px solid red;
  overflow: hidden;
`;

const Wrapper = styled.ul`
  display: flex;
  height: 300px;

  background-color: "#eee";
  transition: transform 0.4s;
  ${({ idx }) => css`
    transform: translateX(${idx * -100}%);
  `}
`;

const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  flex-shrink: 0; //공간이 부족할 때 줄어드는 비율을 0으로 변경
  font-size: 5rem;
  color: #fff;
  ${({ bgColor }) => css`
  background-color: ${bgColor}};
  `}
  transform: translateX(0);
`;

const BtnSlide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: rgbs(0, 0 0, 4);
  border-radius: 50%;
  color: white;
  cursor: pointer;
`;

const BtnList = styled.div`
  display: flex;
  justify-content: center;
`;
