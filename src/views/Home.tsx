import { Navbar } from '../components/Navbar'
import { PrincipalMovie } from '../components/PrincipalMovie'
import { RecentlyUpdated } from '../components/RecentlyUpdated'
import { TrendingCards } from '../components/TrendingCards'
import { CardsByCategory } from '../components/CardsByCategory'
import { CardsRecomended } from '../components/CardsRecomended'

export function Home() {

  return (
    <>
     <Navbar></Navbar>
     <PrincipalMovie></PrincipalMovie>
     <RecentlyUpdated></RecentlyUpdated>
     <TrendingCards></TrendingCards>
     <CardsByCategory text = "New-Releases Movies"></CardsByCategory>
     <CardsRecomended text = "Recomended Movies"></CardsRecomended>
    </>
  )
}
