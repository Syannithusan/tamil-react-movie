import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Card } from '../components';
import { useFetch } from '../hooks/useFetch';

export const MovieList = ({ title,apiPath }) => {
 
  const {data:movies}=useFetch(apiPath);
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
          ""
        )}

        <h5 className='text-danger py-2  border-bottom'>{title}</h5>
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2 '>
          {movies.map((movie)=>{
            return <Card key={movie.id} movie={movie}/>;
          })}
        </div>
      </main>
    </div>
  )
}