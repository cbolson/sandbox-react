import { useState, useEffect } from "react";

// interface quoteProps {
//   curQuote: {
//     text: string;
//     author: string;
//   };
// }
interface quoteProps {
  text: string;
  author: string;
}



function Quote() {
  const [quotes, setQuotes] = useState([]);
  const [curQuote, setCurQuote] = useState<quoteProps>();
  const numQuotes: number = Object.keys(quotes).length;

  // fetch quotes from the api on initial load
  useEffect(() => {
    (async () => {
      const res = await fetch("https://type.fit/api/quotes");
      const data = await res.json();
      setQuotes(data);
      setCurQuote(data[0]);
    })();
  }, []);

  // get random quote
  function getRandomQuote() {
    const random = Math.floor(Math.random() * numQuotes + 1);
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
