import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies, getTopRatedMovies, getNowPlayingMovies } from "../services/api";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchActive, setisSearchActive] = useState(false);
  const [movies, setMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (error) {
        console.log(error);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    const loadTopRatedMovies = async () => {
      try {
        const topRated = await getTopRatedMovies();
        setTopRatedMovies(topRated);
      } catch (error) {
        console.log(error);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    const loadNowPlayingMovies = async () => {
      try {
        const nowPlaying = await getNowPlayingMovies();
        setNowPlayingMovies(nowPlaying);
      } catch (error) {
        console.log(error);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadNowPlayingMovies();
    loadPopularMovies();
    loadTopRatedMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    setisSearchActive(true);

    setSearchQuery("");
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (error) {
      setError("Failed to search movies...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <h1 className="home-heading">Track. Collect. Relive.</h1>
      <h2 className="home-heading">
        More than just movies—your memories, vaulted. Start your journey now.
      </h2>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
  
      {error && <div className="error-message">{error}</div>}
  
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {isSearchActive ? (
            <div className="movies-section">
              <h3>Search Results</h3>
              <div className="movies-search-results">
                {movies.map((movie) => (
                  <MovieCard movie={movie} key={movie.id} />
                ))}
              </div>
            </div>
          ) : (
            <>
              <div className="movies-section">
                <h3>Popular This Month</h3>
                <div className="movies-horizontal-scroll">
                  {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                  ))}
                </div>
              </div>
  
              <div className="movies-section">
                <h3>Top Rated</h3>
                <div className="movies-horizontal-scroll">
                  {topRatedMovies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                  ))}
                </div>
              </div>

              <div className="movies-section">
                <h3>Now in Theatres</h3>
                <div className="movies-horizontal-scroll">
                  {nowPlayingMovies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                  ))}
                </div>
              </div>

            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
