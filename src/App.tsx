import Login from "./screens/login/login.screen"
import { ThemeProvider } from 'styled-components'
import theme from "./themes/main/theme";
import './App.css';
import { GlobalStyles } from "./themes/main/global.styles";

function App() {
  return (
    <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
   <Login />
   </ThemeProvider>
    </>
  );
}

export default App;