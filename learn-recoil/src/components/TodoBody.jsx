import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { filterState, filterTodoState, todoState } from "../state/todo";
import TodoItem from "./TodoItem";

export default function TodoBody() {
  //const todos = useRecoilValue(filterTodoState);
  //const setFilterState = useSetRecoilState(filterState);

  const todos = useSelector((state) => state.todos);

  console.log("todos : ", todos);
  return (
    <div>
      {/* 
      <label htmlFor="done">
        done :
        <input
          type="radio"
          name="done"
          id="done"
          value="done"
          onChange={(e) => setFilterState(e.target.value)}
          defaultChecked
        />
      </label>
      <label htmlFor="undone">
        undone :
        <input
          type="radio"
          name="done"
          id="undone"
          value="undone"
          onChange={(e) => setFilterState(e.target.value)}
        />
      </label>
      */}
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}
