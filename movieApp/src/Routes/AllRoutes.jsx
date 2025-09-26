import { Route, Routes } from "react-router-dom"
import { MovieList,MovieDetails, Search, PageNotFound } from "../pages"
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ <MovieList title="Your Guide to Great Movie" apiPath="movie/now_playing" />} />
        <Route path="movies/populare" element={<MovieList title="Populare Movie" apiPath="movie/popular"/> }  />
        <Route path="movies/top" element={<MovieList title="Top Movie" apiPath="movie/top_rated"/> } />
        <Route  path="movies/upcoming" element={<MovieList title="Upcoming Movie " apiPath="movie/upcoming"/> } />
        <Route path="movie/:id" element={<MovieDetails/>}/>
        <Route path="search" element={<Search apiPath="search/movie"/>}/>
        <Route path="*" element={<PageNotFound apiPath="Page not Found"/>}/>

      </Routes>
    </>
  )
}
export default AllRoutes

