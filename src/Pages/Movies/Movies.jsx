import React, { useEffect, useState } from 'react';

import InfiniteScroll from 'react-infinite-scroll-component';

import Form from '../../components/Forms/SearchForm';
import MoviesList from '../../components/MoviesList/MoviesList';
import { GetData } from '../../Services/MoviesAPI';
import { useSearchParams } from 'react-router-dom';
import ErrorPage from '../../components/ErrorPage/ErrorPage';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [searchParams, setSearchparams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);
  let page = Number(searchParams.get('page'));
  const searchValue = searchParams.get('query');

  const getValue = inputValue => {
    // inputValue берем з форми по сабміту
    // і встановлюєм пошукові параметри в рядок пошуку
    setSearchparams({
      page: 1,
      query: inputValue,
    });
  };
  // при зміні пошукового слова скидаєм масив попередніх фільмів
  useEffect(() => setMovies([]), [searchValue]);
  // при зміні одного з парамерів іде запит на бекенд з новими пареметрами пошуку
  useEffect(() => {
    // якщо нічого не ввели в рядок пошуку запит не відправляється
    if (searchValue === null || '') return;
    const SearchMovies = async () => {
      try {
        setLoading(prevState => !prevState);
        const { results } = await GetData.fetchMovieByValue(
          searchValue ?? '',
          page
        );

        setMovies(prevSatate => [...prevSatate, ...results]);
      } catch (Error) {
        setError(Error);
      } finally {
        setLoading(prevState => !prevState);
      }
    };
    SearchMovies();
  }, [searchValue, page]);

  // змінюєм номер сторінки а searchValue залишаєм не змінним
  // Useeffect відслідковує зміну сторінки і відпрвляє запит з новою сторфнкою і попереднім пошуковим словом
  const loadMore = () => {
    setSearchparams({
      page: page + 1,
      query: searchValue,
    });
  };

  return (
    <>
      {error ? (
        <ErrorPage error={error} />
      ) : (
        <>
          <Form getValue={getValue}></Form>
          {loading && <Loader />}
          <InfiniteScroll
            style={{ overflow: 'hidden' }}
            className="InfiniteScrollWrapper"
            dataLength={movies.length} //This is important field to render the next data
            next={loadMore} // loadMore змінює сторінку на +1 useEffect  який робить запит на сервер підписаний на цю змінну і при зміні сторінки одразу іде новий запит на сервер з тим самим  searchValue але іншою сторінкою
            hasMore={true}
            loader={movies.length > 0 && <Loader />}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            {<MoviesList SearchMoviesList movies={movies} />}
          </InfiniteScroll>
        </>
      )}
    </>
  );
};

export default Movies;
