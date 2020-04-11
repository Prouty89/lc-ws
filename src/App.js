import React from 'react';

import { ThemeProvider } from 'styled-components';

import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';



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
      <Home />
      <About />
      <Contact />
      <Footer />
    </div>
    </ThemeProvider>
  );
}

export default App;