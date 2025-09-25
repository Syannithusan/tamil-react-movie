import { Route, Routes } from "react-router-dom"
import { MovieList } from "../pages/MovieList"
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ <MovieList title="Your guide to great movie" apiPath="movie/now_playing" />} />
        <Route path="movies/populare" element={<MovieList title="populare movie" apiPath="movie/popular"/> }  />
        <Route path="movies/top" element={<MovieList title="top movie" apiPath="movie/top_rated"/> } />
        <Route  path="movies/upcoming" element={<MovieList title="upcoming movie " apiPath="movie/upcoming"/> } />
      </Routes>
    </>
  )
}
export default AllRoutes
