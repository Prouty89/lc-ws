import React from 'react';

import Home from '../home/Home';
import About from '../about/About';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';



function Landing() {
  return (
    <div className="landing">
      <Home />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default Landing;