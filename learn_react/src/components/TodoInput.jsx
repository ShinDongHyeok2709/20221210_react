import { React, useState, useRef, useMemo, useCallback } from "react";

function countUndoneToto(todos) {
  console.log("할일 세는 중");
  return todos.filter((todo) => !todo.done).length;
}

function TodoInput() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Todo 리스트 만들기", date: "2022/12/11", done: true },
  ]);

  /*
  유니크한 ID를 부여하기 위해서 변수를 사용하면, 데이터 변경시 렌더링이 발생하므로 좋은 방식이 아님.
  const [currentID, setCurrentID] = useState(2); 
  
  useRef로 관리되는 값은 변경되어도 리렌더링이 발생하지 않는다.
  => 렌더링과 별개로 변수처럼 사용한다.
  */
  const nextID = useRef(2);

  const [inputs, setInputs] = useState({
    text: "",
    date: "",
  });

  /*
    useMemo : 특정값이 변할 때에만 연산을 하고, 나머지 경우는 기존값을 재사용한다.
  */
  //const undoneTotoCount = countUndoneToto(todos);
  const undoneTotoCount = useMemo(() => countUndoneToto(todos), [todos]);

  console.log(undoneTotoCount);

  const inputRef = useRef();
  /*
  const handleInput = (e) => {

    //객체의 프로퍼티 참조하는 방법 2가지 중 하나 1) 객체.프로퍼티, 2) 객체["문자열"]
    //setInputs({ ...inputs, [e.target.name]: e.target.value });
    
    console.log("입력된 태그의 Name : " + e.target.name, e.target.value);
    const { name, value } = e.target;
    setInputs({ ...inputs, id: nextID.current, [name]: value });
  };

  useCallback : 해당 메소드의 데이터외 타 데이터 변경시 메소드 재실행 방지 => 성능 최적화 목적
  useCallback 랜더링시 함수 재호출(함수 재사용) vs useMemo는 재계산(데이터 재사용), useMemo는 리턴값이 필수임
*/
  const handleInput = useCallback(
    (e) => {
      //객체의 프로퍼티 참조하는 방법 2가지 중 하나 1) 객체.프로퍼티, 2) 객체["문자열"]
      //setInputs({ ...inputs, [e.target.name]: e.target.value });

      console.log("입력된 태그의 Name : " + e.target.name, e.target.value);
      const { name, value } = e.target;
      setInputs({ ...inputs, id: nextID.current, [name]: value });
    },
    [inputs]
  );

  //console.log(inputs);

  const handleSubmit = () => {
    /*
    const a = todos.push(input); setTodos(a); //push는 원래 배열을 변경함, react는 가상돔을 사용하므로 변경을 인지할 수 없음
    객체나 배열을 업데이트할 때는 불변성을 지켜야 한다. 
    => 지키지 않으면 상태 변화를 감지할 수 없다.
    => 새로운 객체를 생성하는 방식으로 작성한다. => [...todos, input] 사용하거나, todos.concat(input)를 사용해야 함 
    */

    //const newTodos = [...todos, inputs];
    //setTodos(newTodos);
    if (!inputs.text) {
      alert("text 데이터를 입력해 주세요!");
      inputRef.current.focus();
      return;
    }
    if (!inputs.date) {
      alert("date 데이터를 입력해 주세요!");
      inputRef.current.focus();
      return;
    }

    setTodos(todos.concat({ ...inputs, id: nextID.current, done: false }));
    setInputs({ text: "", date: "" });
    nextID.current++;

    //inputRef.current.focus(); //document.querySelector("").focus();와 동일
  };

  const handleRemove = (text, index, id) => {
    //const newTodos = todos.filter((todo) => todo.text !== text);
    //const newTodos = todos.filter((_, idx) => idx !== index);
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleToggle = (id) => {
    /*
    안됨
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
      todo.done = !todo.done;
    }
    setTodos(...todos);
    */
    /*
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    });
    setTodos(newTodos);
    */
    /*
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    setTodos(newTodos);
    */
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTodos);
  };

  return (
    <div>
      <input
        type="text"
        name="text"
        value={inputs.text}
        onChange={handleInput}
        ref={inputRef}
      />
      <input
        type="date"
        name="date"
        value={inputs.date}
        onChange={handleInput}
      />
      {/*
        객체를 return에 출력시 에러가 발생하므로 객체의 속성으로 출력해야 함
      */}
      <p>
        {inputs.text} {inputs.date}
      </p>
      <button onClick={handleSubmit}>등록</button>
      <ul>
        {todos.map((todo, idx) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.done && "line-through" }}
            onClick={() => handleToggle(todo.id)}
          >
            {todo.text}
            <font color="red">({todo.date})</font>{" "}
            <button onClick={() => handleRemove(todo.text, idx, todo.id)}>
              삭제
            </button>
            {/*이벤트 프리퍼게이션이 발생
            e.stopPropagation();로 이벤트 파생을 멈춘다.
            */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleRemove(todo.text, idx, todo.id);
              }}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoInput;
