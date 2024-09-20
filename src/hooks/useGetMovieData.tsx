import { useState } from "react";
import { genreReducer } from "../hooks/useGenres";

const [movies, setMovies] = useState([]);

export const getMovieData = async () => {
    const urlMovies = `https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}`;
    const response = await fetch(urlMovies);
    const movieData = await response.json();

    const updatedMovies = movieData.results.map(movie => ({
      ...movie,
     genre_ids: genreReducer(movie.genre_ids),
    }));

    setMovies(updatedMovies);
  };