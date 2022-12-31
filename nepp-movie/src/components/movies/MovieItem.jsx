import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function MovieItem({ movie }) {
  const { id, title, release_date, poster_path } = movie;

  const imgURL = "https://image.tmdb.org/t/p/w200/" + poster_path;
  return (
    <Container>
      <Link to={"/movies/" + id}>
        <ImgBox>
          <img src={imgURL} />
        </ImgBox>
        <MovieTitle>{title}</MovieTitle>
        <ReleaseDate>{release_date}</ReleaseDate>
      </Link>
    </Container>
  );
}

const Container = styled.li`
  & + & {
    margin-left: 20px;
  }
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 225px;
  background: tomato;

  overflow: hidden;

  img {
    width: 120%;
  }
`;

const MovieTitle = styled.h3`
  font-size: 1rem;
  margin-top: 9px;
`;

const ReleaseDate = styled.span`
  font-size: 0.8rem;
  color: #aaa;
`;
