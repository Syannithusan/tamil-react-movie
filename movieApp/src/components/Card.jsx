import backup from '../assets/backup.jpg'
import { Link } from 'react-router-dom'
export const Card = () => {
  return (
    <div className="col shadow-sm">
      <div className="card shadow">
                <img className='card-img-top ' src={backup} alt="" />
      <div className="card-body">
        <h5 className='card-title text-primary'>Movie Title</h5>
        <p className='card-text'>curated collections, and quick searches – your guide to finding</p>
        <div className='d-flex justify-content-between align-item-center'>
          <Link to="" className="btn btn-sm btn-outline-primary">
          Read more</Link>
          <small>
            <i className='bi bi-star-fill text-warning'></i>
            7.25 | 250 Review
          </small>
        </div>
      </div>
      </div>
    </div>
  )
}
