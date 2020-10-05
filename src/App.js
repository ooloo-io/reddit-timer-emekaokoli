// import * as Normalize from '@csstools/normalize.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { AppContainer } from './App.style';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Search from './components/Search';

const theme = {
  color: {
    text: '#93918f',
    dark: '#000000',
    midDark: '#636363',
    midLight: '#d5d5d5',
    light: '#ffffff',
    'gray-base': '#93918f',
    primary: '#fdb755',
    link: '#0087ff',
    'brownish-grey': '#636363',
    red: 'red',
  },
  size: {
    headerHeight: '100px',
    footerHeight: '100px',
  },
  font: {
    family: {
      default: '"Montserrat", sans-serif',
      headline: '"Bitter", serif',
    },
    size: {
      default: '1rem',
      small: '0.8rem',
    },
    lineHeight: {
      default: 1.69,
    },
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <AppContainer>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search/javascript" exact component={Search} />
            <Route path="/terms">Terms Page</Route>
          </Switch>
          <Footer />
        </Router>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
