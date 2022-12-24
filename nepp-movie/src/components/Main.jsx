import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";

export default function Main() {
  return (
    <div>
      <h1>Main</h1>
      <p>메인 페이지입니다.</p>
      <Outlet />
      {/* 중첩 라우팅
      <Routes>
        <Route path="1" element={<button>1</button>} />
        <Route path="2" element={<button>2</button>} />
      </Routes>
       */}
    </div>
  );
}
