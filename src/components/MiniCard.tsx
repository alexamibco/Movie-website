import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import { getMovieData } from "../hooks/useGetMovieData";

interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
  release_date: string;
}

export const MiniCard = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const updatedMovies = await getMovieData("top_rated", 2);
      setMovies(updatedMovies);
    };

    fetchMovies();
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
          <SwiperSlide className="minicard">
            <div>
              <img
                className="movieMiniatura"
                src={`https://image.tmdb.org/t/p/w200/${movie.backdrop_path}`}
                alt={movie.title}
              />
            </div>
            <div key={movie.id} className="movieInfo-card">
              <h5>{movie.title}</h5>
              <p>{movie.release_date}</p>
              <small>ID: {movie.id}</small>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
