# 환경 구성

npx create-react-app neppstagram
npm install react-router-dom styled-components axios
npm install react-icons

API 정보

- SWAGGER DOCS 사용
- http://101.101.218.43/docs
- nepp2023/1210

index.css에 \* a, li {} 추가

---

# 파일 업로드

이벤트 파일데이터 : e.target.files
이미지 미리보기 :

1. javascript :

```javascript
const handleUploadFile = (e) => {
  console.log("files : ", e.target.files[0]);
  setFile(e.target.files[0]);

  const reader = new FileReader();
  reader.readAsDataURL(e.target.files[0]); //미리보기시 사용, background나 img src에서 사용시
  reader.onload = () => {
    //비동기 업로드 함수로 완료후 처리는 메소드내 작성함
    console.log("reader result : ", reader.result);
    setPreview(reader.result);
  };
};
```

2. html :

```javascript
<input
type="file"
id="profile"
style={{ display: "none" }}
onChange={handleUploadFile}
/>
<img src={preview} alt="" width="200" />
```

# react query

npm install react-icon

```javascript
const client = new QueryClient();
root.render(
  <Router>
    <ContextProvider>
      <QueryClientProvider client={client}>
        <App />
      </QueryClientProvider>
    </ContextProvider>
  </Router>
);
```

