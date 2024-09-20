import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import { MoviePrincipalData } from "./MoviePrincipalData";
import { SingleTag } from "./SingleTag";

interface Movie {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
}

export const SingleTrendingCard = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

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
    <div className="minicard_fetch_container">
      <Swiper
        spaceBetween={0}
        slidesPerView={3}
        onSlideChange={() => ''}
        onSwiper={(swiper) => ''}
      >
        {movies.map((movie) => (
          <SwiperSlide className="trendingCard">
            <div className="face front">
              <div className="moviePrincipalData_trendingCard">
                <MoviePrincipalData
                  text={parseInt(movie.vote_average) }
                  icon="fa-solid fa-star"
                ></MoviePrincipalData>
              </div>
              <img
                className="trendingPoster"
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                alt={movie.title}
              />
            </div>
            <div className="face back">
              <p>{movie.overview}</p>
            </div>
            <div key={movie.id} className="movieInfo-Trendingcard">
              <h3 className="trendingCard_title">{movie.title}</h3>
              <SingleTag text="Categoria"></SingleTag>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
