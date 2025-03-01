import "../css/Favorites.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { findById } from "../services/api";

function Favorites() {
  const id = "67bf4d4f10798b6200cf2d2a"; 
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

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

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const watchedMovies = movies.flatMap(user => user.watched_list);
        console.log("Watched Movies List:", watchedMovies); // Log the entire watched list
        const moviePromises = watchedMovies.map(async (movie) => {
          const tmdb_id = movie.tmdb_id;
          if (!tmdb_id) {
            console.error("Missing tmdb_id for movie:", movie);
            return null;
          }
          const movieDetails = await findById(tmdb_id);
          return movieDetails; // Directly return the movie details
        });

        const movieDetails = await Promise.all(moviePromises);
        setFavorites(movieDetails.filter(movie => movie !== null)); // Filter out null values
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    if (movies.length > 0) {
      fetchMovieDetails();
    }
  }, [movies]);

  return (
    <div className="favorites">
      {favorites.length > 0 ? (
        favorites.map((movie, index) => (
          <div key={index} className="movie-card">
            <h3>{movie.title}</h3>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
        ))
      ) : (
        <div className="favorites-empty">
          <h2>No Favorite Movies Yet</h2>
          <p>Start adding one...</p>
        </div>
      )}
    </div>
  );
}

export default Favorites;