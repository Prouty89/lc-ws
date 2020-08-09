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
          <Carousel fade={true} interval={10000} indicators={false}>
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
    <div className="services">
      <h1>
        Services and Expertise
      </h1>
      <div className="service-group">
        <div className="service">
        <div className="head-group">
        <img src="https://img.icons8.com/wired/64/000000/design.png"/>
          <h2>Consultation</h2>
        </div>
          <p>Every interior space we design begins with an in-home consultation. This gives us a chance to get to know you, get a feel for your style and see the space you want to transform. We’ll discuss your goals, your budget and your lifestyle to help us create spaces for the way you live.</p>
        </div>
        <div className="service">
        <img src="https://img.icons8.com/wired/64/000000/floor-plan.png"/>
          <h2>Space Planning</h2>
          <p>The biggest considerations when planning interior space is establishing the way a room will be used and how you want to feel when you’re in it. We will help you plan your space with this in mind, selecting the right furniture, arrangement and lighting to ensure your room is functional and pleasing. Using 2D and 3D technology, we can show you an illustration of the room to help you make the right choices.</p>
        </div>
        <div className="service">
        <img src="https://img.icons8.com/wired/64/000000/paint-brush.png"/>
          <h2>Color Selection</h2>
          <p>Color sets the mood for your space. Used well, color can create a smooth flow throughout your home, connecting one space to another seamlessly. Choosing the best colors to set the right mood, reflect your personality and highlight your space can be the most difficult part of interior design. We’ve worked in a lot of spaces and have the experience to help you choose color with confidence.</p>
        </div>
      </div>
    </div>


    </div>
    </StyledLanding>
  );
}

export default Landing;