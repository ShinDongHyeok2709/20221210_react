import React from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { users } from "./Hello";

export default function Detail() {
  const params = useParams();
  console.log("params : ", params);
  const [userID] = params.userID;
  /*
  const location = useLocation();

  const [searchParams] = useSearchParams(); //배열
  const age = searchParams.get("age");
  const gender = searchParams.get("gender");
  console.log(searchParams.get("age"));
  //console.log(searchParams.getAll("age"));
  */

  //const user = users.filter((user) => user.id === params.userID)[0];
  const user = users.find((user) => user.id === parseInt(userID));
  console.log("user : ", user);
  const { name, email } = user;
  return (
    <div>
      <p>UserID: {userID}</p>
      <h1>이름 : {name}</h1>
      <h2>이메일 : {email}</h2>
    </div>
  );
}
