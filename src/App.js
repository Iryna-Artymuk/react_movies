import { lazy, Suspense } from 'react';
import Layout from './components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';

// import Movies from './Pages/Movies/Movies';
// import Home from './Pages/Home/Home';
// import MovieDetails from './Pages/MovieDetails/MovieDetails';

// лінива загрузка завантажує компоненти тільки при їх монтування
// це дає змогу заощадити память і прискорити перше  завантаження сторінки
const Movies = lazy(() => import('./Pages/Movies/Movies'));
const Home = lazy(() => import('./Pages/Home/Home'));
const MovieDetails = lazy(() => import('./Pages/MovieDetails/MovieDetails'));
// const ErrorPage = lazy(() => import('./Components/ErrorPage/ErrorPage'));
const App = () => {
  return (
    <Layout>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/:id/*" element={<MovieDetails />} />
          <Route path="/movies/:id/*" element={<MovieDetails />} />
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
