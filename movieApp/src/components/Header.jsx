
export const Header = () => {
  return (
    <nav className="navbar navbar-expand-md flex-top bg-primary navbar-dark">
      <div className="container-fluid">

        <a href="#" className="navbar-brand">
          <i className="bi bi-film">
            </i>MovieHunt</a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
            <span className="navbar-toggler-icon"></span>
          </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav me-auto mb-2 mb-md-0 ">

            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Top Rater</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Popular</a>
              </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Upcoming</a>
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
