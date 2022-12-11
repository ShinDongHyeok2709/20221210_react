import React, { useRef, useState } from "react";

//todo 생성 => 입력값 관리
//{ handleCreate } : 비구조 할당
function TodoInput({ handleCreate }) {
  const [input, setInput] = useState("");

  const inputRef = useRef();

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    handleCreate(input);
    inputRef.current.focus();
    setInput("");
  };

  console.log("랜더링");

  return (
    <div>
      <input type="text" onChange={handleInput} value={input} ref={inputRef} />
      <button onClick={handleSubmit}>등록</button>
    </div>
  );
}
//React.memo로 감싸면 전달받은 프로퍼티에 변경사항이 있을때만 랜더링이 일어난다. => handleCreate = useCallback로 처리해야 함

export default React.memo(TodoInput);
