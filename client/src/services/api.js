const API_KEY = "489e88111110fb906c6910c18cec1ed1";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};

export const findById = async (tmdb_id) => {
  const response = await fetch(
    `${BASE_URL}/movie/${tmdb_id}?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
};