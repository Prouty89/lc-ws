import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { StyledContact } from './ContactStyles';


const Contact = () => {
    return (
      <StyledContact>
        <div className="form-contain">
        <Form>
        
        <Form.Group controlId="formEmail">
          
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group  controlId="formNumber">
     
          <Form.Control type="text" placeholder="Phone Number" />
        </Form.Group>
        
        <Form.Group controlId="ControlTextarea">
        <Form.Control placeholder="Your Message" as="textarea"  rows="2" />
      </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
      <div className="details-contain">
        <p>
          Contact me using the details below or directly by filling out the form
        </p>
        <p>
          Lindsay Chicoine 
        </p>
        <p>
          (605) 888 8888
        </p>
        <p>
          Chicoine@Chicoine.com  
        </p>
      </div>
      </StyledContact>
    )
}

export default Contact;