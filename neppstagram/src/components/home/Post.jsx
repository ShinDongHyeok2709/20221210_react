import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CommentList from "../common/CommentList";
import PostImageBox from "../common/PostImageBox";
import UserInfo from "../common/UserInfo";
import { useUserIdContext } from "../data/auth";

export default function Post({ post }) {
  const { id, author, img_list, content } = post;
  let imgLength = img_list ? img_list.length : 0;

  const [showComment, setShowComment] = useState(false);
  const userID = useUserIdContext();

  return (
    <Container>
      <UserInfo author={author} />
      <PostImageBox img_list={img_list} />
      <div style={{ textAlign: "right", fontSize: "0.5rem" }}>
        {author.id === userID && <Link to={`edit/${id}`}>수정하기</Link>}
      </div>
      <ContentBox>
        ({imgLength}) {content}
        <BtnComment onClick={() => setShowComment(true)}>댓글 보기</BtnComment>
      </ContentBox>
      {showComment && <CommentList postId={id} />}
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  width: 100%;
  & + & {
    border-top: 1px solid #eee;
  }
`;

const ContentBox = styled.div`
  padding: 5px;
`;

const BtnComment = styled.div`
  font-size: 0.7rem;
  font-weight: 700;
  margin-top: 10px;

  cursor: pointer;
  user-select: none;
`;
