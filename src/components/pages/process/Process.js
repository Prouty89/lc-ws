import React from 'react';

import { pageTransition, pageStyle, pageVariants } from '../../pages/PageStyle';
import { motion } from 'framer-motion';

import { StyledProcess } from './ProcessStyles';
import Figure from 'react-bootstrap/Figure'

const Portfolio = () => {
    return (
        <motion.div
            style={pageStyle}
            className="row"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            >
        <StyledProcess>
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
        </StyledProcess>
        </motion.div>
    )
}

export default Portfolio;