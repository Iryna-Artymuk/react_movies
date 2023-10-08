import React from 'react';
// import ReactDOM from 'react-dom/client';
import isPropValid from '@emotion/is-prop-valid';
import { hydrate, render } from 'react-dom';
import { StyleSheetManager } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

//  підхід з перемиканням теми у style components.
// створити об'єкти з однаковими ключами, але різними кольорами. Просто перемикаю ці два об'єкта у ThemeProvider

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   // <React.StrictMode>
//   <BrowserRouter basename="react_movies">
//     <StyleSheetManager shouldForwardProp={isPropValid}>
//       <App />
//     </StyleSheetManager>
//   </BrowserRouter>
//   // </React.StrictMode>
// );

// // basename="react_movies"

// ReactDOM.render(<App />, document.getElementById('root'));
const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
hydrate(
    <BrowserRouter basename="react_movies">
      <StyleSheetManager shouldForwardProp={isPropValid}>
        <App />
      </StyleSheetManager>
    </BrowserRouter>,
    rootElement
  );
} else {
 render(
    <BrowserRouter basename="react_movies">
      <StyleSheetManager shouldForwardProp={isPropValid}>
        <App />
      </StyleSheetManager>
    </BrowserRouter>,
    rootElement
  );
}
