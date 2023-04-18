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

  // this function is passed down to the child component so that we can update the sate from the child
  function handleChange(newValue) {
    setTodos(newValue);
  }
  return (
    <div className='App'>
      <h1>ToDo with Pagination</h1>
      {todos ? <TodoList todos={todos} change={handleChange} /> : <Loading />}
    </div>
  );
}

export default App;
