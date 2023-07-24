import React, { useEffect, useState } from 'react';
import { GetData } from '../../Services/MoviesAPI';
import ErrorPage from '../../components/ErrorPage/ErrorPage';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';

export default function Home() {
  const [movies, setMovies] = useState([]);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getMovies = async () => {
      try {
        setLoading(prevState => !prevState);
        const { results } = await GetData.fetchTrendingMovies();
        // console.log('results: ', results);

        setMovies(results);
      } catch (Error) {
        setError(Error);
        console.log(Error.message);
      } finally {
        setLoading(prevState => !prevState);
      }
    };
    getMovies();
  }, []);

  return (
    <>
      {loading && <Loader />}
      {error ? <ErrorPage error={error} /> : <MoviesList movies={movies} />}
    </>
  );
}
