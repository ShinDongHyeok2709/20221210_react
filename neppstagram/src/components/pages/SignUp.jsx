import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { postUser } from "../../api/admin";
import { useInput } from "../../hooks/useInput";
import AdminForm from "../admin/AdminForm";
import { Button, Input } from "../common/Input";

export default function SignUp() {
  const initialUser = { name: "", email: "", password: "" };

  const [inputs, handleInputs, resetInputs] = useInput(initialUser);

  const { name, email, password } = inputs;
  const active = name !== "" && email !== name && password !== "";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!active) return;

    postUser(inputs)
      .then((request) => {
        console.log("request : ", request);
        resetInputs();
        window.location.href = "/signin";
      })
      .catch((error) => console.log("error : ", error));
  };

  //console.log("inputs : ", inputs);
  return (
    <AdminForm title="회원가입" onSubmit={handleSubmit}>
      <InputWrapper>
        <Input
          type="text"
          name="name"
          placeholder="이름을 입력해 주세요!"
          onChange={handleInputs}
        />
        <Input
          type="email"
          name="email"
          placeholder="이메일을 입력해 주세요!"
          onChange={handleInputs}
        />
        <Input
          type="password"
          name="password"
          placeholder="비밀번호를 입력해 주세요!"
          onChange={handleInputs}
        />
      </InputWrapper>
      <BtnWrapper>
        <Button bgColor={active ? "#000" : "#ddd"}>회원가입</Button>
        <Button bgColor="#ddd" type="reset">
          취소
        </Button>
      </BtnWrapper>
    </AdminForm>
  );
}

const InputWrapper = styled.div`
  margin-top: 20px;
`;

const BtnWrapper = styled.div`
  margin-top: 20px;
`;
