import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import GlobalStyle from './styles/global';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import usePersistendState from './utils/usePersistendState';
import Historys from './components/Historys';
function App() {
  const [theme, setTheme] = usePersistendState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }
  return (
    <React.Fragment>

    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle/>
        <Home/>
        <Header toggleTheme={toggleTheme}/>
        <Historys/>
      </div>
    </ThemeProvider>
    </React.Fragment>
  )
}

export default App
