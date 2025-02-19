import {React, useState, useEffect} from "react";
import axios from "axios";

// components
import Header from "./Header";
import SearchBar from "./SearchBar";
import MovieCard from "./MovieCard";

// css and styling
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function App() {

  const [array, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/movies");
      setMovies(response.data); 
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <MovieCard movie={{title: "Serdar's Film", release_date: "2024"}} />
    </>
  )

  
}

export default App;

// return (
//   <div className="app-container">
//     <div className="background-image"></div>
//     <Container className="mt-4">
//       <Header />
//     </Container>

//     <Container className="box">
//       <SearchBar />
//     </Container>

//     <Container className="d-flex justify-content-center min-vh-100 mt-750px">
//       <Row md={6}>
//         {array.map((user, index) => (
//           user.watched_list.map((movie, movieIndex) => (
//             <Col key={`${index}-${movieIndex}`} md={3}>
//               <MovieCard movie={movie} />
//             </Col>
//           ))
//         ))}
//       </Row>
//     </Container>
//   </div>
// );