// import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Wrapper } from './StyledErrorPage';

export default function ErrorPage({ error }) {
  console.log(' error : ', error);
  const [text, setText] = useState('');
  useEffect(() => {
    const switchErrorText = () => {
      switch (error.response?.status) {
        case 404:
          error.response.status = 404;
          setText(
            'Sorry,something went wrong page :(not found please try again'
          );
          break;

        default:
          setText(`Sorry,something went wrong :(
            ${error.message}`);
      }
    };
    switchErrorText();
  }, [error]);
  return (
    <Wrapper>
      <p>{text}</p>
    </Wrapper>
  );
}
