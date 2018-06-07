import React, { Component } from 'react';

import './App.css';

import Home from './Routes/Home.js';
import ImprintPage from './Routes/Imprint.js';
import ErrorPage from './Routes/Error.js';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (

      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/imprint" component={ImprintPage}/>
          <Route component={ErrorPage}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
