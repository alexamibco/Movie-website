import { useState } from "react";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const onInputChange = ({ target }) => {
    const { value } = target;
    setSearchTerm(value);
  };

  const handleSearch = async () => {
    const urlMovies = `https://api.themoviedb.org/3/search/movie?api_key=${
      import.meta.env.VITE_API_KEY
    }&page=1&query=${searchTerm}`;

    const response = await fetch(urlMovies);
    const movieData = await response.json();

    const searchResults = movieData.results.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setMovies(searchResults);
  };

  const handleIconClick = () => {
    handleSearch();
  };

  return (
    <div className="input_container">
      <input
        type="text"
        placeholder="Search Movies"
        className="input_search"
        onChange={onInputChange}
      />
      <i className="fa-solid fa-magnifying-glass" onClick={handleIconClick}></i>
      {movies.length > 0 && (
        <div className="movie_results">
          {movies.map((movie) => (
            <div key={movie.id} className="movie_result">
             
              <img
                className="results_img"
                src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
                alt={movie.title}
              />
               <p>{movie.title}</p>
            </div>
          ))}
        </div>
      )}
      
      {movies.length === 0 && searchTerm && (
        <div className="results_hidden">No se encontraron resultados.</div>
      )}
    </div>
  );
};
