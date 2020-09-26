import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import HowItWorks from './components/how-it-works';
import Search from './components/Search';

function App() {
  return (
    <Wrapper>
      <Router>
        <Header />
        <Div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search" exact component={Search} />
            <Route path="/how-it-works" exact component={HowItWorks} />
            <Route path="/about" exact component={About} />
          </Switch>
        </Div>
        <Footer />
      </Router>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  // width: 80vmax;
  // margin: 0 10rem 0 10rem;
  text-align: left;
  margin: 0 auto;
  // height:100vh;
`;
const Div = styled.div`
  height: 100vh;
`;

export default App;
