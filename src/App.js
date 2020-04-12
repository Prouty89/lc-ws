import React from 'react';
import {Switch, Route} from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import Landing from './components/pages/Landing';
import Commercial from './components/portfolio/Commerial';
import Residential from './components/portfolio/Residential';



function App() {
  return (
    <ThemeProvider theme={{
      colors: {
        green: "#6b7c67",
        greyWhite: "#f2eeeb",
        bgWhite: "#fffaf5",
    },
    font: {
        black: "#242722",
        white: "#f9fcff",
        grey: "#b6b5b4",
        peach: "#deb28b",
        linkDark: "#3d4839"
    },
    }}>
    <div className="App">
      <Switch>
    <Route exact path="/">
      <Landing />
    </Route>
    <Route path="/commercial">
      <Commercial />
    </Route>
    <Route path="/residential">
      <Residential />
    </Route>
      </Switch>
    </div>
    </ThemeProvider>
  );
}

export default App;