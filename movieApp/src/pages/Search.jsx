import { useSearchParams } from 'react-router-dom';
import { Card } from '../components';
import { useFetch } from '../hooks/useFetch';
import { useEffect } from 'react'

export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const {data: movies}=useFetch(apiPath,queryTerm);
   
  useEffect(()=>{
    document.title = `Search Result for ${queryTerm}`;
  });
  return (
    <main className='container'>
      <h5 className='text-danger'>
        {movies.length==0?`No Result Found for ${queryTerm}`: `Result for ${queryTerm}`}
      </h5>
       <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2 '>
          {movies.map((movie)=>{
            return <Card key={movie.id} movie={movie}/>;
          })}
        </div>
    </main>
    );
}

