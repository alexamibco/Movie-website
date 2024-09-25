import { NavLink } from "react-router-dom"
import { SingleTrendingCard } from "./SingleTrendingCard"

export const TrendingCards = () => {

  return (
    <div className="recently_section">
      <div className="movieInfo-TrendingHeader">
        <h2 className="section-title">Trending</h2>
      <NavLink to='/viewAll' className="view_all"  > View all →</NavLink>
      </div>
      <SingleTrendingCard></SingleTrendingCard>
    </div>
  )
}
