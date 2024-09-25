import { NavLink } from "react-router-dom"
import { SingleCardRecomended} from "./SingleCardRecomended"

export const CardsRecomended = ({text}:{text:string}) => {

  return (
    <div className="recently_section">
      <div className="movieInfo-TrendingHeader">
        <h2 className="section-title">{text}</h2>
        <NavLink to='/viewAll' className="view_all"  > View all →</NavLink>
      </div>
      <SingleCardRecomended></SingleCardRecomended>
    </div>
  )
}
