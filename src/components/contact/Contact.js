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
        <Form.Row>
        <Form.Group as={Col} controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group as={Col} controlId="formNumber">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" placeholder="Phone Number" />
        </Form.Group>
        </Form.Row>
        <Form.Group controlId="ControlTextarea">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows="3" />
      </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
      </StyledContact>
    )
}

export default Contact;