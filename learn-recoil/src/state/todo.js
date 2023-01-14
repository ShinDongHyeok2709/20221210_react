import { atom, selector } from "recoil";

export const todoState = atom({
  key: "todos",
  default: [
    { id: 1, title: "Recoil 만들기", done: false },
    { id: 2, title: "전역상태 관리하기", done: true },
    { id: 3, title: "Recoil 만들기3", done: false },
  ],
});

export const undoneCountState = selector({
  key: "undoneCountState",
  get: ({ get }) => {
    const todos = get(todoState);
    return todos.filter((todo) => !todo.done).length;
  },
});

export const totalCountState = selector({
  key: "totalCountState",
  get: ({ get }) => {
    const todos = get(todoState);
    return todos.length;
  },
});

export const filterState = atom({
  key: "filterState",
  default: "done",
});

export const filterTodoState = selector({
  key: "filterTodoState",
  get: ({ get }) => {
    const filter = get(filterState);
    const todos = get(todoState);

    switch (filter) {
      case "done":
        return todos.filter((todo) => todo.done);
      case "undone":
        return todos.filter((todo) => !todo.done);
      default:
        return todos;
    }
  },
});
