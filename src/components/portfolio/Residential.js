import React from 'react';

import { StyledPortfolio } from './PortfolioStyles';

const Residential = () => {
    return (
        <StyledPortfolio>
            <div className="residential-container">
            <div className="img-container">
            <img className="portrait" src="https://www.datocms-assets.com/18044/1586875701-c4.jpg" alt="bed"/>
            <img className="landscape" src="https://www.datocms-assets.com/18044/1586877791-ci-edited.png" alt="parrot" />
            <img className="landscape" src="https://www.datocms-assets.com/18044/1586877693-ci-head.jpg" alt="kitchen"/>
            </div>
            </div>
        </StyledPortfolio>
    )
}

export default Residential
