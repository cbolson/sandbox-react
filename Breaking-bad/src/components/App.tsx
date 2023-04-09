import { useEffect, useState } from "react";

// import components
import BreakingLogo from "./BreakingLogo";

// import utils
import breakify from "../utils/breakify";
// import styles
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [first, setFirst] = useState(["", "", ""]);
  const [last, setLast] = useState(["", "", ""]);

  // call breakify function each time "firstName" is updated
  useEffect(() => {
    setFirst(breakify(firstName));
  }, [firstName]);

  // call breakify function each time "lastName" is updated (separate useEffects)
  useEffect(() => {
    setLast(breakify(lastName));
  }, [lastName]);

  return (
    <div className='app'>
      <h1>Breaking Bad logo generator</h1>
      <div className='row'>
        <div className='col'>
          <label htmlFor=''>1st Word</label>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}></input>
        </div>
        <div className='col'>
          <label htmlFor=''>2nd Word</label>
          <input
            onChange={(e) => setlastName(e.target.value)}
            value={lastName}></input>
        </div>
      </div>
      <BreakingLogo result={first}></BreakingLogo>
      <BreakingLogo result={last}></BreakingLogo>
    </div>
  );
}

export default App;
