import { useRef, useState } from "react";
import Definitions from "./components/Definitions";

import "./App.css";

function App() {
  const [wordInput, setWordInput] = useState<string>("");
  const [wordSearch, setWordSearch] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  function handleCLick() {
    if (inputRef.current) {
      setWordSearch(inputRef.current.value);
    }
  }
  function handleChange(e) {
    setWordInput(e.target.value);
  }

  return (
    <>
      <main>
        <h1>Words and their meanings</h1>
        <section className='search-box'>
          <input ref={inputRef} onChange={handleChange} value={wordInput} />
          <button onClick={handleCLick} disabled={wordInput.length < 1 && true}>
            search
          </button>
        </section>
        {wordSearch && <Definitions wordSearch={wordSearch} />}
      </main>
    </>
  );
}

export default App;
