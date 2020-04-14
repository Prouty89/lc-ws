import React, { useState } from 'react';

import { useTransition } from 'react-spring';

import { StyledAbout } from './AboutStyles';
import {
    Vision,
    AboutMe,
    Offering
} from './Modals';


import AboutOne from '../../Assets/photo_1.png';
import AboutTwo from '../../Assets/photo_2.png';
import AboutThree from '../../Assets/photo_3.png';

const About = () => {
  //1st
  const [visionVisible, setVisionVisible] = useState(true);
  const visiontransitions = useTransition(visionVisible, null, {
    from: { display: "none", transform: "translateX(120px)" , opacity: 0 },
    enter: { display: "flex", transform: "translateX(0px)" , opacity: 1 },
    leave: { display: "none", transform: "translateX(20px)" },
  });
  //2nd
  const [aboutVisible, setAboutVisible] = useState(false);
  const abouttransitions = useTransition(aboutVisible, null, {
    from: { display: "none", transform: "translateX(120px)", opacity: 0 },
    enter: { display: "flex", transform: "translateX(0px)", opacity: 1 },
    leave: { display: "none", transform: "translateX(20px)" },
  });
  //3rd
  const [offerVisible, setOfferVisible] = useState(false);
  const offertransitions = useTransition(offerVisible, null, {
    from: { display: "none", transform: "translateX(120px)" , opacity: 0 },
    enter: { display: "flex", transform: "translateX(0px)" , opacity: 1 },
    leave: { display: "none", transform: "translateX(20px)"},
  });

  function closeOne() {
    setVisionVisible(true);
    setAboutVisible(false);
    setOfferVisible(false);
  }

  function closeTwo() {
    setVisionVisible(false);
    setAboutVisible(true);
    setOfferVisible(false);
  }

  function closeThree() {
    setVisionVisible(false);
    setAboutVisible(false);
    setOfferVisible(true);
  }

  return (
    <StyledAbout>
      <div className="about-container">
        <div className="about-title">
          <p className="designer-name">
            Lindsay
            <br /> Chicoine
          </p>
          <div className ="images">
          <div className={visionVisible === true ? "img-container" : "img-container_inactive"}>
            <img src={AboutOne} alt="interior-1" />
            <button className={visionVisible === true ? "tab" : "tab_inactive"} onClick={() => closeOne()}>Vision</button>
          </div>
          <div className={aboutVisible === true ? "img-container" : "img-container_inactive"}>
            <img src={AboutTwo} alt="interior-2" />
            <button className={aboutVisible === true ? "tab" : "tab_inactive"} onClick={() => closeTwo()}>About</button>
          </div>
          <div className={offerVisible === true ? "img-container" : "img-container_inactive"}>
            <img src={AboutThree} alt="interior-3" />
            <button className={offerVisible === true ? "tab" : "tab_inactive_offer"} onClick={() => closeThree()}>Offerings</button>
          </div>
          </div>
        </div>
        <div className="info">
          {/* <button className={visionVisible === true ? "tab_1" : "tab_inactive"} onClick={() => closeOne}>Vision</button>
          <button className={aboutVisible === true ? "tab_2" : "tab_inactive"} onClick={() => closeTwo}>About</button>
          <button className={offerVisible === true ? "tab_3" : "tab_inactive"} onClick={() => closeThree}>Offerings</button> */}
          {visiontransitions.map(
        ({ item, key, props: style }) =>
          item && (
            <Vision 
            style={style}
            key={key}
            /> 
          )
        )}
        {abouttransitions.map(
        ({ item, key, props: style }) =>
          item && (
            <AboutMe
            style={style}
            key={key} 
            />
          )
        )}
        {offertransitions.map(
        ({ item, key, props: style }) =>
          item && (
            <Offering
            style={style}
            key={key}
            />
          )
        )}

        </div>
      </div>
    </StyledAbout>
  );
};

export default About;