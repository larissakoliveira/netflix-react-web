import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import store from 'store/store/store';
import theme from 'themes/main/theme';
import Shows from 'screens/shows/shows';
import Login from 'screens/login/login.screen';
import { LOGIN_URL } from 'screens/login/login.type';
import { GlobalStyles } from 'themes/main/global.styles';
import { SHOWS_URL } from 'screens/shows/shows.type';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route element={<Login />} path={LOGIN_URL} />
          <Route element={<Shows />} path={SHOWS_URL} />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
