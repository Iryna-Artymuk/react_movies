import React from 'react';
import MovieItem from '../MovieItem/MovieItem';
import { StyledList } from './StylesList';
import { Link, useLocation } from 'react-router-dom';
import { baseUrlImg } from 'Services/MoviesAPI';
import { nanoid } from 'nanoid';
export default function MoviesList({ movies, SearchMoviesList }) {
  const location = useLocation();
  // sate={{ from: location }} створюємо обєкт з даними про  позицію до того момету коли прейдемо в  інший компонент
  // це дасть змогу зробити кнопку повернення назад де будуть збережені усі фільтри і запити
  return (
    <StyledList SearchMoviesList>
      {movies?.map(movieItem => (
        <li key={nanoid()}>
          <Link state={{ from: location }} to={`/movies/${movieItem.id}`}>
            <MovieItem
              title={movieItem.title}
              img={`${baseUrlImg}${movieItem.poster_path}`}
            />
          </Link>
        </li>
      ))}
    </StyledList>
  );
}
