import { MoviePrincipalData } from "./MoviePrincipalData";
import { SingleTag } from "./SingleTag"

interface MovieInfoProps {
  title: string;
  description: string;
  year: string | number; 
  rating: string | number; 
  duration: string | number; 
  category: string;
  key: string; 
}

export const MovieInfo:  React.FC<MovieInfoProps> = ({title, description , year , rating , duration, category, key}) => {
  return (
    <div className="movieInfo_container">
      <h1 className="movieInfo_container-title">{title}</h1>
      <div>
        <div className="movieInfo">
          <SingleTag key= {key}text={category}></SingleTag>
          <MoviePrincipalData text={year} icon="fa-regular fa-calendar-days"></MoviePrincipalData>
          <MoviePrincipalData text={duration} icon="fa-regular fa-clock"></MoviePrincipalData>
          <MoviePrincipalData text={rating} icon="fa-solid fa-star"></MoviePrincipalData>
        </div>
        <div className="movieDescription">
          <p>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
