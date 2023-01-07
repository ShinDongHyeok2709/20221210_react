# REST API

API : Application Programing Interface
어플리케이션 간의 통신 방법

REST API(Representational State Transfer API) : 자원의 상태를 자원에 대한 표현으로 주고 받는 모든 것
자원(Resource), 메소드, 표현(Representation)

ex) GET http://www.api.com/todos
ex) GET http://www.api.com/todos/1

자원 : 주소 이후가 자원임(todos)
명칭은 동사를 사용하지 않고, 명사를 사용함

메소드 : 메소드는 HTTP 메소드를 의미함
메소드의 종류 : GET, POST, PUT(전체 Update), PATCH(일부분 Update), DELETE

---

# json-server

json-server : json 파일에 저장된 정보를 주고받는 가상의 REST API를 만들어주는 라이브러리.
설치(모든 프로젝트에서 사용하도록 설치) : npm install -g json-server

프로젝트 생성후 프로젝트 root에 db.json 파일 생성
실행 : npx json-server ./db.json --port 4000

json-server에 데이터를 등록하면 자동으로 id값을 증가시켜 생성시켜 줌

---

# Axios

JS에서 http통신을 도와주는 라이브러리로 별도 설치가 필요함.

설치 : npm install axios

Axios 사용시 데이터는 result.data에 담겨옴.

```javascript
let result = await axios.post("http://localhost:4000/todos", {
  title: input,
  done: false,
});
let { data } = result;
console.log(data);
```

헤더스 포함시 2번째 파리미터에 포함시킴

```javascript
.post("http://localhost:4000/todos", { title: input, done: false, headers: {} })
```

---

# 이벤트 전파 막는법

1. e.stopPropagation
2. `<span />` 태그에 이벤트를 기술하여 분리함

e.preventDefault는 고유 동작을 중단시키고, e.stopPropagation 는 상위 엘리먼트들로의 이벤트 전파를 중단함.

# 에러처리

1. async/await을 사용한 경우 : try{} catch() {} 문의 catch에서 에러처리

```javascript
try {
  let result = await fetch("http://localhost:4000/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: input, done: false }),
  });

  let json = await result.json();
  console.log("result", json);

  fetchTodos();
  setInput("");
} catch (error) {
  alert("에러 발생하였으니, 재시도바랍니다!");
  console.log(error);
}
```

2. fetch만 사용한 경우 : fetch().then().catch(); 문의 catch에서 에러처리

```javascript
fetch("http://localhost:4000/todos/" + id, {
  method: "DELETE",
})
  .then(() => {
    fetchTodos();
  })
  .catch((e) => {
    alert("에러 발생하였으니, 재시도바랍니다!");
    console.log("error : ", e);
  });
```

---

# tmdb

오른쪽 상단 프로필 > 설정 > API > API 신청
https://www.themoviedb.org/settings/api

---

# JSX return내 블럭처리

map내 출력할 태그가 여러줄일 경우 ()를 사용함.
()는 리턴을 포함하고 있으며, {}는 코드 블록이므로 별도 리턴을 기술해야 함.

```javascript
{
  gnbList.map((item) => (
    <NavItem key={item.id}>
      <Link to={item.url}>{item.title}</Link>
    </NavItem>
  ));
}
```

# vs에서 테스트데이터 생성

vs에서 Lorem 타입핑시, 자동으로 테스트용 text를 생성함

# 설정정보 별도 분리

package.json과 동일 폴더에 ".env" 파일을 만들고, "REACT*APP*"를 Prefix로 하여 별도 정보를 생성함
ex) REACT_APP_TMDB_TOKEN = "xxx";

사용시 : jsx에서 ${process.env.REACT_APP_TMDB_TOKEN}로 사용함
