import React, { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { getPostbyUserId, getUserbyId } from "../../api/admin";

export default function User() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const { name, profile_url } = user;
  const [userPosts, setUserPosts] = useState([]);

  const fetchData = useCallback(async () => {
    //useCallback은 useEffect의 배열때문에 사용
    const user = await getUserbyId(id);
    setUser(user);
    const userPosts = await getPostbyUserId(id);
    setUserPosts(userPosts);
  }, [id]);

  useEffect(() => {
    /*
    getUserbyId(id).then((response) => {
      setUser(response);
    });

    getPostbyUserId(id).then((response) => {
      setUserPosts(response);
    });
    */
    fetchData();
  }, [fetchData]);

  return (
    <Container>
      <ProfileBox>
        <ImgBox>
          <img src={profile_url} alt={name} />
        </ImgBox>
        <UserName>{name}</UserName>
      </ProfileBox>
      <div style={{ textAlign: "center" }}>
        <Link to="/search">[뒤로 가기]</Link>
      </div>
      <PostList>
        {userPosts.map((post) => (
          <PostItem>
            <Link to={`/post/${post.id}`}>
              <img src={post.img_list[0].url} alt="" />
            </Link>
          </PostItem>
        ))}
      </PostList>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  padding: 50px 20px 20px;
  border-bottom: 1px solid #eee;
`;

const UserName = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  margin-left: 10px;
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid #eee;

  overflow: hidden;
  img {
    width: 100%;
  }
`;

const PostList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const PostItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  width: calc(350px / 3);
  height: calc(350px / 3);
  overflow: hidden;

  border-color: #eee;
  img {
    width: 100%;
  }
`;
