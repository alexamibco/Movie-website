import { genreReducer } from "../hooks/useGenres";

interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  genre_ids: number[];
  popularity: number;
  vote_average: number;
  backdrop_path: unknown;
  poster_path: unknown;
}

interface FetchMovieData {
  results: Movie[];
}

export const getMovieData = async (type: string, page: number): Promise<Movie[]> => {
  const basic_url = "https://api.themoviedb.org/3";
  const urlMovies = `${basic_url}/movie/${type}?api_key=${
    import.meta.env.VITE_API_KEY
  }&page=${page}`;
  const response = await fetch(urlMovies);
  const fetchData : FetchMovieData = await response.json();

  const movieData = fetchData.results.map((item) => ({
  
      id: item.id,
      title: item.title,
      overview: item.overview,
      release_date:item.release_date,
      genre_ids: genreReducer(item.genre_ids),
      popularity: item.popularity,
      vote_average: item.vote_average,
      backdrop_path: item.backdrop_path,
      poster_path: item.poster_path,
    }
  )
);

return movieData;
};
