import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <Container className="p-0" fluid={true}>
        <Navbar
          className="border-bottom shadow p-3 bg-white rounded"
          bg="transparent"
          expand="lg"
        >
          <Navbar.Brand>Dev Cocktails</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-toggle" className="border-0" />
          
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/">
                Home
              </Link>

              <Link className="nav-link" to="/bar">
                Barology
              </Link>

              <Link className="nav-link" to="/">
                Find Your Cocktail
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
