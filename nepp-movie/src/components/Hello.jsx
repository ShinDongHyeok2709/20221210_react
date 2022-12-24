import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export const users = [
  { id: 1, name: "seok", email: "seok@gmail.com" },
  { id: 2, name: "shin", email: "shin@gmail.com" },
  { id: 3, name: "test", email: "test@gmail.com" },
];

export default function Hello() {
  //Link 태그 클릭하는 것 외에 url을 변경할 때 사용함
  const navigate = useNavigate();

  const handleMove = (id) => {
    if (window.confirm("이동하시겠습니까? ")) navigate(`/hello/${id}`);
  };

  return (
    <div>
      <h1>Hello</h1>
      <p>Hello 페이지입니다. </p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p onClick={() => handleMove(user.id)}>{user.name}</p>
            {/* <Link to={`/hello/${user.id}`}>{user.name}</Link>*/}
          </li>
        ))}
      </ul>
    </div>
  );
}
