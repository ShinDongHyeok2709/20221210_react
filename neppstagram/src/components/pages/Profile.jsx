import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getCurrentUser, patchProfile } from "../../api/admin";

export default function Profile() {
  const [user, setUser] = useState({});

  const [file, setFile] = useState({});

  const [preview, setPreview] = useState("");

  const { name, profile_url } = user;

  useEffect(() => {
    getCurrentUser()
      .then((response) => {
        console.log("response : ", response);
        setUser(response.data.data);
      })
      .catch((error) => console.log("error : ", error));
  }, [user]);

  const handleUploadFile = (e) => {
    console.log("files : ", e.target.files[0]);

    const form = new FormData();
    form.append("image", e.target.files[0]);
    patchProfile(form)
      .then((response) => {
        console.log("response : ", response);
        //setFile(e.target.files[0]);
      })
      .catch((error) => console.log("error : ", error));
  };

  return (
    <Container>
      <Wrapper>
        <UserName>{name}</UserName>

        <ProfileCircle htmlFor="profile">
          <img src={profile_url} alt="" width="200" />
        </ProfileCircle>

        <input
          type="file"
          id="profile"
          style={{ display: "none" }}
          onChange={handleUploadFile}
          accept="image/*"
        />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const Wrapper = styled.div`
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const UserName = styled.h2``;

const ProfileCircle = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 200px;
  height: 200px;

  margin-top: 30px;

  border: 3px solid #eee;
  border-radius: 50%;

  overflow: hidden;
`;
