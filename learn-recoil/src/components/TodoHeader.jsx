import React from "react";
import { useSelector } from "react-redux";
import { useRecoilValue } from "recoil";
import { totalCountState, undoneCountState } from "../state/todo";
import {
  getDoneCount,
  getPercentage,
  getUnDoneCount,
} from "../state/todos_redux";

export default function TodoHeader() {
  //const todosCount = useRecoilValue(totalCountState);
  //const undoneCount = useRecoilValue(undoneCountState);

  //const todosCount = useSelector((state) => state.todos.length);
  const todosCount = useSelector(getDoneCount);
  const undoneCount = useSelector(getUnDoneCount);
  const percentage = useSelector(getPercentage);
  return (
    <div>
      <div>날짜 : {new Date().toLocaleDateString()}</div>
      <div>
        할일 : {undoneCount}/{todosCount} ({percentage}%)
      </div>
    </div>
  );
}
