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
import { theme } from './components/theme.style';

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
