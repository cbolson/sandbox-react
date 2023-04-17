import { useState } from "react";
import Locations from "./data/Locations";

import "./App.css";

function App() {
  const [country, setCountry] = useState<string>(Object.keys(Locations)[0]);

  return (
    <div className='App'>
      <h1>Chained Country Select</h1>
      <select onChange={(e) => setCountry(e.target.value)}>
        {
        Object.keys(Locations).map((co, i: number) => (
          <option key={`country-${i}`} value={co}>
            {co}
          </option>
        ))}
      </select>
      <select>
        {Locations[country].map((city: string, i: number) => (
          <option key={`country-${i}`} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;
