import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

const URL_API = "https://api.dictionaryapi.dev/api/v2/entries/en/";

function App() {
  const [fetchedData, setFetchedData] = useState([]);
  const [word, setWord] = useState<string>("");

  // process word data retrieved via api
  useEffect(() => {
    console.log(fetchedData);
  }, [fetchedData]);

  // call api only when user submits search
  function buttonHandler() {
    const urlApi = URL_API + word;
    const getData = async () => {
      const result = await axios.get(urlApi);
      setFetchedData(result.data);
    };
    getData();
  }
  return (
    <>
      <h1>Words and their meanings</h1>
      <section className='search-box'>
        <input
          type='text'
          onChange={(e) => setWord(e.target.value)}
          value={word}
        />
        <button onClick={buttonHandler} di sabled={word.length < 1 && true}>
          search
        </button>
      </section>

      <section className='definition'>data to show here....</section>
    </>
  );
}

export default App;
