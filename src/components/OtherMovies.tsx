import { useEffect, useState  } from "react";

export const OtherMovies = () => {
   const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = `${import.meta.env.VITE_API_KEY}`;
  const URL_IMAGE= 'https://image.tmdb.org/t/p/original'
  
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({ title: "Loading Movies" });
  
  const getMovieData = async () => {
    const urlMovies =
      `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}`;

    const response = await fetch(urlMovies);
    const movieData = await response.json();
    setMovies(movieData.results);
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <div>
      <div className="results_container">
        <div className="results">
{movies.map((movie)=>(
    <div className="otherMovies_card"
     key={movie.id}>
        <img className="results_img" src={`${URL_IMAGE + movie.poster_path}`} alt=""/>
        <h4>{movie.title}</h4>
    </div>
))}
        </div>
      </div>
    </div>
  );
};

/* <div className="results">
{results.map((movie) => (
  <div key={movie.id}>{movie.title}</div>
))}
</div> */
