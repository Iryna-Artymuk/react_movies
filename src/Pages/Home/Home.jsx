import React, { useEffect, useState } from 'react';
import { GetData } from '../../Services/MoviesAPI';

import MoviesList from 'components/MoviesList/MoviesList';
import ErrorPage from 'components/ErrorPage/ErrorPage';

export default function Home() {
  const [movies, setMovies] = useState([]);
  // console.log('movies: ', movies);
  const [error, setError] = useState(null);
  // console.log('error: ', error);
  useEffect(() => {
    const getMovies = async () => {
      try {
        const { results } = await GetData.fetchTrendingMovies();
        // console.log('results: ', results);

        setMovies(results);
      } catch (Error) {
        setError(Error);
        console.log(Error.message);
      } finally {
        // setLoading(false);
      }
    };
    getMovies();
  }, []);

  return (
    <>{error ? <ErrorPage error={error} /> : <MoviesList movies={movies} />}</>
  );
}
