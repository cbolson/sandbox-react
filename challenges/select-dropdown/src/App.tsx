import { useState } from "react";
import "./App.css";
import { StateDropdown } from "./components/StateDropdown";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <StateDropdown />
      </main>
    </>
  );
}

export default App;
