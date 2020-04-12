import React from 'react';
import {Link} from 'react-router-dom';

import logoBlack from '../../Assets/logoBlack.svg';

import { StyledPortfolio } from './PortfolioStyles';

const Residential = () => {
    return (
        <StyledPortfolio>
            <Link to="/">
            <img className="logo-home" src={logoBlack} alt="logo-black"/>
            </Link>
            <div className="residential-container">
                <nav>
                    <ul>
                        <li className="residential">
                            Residential
                        </li>
                        <li>
                            /
                        </li>
                        <li>
                            Commercial
                        </li>
                    </ul>
                </nav>
            </div>
        </StyledPortfolio>
    )
}

export default Residential
