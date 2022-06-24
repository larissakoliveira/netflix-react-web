import React from 'react';
import { useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import store from './store/store/store';
import theme from './themes/main/theme';
import MoviesList from './screens/movies-list';
import Login from './screens/login/login.screen';
import { GlobalStyles } from './themes/main/global.styles';
import { MOVIES_LIST_URL } from './screens/movies-list/movies-list.type';
import { LOGIN_URL } from './screens/login/login.type';
import { authenticated } from './store/user/user.selector';


function App() {
  const userAuthenticated = useSelector(authenticated);

  return (
    <Provider store={store}>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route element={<Login />} path={LOGIN_URL} />
          <Route element={<MoviesList />} path={MOVIES_LIST_URL} />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
