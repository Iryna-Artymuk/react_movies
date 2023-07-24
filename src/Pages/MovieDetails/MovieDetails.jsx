import React, { useEffect, useRef, useState, lazy, Suspense } from 'react';
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';

import {
  Description,
  Details,
  Genres,
  Likes,
  MovieCard,
  StyledContainer,
  StyledHero,
  StyledLink,
  StyledLinkWrapper,
  Title1,
  Title2,
} from './StyledMovieDetails';

import { GetData } from '../../Services/MoviesAPI';
import ArrowBackSVG from 'components/SVG/ArrowBackSVG';

// import ErrorPage from '../../Components/ErrorPage/ErrorPage';

const Cast = lazy(() => import('../Cast/Cast'));
// import Cast from '../Cast/Cast';
const Review = lazy(() => import('../Reviews/Reviews'));
// import Review from '../../Components/Reviews/Reviews';
const ErrorPage = lazy(() => import('../../components/ErrorPage/ErrorPage'));
// import Review from '../../Components/Reviews/Reviews';

// console.log(ErrorPage);
export default function MovieDetails() {
  const { id } = useParams();

  const [movieDetails, setmovieDetails] = useState({});
  const [error, setError] = useState(null);

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');
  const myRef = useRef(null);

  // console.log('myRef : ', myRef);
  //? первіряє чи state не null ?? перевяляє чи ststeне undefined
  // console.log('backLinkHref: ', backLinkHref);

  //  хук useParams повертає всі обєкт де є всі динамічні параматри
  // const params = useParams();
  // const id = params.id;

  const scrollTo = () =>
    // запит на бек асинхроний, а скрол синхрона функція)
    // Тобто спочатку спрацьовує скрол, а потім йде запит до беку. Так як скролити нема чого, воно і не скролить)
    // в функції scrollTo зроби відкладену функцію за допомогою setTimeout
    setTimeout(() => {
      myRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 1000);
  // run this function from an event handler or an effect to execute scroll

  useEffect(() => {
    const getMovies = async () => {
      try {
        const details = await GetData.fetchMoviesDetails(id);

        setmovieDetails(details);
      } catch (Error) {
        setError(Error);
      } finally {
        // setLoading(false);
      }
    };
    getMovies();
  }, [id]);
  const baseUrlImg = 'https://image.tmdb.org/t/p/w500';
  const {
    title,
    overview,
    runtime,
    genres,
    vote_average,
    tagline,
    backdrop_path,
  } = movieDetails;

  return (
    <>
      {!error ? (
        <MovieCard>
          <StyledContainer>
            <StyledHero img={`${baseUrlImg}${backdrop_path} `}>
              <Link to={backLinkHref.current}>
                <ArrowBackSVG />
                {/* go back */}
              </Link>
              <Details>
                <div>
                  <Title1>{title}</Title1>

                  <Title2>{tagline}</Title2>

                  <Genres>
                    {genres?.map(genre => (
                      <span key={nanoid()}>{genre.name}</span>
                    ))}

                    <Likes>
                      vote_average:
                      {vote_average}
                    </Likes>
                    <span> time{runtime} min</span>
                  </Genres>
                </div>
              </Details>
            </StyledHero>

            <Description>
              <p>{overview}</p>
              <div ref={myRef}></div>
              <StyledLinkWrapper onClick={scrollTo}>
                <StyledLink to="cast">Cast</StyledLink>
                <StyledLink to="reviws">Reviews</StyledLink>
              </StyledLinkWrapper>
              <Suspense>
                <Routes>
                  <Route path="cast" element={<Cast />} />
                  <Route path="reviws" element={<Review />} />
                  {/* <Route path="*" element={<ErrorPage />} /> */}
                </Routes>
              </Suspense>
            </Description>
          </StyledContainer>
        </MovieCard>
      ) : (
        <ErrorPage error={error} />
      )}
    </>
  );
}
