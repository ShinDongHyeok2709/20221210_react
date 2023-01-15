# Recoil

객체 상태관리 프레임워크

facebook에서 개발
https://recoiljs.org/ko/

1. 정의
   2.1 index.js에서 RecoilRoot로 감싸기

```javascript
<RecoilRoot>
  <App />
</RecoilRoot>
```

2. 상태저장 변수 정의

2.1 atom({})으로 상태저장 변수 정의

```javascript
export const todoState = atom({
  key: "todos",
  default: [
    { id: 1, title: "Recoil 만들기", done: false },
    { id: 2, title: "전역상태 관리하기", done: true },
    { id: 3, title: "Recoil 만들기3", done: false },
  ],
});
```

2.2 상태저장 사용

```javascript
//값만 사용
const todos = useRecoilValue(filterTodoState);
//set함수만 사용
const setTodos = useSetRecoilState(todoState);
//값과 set함수 모두 사용
const [todos, setTodos] = useRecoilState(todoState);
```

3. selector 사용

통계 등에서 상태를 가지고 변환된 값 제공시 사용

3.1 selector로 get함수 정의

```javascript
export const undoneCountState = selector({
  key: "undoneCountState",
  get: ({ get }) => {
    const todos = get(todoState);
    return todos.filter((todo) => !todo.done).length;
  },
});
```

3.2 selector 사용

```javascript
const undoneCount = useRecoilValue(undoneCountState);
```

---

# 리덕스

설치 : npm install redux react-redux
npm install @reduxjs/toolkit

1. store 생성

   index.js에 생성

```javascript
const store = createStore();
```

2. index.js에서 생성한 store를 Provider로 감싸기

```javascript
<Provider store={store}>
  <Counter />
</Provider>
```

---

3. 기본 사용하기

3.1 reducer함수 작성

```javascript
//초기값 개념이 없기에, 파라미터에 초기값 설정
function countReducer(state = 0, action) {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DEINCREASE":
      return state - 1;
    default:
      return state;
  }
}
```

3.2 컴포넌트에서 사용
값을 가져올때는 useSelector 사용
이벤트를 가져올때는 useDispatch 사용

```javascript
export default function Counter() {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <p>count : {selector}</p>
      <button onClick={() => dispatch({ type: "INCREASE" })}>+1</button>
      <button onClick={() => dispatch({ type: "DEINCREASE" })}>-1</button>
    </div>
  );
}
```

---

4. 2개 이상의 reducer 사용시

4.1 store 생성시 "2"와 다르게 configureStore를 사용

```javascript
const store = configureStore({
  reducer: {
    counter: countReducer,
    todos: todoReducer,
  },
});
```

4.2 reducer함수 작성
"3.1"와 동일

4.3 사용

4.3.1 값 가져오기
Case 1 :
리턴값의 객체화로 리듀서 store 정의시 사용한 명칭을 사용해야 함

```javascript
const { counter } = useSelector((state) => state);
```

Case 2 :
state의 세부속성 명칭으로 리듀서 store 정의시 사용한 명칭을 사용해야 함

```javascript
const selector = useSelector((state) => state.counter);
```

4.3.2 이벤트 사용하기
"2.3"과 동일

```javascript
export default function Counter() {
  //const selector = useSelector((state) => state);

  //const { counter } = useSelector((state) => state);
  const selector = useSelector((state) => state.counter);
  //console.log(selector);
  const dispatch = useDispatch();

  return (
    <div>
      <p>count : {selector}</p>
      <button onClick={() => dispatch({ type: INCREASE })}>+1</button>
      <button onClick={() => dispatch({ type: DECREASE })}>-1</button>
    </div>
  );
}
```

---

5. 오류 줄이는 방법

5.1 case 1:
action.type을 별도 상수로 정의하여 사용
정의된 상수는 reducer함수와 컴포넌트의 이벤트에서 사용

5.1.1 정의

```javascript
export const INCREASE = "counter/increase";
export const DECREASE = "counter/decrease";
```

5.1.2 사용

```javascript
export default function Counter() {
  //const selector = useSelector((state) => state);

  //const { counter } = useSelector((state) => state);
  const selector = useSelector((state) => state.counter);
  //console.log(selector);
  const dispatch = useDispatch();

  return (
    <div>
      <p>count : {selector}</p>
      <button onClick={() => dispatch({ type: INCREASE })}>+1</button>
      <button onClick={() => dispatch({ type: DECREASE })}>-1</button>
    </div>
  );
}
```

5.2 case 2:
// action을 리턴하는 함수 정의

5.2.1 정의

```javascript
export const createTodo = (id, title) => {
  return { type: CREATE_TODO, id, title, done: false };
};
```

5.2.2 사용

```javascript
const dispatch = useDispatch();

const handleSubmit = (e) => {
  /*
    dispatch({
      type: CREATE_TODO,
      id: nextID.current,
      title: input,
      done: false,
    });
    아래것으로 대체
    */
  dispatch(createTodo(nextID.current, input));

  setInput("");
  nextID.current++;
};
```

---

6. refuxjs에서 제공하는 reducer함수 정의

6.1 액션 생성

액션을 실행하면 객체가 반환되고, type과 payload를 담은 객체 생성
=> createReducer의 case에 전달되고 payload에 필요한 값을 담아서 상태 업데이트 함

```javascript
export const createTodoAction = createAction(CREATE_TODO);
export const toggleTodoAction = createAction(TOGGLE_TODO);
export const removeTodoAction = createAction(REMOVE_TODO);
```

6.2 리듀서 생성
첫번째 초기값, action명령

```javascript

변경함수(배열의 push, find 등) 사용시 return 생략

불변함수(map, filter 등) 사용시 return 사용

export const todoReducer02 = createReducer(initialState, (builder) => {
  builder
    .addCase(createTodoAction, (state, action) => {
      //기존 상태값이 직접 변경되면 return x => mutable
      const { id, title } = action.payload;
      //state.unshift({ id, title, done: false });
      state.push({ id, title, done: false });
    })
    .addCase(toggleTodoAction, (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    })
    .addCase(removeTodoAction, (state, action) => {
      //기존 상태값이 유지되면 return 값이 상태값이 됨 => immutable(불변)
      return state.filter((todo) => todo.id !== action.payload);
    });
});
```

6.3 컴포넌트에서 사용

```javascript
const dispatch = useDispatch();

const handleDelete = (e) => {
  e.stopPropagation();
  dispatch(removeTodoAction(todo.id));
};

const handleToggle = () => {
  dispatch(toggleTodoAction(todo.id));
};
```

---

7. Slice 사용
   //action과 reduce를 한번에 함

7.1 정의

```javascript
const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    createTodoAction2(state, action) {
      const { id, title } = action.payload;
      //state.unshift({ id, title, done: false });
      state.push({ id, title, done: false });
    },
    toggleTodoAction2(state, action) {
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    },
    removeTodoAction2(state, action) {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

//console.log(countSlice.actions);
export const { createTodoAction2, toggleTodoAction2, removeTodoAction2 } =
  todoSlice.actions;
export default todoSlice.reducer;
```

7.2 사용

```javascript
const dispatch = useDispatch();

const handleDelete = (e) => {
  e.stopPropagation();
  dispatch(removeTodoAction2(todo.id));
};

const handleToggle = () => {
  dispatch(toggleTodoAction2(todo.id));
};
```

---

# 다국어

설치 : npm install i18next react-i18next

1. 정의

```javascript

```

2. 사용

```javascript

```

---
