import React, { useEffect, useState } from 'react';
import Form from '../../components/Forms/SearchForm';
import MoviesList from '../../components/MoviesList/MoviesList';
import { GetData } from '../../Services/MoviesAPI';
import { useSearchParams } from 'react-router-dom';
import ErrorPage from '../../components/ErrorPage/ErrorPage';

const Movies = () => {
  const [searchParams, setSearchparams] = useSearchParams();
  const searchValue = searchParams.get('query');
  const [movies, setMovies] = useState([]);
  // console.log('movies: ', movies);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const getValue = inputValue => {
    setSearchparams({ query: inputValue });
  };
  useEffect(() => {
    if (searchValue === null) return;

    const SerrchMovies = async () => {
      try {
        const { results } = await GetData.fetchMovieByValue(
          searchValue ?? '',
          page
        );

        setMovies(results);
      } catch (Error) {
        setError(Error);
      } finally {
        // setLoading(false);
      }
    };
    SerrchMovies();
  }, [searchValue, page]);

  return (
    <>
      {error ? (
        <ErrorPage error={error} />
      ) : (
        <>
          <Form getValue={getValue}></Form>
          <MoviesList movies={movies} />
        </>
      )}
    </>
  );
};

export default Movies;
