// import * as Normalize from '@csstools/normalize.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  // eslint-disable-next-line comma-dangle
  Switch
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { AppContainer } from './App.style';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Home from './components/Home';
import SubRedditForm from './components/SubRedditForm';
import { theme } from './components/theme.style';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <Router>
        <Header />
        <AppContainer>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search/:subreddit" exact component={SubRedditForm} />
            <Route path="/search/:id" exact component={HeroSection} />
            <Route exact path="/terms">
              Terms Page
            </Route>
          </Switch>
        </AppContainer>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
