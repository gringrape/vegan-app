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

  // Typography
  html, body {
    font-size: ${({ theme }) => theme.typography.body.fontSize};
    line-height: ${({ theme }) => theme.typography.body.lineHeight};
    color: #222;
  }

  h1 {
    ${({ theme }) => theme.typography.h1}
  }

  h2 {
    ${({ theme }) => theme.typography.h2}
  }

  h3 {
    ${({ theme }) => theme.typography.h3}
  }

  p {
    ${({ theme }) => theme.typography.body}
    margin: 0 0 1em;
  }

  small {
    ${({ theme }) => theme.typography.small}
  }
`;

export default GlobalStyle;
