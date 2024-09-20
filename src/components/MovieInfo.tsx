import { MoviePrincipalData } from "./MoviePrincipalData";
import { SingleTag } from "./SingleTag"

export const MovieInfo = ({title, description , year , rating , duration, category, key}) => {
  return (
    <div className="movieInfo_container">
      <h1 className="movieInfo_container-title">{title}</h1>
      <div>
        <div className="movieInfo">
          <SingleTag text={category}></SingleTag>
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
