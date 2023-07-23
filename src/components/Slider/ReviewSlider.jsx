import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import DateParse from '../../Services/DateParse';

import {
  Author,
  ImgContainer,
  NextButton,
  PersonImage,
  PostData,
  PrevButton,
  QuoteIcon,
  RandomBtn,
  Review,
  ReviewContext,
  ReviewCount,
} from './StyledReviewSlider';
import SetImg from '../../Services/SetImg';
export default function ReviewSlider({ review }) {
  const [index, setIndex] = useState(0);
  const { username, author_details, content, created_at } =
    review.length > 0 ? review[index] : '';

  const postData = DateParse(created_at);
  const checkNumber = number => {
    if (number > review.length - 1) {
      return 0;
    } else if (number < 0) {
      return review.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex(index => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex(index => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * review.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <Review>
      {review.length > 1 && (
        <ReviewCount>
          {index + 1} / {review.length}
        </ReviewCount>
      )}
      <ImgContainer>
        <PersonImage
          src={SetImg(author_details?.avatar_path)}
          //   src={`${baseUrlImg}${author_details?.avatar_path}`}
          alt={username}
          width={100}
        />
        <QuoteIcon>
          <FaQuoteRight />
        </QuoteIcon>
      </ImgContainer>
      <Author>{username}</Author>
      <PostData>{postData}</PostData>
      <ReviewContext>
        <p>{content}</p>
      </ReviewContext>

      {review.length > 1 && (
        <>
          <div className="button-container">
            <PrevButton onClick={prevPerson}>
              <FaChevronLeft />
            </PrevButton>
            <NextButton onClick={nextPerson}>
              <FaChevronRight />
            </NextButton>
          </div>
          <RandomBtn onClick={randomPerson}>Randon review</RandomBtn>
        </>
      )}
    </Review>
  );
}
