import { useEffect, useState  } from "react";
import { getMovieData } from "../hooks/useGetMovieData";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

export const OtherMovies = () => {
  const URL_IMAGE= 'https://image.tmdb.org/t/p/original'
  
  const [movies, setMovies] = useState<Movie[]>([]);
  
  useEffect(() => {
    const fetchMovies = async () => {
      const updatedMovies = await getMovieData("popular",2);
      setMovies(updatedMovies);
    };

    fetchMovies();
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

