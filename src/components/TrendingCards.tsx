import { SingleTrendingCard } from "./SingleTrendingCard"

export const TrendingCards = () => {

  return (
    <div className="recently_section">
      <div className="movieInfo-TrendingHeader">
        <h2 className="section-title">Trending</h2>
      <a className="view_all" href="/viewAll" > View all →</a>
      </div>
      <SingleTrendingCard></SingleTrendingCard>
    </div>
  )
}
