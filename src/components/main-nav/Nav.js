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
    <Nav.Link eventKey="link-2">Design Process</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-3">Kudos</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-4">The Crew</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-5">Spotlight</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-6">Contact</Nav.Link>
  </Nav.Item>
  
</Navbar>
    </StyledNavigation>
  );
};

export default Navigation;