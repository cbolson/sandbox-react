import { useEffect, useState } from "react";
import autoComplete from "./utils/autoComplete";
import "./App.css";

function App() {
  const [country, setCountry] = useState("");
  const [listCountries, setlistCountries] = useState<[]>([]);

  useEffect(() => {
    setlistCountries(autoComplete(country));
    console.log(listCountries);
  }, [country]);


  return (
    <div className='App'>
      <div className='search'>
        <input
          type='text'
          onChange={(e) => setCountry(e.target.value)}
          value={country}></input>
      </div>
      <ul className='list'>
        {listCountries.map((country, i: number) => (
          <li key={`c-${i}`} onClick={(e) => setCountry(e.target.innerHTML)}>
            {country}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
