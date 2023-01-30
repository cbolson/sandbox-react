import React, { useContext } from "react";
import { ThemeContext } from "./App";

export default function FunctionContextComponent() {
  const darkTheme = useContext(ThemeContext);
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#FFF",
    color: darkTheme ? "#CCC" : "#000",
    padding: "2rem",
    margin: "2rem",
    border: "1px solid blue ",
  };

  return <div style={themeStyles}>Function Theme</div>;
}
