import { NavLink } from "react-router-dom"
import { SingleCardByCategory} from "./SingleCardByCategory"

export const CardsByCategory = ({text}:{text:string}) => {

  return (
    <div className="recently_section">
      <div className="movieInfo-TrendingHeader">
        <h2 className="section-title">{text}</h2>
        <NavLink to='/viewAll' className="view_all"  > View all →</NavLink>
      </div>
      <SingleCardByCategory></SingleCardByCategory>
    </div>
  )
}
