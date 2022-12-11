function TodoList({ todos, handleToggle, handleRemove }) {
  return (
    <ul>
      {todos.map((todo, idx) => (
        <li
          key={todo.id}
          style={{ textDecoration: todo.done && "line-through" }}
          onClick={() => handleToggle(todo.id)}
        >
          {todo.text + " - "}
          <font color="red"> ({todo.date}) </font>
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
  );
}

export default TodoList;
