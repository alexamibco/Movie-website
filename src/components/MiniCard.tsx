import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

export const MiniCard = () => {
  const [movies, setMovies] = useState([]);

  const getMovieData = async () => {
    const urlMovies =
      `https://api.themoviedb.org/3/trending/all/week?api_key=${import.meta.env.VITE_API_KEY}`;

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
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={6}
        navigation
        onSlideChange={() => ''}
        onSwiper={(swiper) => ''}
      >
        {movies.map((movie) => (
          <SwiperSlide className="card">
            <div>
              <img
                className="movieMiniatura"
                src={`https://image.tmdb.org/t/p/w200/${movie.backdrop_path}`}
                alt={movie.title}
              />
            </div>
            <div key={movie.id} className="movieInfo-card">
              <h3>{movie.title}</h3>
              <p>{movie.release_date}</p>
              <small>ID: {movie.id}</small>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
