import React, { Component } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";

import {
  blueTheme,
  brownTheme,
  purpleTheme,
  greenTheme,
  redTheme,
  blackTheme,
  pinkTheme,
  violetTheme,
  tealTheme,
  orangeTheme,
  yellowTheme,
  materialDarkTheme,
  materialLightTheme,
  materialTealTheme,
  chosenTheme,
} from "./theme";

import { GlobalStyles } from "./global";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: chosenTheme,
      showThemes: false,
    };
  }

  toggleTheme = () => {
    this.setState((prevState) => ({
      showThemes: !prevState.showThemes,
    }));
  };

  changeTheme = (newTheme) => {
    console.log("Changing theme to:", newTheme);

    this.setState({
      theme: newTheme,
      showThemes: false,
    });
  };

  render() {
    const themes = [
      blueTheme,
      brownTheme,
      purpleTheme,
      greenTheme,
      redTheme,
      blackTheme,
      pinkTheme,
      violetTheme,
      tealTheme,
      orangeTheme,
      yellowTheme,
      materialDarkTheme,
      materialLightTheme,
      materialTealTheme,
    ];

    return (
      <ThemeProvider theme={this.state.theme}>
        <>
          <GlobalStyles />

          <Main
            theme={this.state.theme}
            themes={themes}
            showThemes={this.state.showThemes}
            toggleTheme={this.toggleTheme}
            changeTheme={this.changeTheme}
          />
        </>
      </ThemeProvider>
    );
  }
}

export default App;
