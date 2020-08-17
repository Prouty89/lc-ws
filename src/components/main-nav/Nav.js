import React from 'react';


import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { StyledNavigation } from './NavigationStyles';

const Navigation = () => {
  return (
    <StyledNavigation>
      <Navbar  variant="tabs" defaultActiveKey="/">
  <Nav.Item>
    <Nav.Link href="https://www.mydomastudio.com/" target="_blank">Client Login</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/portfolio">Chic Inspiration</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/process">Design Process</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/reviews">Kudos</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/team">The Crew</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/spotlight">Spotlight</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link>Contact</Nav.Link>
  </Nav.Item>
  
</Navbar>
    </StyledNavigation>
  );
};

export default Navigation;