import React from 'react';

import { StyledPortfolio } from './PortfolioStyles';

const Residential = () => {
    return (
        <StyledPortfolio>
            <div className="residential-container">
            <div className="img-container">
            <img className="portrait" src="https://www.datocms-assets.com/18044/1586886426-c4-edited.png" alt="bed"/>
            <img className="landscape" src="https://www.datocms-assets.com/18044/1586877791-ci-edited.png" alt="parrot" />
            <img className="portrait_1" src="https://www.datocms-assets.com/18044/1586880971-g71ybxq4tkc1h5i4bvccbathumb58-edited.png" alt="bathroom" />
            <img className="landscape" src="https://www.datocms-assets.com/18044/1586880738-ci-head-edited.png" alt="kitchen"/>
            </div>
            </div>
        </StyledPortfolio>
    )
}

export default Residential
