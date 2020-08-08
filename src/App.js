import React from 'react';
import {Switch, Route} from 'react-router-dom';
import loadable from '@loadable/component';
import pMinDelay from 'p-min-delay';
import Navigation from './components/main-nav/Nav';

import { ThemeProvider } from 'styled-components';

import Commercial from './components/portfolio/Commerial';
import Residential from './components/portfolio/Residential';
import PortfolioNav from './components/portfolio/PortfolioNav';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';


import logoWhite from './Assets/logoWhite.svg';

 const Landing = loadable(()  =>
   pMinDelay(import('./components/pages/landing/Landing'), 1000), {
    fallback: 
    <div className="loading-screen">
      <img className="logo-1" src={logoWhite} alt="logo-white"/>
      <div class="spinner">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
      </div>
    </div>
  }
)


function App() {
  return (
    <ThemeProvider theme={{
      colors: {
        green: "#242324",
        greyWhite: "#f2eeeb",
        bgWhite: "#fffaf5",
        bgBlack: "#231f20",
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
    <Navigation />
    <Route exact path="/">
      <Landing />
      </Route>
    <Switch>
    <Route path="/commercial">
    <PortfolioNav />
      <Commercial />
    </Route>
    <Route path="/residential">
      <PortfolioNav />
      <Residential />
    </Route>
      </Switch>
      <Contact />
      <Footer />
    </div>
    </ThemeProvider>
  );
}

export default App;