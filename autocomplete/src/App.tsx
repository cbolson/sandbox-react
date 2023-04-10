import { useEffect, useState } from "react";
import autoComplete from "./utils/autoComplete";
import "./App.css";

function App() {
  const [country, setCountry] = useState("");
  const [listCountries, setlistCountries] = useState<[]>([]);

  useEffect(() => {
    console.log("checking....");
    setlistCountries(autoComplete(country));
  }, [country]);
  function clearInput() {
    setlistCountries([]);
    setCountry("");
  }

  // function selectResult(str) {
  //   setlistCountries([]);
  //   setCountry(str);
  //   // clear restults list but this is being set again the value has changed...
  // }
  return (
    <div className='App'>
      <div className='search'>
        <h1>Type to search countries</h1>
        <div className='search-box'>
          <input
            type='text'
            onChange={(e) => setCountry(e.target.value)}
            value={country}
            placeholder='where do you want to go'></input>
          <button className='clear-autocomplete' onClick={clearInput}>
            x
          </button>
        </div>
        {listCountries.length > 0 && (
          <ul className='list'>
            {listCountries.map((country, i: number) => (
              <li
                key={`c-${i}`}
                onClick={(e) => setCountry(e.target.innerHTML)}>
                {country}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
