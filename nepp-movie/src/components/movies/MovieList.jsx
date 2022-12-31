import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getPopular } from "../../api/movies";
import MovieItem from "./MovieItem";

export default function MovieList({ title }) {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getPopular(1)
      .then((res) => {
        console.log("res : ", res);
        setMovieList(res);
      })
      .catch((error) => {
        console.log("error : ", error);
      });
  }, []);

  return (
    <Container>
      <CategoryTitle>{title}</CategoryTitle>
      <ItemWapper>
        {movieList.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </ItemWapper>
    </Container>
  );
}

const Container = styled.div``;

const CategoryTitle = styled.h2`
  font-size: 1.2rem;
`;

const ItemWapper = styled.ul`
  display: flex;
  margin-top: 20px;

  overflow-x: auto;
`;
