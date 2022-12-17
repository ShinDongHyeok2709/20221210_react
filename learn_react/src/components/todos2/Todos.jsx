import { createContext, useCallback, useRef, useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const initialState = [
  { id: 1, text: "useState 배우기", done: true },
  { id: 2, text: "Todo List 만들기", done: false },
];

export const TodosOnEventContext = createContext(null);
//상태관리
function Todos() {
  const [todos, setTodos] = useState(initialState);
  const nextID = useRef(3);

  //useCallback 을 통해 재생성 방지. ==> 함수형 업데이트를 사용하면 디펜던시를 없앨 수 있다.
  const handleCreate = useCallback((text) => {
    setTodos((todos) => [...todos, { id: nextID.current, text, done: false }]);
    nextID.current++;
  }, []);

  const onRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }, []);

  return (
    <div>
      <TodoInput handleCreate={handleCreate} />
      <TodosOnEventContext.Provider value={[onRemove, onToggle]}>
        <TodoList todos={todos} />
      </TodosOnEventContext.Provider>
    </div>
  );
}
export default Todos;
