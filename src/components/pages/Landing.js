import React from 'react';
import loadable from '@loadable/component';
import Home from '../home/Home';
import About from '../about/About';
// import Contact from '../contact/Contact';
// import Footer from '../footer/Footer';



const Contact = loadable(() => import('../contact/Contact'))

const Footer = loadable(() => import('../footer/Footer'))



function Landing() {
  return (
    <div className="landing">
      <Home />
      {/* <About /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default Landing;