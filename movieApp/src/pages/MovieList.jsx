import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export const MovieList = ({ title }) => {
  useEffect(() => {
    document.title = title;
  });
  const navigator = useNavigate();
  return (
    <div>
      <main className='container'>
        {title == "Your guide to great movie" ? (
          <div className='bg-body-tertiary  p-5 border mb-5'>
            <h3 className='text-primary'>Welcom to movieHunt</h3>
            <p className='lead'>
              Discover movies you'll love with personalized suggestions, curated collections, and quick searches – your guide to finding great films
            </p>
            <button onClick={()=>{navigator("/movies/upcoming")}} className='btn btn-primary'>Explore Now</button>
            
          </div>
        ) : (
          null
        )}

        <h5 className='text-danger py-2  border-bottom'>{title}</h5>
      </main>
    </div>
  )
}
