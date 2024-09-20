import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import { MiniInfoTags } from "./MiniInfoTags";

export const SingleCardByCategory = () => {
  const [movies, setMovies] = useState([]);

  const getMovieData = async () => {
    const urlMovies =
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_API_KEY}`;

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
        slidesPerView={4}
        onSlideChange={() => ''}
        onSwiper={(swiper) => ''}
      >
        {movies.map((movie) => (
          <SwiperSlide className="cardByCategory">
            <div className="face front">
              <img
                className="posterByCategory"
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                alt={movie.title}
              />
            </div>
            <div className="face back">
              <p>{movie.overview}</p>
            </div>
            <div key={movie.id} className="movieInfo_ByCategory">
              <h3 className="trendingCard_title">{movie.title}</h3>
              <MiniInfoTags></MiniInfoTags>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
