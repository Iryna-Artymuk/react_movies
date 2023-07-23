import React from 'react';

import { List, StyledNavLink, StyledNavigation } from './StyledNavigation';

export default function Navigation() {
  return (
    <StyledNavigation>
      <List>
        <li>
          <StyledNavLink to="/">Home</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </li>
      </List>
    </StyledNavigation>
  );
}
