import React from 'react';
import {StyledAbout} from './AboutStyles';
import AboutOne from '../../Assets/photo_1.png';

const About = () => {
    return (
        <StyledAbout>
           
            <div className="about-container"> 
            <div className="about-title">
                    <p className="designer-name">
                    Lindsey<br/> Chicoine
                    </p>
                    <div className="img-container_1">
                    <img src={AboutOne} alt="interior-1" />
                    </div>
                    <div className="img-container_2">
                    <img src={AboutOne} alt="interior-2" />
                    </div>
                    <div className="img-container_3">
                    <img src={AboutOne} alt="interior-3" />
                    </div>
                    </div>
                <div className="info">
                    <p className="tab_1">
                        Vision
                    </p>
                    <p className="tab_2">
                        About
                    </p>
                    <p className="tab_3">
                        Offerings
                    </p>
                    <div className="social">
                    <p className="about">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </p>
                    </div>
                </div>
            </div> 
        </StyledAbout>
    )
}

export default About;