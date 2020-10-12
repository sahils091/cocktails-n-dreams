import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./header.scss"

const Header = () => {
  return (
    <header className="header">
      <Container className="p-0" fluid={true}>
        <Navbar className="border-bottom shadow p-3 bg-white rounded" bg="transparent" expand="lg">
          <Navbar.Brand>Dev Grub</Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-toggle" className="border-0" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <a className="nav-link" href="#home">
                {" "}
                Home{" "}
              </a>
              <a className="nav-link" href="#about">
                About Us
              </a>
              <a className="nav-link" href="#story">
                Our Story
              </a>
              <a className="nav-link" href="#contact">
                Enjoy Your Cocktails!!
              </a>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
