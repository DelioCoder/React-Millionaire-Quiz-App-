import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//CSS STYLED-COMPONENTS
import GlobalStyle from './styles/GlobalStyle';
import Typography from './styles/Typography';

ReactDOM.render(
  <>
    <GlobalStyle />
    <Typography />
    <App />
  </>,
  document.getElementById('root')
);

