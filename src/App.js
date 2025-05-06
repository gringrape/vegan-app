import AppRouter from './AppRouter';

import GlobalStyle from './GlobalStyle';

import { ThemeProvider } from 'styled-components';
import theme from './theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRouter />
    </ThemeProvider>
  );
}
