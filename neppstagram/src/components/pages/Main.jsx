import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../common/Input";
import NavBar from "../common/NavBar";
import { ACCESS_TOKEN } from "./SignIn";

export default function Main() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (!token) {
      navigate("/signin");
    }
  }, []);

  return (
    <Container>
      메인
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
      <NavBar />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const OutletWrapper = styled.div`
  display: flex;
  flex: 1;
`;
