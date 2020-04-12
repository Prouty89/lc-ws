import React from 'react';
import {Link} from 'react-router-dom';

import {StyledHome} from './HomeStyles';

import HeroInterior from '../../Assets/hero.png';
import logoWhite from '../../Assets/logoWhite.svg';

const Home = () => {
    return (
        <StyledHome>
           
            <div className="home-container"> 
                <div className="info">
                    <nav className="nav">
                        <ul>
                            <li>
                                Account
                            </li>
                        <Link to="/residential">
                            <li>
                                Portfolio
                            </li>
                        </Link>
                        </ul>
                    </nav>
                    <div className="social">
                    <a href="www.facebook.com" target="__blank">
                        <img className="facebook" src="https://img.icons8.com/ios/40/3d4839/facebook-new.png" alt="facebook"/>
                    </a>
                    <a href="www.facebook.com" target="__blank">
                        <img className="insta" src="https://img.icons8.com/ios/40/3d4839/instagram-new.png" alt="instagram"/>
                    </a>
                    </div>
                    <div className="hero-title">
                    <img className="logo-1" src={logoWhite} alt="logo-white"/>
                        <p className="interior-design">INTERIOR DESIGN</p>
                    </div>
                </div>
                <div className="img-container">
                    <img src={HeroInterior} alt="hero" />
                </div>
            <div className="logo">
            <p className="number">
            <img src="https://img.icons8.com/material/30/3d4839/phone-disconnected--v1.png" alt="phone-number"/>
                        (605) 695 8736
            </p>
            <p className="email">
            <img src="https://img.icons8.com/material-sharp/24/3d4839/new-post.png" alt="email"/>
                        Lindsey@chicoineinteriors.com
            </p>
            
            </div>
            </div> 
        </StyledHome>
    )
}

export default Home;