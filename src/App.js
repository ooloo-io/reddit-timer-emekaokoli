import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import HomeScreen from './components/Home/Home';
import HowItWorks from './components/howItWorks/how-it-works';
import Nav from './components/nav/Nav';
import SearchScreen from './components/search/Search';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/search" component={SearchScreen} />
          <Route exact path="/about" component={About} />
          <Route exact path="/how-it-works" component={HowItWorks} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
