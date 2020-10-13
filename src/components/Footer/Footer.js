import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <Container className="p-0" fluid={true}>
      <Navbar className="border-bottom border-top" bg="transparent" expand="lg">
        <Navbar.Brand>© Dev Inc</Navbar.Brand>
        <Nav className="ml-auto">
          <p className="nav-link ml-auto" to="/">
            Made With ❤
          </p>
        </Nav>
      </Navbar>
    </Container>
  );
};

export default Footer;
