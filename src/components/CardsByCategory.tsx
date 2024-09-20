import { SingleCardByCategory} from "./SingleCardByCategory"

export const CardsByCategory = ({text}:{text:string}) => {

  return (
    <div className="recently_section">
      <div className="movieInfo-TrendingHeader">
        <h2 className="section-title">{text}</h2>
      <a className="view_all" href="/viewAll" > View all →</a>
      </div>
      <SingleCardByCategory></SingleCardByCategory>
    </div>
  )
}
