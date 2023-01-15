import TodoHeader from "./components/TodoHeader";
import TodoBody from "./components/TodoBody";
import TodoInput from "./components/TodoInput";
import Main from "./components/Main";

function App() {
  return (
    <div>
      <TodoHeader />
      <TodoInput />
      <TodoBody />
      <Main />
    </div>
  );
}

export default App;
