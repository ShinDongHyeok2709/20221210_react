import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function Section() {
  const [idx, setIdx] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: idx * window.innerHeight, behavior: "smooth" });

    const handleIdx = (e) => {
      e.preventDefault();

      if (isScrolling) {
        return;
      }

      if (e.deltaY < 0 && idx === 0) {
        return;
      }

      setIsScrolling(true);
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);

      if (e.deltaY > 0) {
        if (idx === 3) {
          return;
        }
        setIdx(idx + 1);
      } else {
        if (idx === 0) {
          return;
        }
        setIdx(idx - 1);
      }

      console.log("스크롤 발생", idx, e.deltaY);
    };
    window.addEventListener("wheel", handleIdx, { passive: false });

    return () =>
      window.removeEventListener("wheel", handleIdx, { passive: false });
  }, [idx, isScrolling]);

  return (
    <div>
      <SelectionBox bgColor="red">1</SelectionBox>
      <SelectionBox bgColor="blue">2</SelectionBox>
      <SelectionBox bgColor="green">3</SelectionBox>
      <SelectionBox bgColor="lightblue">4</SelectionBox>
    </div>
  );
}

const SelectionBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  color: #fff;
  width: 100vw;
  height: 100vh;
  background-color: ${({ bgColor }) => bgColor};
`;
