import { MovieInfo } from "./MovieInfo";
import { WatchButton } from "./WatchButton";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import { genreReducer } from "../hooks/useGenres";

export const PrincipalMovie = () => {
  const [movies, setMovies] = useState([]);

  const getMovieData = async () => {
    const urlMovies = `https://api.themoviedb.org/3/movie/top_rated?api_key=${
      import.meta.env.VITE_API_KEY
    }`;
    const response = await fetch(urlMovies);
    const movieData = await response.json();

    const updatedMovies = movieData.results.map((movie) => ({
      ...movie,
      genre_ids: genreReducer(movie.genre_ids),
    }));

    setMovies(updatedMovies);
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <div className="principalMovie_image">
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        pagination={true}
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => ""}
        onSwiper={() => ""}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <img
              className="principalIMG"
              src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
              alt={movie.title}
            />

            <div className="watchButtons_container">
              <WatchButton
                text="Watch Now"
                icon="fa-solid fa-play"
                className="principalButton focusButton"
              />
              <WatchButton
                text="Watch Later"
                icon="fa-solid fa-clock"
                className="principalButton otherButton"
              />
            </div>
            <MovieInfo
              category={movie.genre_ids.join(" - ")}
              title={movie.title}
              description={movie.overview}
              year={movie.release_date.substring(0, 4)}
              duration={movie.popularity}
              rating={parseInt(movie.vote_average)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
