import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import MovieCards from "./MovieCards";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="background-image"></div>
      <Container className="mt-4">
        <Header />
      </Container>

      <Container className="box">
        <SearchBar />
      </Container>

      <Container className="cards">
        <Row md={6}>
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
      
    </div>
  );
}

export default App;