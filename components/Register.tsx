import React from "react";
import { Form, Button } from "react-bootstrap";

export const Register = () => {
  return (
    <Form className="register-form text-light d-flex flex-column justify-content-between bg-dark-op p-3 p-lg-5">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="email" placeholder="Enter your name" />
        <Form.Text className="text-light">
          Nothing will be persisted or saved
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Company</Form.Label>
        <Form.Control type="text" placeholder="Your organization" />
      </Form.Group>
      <div className="d-flex">
        <Button
          className="w-100 btn-success mr-3"
          variant="primary"
          type="submit"
        >
          Create
        </Button>

        <Button className="w-100 btn-secondary" variant="primary" type="submit">
          Reset
        </Button>
      </div>
    </Form>
  );
};

export default Register;
