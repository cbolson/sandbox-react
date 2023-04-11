import { useState, useEffect } from "react";
import "./App.css";
import Quote from "./components/Quote";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [curQuote, setCurQuote] = useState(null);

  // fetch quotes from the api on initial load
  useEffect(() => {
    (async () => {
      console.log("load data");
      const res = await fetch("https://type.fit/api/quotes");
      const data = await res.json();
      setQuotes(data);
      setCurQuote(data[0]);
    })();
  }, []);
  // get random quote
  function getRandomQuote() {
    const length = quotes.length;
    const random = Math.floor(Math.random() * length + 1);
    setCurQuote(quotes[random]);
  }
  return (
    <div className='App'>
      <button className='btn' onClick={getRandomQuote}>
        New quote
      </button>
      <Quote quote={curQuote} />
    </div>
  );
}

export default App;
