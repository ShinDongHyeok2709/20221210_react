import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled, { css } from "styled-components";
import { getDetail } from "../../api/movies";

export default function Detail() {
  const { id } = useParams();

  //const [movie, setMovie] = useState({});
  const [movie, setMovie] = useState({
    data: null,
    error: null,
    loading: true,
  });

  const { data, error, loading } = movie;

  useEffect(() => {
    getDetail(id)
      .then((res) => {
        console.log("res : ", res);
        setMovie({ data: res, error: null, loading: false });
      })
      .catch((error) => {
        console.log("error : ", error);
        setMovie({ data: null, error: error, loading: false });
      });
  }, [id]);

  if (movie.loading) return <div>로딩중</div>;
  if (movie.error) return <div>에러 {movie.error.message}</div>;
  if (!movie.data) return <div>영화정보가 없습니다.</div>;

  const { title, release_date, poster_path, overview, backdrop_path } =
    movie.data;

  const imgURL = "https://image.tmdb.org/t/p/w342/" + poster_path;
  const backimgURL = "https://image.tmdb.org/t/p/w1280/" + backdrop_path;

  return (
    <Container>
      <Wrapper backimgURL={backimgURL}>
        <ImgBox>
          <img src={imgURL} alt={title} />
        </ImgBox>
        <DescBox>
          <Title>
            {title} <span>({new Date(release_date).getFullYear()})</span>
          </Title>
          <strong>개요</strong>
          <Overview>{overview}</Overview>
        </DescBox>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  display: flex;

  flex: 1;
  max-width: 960px;
  padding: 50px 0;

  color: #fff;

  ${({ backimgURL }) => css`
    background: url(${backimgURL}) center / cover no-repeat;
    background-color: rgba(0, 0, 0, 0, 0.6);
    background-blend-mode: overlay;
  `}
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 450px;
  flex-shrink: 0;

  margin-right: 20px;
  overflow: hidden;
  background: tomato;
`;

const DescBox = styled.div``;
const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;

  span {
    font-size: 1.2rem;
  }
`;

const Overview = styled.p`
  margin-bottom: 10px;
`;
