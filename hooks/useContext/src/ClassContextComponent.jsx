import React, { Component } from "react";
import { ThemeContext } from "./App";

export default class ClassContextComponent extends Component {
  themeStyles(dark) {
    return {
      backgroundColor: dark ? "#333" : "#FFF",
      color: dark ? "#CCC" : "#000",
      padding: "2rem",
      margin: "2rem",
      border: "1px solid green",
    };
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {(darkTheme) => {
          return <div style={this.themeStyles(darkTheme)}>Class Theme</div>;
        }}
      </ThemeContext.Consumer>
    );
  }
}
