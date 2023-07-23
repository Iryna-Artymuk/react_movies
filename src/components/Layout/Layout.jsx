import React from 'react';
import { Container, Header } from './StyledLayout';
import Navigation from '../Navigation/Navigation';

function Layout({ children }) {
  return (
    <>
      <Container>
        <Header>
          <Navigation></Navigation>
        </Header>
        {children}
      </Container>
    </>
  );
}

export default Layout;
