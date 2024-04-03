import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Noto Sans', sans-serif;
  }

  html, body, #root, .Grid, .Row {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;