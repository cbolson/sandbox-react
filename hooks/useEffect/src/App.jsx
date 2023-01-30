import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    console.log("window resies");
    setWindowWidth(window.innerWidth);
  };
  // Note useEffect runs when array sent changes (if no array sent then it is called on every change)
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]); // only when the array options change

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // remove eventlistener as we don't need (want) it anymore
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <main>
        Win Width: {windowWidth}
        <div className="contents">
          <button onClick={() => setResourceType("posts")}>Posts</button>
          <button onClick={() => setResourceType("users")}>Users</button>
          <button onClick={() => setResourceType("comments")}>Comments</button>
        </div>
        <h1>{resourceType}</h1>
        {items.map((item) => {
          return <pre>{JSON.stringify(item)}</pre>;
        })}
      </main>
    </>
  );
}

export default App;
