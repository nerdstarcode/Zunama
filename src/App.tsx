import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import GlobalStyle from './styles/global';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import pagination from './styles/variables/pagination';
import usePersistendState from './utils/usePersistendState';
function App() {
  const [theme, setTheme] = usePersistendState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle/>
        <Home/>
        <Header toggleTheme={toggleTheme}/>
      </div>
    </ThemeProvider>
  )
}

export default App
