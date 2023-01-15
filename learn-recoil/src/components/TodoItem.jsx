import React from "react";
import { useDispatch } from "react-redux";
import { useRecoilState, useSetRecoilState } from "recoil";
import { todoState } from "../state/todo";
import {
  removeTodo,
  removeTodoAction,
  removeTodoAction2,
  toggleTodo,
  toggleTodoAction,
  toggleTodoAction2,
} from "../state/todos_redux";

export default function TodoItem({ todo }) {
  //const setTodos = useSetRecoilState(todoState);

  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.stopPropagation();

    //setTodos((todos) => todos.filter((item) => item.id !== todo.id));
    //dispatch({ type: "REMOVE_TODOS", id: todo.id });
    //dispatch(removeTodo(todo.id));
    //dispatch(removeTodoAction(todo.id));
    dispatch(removeTodoAction2(todo.id));
  };

  const handleToggle = () => {
    /*
    setTodos((todos) =>
      todos.map((item) =>
        item.id === todo.id ? { ...item, done: !item.done } : item
      )
    );
    */
    //dispatch({ type: "TOGGLE_TODOS", id: todo.id });
    //dispatch(toggleTodo(todo.id));
    //dispatch(toggleTodoAction(todo.id));
    dispatch(toggleTodoAction2(todo.id));
  };

  return (
    <li
      style={{ textDecoration: todo.done && "line-through" }}
      onClick={handleToggle}
    >
      {todo.title}
      &nbsp;<button onClick={handleDelete}>삭제</button>
    </li>
  );
}
