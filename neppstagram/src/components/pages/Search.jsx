import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { searchUser } from "../../api/admin";
import useDebounce from "../../hooks/useDebounce";
import { Button, Input } from "../common/Input";
import UserInfo from "../common/UserInfo";

export default function Search() {
  const [input, setInput] = useState("");
  const [users, setUsers] = useState([]);

  const debounceSearch = useDebounce(input, 300);

  const handleFetchUsers = useCallback(async () => {
    if (input === "") return;

    await searchUser(input).then((response) => {
      setUsers(response);
    });
    console.log("debounceSearch test : ", users);
  }, [input]);

  /*
  useEffect(() => { //input이 변경될때 마다 호출
    handleFetchUsers();
  }, [handleFetchUsers]);
  */

  useEffect(() => {
    //3초가격으로 input이 변경될때 마다 호출
    const handleFetchUsers = async () => {
      if (input === "") return;

      await searchUser(input).then((response) => {
        setUsers(response);
      });
      console.log("debounceSearch test : ", users);
    };
    handleFetchUsers();
  }, [debounceSearch]);

  const handleChangeInput = (e) => {
    setInput(e.target.value);
  };
  return (
    <Container>
      <InputBox>
        {/* 
        <Input
          type="search"
          name="username"
          value={input}
          onChange={handleChangeInput}
          placeholder="이름을 입력해 주세요!"
          style={{ flex: 1 }}
        />
        &nbsp; <button onClick={handleFetchUsers}>검색</button>
*/}
        <Input
          type="search"
          name="username"
          value={input}
          onChange={handleChangeInput}
          placeholder="이름을 입력해 주세요!"
        />
      </InputBox>
      <UserList>
        {users.map((user, idx) => (
          <UserItem key={user.id}>
            <UserInfo user={user} />
          </UserItem>
        ))}
      </UserList>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const InputBox = styled.div`
  padding: 5px 10px;
  display: flex;
`;

const UserItem = styled.li`
  cursor: pointer;
  &:hover {
    background: #eee;
  }
`;

const UserList = styled.ul`
  flex: 1;
  overflow-y: auto;
`;
