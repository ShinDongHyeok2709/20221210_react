import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getContents, getCurrentUser } from "../../api/admin";
import { useUserIdContext, useUserIdDispatchContext } from "../data/auth";
import Post from "../home/Post";

export default function Home() {
  const [page, setPage] = useState(1);
  const [postList, setPostList] = useState([]);
  const [isLast, setIsLast] = useState(false);

  const dispatch = useUserIdDispatchContext();

  //const { data, isLoading } = useQuery("posts", () => getContents(page));
  const { data, isLoading } = useQuery("posts", () => getContents(page), {
    onSuccess: (data) => {
      console.log("data : ", data);
      setPostList(data);
    },
    onError: (error) => {
      alert(error.response.data.message);
    },
  });

  /*
  const handleNext = () => {
    getContents(page)
      .then((request) => {
        console.log("request : ", request);

        setPostList([...postList, ...request]);
        setPage(page + 1);
      })
      .catch((error) => console.log("error : ", error));
  };
  */

  useEffect(() => {
    getCurrentUser()
      .then((request) => {
        console.log("request : ", request);
        console.log("user : ", request);
        dispatch(request.id);
      })
      .catch((error) => console.log("error : ", error));
  }, []);

  useEffect(() => {
    getContents(page)
      .then((request) => {
        console.log("request : ", request);
        if (request.length < 10) setIsLast(true);
        setPostList((postList) => [...postList, ...request]);
      })
      .catch((error) => console.log("error : ", error));
  }, [page]);

  if (isLoading) return <div>로딩중...</div>;
  console.log("page : ", page);
  console.log(postList.length + "postList : ", postList);
  return (
    <Container>
      {postList.map((post, idx) => (
        <Post key={post.id} post={post} />
      ))}
      {/* <BtnMore onClick={handleNext}>더 보기</BtnMore> */}
      {!isLast && <BtnMore onClick={() => setPage(page + 1)}>더 보기</BtnMore>}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  flex: 1;
`;

const BtnMore = styled.div`
  padding: 10px 20px;
  margin-top: 30px;

  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-size: 0.7rem;
  font-weight: 700;
  text-align: center;

  cursor: pointer;
  user-select: none;
`;
