import Login from "./screens/login/login.screen"
import { ThemeProvider } from 'styled-components'
import theme from "./themes/main/theme";
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
   <Login/>
   </ThemeProvider>
  );
}

export default App;