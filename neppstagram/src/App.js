import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Home from "./components/pages/Home";
import Edit from "./components/pages/Edit";
import Main from "./components/pages/Main";
import Profile from "./components/pages/Profile";
import Search from "./components/pages/Search";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import User from "./components/pages/User";

export default function App() {
  return (
    <Container>
      <Wrapper>
        <Routes>
          <Route path="/*" element={<Main />}>
            <Route path="" element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="edit">
              <Route path="" element={<Edit />} />
              <Route path=":id" element={<Edit />} />
            </Route>

            <Route path="profile" element={<Profile />} />

            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="user/:id" element={<User />} />
          </Route>
        </Routes>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;

  background-color: #eee;
`;

const Wrapper = styled.div`
  width: 350px;

  background-color: #fff;
`;
