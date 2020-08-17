import React from 'react';
import {Switch, Route, useLocation} from 'react-router-dom';
import loadable from '@loadable/component';
import pMinDelay from 'p-min-delay';
import Navigation from './components/main-nav/Nav';
import { AnimatePresence } from "framer-motion";

import { ThemeProvider } from 'styled-components';

import Portfolio from './components/portfolio/Portfolio';
import Process from './components/pages/process/Process';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import Landing from './components/pages/landing/Landing';


import logoWhite from './Assets/logoWhite.svg';

//  const Landing = loadable(()  =>
//    pMinDelay(import('./components/pages/landing/Landing'), 1000), {
//     fallback: 
//     <div className="loading-screen">
//       <img className="logo-1" src={logoWhite} alt="logo-white"/>
//       <div class="spinner">
//         <div class="bounce1"></div>
//         <div class="bounce2"></div>
//         <div class="bounce3"></div>
//       </div>
//     </div>
//   }
// )


function App() {
  const location = useLocation();

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
    <AnimatePresence location={window.location} key={location.pathname}>
    <Switch>
    <Route path="/portfolio">
      <Portfolio />
    </Route>
    <Route path="/process">
      <Process />
    </Route>
    
    <Route path="/reviews">
      
    </Route>
    
    <Route path="/team">
      
    </Route>
    
    <Route path="/spotlight">
      
    </Route>
      </Switch>
      </AnimatePresence>
      <Footer />
    </div>
    </ThemeProvider>
  );
}



export default App;