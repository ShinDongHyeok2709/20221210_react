# React Router

URL에 따라 컴포넌트를 선택적으로 렌더링 할 수 있음.
새로고침이 일어나지 않고, 부분적으로만 렌더링이 일어나기 때문에 SPA(Single Page Application)을 개발할 수 있음.

---

## 설치 방법

    npm install react-router-dom

---

### BrowserRouter

React Router를 사용하고자하는 컴포넌트를 BrowserRouter로 감싸야 함

```javascript
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

---

### Routes, Route

라우팅을 할 때는 Routes안에 Route를 통해서 URL에 따라 렌더링 될 컴포넌트를 작성함

```javascript
<Routes>
  <Route path="경로" element={<컴포넌트 />} />
</Routes>
```

---

### 중첩 라우팅

라우팅된 컴포넌트안에서 다시 라운팅 함

```javascript
<Routes>
  <Route path="/hello/*" element={<Hello />}>
    <Route path="1" element={<div>1번 컴포넌트</div>} />
    <Route path="2" element={<div>2번 컴포넌트</div>} />
  </Route>
</Routes>
```

Route 안에 중첩해서 Route를 작성할 수 있음
상위 라우팅된 컴포넌트에서 Outlet이 렌더링 됨

```javascript
function Hello() {
  return (
    <div>
      <h1>Hello 컴포넌트</h1>
      <Outlet />
    </div>
  );
}
```

URL이 정확히 /hello인 경우에는 Outlet이 렌더링되지 않고, URL이 /Hello/1이면 1번 컴포넌트, /Hello/2이면 2번 컴포넌트가 렌더링됨

---

### useParams

URL에서 파라미터를 받아 옴
ex) /hello/:id => id라는 이름으로 파라미터를 받을 수 있음

```javascript
<Routes>
  <Route path="/users" element={<UserList />}>
    <Route path="users/:id" element={<Detail />} />
  </Route>
</Routes>
```

URL이 딱 /users로 맞아떨어지면 UserList 컴폰너트가, 그 뒤에 다른 값이 오면 Detail 컴포넌트가 렌더링 됨

그리고 Detail 컴포넌트에서 파라미터(id) 값을 useParams를 통해서 읽어옮
파라미터의 이름은 path에 기입된 **:파라미터** 이름에 따라 달라짐
useParams의 리턴값은 객체임

---

### useSearchParams

쿼리스트링을 간편하게 변환하여 사용함
useSearchParams를 사용하면 배열을 리턴하는데, 첫번째 값이 객체임
그 객체의 get 메소드를 통해서 쿼리값들을 읽어올 수 있음
쿼리값은 Key=Value, Key2=Value2의 형태로 전달됨
파라미터보다 복잡하고 여러개의 값을 전달해야 될 때 쿼리스트링을 사용함

```javascript
function Detail() {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const age = searchParams.get("age");
  return (
    <div>
      <h1>{email}</h1>
      <h1>{age}</h1>
    </div>
  );
}
```

---

### useNavigate

Link 컴포너트가 아닌 다른 방법으로 URL을 변경할때 사용함
useNavigate()의 반환값은 함수로, 인자로 URL을 전달하면 변경됨

주의사항으로 앞에 /가 붙었을 때와 안붙었을때 다르게 동작함
/가 붙으면 Base URL의 긑에 문자열을 붙이지만(절대 경로), /를 생략하면 현재 URL 주소 끝에 붙임(상대 경로)

주로, 로그인후 특정페이지로 이동할 때 사용함

```javascript
function Hello() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Hello 컴포넌트</h1>
      <p onClick={() => navigate("/users")}> 유저목록 보기</p>
    </div>
  );
}
```

---

### Link

<a href="">와 동일

```javascript
export default function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="hello">Hello</Link>
        </li>
      </ul>
    </div>
  );
}
```
