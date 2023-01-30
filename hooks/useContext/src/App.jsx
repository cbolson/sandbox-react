import React, { useState } from "react";
import FunctionContextComponent from "./FunctionContextComponent";
import ClassContextComponent from "./ClassContextComponent";
import "./App.css";

export const ThemeContext = React.createContext();

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <>
      <main>
        <ThemeContext.Provider value={darkTheme}>
          <button onClick={toggleTheme}>Toggle Theme</button>
          <br />
          Using createContext:
          <FunctionContextComponent />
          Without createContext (ie don't use):
          <ClassContextComponent />
        </ThemeContext.Provider>
      </main>
    </>
  );
}

export default App;
