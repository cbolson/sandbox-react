import { useEffect, useState } from "react";
import autoComplete from "./utils/autoComplete";
import "./App.css";
interface Props {
  country: string;
}
function App() {
  const [country, setCountry] = useState<string>("");
  const [listCountries, setlistCountries] = useState<string[]>([]);

  useEffect(() => {
    setlistCountries(autoComplete(country));
  }, [country]);

  function clearInput() {
    setlistCountries([]);
    setCountry("");
  }

  return (
    <div className='App'>
      <div className='search'>
        <h1>Country Search</h1>
        <div className='search-box'>
          <input
            type='text'
            onChange={(e) => setCountry(e.target.value)}
            onFocus={(e) => setCountry("")}
            value={country}
            placeholder='where do you want to go'></input>
          <button className='clear-autocomplete' onClick={clearInput}>
            x
          </button>
        </div>
        {listCountries.length > 0 && (
          <ul className='list'>
            {listCountries.map((country, i: number) => (
              <li key={`c-${i}`}>
                <button onClick={(e) => setCountry(country)}>{country}</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
