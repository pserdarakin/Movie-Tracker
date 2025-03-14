import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../css/MovieDetail.css";

const API_KEY = import.meta.env.VITE_API_KEY;

function MovieDetail() {
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&append_to_response=credits`);
        setDetails(response.data);
      } catch (error) {
        setError("Failed to fetch movie details.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <main className="flex-grow">
      <div className="min-h-screen bg-black text-white">
        <div className="movie-header">
          <img
            alt={details.title}
            src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`}
          />
          <div className="movie-header-overlay"></div>
        </div>
        <div className="movie-details">
          <div className="movie-info-container">
            <div className="movie-poster">
              <img
                alt={details.title}
                src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
              />
            </div>
            <div className="movie-info">
              <h1>{details.title}</h1>
              <p className="text-xl mb-6 text-gray-300">{details.tagline}</p>
              <div className="movie-meta">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-6 h-6 text-yellow-500"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                  <span className="text-lg">{details.vote_average.toFixed(1)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock w-6 h-6"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  <span className="text-lg">{Math.floor(details.runtime / 60)}h {details.runtime % 60}m</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar w-6 h-6"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
                  <span className="text-lg">{details.release_date.split("-")[0]}</span>
                </div>
              </div>
              <div className="movie-genres">
                {details.genres.map((genre) => (
                  <span key={genre.id}>{genre.name}</span>
                ))}
              </div>
              <p className="movie-description">{details.overview}</p>
              <div className="movie-actions">
                <button className="watch-now">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
                  <span>Watch Now</span>
                </button>
                <button className="add-to-watchlist">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bookmark"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
                  <span>Add to Watchlist</span>
                </button>
              </div>
            </div>
          </div>
          {details.credits && (
            <div className="movie-cast">
              <h2>Top Cast</h2>
              <div className="cast-grid">
                {details.credits.cast.map((castMember) => (
                  <div key={castMember.cast_id} className="cast-member">
                    <div className="cast-photo">
                      <img
                        alt={castMember.name}
                        src={`https://image.tmdb.org/t/p/w185${castMember.profile_path}`}
                      />
                    </div>
                    <p className="cast-name">{castMember.name}</p>
                    <p className="cast-role">{castMember.character}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default MovieDetail;