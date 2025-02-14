import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import MovieCards from "./MovieCards";

function App() {
  return (
    <Container className="mt-4">
      <Header />
      <SearchBar />

      {/* Bootstrap Grid for movie cards */}
      <Row className="g-3 mt-4">
        <Col md={3}>
          <MovieCards />
        </Col>
        <Col md={3}>
          <MovieCards />
        </Col>
        <Col md={3}>
          <MovieCards />
        </Col>
        <Col md={3}>
          <MovieCards />
        </Col>
      </Row>
    </Container>
  );
}

export default App;