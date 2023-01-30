import { useState } from "react";
import "./App.css?v1";

function App() {
  const [counter, setCount] = useState(() => {
    return 3;
  });
  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
    setResultColor(counter);
  }
  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
    setResultColor(counter);
  }

  function setResultColor(counter) {
    const resultEl = document.querySelector(".result");
    if (counter < 0) {
      resultEl.classList.add("negative");
    } else {
      resultEl.classList.remove("negative");
    }
  }
  return (
    <>
      <div className="counter">
        <button onClick={decrementCount}>-</button>
        <div className="result">{counter}</div>
        <button onClick={incrementCount}>+</button>
      </div>
    </>
  );
}

export default App;
