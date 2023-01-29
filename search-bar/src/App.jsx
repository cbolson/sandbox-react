import "./app.css?v96";
import { useState, useRef, useMemo } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const inputRef = useRef();

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      return item.toLowerCase().includes(query.toLowerCase());
    });
  }, [items, query]);
  const [counter, setCounter] = useState(filteredItems.length);

  // add item 
  function onSubmit(e) {
    e.preventDefault();
    // reset counter to items length
    //setCounter(items.length);

    const value = inputRef.current.value;
    if (value === "") return;
    // add new item to arr
    setItems((prev) => {
      return [...prev, value];
    });

    // empty input box
    inputRef.current.value = "";

    // update counter
    setCounter(counter + 1);
  }

  return (
    <>
      <main>
        <h1>Search Box</h1>
        <div className="search-box">
          <input
            type="search"
            placeholder="search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <form onSubmit={onSubmit}>
            <input ref={inputRef} type="text" placeholder="add item"></input>
            <button>Add</button>
          </form>
        </div>
        <h3>Items {counter}</h3>
        <div className="items-list">
          <ul>
            {filteredItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;
