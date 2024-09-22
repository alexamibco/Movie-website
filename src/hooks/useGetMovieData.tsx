import { genreReducer } from "../hooks/useGenres";

export const getMovieData = async (type:string, page:number) => {
  const basic_url = "https://api.themoviedb.org/3";
  const urlMovies = `${basic_url}/movie/${type}?api_key=${
    import.meta.env.VITE_API_KEY
  }&page=${page}`;
  const response = await fetch(urlMovies);
  const movieData = await response.json();

  return movieData.results.map((movie) => ({
    ...movie,
    genre_ids: genreReducer(movie.genre_ids),
  }));
};
