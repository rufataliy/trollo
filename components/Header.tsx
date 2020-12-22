import React, { useEffect, useState } from "react";
import {
  Navbar,
  Button,
  Nav,
  Form,
  FormControl,
  NavDropdown,
} from "react-bootstrap";
import Router from "next/router";
import { checkRegisteration, exit } from "../utils";
import Link from "next/link";
import { useStore } from "../store";

export const Header = () => {
  const [details, setDetails] = useState<DefaultRegisterValues>({
    trollo_name: "",
    trollo_company: "",
  });
  const { showAlert } = useStore();

  useEffect(() => {
    if (window) {
      if (!checkRegisteration()) {
        Router.push("/");
        showAlert({
          text: "Please register your name and company",
          titie: "Register",
          variant: "danger",
        });
      } else {
        const trollo_name = window.localStorage.getItem("trollo_name");
        const trollo_company = window.localStorage.getItem("trollo_company");
        setDetails((details) => {
          return { ...details, trollo_company, trollo_name };
        });
      }
    }
  }, []);

  const handleExit = () => {
    exit(details) && Router.push("/");
  };

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
          <Link shallow href="/">
            <a>
              <Nav.Link as="div" className="d-flex align-items-center">
                <i className="bi bi-house-door-fill mr-1 mt-n1"></i>
                <span>Home</span>
              </Nav.Link>
            </a>
          </Link>
          <Link shallow href="?view=boards">
            <a>
              <Nav.Link as="div" className="d-flex align-items-center">
                <i className="bi bi-columns-gap mr-1 mt-n1"></i>
                <span>Boards</span>
              </Nav.Link>
            </a>
          </Link>
          <Link shallow href="?view=calendar">
            <a>
              <Nav.Link as="div" className="d-flex align-items-center">
                <i className="bi bi-calendar-range-fill mr-1 mt-n1"></i>
                <span>Calendar</span>
              </Nav.Link>
            </a>
          </Link>
          {checkRegisteration() && (
            <NavDropdown
              title={
                <>
                  <i className="bi bi-person-badge-fill mr-1 mt-n1"></i>
                  <span>{details.trollo_name}</span>
                </>
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>{details.trollo_company}</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleExit}>Exit</NavDropdown.Item>
            </NavDropdown>
          )}
        </Nav>
        {checkRegisteration() && (
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};
