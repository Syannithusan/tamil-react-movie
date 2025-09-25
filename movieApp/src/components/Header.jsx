import {Link, NavLink, useNavigate} from "react-router-dom"
export const Header = () => {

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary fixed-top">
      <div className="container-fluid">

        <NavLink to="/" className="navbar-brand">
          <i  className="bi bi-film">
            </i>MovieHunt</NavLink>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
            <span className="navbar-toggler-icon"></span>
          </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav me-auto mb-2 mb-md-0 ">
 

            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="movies/top">Top Rater</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="movies/populare">Popular</NavLink>
              </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="movies/upcoming">Upcoming</NavLink>
              </li>
          </ul>
          <form action="">
            <input type="search" className="form-control" placeholder="search"/>
          </form>
        </div>
      </div>
    </nav>
  )
};



// export const Header = () => {
//   return (
//     <nav className="navbar navbar-expand-md fixed-top bg-primary navbar-dark">
//       <div className="container-fluid">
//         <a href="/" className="navbar-brand">
//           <i className="bi bi-film"></i> MovieHunt
//         </a>
//       </div>
//     </nav>
//   );
// };
