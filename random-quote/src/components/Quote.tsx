import { useState, useEffect } from "react";

interface quoteProps {
  quote: {
    text: string;
    author: string;
  };
}

function Quote({ quote }: quoteProps) {
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
    <>
      <button className='btn' onClick={getRandomQuote}>
        New quote
      </button>

      <div className='quote'>
        {curQuote?.text}
        <div className='author'>- {curQuote?.author}</div>
      </div>
    </>
  );
}

export default Quote;
