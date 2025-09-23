import { Route, Routes } from "react-router-dom"
import { MovieList } from "../pages/MovieList"
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MovieList title="your guide to greate movie"/> } />
        <Route path="/" element={<MovieList title="your guide to greate movie"/> } />
      </Routes>
    </>
  )
}
export default AllRoutes
