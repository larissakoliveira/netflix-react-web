import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import store from 'store/store/store';
import ShowById from 'screens/show-by-id/show-by-id';
import theme from 'themes/main/theme';
import ShowsList from 'screens/shows/shows';
import Login from 'screens/login/login.screen';
import { SHOW_URL } from 'screens/show-by-id/show-by-id.type';
import { LOGIN_URL } from 'screens/login/login.type';
import { GlobalStyles } from 'themes/main/global.styles';
import { SHOWS_URL } from 'screens/shows/shows.type';
import Guard from 'components/guard/guard';
import SignUp from 'screens/sign-up/sign-up.screen';
import { SIGN_UP_URL } from 'screens/sign-up/sign-up.type';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route element={<SignUp />} path={SIGN_UP_URL} />
          <Route element={<Login />} path={LOGIN_URL} />
          <Route
            element={(
              <Guard>
                <ShowsList />
              </Guard>
            )}
            path={SHOWS_URL}
          />
          <Route
            element={(
              <Guard>
                <ShowById />
              </Guard>
            )}
            path={SHOW_URL}
          />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
