import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import TodoList from "./components/TodoList";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState(null);
  const urlApi = "https://jsonplaceholder.typicode.com/todos";

  useEffect(() => {
    axios.get(urlApi).then((result) => setTodos(result.data));
  }, []);

  return (
    <div className='App'>
      <h1>ToDo</h1>
      {todos ? <TodoList todos={todos} /> : <Loading />}
    </div>
  );
}

export default App;
