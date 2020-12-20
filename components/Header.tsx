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
      <Navbar.Brand className="d-flex align-items-center" href="/">
        <img
          src="/logo.svg"
          width="30"
          height="20"
          className="d-inline-block align-top"
          alt="Trollo logo"
        />{" "}
        Trollo
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="d-flex align-items-center" href="/">
            <i className="bi bi-house-door-fill mr-1 mt-n1"></i>
            <span>Home</span>
          </Nav.Link>
          <Nav.Link className="d-flex align-items-center" href="/boards">
            <i className="bi bi-columns-gap mr-1 mt-n1"></i>
            <span>Boards</span>
          </Nav.Link>
          <Nav.Link className="d-flex align-items-center" href="/calendar">
            <i className="bi bi-calendar-range-fill mr-1 mt-n1"></i>
            <span>Calendar</span>
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
