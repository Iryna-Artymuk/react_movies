import React from 'react';
import { Backdrop, Card, Container, Layers } from './StyledMovieItem';

export default function MovieItem({ title, img }) {
  // console.log('img : ', img);
  //   console.log('img : ', img);

  return (
    <Container>
      <Card>
        <p>{title}</p>
        <Layers>
          <Backdrop backimage={img}></Backdrop>
        </Layers>
      </Card>
    </Container>
  );
}
