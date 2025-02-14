import React from "react";
import { Navbar, Nav, NavDropdown, Button, Container } from "react-bootstrap";
import { BsBell, BsSearch } from "react-icons/bs";
import "./NetflixHeader.css"; // Custom styles

const NetflixHeader = () => {
  return (
    <Navbar expand="lg" className="netflix-navbar">
      <Container fluid>
        {/* Netflix Logo */}
        <Navbar.Brand href="/browse" className="netflix-logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt="Netflix"
            height="40"
          />
        </Navbar.Brand>

        {/* Navigation Links */}
        <Nav className="me-auto">
          <Nav.Link href="/browse">Home</Nav.Link>
          <Nav.Link href="/browse/genre/83">Series</Nav.Link>
          <Nav.Link href="/browse/genre/34399">Films</Nav.Link>
          <Nav.Link href="/latest">New & Popular</Nav.Link>
          <Nav.Link href="/browse/my-list">My List</Nav.Link>
          <Nav.Link href="/browse/original-audio">Browse by Languages</Nav.Link>
        </Nav>

        {/* Right Side - Search, Notifications, Profile */}
        <Nav className="ms-auto">
          {/* Search Icon */}
          <Button variant="link" className="nav-icon">
            <BsSearch size={24} color="white" />
          </Button>

          {/* Notifications Dropdown */}
          <NavDropdown
            title={<BsBell size={24} color="white" />}
            id="notifications-dropdown"
            className="nav-icon"
            align="end"
          >
            <NavDropdown.Item>No new notifications</NavDropdown.Item>
          </NavDropdown>

          {/* Profile Dropdown */}
          <NavDropdown
            title={
              <img
                src="https://occ-0-8272-299.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABb7kuX9mKPrFGfvZ0oJ9eMBbFCB7ZhumT7uHIoILp1FtGpeIhybv8zoGgNK76rr7N8bMdhn-kkbRnD6ut8mFLwqYXmdpwCw.png?r=eea"
                alt="Profile"
                className="profile-icon"
              />
            }
            id="profile-dropdown"
            align="end"
          >
            <NavDropdown.Item href="/YourAccount">Account</NavDropdown.Item>
            <NavDropdown.Item href="/logout">Sign Out</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NetflixHeader;