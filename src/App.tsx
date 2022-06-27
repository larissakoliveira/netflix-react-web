import React from 'react';
import store from 'store/store/store';
import theme from 'themes/main/theme';
import { Provider } from 'react-redux';
import Guard from 'components/guard/guard';
import ShowsList from 'screens/shows/shows';
import Login from 'screens/login/login.screen';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import SignUp from 'screens/sign-up/sign-up.screen';
import { SHOWS_URL } from 'screens/shows/shows.type';
import { LOGIN_URL } from 'screens/login/login.type';
import { GlobalStyles } from 'themes/main/global.styles';
import { SIGN_UP_URL } from 'screens/sign-up/sign-up.type';
import ShowDetails from 'screens/show-details/show-details';
import { SHOW_URL } from 'screens/show-details/show-details-type';

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
                <ShowDetails />
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
