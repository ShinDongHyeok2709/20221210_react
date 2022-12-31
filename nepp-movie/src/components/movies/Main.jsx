import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import MovieList from "./MovieList";

export default function Main() {
  return (
    <div>
      <ContentsContainer>
        <Wrapper>
          <MovieList title="What's Popular" />
          {/* 
    <MovieList title="Free To Watch" />
    <MovieList title="트렌딩" />
    */}
        </Wrapper>
      </ContentsContainer>
    </div>
  );
}

const ContentsContainer = styled.div`
  display: flex;
  justify-content: centger;
  padding: 50px 0;
`;

const Wrapper = styled.div`
  flex: 1;
  max-width: 960px;
`;
