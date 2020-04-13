import React, { useState } from 'react';
import {NavLink, Link} from 'react-router-dom';

import logoBlack from '../../Assets/logoBlack.svg';

import { StyledPortfolio } from './PortfolioStyles';

const PortfolioNav = () => {
  const [selected, setSelected] = useState(false);
{console.log(window.location)}
  return (
    <StyledPortfolio>
      <Link to="/">
        <img className="logo-home" src={logoBlack} alt="logo-black" />
      </Link>
      <div className="residential-container">
        <nav>
          <ul>
            <NavLink
              className={window.location.pathname === "/residential" ? "selected-link" : "unselected-link"}
              to="/residential"
              onClick={() => setSelected(true)}
            >
              <img
                className="home"
                src="https://img.icons8.com/ios-filled/50/3d4839/home.png"
                alt="home"
              />
              <li className="residential">Residential</li>
            </NavLink>
            <li className="slash">|</li>
            <NavLink
              className={ window.location.pathname === "/commercial" ? "selected-link" : "unselected-link" }
              to="/commercial"
              onClick={() => setSelected(true)}
            >
              <li className="commercial">Commercial</li>
              <img
                src="https://img.icons8.com/ios-filled/50/3d4839/city-buildings.png"
                alt="city-buildings"
              />
            </NavLink>
          </ul>
        </nav>
      </div>
    </StyledPortfolio>
  );
};

export default PortfolioNav;