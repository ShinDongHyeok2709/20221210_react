import {
  createAction,
  createReducer,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

const CREATE_TODO = "todos/create";
const TOGGLE_TODO = "todos/toggle";
const REMOVE_TODO = "todos/remove";

// action을 리턴하는 함수 정의
export const createTodo = (id, title) => {
  return { type: CREATE_TODO, id, title, done: false };
};

export const removeTodo = (id) => {
  return { type: REMOVE_TODO, id };
};

export const toggleTodo = (id) => {
  return { type: TOGGLE_TODO, id };
};

/*
selector => 상태값들 중 특정값을 고르거나 연산해서 리턴
외부 변수를 사용하면 안됨
사용시 : const todosCount = useSelector(getDoneCount);

*/
export const getDoneCount = (state) => {
  return state.todos.length;
};

export const getUnDoneCount = (state) => {
  return state.todos.filter((todo) => !todo.done).length;
};

//1번째 상태값, 2번째 파라미터는
export const getUnDoneCount02 = createSelector(
  (state) => state.todos,
  (todos) => {
    return todos.filter((todo) => !todo.done).length;
  }
);

/*
@reduxjs/toolkit에서 제공하는 createSelector를 사용하면 같은 값이 들어왔을 때 연산하지 않는다
 => 성능향상에 도움이 된다.
*/
export const getPercentage = createSelector(
  (state) => state.todos.length,
  getUnDoneCount,
  (totalCount, doneUnCount) => {
    return Math.floor((doneUnCount / totalCount) * 100);
  }
);

const initialState = [
  { id: 1, title: "Recoil 만들기", done: false },
  { id: 2, title: "전역상태 관리하기", done: true },
  { id: 3, title: "Recoil 만들기3", done: false },
];

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_TODO:
      return state.concat({ id: action.id, title: action.title, done: false });
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

//액션 생성

export const createTodoAction = createAction(CREATE_TODO);
export const toggleTodoAction = createAction(TOGGLE_TODO);
export const removeTodoAction = createAction(REMOVE_TODO);

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
      const todo = state.find((todo) => todo.id === action.payload);
      todo.done = !todo.done;
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
