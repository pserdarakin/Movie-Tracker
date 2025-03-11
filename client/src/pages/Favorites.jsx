import "../css/Favorites.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { findById } from "../services/api";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const id = "67bf4d4f10798b6200cf2d2a"; 
  const [userMovies, setUserMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUserMovies = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/movies/${id}`);
      setUserMovies(response.data.watched_list);
    } catch (error) {
      console.error("Error fetching user movies:", error);
      setError("Failed to load movies...");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserMovies();
  }, []);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const moviePromises = userMovies.map(async (movie) => {
          const tmdb_id = movie.tmdb_id;
          if (!tmdb_id) {
            console.error("Missing tmdb_id for movie:", movie);
            return null;
          }
          const movieDetails = await findById(tmdb_id);
          return movieDetails;
        });

        const movieDetails = await Promise.all(moviePromises);
        setFavorites(movieDetails.filter(movie => movie !== null));
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    if (userMovies.length > 0) {
      fetchMovieDetails();
    }
  }, [userMovies]);

  return (
    <div className="favorites">
      <header className="header">My List</header>
      {error && <div className="error-message">{error}</div>}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : favorites.length > 0 ? (
        <div className="grid2">
        <div className="movies-grid-fav">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} showFavoriteButton={false}/>
          ))}
        </div>
        </div>
      ) : (
        <div className="favorites-empty">
          <h2>No Watched Movies Yet</h2>
          <p>Start adding one...</p>
        </div>
      )}
    </div>
  );
}

export default Favorites;
