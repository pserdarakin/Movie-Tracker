import "../css/Favorites.css";
import axios from "axios";
import {useState, useEffect } from "react";

function Favorites() {
    const id = "67bf4d4f10798b6200cf2d2a";
    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/movies");
        setMovies(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
  
    useEffect(() => {
      fetchMovies();
    }, []);

    
    
    movies
    .filter((movie) => movie._id === id)
    .forEach((movie) => {
        console.log(movie.watched_list);
        
    })

    return <div className="favorites-empty">
        <h2>No Favorite Movies Yet</h2>
        <p>Start adding one...</p>
    </div>
}

export default Favorites;