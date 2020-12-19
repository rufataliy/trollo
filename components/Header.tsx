import React from "react";
import {
  Navbar,
  Button,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";

export const Header = () => {
  return (
    <Navbar variant="dark" expand="lg">
      <Navbar.Brand href="#home">Trollo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">
            Home <i className="bi bi-house-door-fill ml-1"></i>
          </Nav.Link>
          <Nav.Link href="/boards">
            Boards <i className="bi bi-columns-gap ml-1"></i>
          </Nav.Link>
          <Nav.Link href="/calendar">
            Calendar<i className="bi bi-calendar-range-fill ml-1"></i>
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};
