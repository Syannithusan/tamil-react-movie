import { Link } from "react-router-dom"
import notfound from "../assets/nosearchfound.png"
export const PageNotFound = () => {
  return (
    <div>
      <img src={notfound} alt="notfound" className="img-fluid" />
      <p className="text-center">
        <Link to="/" className="btn btn-danger">
        Goto Home Page
        </Link>
      </p>
    </div>
  )
}

