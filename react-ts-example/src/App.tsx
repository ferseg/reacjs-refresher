import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([
    {
      id: "t1",
      content: "Learn react",
    },
    {
      id: "t2",
      content: "Learn something else",
    },
  ]);

  const addTodoHandler = (content: string) => {
    const id = "t" + Math.random();
    setTodos((todos) => [{ id, content }, ...todos]);
  };
  const removeTodoHandler = (id: string) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemove={removeTodoHandler} />
    </div>
  );
}

export default App;
