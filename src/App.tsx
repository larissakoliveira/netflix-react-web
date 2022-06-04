import './App.css';
import { Provider } from 'react-redux';
import theme from "./themes/main/theme";
import store from "./store/store/store";
import MoviesList from './screens/movies-list';
import { Route, Routes } from 'react-router-dom';
import Login from "./screens/login/login.screen";
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from "./themes/main/global.styles";
import { MOVIES_LIST_URL } from './screens/movies-list/movies-list.type';
import { LOGIN_URL } from './screens/login/login.types';

function App() {
  return (
    <>
    <Provider store={store}>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <Routes>
        <Route element={<Login/>} path={LOGIN_URL}/>
        <Route element={<MoviesList/>} path={MOVIES_LIST_URL}/>
      </Routes>
   </ThemeProvider>
   </Provider>
    </>
  );
}

export default App;