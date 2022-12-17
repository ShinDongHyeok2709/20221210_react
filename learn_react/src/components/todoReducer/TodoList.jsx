import { useTodoState } from "../../context/todos";
import { TodoItem } from "./TodoItem";
//import { TodoStateContext } from "./Todos";

export default function TodoList() {
  const todos = useTodoState();
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
