import {React, useState, useEffect} from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import MovieCards from "./MovieCards";
import "./App.css";
import axios from "axios";

function App() {

  const [array, setArray] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/");
    setArray(response.data.movies);
    console.log(response.data.movies);
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div className="app-container">
      <div className="background-image"></div>
      <Container className="mt-4">
        <Header />
      </Container>

      <Container className="box">
        <SearchBar />
      </Container>

      <Container className="d-flex justify-content-center min-vh-100 mt-750px">
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
      {/* {array.map((movie, index) => (
        <div key={index}>
          <p>{movie}</p>
          <br />
        </div>
      ))} */}
      
    </div>
  );
}

export default App;