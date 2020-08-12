import React from 'react';

import { StyledPortfolio } from './PortfolioStyles';
import Figure from 'react-bootstrap/Figure'

const Portfolio = () => {
    return (
        <StyledPortfolio>
            <div>
            <Figure>
                <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src="holder.js/171x180"
                />
                <Figure.Caption>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                </Figure.Caption>
            </Figure>
            </div>
        </StyledPortfolio>
    )
}

export default Portfolio;
