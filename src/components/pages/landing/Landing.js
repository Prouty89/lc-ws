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
      <h1>
        Services and Expertise
      </h1>
    <div className="services">
      <div className="service-group_1">
        <div className="service">
        
        <img src="https://img.icons8.com/wired/104/000000/design.png"/>
          <h2>Consultation</h2>
       
          <p>Every interior space we design begins with an in-home consultation. This gives us a chance to get to know you, get a feel for your style and see the space you want to transform. We’ll discuss your goals, your budget and your lifestyle to help us create spaces for the way you live.</p>
        </div>
        <div className="service">
        <img src="https://img.icons8.com/wired/104/000000/floor-plan.png"/>
          <h2>Space Planning</h2>
          <p>The biggest considerations when planning interior space is establishing the way a room will be used and how you want to feel when you’re in it. We will help you plan your space with this in mind, selecting the right furniture, arrangement and lighting to ensure your room is functional and pleasing. Using 2D and 3D technology, we can show you an illustration of the room to help you make the right choices.</p>
        </div>
        <div className="service">
        <img src="https://img.icons8.com/wired/104/000000/paint-brush.png"/>
          <h2>Color Selection</h2>
          <p>Color sets the mood for your space. Used well, color can create a smooth flow throughout your home, connecting one space to another seamlessly. Choosing the best colors to set the right mood, reflect your personality and highlight your space can be the most difficult part of interior design. We’ve worked in a lot of spaces and have the experience to help you choose color with confidence.</p>
        </div>
      </div>
      <div className="service-group_2">
        <div className="service">
        
        <img src="https://img.icons8.com/wired/104/000000/closed-window.png"/>
          <h2>Window Treatments</h2>
       
          <p>Whether you want to make a statement with bold, daring colors or understated elegance, window treatments finish a room. We can help you determine the colors and fabrication to accentuate a room’s best features. and fabrication to accentuate a room’s best features. </p>
        </div>
        <div className="service">
        <img src="https://img.icons8.com/wired/104/000000/brick-wall.png"/>
          <h2>Flooring</h2>
          <p>Flooring may be the most underappreciated design element in homes today – but it has the ability to make or break the design of your room. Lucky for homeowners, there have never been more carpet, tile and hardwood flooring options from which to choose. Carpeting today has come a long way, delivering incredible softness and warmth as well as texture and color.  </p>
        </div>
        <div className="service">
        <img src="https://img.icons8.com/pastel-glyph/104/000000/needle.png"/>
          <h2>Reupholstery</h2>
          <p>Some of the most beautiful furnishings begin with great bones. We can help you give new life to your mother’s antique armchairs or the living room sofa you can’t part with using stylish fabrics and patterns that match your personal design aesthetic. Paired with new accessories like colorful pillows and throws, reupholstered furniture can be the right solution for your interior space.</p>
        </div>
      </div>
    </div>


    </div>
    </StyledLanding>
  );
}

export default Landing;