import backup from '../assets/backup.jpg'
import { Link } from 'react-router-dom'
export const Card = ({ movie }) => {
  // destuchturing
  const {backdrop_path,poster_path,id,overview,popularity,title,vote_count,vote_average}=movie;
  const image=poster_path?`https://image.tmdb.org/t/p/original${poster_path}`:backup;
  return (
    <div className="col">
      <div className="card shadow-sm" title={title}> 
        <img className='card-img-top ' src={image} alt="" />
        <div className="card-body">
          <h5 className='card-title text-primary text-overflow-1'>{title}</h5>
          <p className='card-text text-overflow-2'>{overview}</p>
          <div className='d-flex justify-content-between align-item-center'>
            <Link to={`/movie/${id}`} className="btn btn-sm btn-outline-primary stretched-link">
              Read more</Link>
            <small>
              <i className='bi bi-star-fill text-warning'></i>
              {vote_average} | {vote_count} Review
            </small>
          </div>
        </div>
      </div>
    </div>
  )
}
