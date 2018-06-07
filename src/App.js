import React, { Component } from 'react';

import './App.css';
import Tracker from './Tracker/Tracker.js';
import Store from './Store.js';

class App extends Component {

  constructor() {
    super();
    this.Store = new Store();
    this.state = {};
    this.state.amount = 0;
    this.state.allDates = [];
    this.handleTrack = this.handleTrack.bind(this);
  }

  componentDidMount() {
    let allDates = this.Store.getAllItems();
    let items = JSON.parse(this.Store.load());
    let amount = 0;
    items.data.forEach( item => { amount += item.size; });

    this.setState({
      amount: amount,
      allDates: allDates
    });
  }

  handleTrack(trackedAmount) {
    this.Store.save({name: "glass", size: trackedAmount, liquid: "water"});

    let amount = this.state.amount + trackedAmount;
    this.setState({
      amount: amount
    });
  }

  render() {
    return (
      <div className="app">
      <header className="app__header">
        <h1>You consumed <span className="highlight">{this.state.amount}ml</span> today!</h1>
      </header>

        <Tracker clickHandler={this.handleTrack}/>
      </div>
    );
  }
}

export default App;
