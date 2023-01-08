import React from "react";
import styled, { css } from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function UserInfo({ author }) {
  const { profile_url, name } = author;
  //profile_url = profile_url ? profile_url : "";
  //name = name ? name : "";

  return (
    <Container>
      <ImgCircle profileURL={profile_url} />
      <UserName>{name}</UserName>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const ImgCircle = styled.div`
  width: 30px;
  height: 30px;

  border: 2px solid #eee;
  border-radius: 50%;
  ${({ profileURL }) => css`
    background: url(${profileURL}) center / cover;
  `}
`;

const UserName = styled.p`
  font-size: 0.8rem;
  font-weight: 700;
  margin-left: 10px;

  color: #555;
`;
