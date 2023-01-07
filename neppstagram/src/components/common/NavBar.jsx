import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdHome, MdOutlineSearch } from "react-icons/md";
import { FcLike } from "react-icons/fc";

import { BsPersonSquare, BsFillPlusCircleFill } from "react-icons/bs";
import { IoMdLogOut, IoMdLogIn } from "react-icons/io";

export default function NavBar() {
  const handleSignOut = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      window.localStorage.clear();
    }
  };

  const isLogin = () => {
    return window.localStorage.length > 0;
  };

  return (
    <Container>
      <NavItem>
        <StyledLink to="/home">
          <MdHome size={24} />
        </StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to="search">
          <MdOutlineSearch size={24} />
        </StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to="edit" size={24}>
          <BsFillPlusCircleFill />
        </StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to="profile">
          <BsPersonSquare size={24} />
        </StyledLink>
      </NavItem>
      <NavItem>
        {" "}
        {isLogin() ? (
          <a href="#" onClick={handleSignOut}>
            로그아웃
          </a>
        ) : (
          <StyledLink to="signin">로그인</StyledLink>
        )}
      </NavItem>
      <NavItem>
        <StyledLink to="signup">회원등록</StyledLink>
      </NavItem>
    </Container>
  );
}

const Container = styled.ul`
  display: flex;
  align-items: center;
  border-top: 1px solid #ddd;
`;

const NavItem = styled.li`
  flex: 1;

  & + & {
    border-left: 1px solid #ddd;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  padding: 10px 0;
`;
