import React from "react";
import styled, { css } from "styled-components";

export const Input = styled.input`
  padding: 5px;
  width: 100%;
  border: 1px solid #ddd;
  outline: none;

  & + & {
    margin-top: 10px;
  }
`;

export const Button = styled.button`
  padding: 10px;
  width: 100%;
  border: none;
  outline: none;

  background-color: #000000;
  color: #fff;

  font-weight: bold;
  cursor: pointer;

  ${({ bgColor }) =>
    bgColor &&
    css`
      background-color: ${bgColor};
    `}
  & + & {
    margin-top: 5px;
  }
`;
