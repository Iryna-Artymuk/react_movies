import React from 'react';
import ReactDOM from 'react-dom/client';
import isPropValid from '@emotion/is-prop-valid';
import App from './App';
import { theme } from './Theme';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import { ContextDataProvider } from 'components/Context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ContextDataProvider>
        <GlobalStyle />
        <BrowserRouter basename="react_movies">
          <StyleSheetManager shouldForwardProp={isPropValid}>
            <App />
          </StyleSheetManager>
        </BrowserRouter>
      </ContextDataProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
