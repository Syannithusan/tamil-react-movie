import React, { useEffect, useState } from 'react'

export const useFetch = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([]);
  const key = import.meta.env.VITE_API_KEY;
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${key}&query=${queryTerm}`;

  useEffect(() => {
    async function fetchMovie() {
      fetch(url).then((res) => res.json()).then((jsonData)=> setData(jsonData.results));
    }
    fetchMovie();
  }, [url]);
  return (
    { data }
  )
};


// https://api.themoviedb.org/3/movie/now_playing?api_key=afb000c18123f702f1c91d796c5226fd$query=
// {"status_code":7,"status_message":"Invalid API key: You must be granted a valid key.","success":false}