import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import { MiniInfoTags } from "./MiniInfoTags";
import { getMovieData } from "../hooks/useGetMovieData";

interface Movie {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
}

export const SingleCardByCategory = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const updatedMovies = await getMovieData("now_playing", 1);
      setMovies(updatedMovies);
    };

    fetchMovies();
  }, []);


  return (
    <div className="minicard_fetch_container">
      <Swiper
        spaceBetween={0}
        slidesPerView={4}
        onSlideChange={() => ''}
        onSwiper={() => ''}
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
