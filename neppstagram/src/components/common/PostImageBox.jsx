import React, { useState } from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import styled, { css } from "styled-components";

export default function PostImageBox({ img_list }) {
  const [idx, setIdx] = useState(0);

  const handleIdx = (value) => {
    if (
      (value === -1 && idx + value < 0) ||
      (value === 1 && idx + value > img_list.length - 1)
    ) {
      return;
    }

    setIdx(idx + value);
  };

  return (
    <Container>
      <BtnSlide>
        <FaAngleDoubleLeft color="#fff" onClick={() => handleIdx(-1)} />
      </BtnSlide>
      <Wrapper idx={idx}>
        {img_list.map((img) => (
          <PostImg key={img.id} url={img.url} />
        ))}
      </Wrapper>
      <BtnSlide>
        <FaAngleDoubleRight color="#fff" onClick={() => handleIdx(1)} />
      </BtnSlide>
    </Container>
  );
}

const Container = styled.div`
  overflow: hidden;
  position: relative;
`;
const Wrapper = styled.ul`
  display: flex;
  height: 250px;

  background-color: #ddd;

  transition: transform 0.25s;
  ${({ idx }) => css`
    transform: translateX(${idx * -100}%);
  `}
`;

const PostImg = styled.li`
  width: 100%;
  flex-shrink: 0;

  ${({ url }) => css`
    background: url(${url}) center / cover;
  `}
`;

const BtnSlide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;
  border-radius: 50%;

  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 50%;

  transform: translateY(-50%);
  cursor: pointer;
  z-index: 100;
  &:nth-last-of-type(1) {
    left: 10px;
  }

  &:nth-last-of-type(2) {
    right: 10px;
  }
`;
