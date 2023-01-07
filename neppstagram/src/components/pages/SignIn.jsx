import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signInUser } from "../../api/admin";
import { useInput } from "../../hooks/useInput";
import AdminForm from "../admin/AdminForm";
import { Button, Input } from "../common/Input";

export const ACCESS_TOKEN = "ACCESS_TOKEN";
export default function SignIn() {
  const initialUser = { email: "", password: "" };

  const [inputs, handleInputs, restInputs] = useInput(initialUser);

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.clear();

    signInUser(inputs)
      .then((request) => {
        console.log("request : ", request);
        if (request.data.success) {
          const token = request.data.data.token;
          //console.log("token : ", token);
          window.localStorage.setItem(ACCESS_TOKEN, token);
          console.log(
            "localStorage token : ",
            window.localStorage.getItem(ACCESS_TOKEN)
          );

          restInputs();
          //window.location.href = "/";
          navigate("/home");
        } else {
        }
      })
      .catch((error) => console.log("error : ", error));
  };

  const navigate = useNavigate();

  const handleGotoSignUp = () => {
    navigate("/signup");
  };

  return (
    <AdminForm title="로그인" onSubmit={handleSubmit}>
      <InputWrapper>
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
        <Button bgColor="#999" type="submit">
          로그인
        </Button>
        <Button bgColor="#ddd" type="button" onClick={handleGotoSignUp}>
          회원가입
        </Button>
        <div style={{ textAlign: "center" }}>
          <Link to="/signup">회원가입</Link>
        </div>
      </BtnWrapper>
    </AdminForm>
  );
}

const InputWrapper = styled.div`
  margin-top: 20px;
`;

const BtnWrapper = styled.div`
  margin-top: 30px;
`;
