import React from "react";
import { useRecoilValue } from "recoil";
import { totalCountState, undoneCountState } from "../state/todo";

export default function TodoHeader() {
  const todosCount = useRecoilValue(totalCountState);
  const undoneCount = useRecoilValue(undoneCountState);

  return (
    <div>
      <div>날짜 : {new Date().toLocaleDateString()}</div>
      <div>
        할일 : {undoneCount}/{todosCount}
      </div>
    </div>
  );
}
