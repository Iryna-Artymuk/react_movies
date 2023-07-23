import axios from 'axios';
const KEY = 'e55542ecb6aab3d889d16953eac82937';
axios.defaults.params = {
  api_key: KEY,
};
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
export const baseUrlImg = 'https://image.tmdb.org/t/p/w500';
export const GetData = {
  fetchTrendingMovies: async function () {
    const { data } = await axios.get(`trending/movie/day`);

    return data;
  },
  fetchMoviesDetails: async function (id) {
    const { data } = await axios.get(`/movie/${id}?language=en-US`);
    //   console.log(data);
    return data;
  },
  fetchMovieCasts: async function (id) {
    const { data } = await axios.get(`/movie/${id}/credits`);
    //   console.log(data);
    return data;
  },
  fetchMovieReviews: async function (id) {
    const { data } = await axios.get(`/movie/${id}/reviews`);

    return data;
  },
  fetchMovieByValue: async function (value, page) {
    const { data } = await axios.get(
      `/search/movie?query=${value}&page=${page}`
    );

    return data;
  },
};
