import React from 'react';

import logoBlack from '../../../Assets/logoBlack.svg';

import { StyledLanding } from './LandingStyles';

import { Container, Row, Col, Carousel } from 'react-bootstrap/';

function Landing() {
  return (
    <StyledLanding>
    <div className="landing">
     <Container fluid>
      <Row>
        <Col className="landing-logo">
        <img className="logo-home" src={logoBlack} alt="logo-white" />
        <p className="mission-statement">
          Mission Statement Here
        </p>
        </Col>
        <Col lg={7}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.vets4pets.com/siteassets/species/cat/kitten/tiny-kitten-in-field.jpg?w=585&scale=down"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.vets4pets.com/siteassets/species/cat/kitten/tiny-kitten-in-field.jpg?w=585&scale=down"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.vets4pets.com/siteassets/species/cat/kitten/tiny-kitten-in-field.jpg?w=585&scale=down"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
    </div>
    </StyledLanding>
  );
}

export default Landing;