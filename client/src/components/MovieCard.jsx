import "../css/MovieCard.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MovieCard({ movie, showFavoriteButton = true }) {
  const navigate = useNavigate();

  async function onFavoriteClick(event) {
    event.stopPropagation();
    const id = "67bf4d4f10798b6200cf2d2a";
    const response = await axios.get(`http://localhost:8080/api/movies/${id}/watched`);

    const exists = response.data.some((movieId) => movieId.tmdb_id === movie.id);
    if (exists) {
      alert("You have already add that 😎");
    } else {
      const request = await axios.post(
        `http://localhost:8080/api/movies/${id}/watched`,
        { tmdb_id: movie.id }
      );
    }
  }

  function onDetailClick() {
    navigate(`/movies/${movie.id}`);
  }

  return (
    <div className="movie-card" onClick={onDetailClick}>

        <div className="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="movie-overlay">
            {showFavoriteButton && (
              <button className="favorite-btn" onClick={onFavoriteClick}>
                ➕
              </button>
            )}
          </div>
        </div>

        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.release_date?.split("-")[0]}</p>
          <p><strong>⭑</strong> {movie.vote_average.toFixed(1)}/10</p>
        </div>

    </div>
  );
}

export default MovieCard;
