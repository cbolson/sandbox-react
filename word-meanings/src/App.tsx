import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [fetchedData, setFetchedData] = useState([]);

  const urlApi = "https://api.dictionaryapi.dev/api/v2/entries/en/hello";
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(urlApi);
      setFetchedData(data.data);
    };
    getData();
  }, []);

  console.log("data: ", fetchedData);

  return (
    <>
      <h1>Words and their meanings</h1>
      <div>Searchbox</div>
      <div>Word definitions etc.</div>
    </>
  );
}

export default App;
