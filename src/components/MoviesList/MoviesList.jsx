import React from 'react';
import MovieItem from '../MovieItem/MovieItem';
import { StyledList } from './StylesList';
import { Link, useLocation } from 'react-router-dom';

const baseUrlImg = 'https://image.tmdb.org/t/p/w500/';

export default function MoviesList({ movies }) {
  const location = useLocation();
  // sate={{ from: location }} створюємо обєкт з даними про  позицію до того момету коли прейдемо в  інший компонент
  // це дасть змогу зробити кнопку повернення назад де будуть збережені усі фільтри і запити
  return (
    <StyledList>
      {movies?.map(movieItem => (
        <li key={Number(movieItem.id) + 1}>
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
