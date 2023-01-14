import React, { useCallback, useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import styled from "styled-components";
import { client } from "../..";
import { deleteComment, getComments, postComment } from "../../api/admin";
import { useUserIdContext } from "../data/auth";

export default function CommentList({ postId }) {
  const [page, setPage] = useState(1);
  const [commentList, setCommentList] = useState([]);
  const [input, setInput] = useState("");

  const currentUserID = useUserIdContext();

  //등록하는 함수 만들기
  const postCommentMutate = useMutation(postComment, {
    onMutate: (form) => {
      console.log("form : ", form);
    },
    onSuccess: (result) => {
      //setCommentList([...commentList, result]);
      client.fetchQuery("comments");
    },
    onError: (err) => {
      console.log("err : ", err);
    },
  });

  const deleteCommentMutate = useMutation(deleteComment, {
    onMutate: (form) => {
      console.log("form : ", form);
    },
    onSuccess: (result) => {
      //setCommentList([...commentList, result]);
      client.invalidateQueries("comments");
    },
    onError: (err) => {
      console.log("err : ", err);
    },
  });

  const { data, isLoading, error } = useQuery(
    "comments",
    () => getComments(postId, page),
    {
      onSuccess: (result) => {
        console.log("result : ", result);
        setCommentList(result);
      },
      onError: (err) => {
        console.log("err : ", err);
      },
    }
  );

  const getData = useCallback(() => {
    getComments(postId, page)
      .then((request) => {
        console.log("----- request : ", request);
        setCommentList([...commentList, ...request]);
      })
      .catch((error) => console.log("error : ", error));
  }, [postId, page]);

  useEffect(() => {
    getData();
  }, [getData]);

  const handleMoreComments = () => {
    setPage(page + 1);
    getData();
  };

  const handleDelete = async (commentId) => {
    console.log("remove commentId : ", commentId);

    if (!window.confirm("댓글을 삭제하시겠습니까?")) return;

    deleteCommentMutate.mutate(commentId);
    /*
    deleteComment(commentId)
      .then((request) => {
        console.log("request : ", request);
        //getData();

        setCommentList(
          commentList.filter((comment) => comment.id !== commentId)
        );
      })
      .catch((error) => console.log("error : ", error));
      */
  };

  const handleSubmit = async (e) => {
    if (input.length === 0) {
      alert("댓글을 입력해 주세요!");
      return;
    }
    //e.preventDefault();

    /*
    const result = await postComment({ postId, content: input });
    setCommentList([...commentList, result]);
    */

    postCommentMutate.mutate({ postId, content: input });
  };

  if (isLoading) return <div>로딩중...</div>;
  console.log(
    "---------" + commentList.length + " commentList : ",
    commentList
  );
  console.log("--------- page : ", page);
  return (
    <Container>
      {commentList.map((comment) => (
        <CommmentItem key={comment.id}>
          <p>{comment.content} </p>

          {currentUserID === comment.author.id && (
            <BtnDelete onClick={() => handleDelete(comment.id)}>삭제</BtnDelete>
          )}
        </CommmentItem>
      ))}
      <BtnMore onClick={handleMoreComments}>
        더보기 ({commentList.length}/
        {commentList.length < 10 ? commentList.length : "?"})
      </BtnMore>
      <InputBox>
        <InputCommment
          name="comment"
          placeholder="댓글을 입력해 주세요!"
          onChange={(e) => setInput(e.target.value)}
        />
        <BtnSubmit onClick={handleSubmit}>등록</BtnSubmit>
      </InputBox>
    </Container>
  );
}

const Container = styled.div`
  padding: 5px;
`;

const CommmentItem = styled.li`
  display: flex;
  justify-content: space-between;

  padding: 5px 0;
`;

const InputBox = styled.div`
  display: flex;
  margin-top: 20px;
`;
const InputCommment = styled.input`
  width: 100%;
  padding: 5px;
  border: none;
  outline: none;
  border-bottom: 1px solid #eee;
  font-size: 0.8rem;
`;

const BtnSubmit = styled.div`
  padding: 5px, 10px;
  margin-left: 5px;
  border-radius: 10px;
  width: 40px;

  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;

  font-size: 0.8rem;
  font-weight: 700;

  cursor: pointer;
  user-select: none;
`;

const BtnDelete = styled(BtnSubmit)`
  background-color: rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: red;
  }
`;

const BtnMore = styled.span`
  font-size: 0.8rem;
  font-weight: 700;

  margin-top: 10px;
  cursor: pointer;
  user-select: none;

  &:hover {
    color: red;
  }
`;
