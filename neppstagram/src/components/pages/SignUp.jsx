import { useState } from "react";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const signupMutate = useMutation(postUser, {
    onMutate: (form) => {
      console.log("form : ", form);
    },
    onSuccess: () => {
      alert("회원가입에 성공했습니다.");
      navigate("/signin");
    },
    onError: (error) => {
      console.log("error : ", error.response.data.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!active) return;

    signupMutate.mutate({ name, email, password });
    /*
    postUser(inputs)
      .then((request) => {
        console.log("request : ", request);
        resetInputs();
        alert("회원가입에 성공했습니다!");
        //window.location.href = "/signin";
        navigate("/signin");
      })
      .catch((error) => {
        console.log("error : ", error);
        alert("이메일과 비밀번호를 확인하세요!");
      });
      */
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
