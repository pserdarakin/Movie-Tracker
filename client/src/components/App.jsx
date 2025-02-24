import { React, useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";

// pages & components
import Home from "../pages/Home.jsx";
import Favorites from "../pages/Favorites.jsx";
import NavBar from "./NavBar.jsx";

// css and styling
import "../css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <div>
        <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
