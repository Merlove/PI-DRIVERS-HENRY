import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import DetailPage from './components/DetailPage';
import FormPage from './components/FormPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/detail/:id" component={DetailPage} />
        <Route path="/form" component={FormPage} />
      </Switch>
    </Router>
  );
}

export default App;
