import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Header.css"; // Custom CSS

function Header() {
  return (
    <Navbar expand="lg" className="transparent-navbar">
      <Container className="text-white">
        <Navbar.Brand>🎬 Movie Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#watched">Watched List</Nav.Link>
            <Nav.Link href="#wanted">Wanted List</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#login">Log in</Nav.Link>
            <Nav.Link href="#signup">Sign up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;