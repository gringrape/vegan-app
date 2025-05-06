import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body, #root {
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    min-height: 100vh;
    background-color: #f0f0f0;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
  }

  button, a {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }
`;

export default GlobalStyle;
