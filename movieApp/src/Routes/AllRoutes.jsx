import { Route, Routes } from "react-router-dom"
import { MovieList } from "../pages/MovieList"
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MovieList title={"Your guide to great movie"}/> } />
        <Route path="movies/populare" element={<MovieList title="populare movie"/> }  />
        <Route path="movies/top" element={<MovieList title="top movie"/> } />
        <Route path="movies/upcoming" element={<MovieList title="upcoming movie"/> } />
      </Routes>
    </>
  )
}
export default AllRoutes
