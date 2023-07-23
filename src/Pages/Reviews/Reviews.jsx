import React, { useEffect, useState } from 'react';

import { GetData } from '../../Services/MoviesAPI';
import { useParams } from 'react-router-dom';

import ReviewSlider from '../../components/Slider/ReviewSlider';
import { ReviewComent } from './RviewsStyled';

const Review = () => {
  const [review, setReview] = useState([]);
  //   console.log('review: ', review);

  const { id } = useParams();

  useEffect(() => {
    const GetReviews = async () => {
      try {
        const resp = await GetData.fetchMovieReviews(id);
        // console.log('resp : ', resp);

        setReview(resp.results);
      } catch (Error) {
        // setError(Error.message);
        console.log(Error);
      }
    };
    GetReviews();
  }, [id]);

  return (
    <>
      {review.length > 0 ? (
        <ReviewSlider review={review} />
      ) : (
        <ReviewComent>no reviews yet</ReviewComent>
      )}
    </>
  );
};

export default Review;
