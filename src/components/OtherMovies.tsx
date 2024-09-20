import { useEffect, useState  } from "react";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

export const OtherMovies = () => {
   const API_URL = "https://api.themoviedb.org/3";
  const URL_IMAGE= 'https://image.tmdb.org/t/p/original'
  
  const [movies, setMovies] = useState<Movie[]>([]);
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
        <img className="otherMovies_img" src={`${URL_IMAGE + movie.poster_path}`} alt=""/>
        <h4>{movie.title}</h4>
    </div>
))}
        </div>
      </div>
    </div>
  );
};

