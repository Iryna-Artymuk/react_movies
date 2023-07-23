import React from 'react';
import { StyledButton } from './StyledButton';

// import clsx from 'clsx';
export default function Button({ children, type, action }) {
  // const ButtonClasses = clsx(css.button, {

  //  [ css.themeButton]:themeButton
  // });
  return (
    <StyledButton type={type} onClick={action}>
      {children}
    </StyledButton>
  );
}
