import React from "react";
import { Routes, Route } from "react-router-dom";
import Detail from "./components/Detail";
import Header from "./components/Header";
import Hello from "./components/Hello";
import Main from "./components/Main";
import Movies from "./components/movies/Movies";
{
  /*<Route path=":userID" element={<Detail />} />*/
}
export default function App() {
  const handleClick = () => {
    alert("1번 클릭");
  };

  /* 
    <>
      <Header />
      <Routes>
        <Route path="/*" element={<Main />}>
          <Route path="1" element={<button onClick={handleClick}>1</button>} />
          <Route path="2" element={<button>2</button>} />
        </Route>
        <Route path="hello/:userID" element={<Detail />} />
        <Route path="hello" element={<Hello />} />
      </Routes>
      </>
      */
  return <Movies />;
}
