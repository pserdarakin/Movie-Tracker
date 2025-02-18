import {React, useState, useEffect} from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import MovieCards from "./MovieCards";
import "./App.css";
import axios from "axios";

function App() {

  const [array, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/movies");
      console.log("Movies data:", response.data); // Debugging log
      setMovies(response.data); 
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
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
          {array.map((user, index) => (
            user.watched_list.map((movie, movieIndex) => (
              <Col key={`${index}-${movieIndex}`} md={3}>
                <MovieCards movie={movie} />
              </Col>
            ))
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;