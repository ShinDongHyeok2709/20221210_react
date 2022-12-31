import axios from "axios";

console.log("REACT_APP_TMDB_TOKEN : ", process.env.REACT_APP_TMDB_TOKEN);
axios.defaults.headers = {
  Authorization: "Bearer ${process.env.REACT_APP_TMDB_TOKEN}",
};

axios.defaults.baseURL = "https://api.themoviedb.org/3";

export async function getPopular(page) {
  let { data } = await axios.get("/movie/popular", {
    params: {
      language: "ko-KR",
      page: page,
    },
  });

  /*
  let { data } = await axios.get("https://api.themoviedb.org/3/movie/popular", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGQ0Nzk2M2YzZTE3ODYzZjdmMzRmMTA5YjZiMmJkMCIsInN1YiI6IjYzOWU2NDllMmYzYjE3MDBiYTAzN2RhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a5LZ2adX4lV2KcO3xeXEzG1K9sfEpelbNO6pOkFiBNw",
    },
  });
  */
  return data.results;
}

export async function getDetail(movieID) {
  try {
    let { data } = await axios.get("/movie/" + movieID, {
      params: {
        language: "ko-KR",
      },
    });

    console.log("result : ", data);
    return data;
  } catch (error) {
    throw new Error(error + " : 데이터를 불러오는데 실패했습니다.");
  }
}
