import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdHome, MdOutlineSearch } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { RiProfileLine, RiProfileFill } from "react-icons/ri";

import { BsFillPlusCircleFill } from "react-icons/bs";
import { IoMdLogOut, IoMdLogIn } from "react-icons/io";

export default function NavBar() {
  const handleSignOut = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      window.localStorage.clear();
      window.location.href = "/signin";
    }
  };

  const isLogin = () => {
    return window.localStorage.length > 0;
  };

  return (
    <Container>
      <NavItem>
        <StyledLink to="/">
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
        {isLogin() ? (
          <StyledLink to="profile">
            <RiProfileLine size={24} />
          </StyledLink>
        ) : (
          <StyledLink to="signup">
            <RiProfileFill size={24} />
          </StyledLink>
        )}
      </NavItem>
      <NavItem>
        {isLogin() ? (
          <IoMdLogOut size={24} onClick={handleSignOut} style={{}} />
        ) : (
          <StyledLink to="signin">
            <IoMdLogIn size={24} />
          </StyledLink>
        )}
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
