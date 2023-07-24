import React from 'react';
import { Container, Header } from './StyledLayout';
import Navigation from '../Navigation/Navigation';
import ChangeThemeButton from 'components/Theme/TheamButton';
// console.log('ChangeThemeButton : ', ChangeThemeButton);

function Layout({ children }) {
  return (
    <>
      <Container>
        <Header id="header">
          <ChangeThemeButton />
          <Navigation></Navigation>
        </Header>
        {children}
      </Container>
    </>
  );
}

export default Layout;
