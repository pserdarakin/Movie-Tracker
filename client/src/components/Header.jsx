import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="" variant="dark" expand="lg" className="px-3 mt-4 mb-5 me-auto">
      <Container fluid className='mt-3 mb-2 me-auto'>
        {/* Navbar Brand + Links */}
        <Navbar.Brand className="me-3">🎬 Movie Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav className="me-auto d-flex gap-3">
            <Nav.Link href="#watched">Watched List</Nav.Link>
            <Nav.Link href="#wanted">Wanted List</Nav.Link>
          </Nav>
          <Nav className="d-flex gap-3">
            <Nav.Link href="#login">Log in</Nav.Link>
            <Nav.Link href="#signup">Sign up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;