
import React, { Component } from 'react';
import Card from '../Card/Card.js';

import faTint from '@fortawesome/fontawesome-free-solid/faTint';

class Tracker extends Component {

  render() {

    return (
      <section className="card-wrapper">
        <Card name="Glass" icon={faTint} increaseBy="250" clickHandler={this.props.clickHandler} />
        <Card name="Bottle" icon={faTint} increaseBy="1000" clickHandler={this.props.clickHandler} />
      </section>
    )

  }
}

export default Tracker;
