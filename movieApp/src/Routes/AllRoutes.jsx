import { Route, Routes } from "react-router-dom"
import { MovieList } from "../pages/MovieList"
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ <MovieList title="Your guide to great movie" apiPath="movie/now_playing" />} />
        <Route path="movies/populare" element={<MovieList title="Populare Movie" apiPath="movie/popular"/> }  />
        <Route path="movies/top" element={<MovieList title="Top Movie" apiPath="movie/top_rated"/> } />
        <Route  path="movies/upcoming" element={<MovieList title="Upcoming Movie " apiPath="movie/upcoming"/> } />
      </Routes>
    </>
  )
}
export default AllRoutes

